import { Navigate, useLocation } from "react-router-dom";
import { Head } from "vite-react-ssg";

/**
 * Client-side 301-style redirect — preserves search params and hash.
 * Also outputs <meta http-equiv="refresh"> and <link rel="canonical">
 * so that SSG pre-rendered HTML properly redirects crawlers/bots.
 */
const Redirect = ({ to }: { to: string }) => {
  const { search, hash } = useLocation();
  const dest = `${to}${search}${hash}`;
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
