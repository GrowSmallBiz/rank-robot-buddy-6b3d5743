import { useLocation } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main id="main-content" className="flex min-h-screen items-center justify-center bg-muted">
      <Head>
        <title>Page Not Found | GrowSmallBiz</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="The page you're looking for has moved or no longer exists. Head back to explore our digital marketing services for local businesses." />
      </Head>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold bg-gradient-heading bg-clip-text text-transparent">
  404
</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
