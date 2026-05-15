import { Navigate, useLocation } from "react-router-dom";
import { Head } from "vite-react-ssg";

/**
 * Client-side 301-style redirect — preserves search params and hash.
 * Also outputs <meta http-equiv="refresh"> and <link rel="canonical">
 * so that SSG pre-rendered HTML properly redirects crawlers/bots.
 */
const Redirect = ({ to }: { to: string }) => {
  const { search, hash } = useLocation();

  // Merge inbound query params (e.g. fbclid, gclid) with any query string
  // already present in `to`. Inbound params win on key collision so that
  // tracking IDs from ad platforms are always preserved.
  const [toPath, toQuery = ""] = to.split("?");
  const inboundParams = new URLSearchParams(search);
  const mergedParams = new URLSearchParams(toQuery);
  inboundParams.forEach((value, key) => {
    mergedParams.set(key, value);
  });
  const mergedQuery = mergedParams.toString();
  const dest = `${toPath}${mergedQuery ? `?${mergedQuery}` : ""}${hash}`;
  const absoluteDest = `https://growsmallbiz.io${toPath}`;


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
