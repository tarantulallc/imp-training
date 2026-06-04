/** Inauguration event video — https://www.youtube.com/watch?v=S25zgsfQSa8 */
export const INAUGURATION_YOUTUBE_ID = "S25zgsfQSa8";

export function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube-nocookie.com/embed/${videoId}`;
}
