import { Head } from "vite-react-ssg";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface DemoVideoPageProps {
  title: string;
  subtitle?: string;
  sourceUrl: string;
  metaDescription: string;
}

export const DemoVideoPage = ({ title, sourceUrl, metaDescription }: DemoVideoPageProps) => {
  return (
    <>
      <Head>
        <title>{title} Demo | GrowSmallBiz</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://growsmallbiz.io/services/marketing-automation-for-small-business/demo/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "")}`} />
      </Head>
      <Header />
      <main className="pt-20">
        <iframe
          src={sourceUrl}
          style={{ width: "100%", height: "100vh", border: "none", minHeight: "2400px" }}
          title={`${title} Demo`}
          loading="lazy"
        />
        <div className="text-center py-8" style={{ backgroundColor: "hsl(var(--background))" }}>
          <Button variant="hero" size="lg" asChild>
            <Link to="/services/marketing-automation-for-small-business#demo-videos">
              <ArrowLeft className="w-5 h-5 mr-2" />
              View All Demo Videos
            </Link>
          </Button>
        </div>
      </main>
    </>
  );
};
