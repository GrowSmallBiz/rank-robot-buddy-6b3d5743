import { Head } from "vite-react-ssg";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";

interface FeatureItem {
  title: string;
  description: string;
  image?: string;
}

interface DemoVideoPageProps {
  title: string;
  subtitle: string;
  videoUrl?: string;
  sourceUrl?: string;
  metaDescription: string;
  features?: FeatureItem[];
  introParagraph?: string;
}

export const DemoVideoPage = ({
  title,
  subtitle,
  videoUrl,
  sourceUrl,
  metaDescription,
  features = [],
  introParagraph,
}: DemoVideoPageProps) => {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");

  return (
    <>
      <Head>
        <title>{title} Demo | GrowSmallBiz</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://growsmallbiz.io/services/marketing-automation-for-small-business/${slug}/`} />
      </Head>
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero + Video Section */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              {subtitle}
            </p>

            {/* Video Player */}
            {videoUrl ? (
              <div className="w-full rounded-2xl overflow-hidden shadow-[0_0_30px_#17a2b850] mb-8" style={{ border: "2px solid #17a2b8" }}>
                <video
                  controls
                  className="w-full"
                  preload="metadata"
                  playsInline
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : sourceUrl ? (
              <div className="w-full rounded-2xl overflow-hidden shadow-[0_0_30px_#17a2b850] mb-8" style={{ border: "2px solid #17a2b8" }}>
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={sourceUrl}
                    title={`${title} Demo`}
                    loading="lazy"
                    style={{ border: "none" }}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </section>

        {/* Intro + Features Section */}
        {(introParagraph || features.length > 0) && (
          <section className="py-16" style={{ backgroundColor: "hsl(var(--background))" }}>
            <div className="container mx-auto px-4 max-w-5xl">
              {introParagraph && (
                <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto leading-relaxed">
                  {introParagraph}
                </p>
              )}

              {features.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all"
                    >
                      {feature.image && (
                        <img
                          src={feature.image}
                          alt={feature.title}
                          width={600} height={400}
                          className="w-full rounded-lg mb-4"
                          loading="lazy"
                        />
                      )}
                      <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* No Risk Guarantee */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight mb-6">
              "No Risk <span className="text-accent">Guarantee</span>"
            </h2>
            <h3 className="text-xl font-semibold text-foreground mb-6">The Choice Is Yours</h3>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Start today and get a 30 day <strong className="text-foreground">money back guarantee.</strong> If, for any reason, you're not 100% satisfied with your License within 30 days of your purchase, simply reach out to Member Support, and we'll gladly issue you a full refund for your monthly subscription. <strong className="text-foreground">No questions asked.</strong>
              </p>
              <p className="text-sm text-muted-foreground mt-4 italic">
                *Memberships are month to month, no contracts!
              </p>
            </div>

            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 h-auto"
              asChild
            >
              <Link to="/services/marketing-automation-for-small-business/#ready-to-talk">
                <Shield className="w-5 h-5 mr-2" />
                100% SATISFACTION GUARANTEE
              </Link>
            </Button>
          </div>
        </section>

        {/* Integrations */}
        <IntegrationsSection />

        {/* Schedule a Consultation CTA */}
        <section className="py-16" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <Button variant="hero" size="xl" asChild>
              <Link to="/services/marketing-automation-for-small-business/#ready-to-talk">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </section>

        {/* Back to All Demos */}
        <div className="text-center py-8" style={{ backgroundColor: "hsl(var(--background))" }}>
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/services/marketing-automation-for-small-business/#demo-videos">
              <ArrowLeft className="w-5 h-5 mr-2" />
              View All Demo Videos
            </Link>
          </Button>
        </div>
      </main>
    </>
  );
};
