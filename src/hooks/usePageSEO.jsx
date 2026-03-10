import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import { siteSEO } from "../data/seo.js";
import { business } from "../data/business.js";
import { buildTitle, canonicalUrl } from "../utils/seoHelpers.js";
import { buildLocalBusinessSchema } from "../utils/schemaBuilders.js";

export default function PageSEO({
  title,
  description,
  noindex = false,
  schema = null
}) {
  const { pathname } = useLocation();

  const finalTitle = buildTitle(title || siteSEO.defaultTitle, siteSEO.siteName);
  const finalDescription = description || siteSEO.defaultDescription;
  const canonical = canonicalUrl(business.siteUrl, pathname);

  const defaultSchema = buildLocalBusinessSchema({ business });
  const mergedSchema = schema ? [defaultSchema, schema] : [defaultSchema];

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={canonical} />

      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}

      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={siteSEO.ogImage} />

      <script type="application/ld+json">
        {JSON.stringify(mergedSchema)}
      </script>
    </Helmet>
  );
}