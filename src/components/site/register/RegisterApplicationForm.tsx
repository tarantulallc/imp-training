"use client";

import * as React from "react";
import { REGISTER_FORMSUBMIT_URL } from "@/lib/register-form";
import type { RegisterMessages } from "@/messages/register";

type FormFields = {
  fullName: string;
  email: string;
  phone: string;
  residence: string;
  preferredDate: string;
  learningType: string;
  message: string;
};

const INITIAL: FormFields = {
  fullName: "",
  email: "",
  phone: "",
  residence: "",
  preferredDate: "",
  learningType: "intensive",
  message: "",
};

type RegisterApplicationFormProps = {
  content: RegisterMessages["form"];
};

export function RegisterApplicationForm({ content }: RegisterApplicationFormProps) {
  const [values, setValues] = React.useState<FormFields>(INITIAL);
  const [submitting, setSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");

    const learningLabel =
      content.learningType.options.find((o) => o.value === values.learningType)
        ?.label ?? values.learningType;

    try {
      const response = await fetch(REGISTER_FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.fullName,
          email: values.email,
          phone: values.phone || "—",
          residence: values.residence || "—",
          preferred_date: values.preferredDate || "—",
          learning_type: learningLabel,
          message: values.message || "—",
          _subject: content.subject,
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("FormSubmit request failed");
      }

      setValues(INITIAL);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <FormRow>
        <RegisterField
          label={content.fullName.label}
          name="fullName"
          type="text"
          placeholder={content.fullName.placeholder}
          value={values.fullName}
          onChange={handleChange}
          required
          disabled={submitting}
        />
      </FormRow>

      <SplitFormRow>
        <RegisterField
          label={content.email.label}
          name="email"
          type="email"
          placeholder={content.email.placeholder}
          value={values.email}
          onChange={handleChange}
          required
          disabled={submitting}
        />
        <RegisterField
          label={content.phone.label}
          name="phone"
          type="tel"
          placeholder={content.phone.placeholder}
          value={values.phone}
          onChange={handleChange}
          required
          disabled={submitting}
        />
      </SplitFormRow>

      <SplitFormRow>
        <RegisterField
          label={content.residence.label}
          name="residence"
          type="text"
          placeholder={content.residence.placeholder}
          value={values.residence}
          onChange={handleChange}
          disabled={submitting}
        />
        <RegisterField
          label={content.preferredDate.label}
          name="preferredDate"
          type="text"
          placeholder={content.preferredDate.placeholder}
          value={values.preferredDate}
          onChange={handleChange}
          disabled={submitting}
        />
      </SplitFormRow>

      <FormRow>
        <fieldset className="flex flex-col gap-5">
          <legend className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand sm:text-xs">
            {content.learningType.label}
          </legend>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            {content.learningType.options.map((option) => (
              <label
                key={option.value}
                className="inline-flex cursor-pointer items-center gap-3"
              >
                <input
                  type="radio"
                  name="learningType"
                  value={option.value}
                  checked={values.learningType === option.value}
                  onChange={handleChange}
                  disabled={submitting}
                  className="sr-only"
                />
                <span
                  aria-hidden
                  className={
                    "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 " +
                    (values.learningType === option.value
                      ? "border-brand"
                      : "border-foreground/70")
                  }
                >
                  {values.learningType === option.value ? (
                    <span className="h-2 w-2 rounded-full bg-brand" />
                  ) : null}
                </span>
                <span className="font-sans text-sm text-foreground sm:text-base">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      </FormRow>

      <FormRow>
        <RegisterField
          label={content.message.label}
          name="message"
          type="textarea"
          placeholder={content.message.placeholder}
          value={values.message}
          onChange={handleChange}
          disabled={submitting}
        />
      </FormRow>

      {status === "success" ? (
        <p className="px-6 pb-4 text-sm text-foreground sm:px-8" role="status">
          {content.success}
        </p>
      ) : null}

      {status === "error" ? (
        <p className="px-6 pb-4 text-sm text-brand sm:px-8" role="alert">
          {content.error}
        </p>
      ) : null}

      <div className="px-6 py-8 sm:px-8 sm:py-10">
        <button
          type="submit"
          disabled={submitting}
          className={
            "inline-flex items-center gap-2 bg-brand px-8 py-4 font-sans text-xs font-medium uppercase " +
            "tracking-[0.14em] text-foreground transition-colors hover:bg-brand-600 " +
            "disabled:opacity-60 [clip-path:polygon(0_0,100%_0,100%_calc(100%-14px),calc(100%-14px)_100%,0_100%)] " +
            "sm:px-10 sm:py-4 sm:text-sm"
          }
        >
          {submitting ? content.submitting : content.submit}
          <span aria-hidden>—</span>
        </button>
      </div>
    </form>
  );
}

function FormRow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border-t border-white/30 px-6 py-6 sm:px-8 sm:py-7 ${className}`.trim()}
    >
      {children}
    </div>
  );
}

function SplitFormRow({ children }: { children: [React.ReactNode, React.ReactNode] }) {
  const [left, right] = children;

  return (
    <div className="grid grid-cols-1 border-t border-white/30 min-[520px]:grid-cols-2">
      <div className="px-6 py-6 sm:px-8 sm:py-7 min-[520px]:border-r min-[520px]:border-white/30">
        {left}
      </div>
      <div className="border-t border-white/30 px-6 py-6 sm:px-8 sm:py-7 min-[520px]:border-t-0">
        {right}
      </div>
    </div>
  );
}

type RegisterFieldProps = {
  label: string;
  name: keyof FormFields;
  type: "text" | "email" | "tel" | "textarea";
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
};

function RegisterField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
  disabled,
  className = "",
}: RegisterFieldProps) {
  const fieldId = `register-${name}`;
  const inputClass =
    "w-full bg-transparent pb-2 pt-1 text-base text-foreground placeholder:text-muted/70 " +
    "focus:outline-none focus:placeholder:text-muted disabled:opacity-60";

  return (
    <div className={`flex flex-col gap-3 ${className}`.trim()}>
      <label
        htmlFor={fieldId}
        className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand sm:text-xs"
      >
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          id={fieldId}
          name={name}
          rows={4}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`${inputClass} resize-none leading-relaxed`}
        />
      ) : (
        <input
          id={fieldId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={inputClass}
        />
      )}
    </div>
  );
}
