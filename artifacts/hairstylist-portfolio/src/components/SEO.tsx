import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
  jsonLd?: Record<string, unknown>;
  keywords?: string;
};

const SITE_NAME = "MDW — Michael David";
const SITE_URL = "https://michaeldavidjr.beauty";
const DEFAULT_DESCRIPTION =
  "Michael David — celebrity hairstylist, creative director, and author. Editorial hair direction for Vogue, Harper's Bazaar, Vanity Fair. Clients include Rihanna, Nike, Savage X Fenty.";
const DEFAULT_IMAGE = `${SITE_URL}/opengraph.jpg`;

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  jsonLd,
  keywords,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Celebrity Hairstylist & Creative Director`;
  const canonicalUrl = `${SITE_URL}${path}`;

  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Michael David Warren Jr.",
    alternateName: "MDW",
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    image: DEFAULT_IMAGE,
    description: DEFAULT_DESCRIPTION,
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Los Angeles",
        addressRegion: "CA",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "NY",
        addressCountry: "US",
      },
    ],
    sameAs: [
      "https://www.instagram.com/md.warren",
      "https://www.linkedin.com/in/michael-david-warren-94855a239",
    ],
    knowsAbout: [
      "Celebrity Hair Styling",
      "Editorial Hair Direction",
      "Red Carpet Styling",
      "Fashion Editorial",
      "Creative Direction",
      "Brand Campaign Hair Direction",
    ],
    priceRange: "$$$$",
    telephone: "",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hair Direction Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Celebrity Hair Styling" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Editorial Hair Direction" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Red Carpet Styling" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Campaign Hair Direction" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beauty & Cover Shoots" } },
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@michaeldavidjr.beauty",
      contactType: "booking",
      availableLanguage: "English",
    },
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content="Los Angeles" />
      <meta name="geo.position" content="34.0522;-118.2437" />
      <meta name="ICBM" content="34.0522, -118.2437" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={description} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@md_warren" />
      <meta name="twitter:creator" content="@md_warren" />

      <script type="application/ld+json">
        {JSON.stringify(jsonLd || defaultJsonLd)}
      </script>
    </Helmet>
  );
}
