import { Head } from "vite-react-ssg";

export interface ImageObjectItem {
  /** Absolute or root-relative URL of the image */
  url: string;
  /** Short caption (~1 sentence). Used by Google Image Search. */
  caption: string;
  /** Longer description with context about what the image depicts and why it appears on this page. */
  description?: string;
  /** Width in pixels (recommended for Google Images) */
  width?: number;
  /** Height in pixels (recommended for Google Images) */
  height?: number;
  /** Page URL where the image is displayed. Falls back to the parent pageUrl prop. */
  contentUrl?: string;
  /** License URL (defaults to site about page) */
  license?: string;
  /** Acquireable license URL */
  acquireLicensePage?: string;
  /** Image creator credit */
  creditText?: string;
}

interface ImageObjectJsonLdProps {
  /** Page URL (absolute) the images appear on. Used for `contentUrl` fallback and @id namespacing. */
  pageUrl: string;
  images: ImageObjectItem[];
}

const BASE_URL = "https://growsmallbiz.io";
const DEFAULT_LICENSE = `${BASE_URL}/about/`;
const ORG_ID = `${BASE_URL}/#organization`;

const toAbsolute = (url: string) => {
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/")) return `${BASE_URL}${url}`;
  return `${BASE_URL}/${url}`;
};

/**
 * Emits one schema.org/ImageObject entry per image, wrapped in an ItemList so multiple
 * images on a single page do not pollute the page graph with N top-level scripts.
 *
 * Use sparingly — only emit images that genuinely add SEO/AEO value (hero images,
 * feature illustrations, product/process screenshots). Skip decorative icons.
 */
export const ImageObjectJsonLd = ({ pageUrl, images }: ImageObjectJsonLdProps) => {
  if (!images || images.length === 0) return null;

  const absolutePageUrl = toAbsolute(pageUrl);

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${absolutePageUrl}#image-list`,
    itemListElement: images.map((img, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "ImageObject",
        "@id": `${absolutePageUrl}#image-${idx + 1}`,
        contentUrl: toAbsolute(img.contentUrl || img.url),
        url: toAbsolute(img.url),
        caption: img.caption,
        ...(img.description && { description: img.description }),
        ...(img.width && { width: img.width }),
        ...(img.height && { height: img.height }),
        license: img.license || DEFAULT_LICENSE,
        acquireLicensePage: img.acquireLicensePage || DEFAULT_LICENSE,
        creditText: img.creditText || "GrowSmallBiz Digital Marketing",
        creator: { "@id": ORG_ID },
        copyrightNotice: `© ${new Date().getUTCFullYear()} GrowSmallBiz Digital Marketing`,
      },
    })),
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(itemList)}</script>
    </Head>
  );
};
