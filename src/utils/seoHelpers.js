export function buildTitle(pageTitle, siteName) {
  if (!pageTitle) return siteName;
  return `${pageTitle} | ${siteName}`;
}

export function canonicalUrl(siteUrl, pathname) {
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteUrl.replace(/\/$/, "")}${cleanPath}`;
}