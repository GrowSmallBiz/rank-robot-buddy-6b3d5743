import { Navigate, useLocation } from "react-router-dom";
import { Head } from "vite-react-ssg";

interface RedirectProps {
  to: string;
  /** Optional UTM params to inject into the destination URL */
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
    term?: string;
  };
}

/**
 * Client-side 301-style redirect — preserves search params and hash.
 * Optionally injects UTM parameters into the destination (inbound UTMs win).
 * Also outputs <meta http-equiv="refresh"> and <link rel="canonical">
 * so that SSG pre-rendered HTML properly redirects crawlers/bots.
 */
const Redirect = ({ to, utm }: RedirectProps) => {
  const { search, hash } = useLocation();

  // Merge: injected UTMs as defaults, inbound search params override
  const params = new URLSearchParams(search);
  if (utm) {
    const map: Record<string, string | undefined> = {
      utm_source: utm.source,
      utm_medium: utm.medium,
      utm_campaign: utm.campaign,
      utm_content: utm.content,
      utm_term: utm.term,
    };
    for (const [k, v] of Object.entries(map)) {
      if (v && !params.has(k)) params.set(k, v);
    }
  }
  const qs = params.toString();
  const dest = `${to}${qs ? `?${qs}` : ""}${hash}`;
  const absoluteDest = `https://growsmallbiz.io${to}`;

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0;url=${dest}`} />
        <link rel="canonical" href={absoluteDest} />
        <meta name="robots" content="noindex, follow" />
        <title>Redirecting…</title>
      </Head>
      <Navigate to={dest} replace />
    </>
  );
};

export default Redirect;
