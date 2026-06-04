import { getYouTubeEmbedUrl } from "@/lib/inauguration-video";

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  label?: string;
  className?: string;
};

export function YouTubeEmbed({
  videoId,
  title,
  label,
  className = "",
}: YouTubeEmbedProps) {
  return (
    <div
      className={`relative aspect-video w-full overflow-hidden bg-[#1e1e1e] ${className}`.trim()}
    >
      {label ? (
        <p className="absolute left-4 top-4 z-10 font-sans text-xs text-subtle sm:left-6 sm:top-6 sm:text-sm">
          {label}
        </p>
      ) : null}

      <iframe
        src={getYouTubeEmbedUrl(videoId)}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
