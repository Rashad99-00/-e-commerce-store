export const API_ORIGIN =
  import.meta.env.VITE_ASSET_BASE_URL;

export const getImageSrc = (
  url?: string | null
) => {
  if (!url) {
    return "";
  }

  if (
    url.startsWith("http")
  ) {
    return url;
  }

  return `${API_ORIGIN}${url}`;
};
