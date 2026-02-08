/**
 * Asset path helper for GitHub Pages deployment
 * Automatically handles basePath from environment
 */
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string): string => {
  if (!path.startsWith("/")) {
    path = "/" + path;
  }
  return `${BASE}${path}`;
};
