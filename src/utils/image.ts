export const API_ORIGIN =
  "http://161.97.154.119";

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
