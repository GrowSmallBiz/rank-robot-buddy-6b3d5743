import { Head } from "vite-react-ssg";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface DemoVideoPageProps {
  title: string;
  subtitle: string;
  sourceUrl: string;
  metaDescription: string;
}

export const DemoVideoPage = ({ title, subtitle, sourceUrl, metaDescription }: DemoVideoPageProps) => {
  return (
    <>
      <Head>
        <title>{title} Demo | GrowSmallBiz</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://growsmallbiz.io/services/marketing-automation-for-small-business/demo/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "")}`} />
      </Head>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-8" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Link
                to="/services/marketing-automation-for-small-business#demo-videos"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Demos
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-3">
                {title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">{subtitle}</p>
            </div>
          </div>
        </section>

        {/* Embedded GHL page */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg" style={{ backgroundColor: "hsl(var(--card))" }}>
                <iframe
                  src={sourceUrl}
                  style={{ width: "100%", height: "2400px", border: "none" }}
                  title={`${title} Demo`}
                  loading="lazy"
                />
              </div>
              <div className="text-center mt-10">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/services/marketing-automation-for-small-business#demo-videos">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    View All Demo Videos
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
