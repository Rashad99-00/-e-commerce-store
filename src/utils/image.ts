export const API_ORIGIN =
  import.meta.env.VITE_ASSET_BASE_URL ??
  "";

const API_HOST =
  "161.97.154.119";

const isHttpsPage = () =>
  typeof window !== "undefined" &&
  window.location.protocol === "https:";

const isBackendUrl = (
  value: string
) => {
  try {
    return (
      new URL(value).hostname ===
      API_HOST
    );
  } catch {
    return false;
  }
};

const toRelativeBackendPath = (
  value: string
) => {
  const parsed =
    new URL(value);

  return `${parsed.pathname}${parsed.search}`;
};

export const getImageSrc = (
  url?: string | null
) => {
  if (!url) {
    return "";
  }

  if (isBackendUrl(url)) {
    return toRelativeBackendPath(
      url
    );
  }

  if (url.startsWith("http")) {
    return url;
  }

  if (
    isHttpsPage() &&
    API_ORIGIN.startsWith("http://")
  ) {
    return url;
  }

  return `${API_ORIGIN}${url}`;
};
