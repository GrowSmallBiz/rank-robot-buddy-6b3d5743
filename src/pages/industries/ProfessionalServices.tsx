import { Head } from "vite-react-ssg";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Camera, Building, ArrowRight } from "lucide-react";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { useUtm } from "@/hooks/use-utm";

const industries = [
  {
    icon: Building,
    title: "Real Estate Agents & Brokers",
    description: "IDX-integrated websites, AI-powered CRM, automated follow-ups, and lead generation tools built specifically for realtors and brokers.",
    link: "/professional-services/marketing-for-realtors/",
  },
  {
    icon: Camera,
    title: "Photography Marketing",
    description: "Attract engaged couples, families, and commercial clients searching for professional photographers in your area.",
    link: "/professional-services/photography-marketing/",
  },
];

const ProfessionalServices = () => {
  const { strategySessionUrl, freeAuditUrl } = useUtm();

  return (
    <>
      <Head>
        <title>AI Powered Professional Services Marketing | GrowSmallBiz</title>
        <meta name="description" content="Digital marketing for realtors, photographers, and professional service providers. Generate more leads, book more clients, and grow your business." />
        <link rel="canonical" href="https://growsmallbiz.io/professional-services/" />
      </Head>
      <PageJsonLd
        pageType="WebPage"
        name="Professional Services Marketing"
        description="Digital marketing for realtors, photographers, and professional service providers."
        url="/professional-services/"
        breadcrumbs={[
          { name: "Professional Services", url: "/professional-services/" },
        ]}
      />

      <Header />

      <main id="main-content" className="min-h-screen pt-20">
        {/* Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Professional Services Marketing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Stop Being the Best-Kept Secret in Your Market
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              From real estate agents to photographers — we help professional service providers generate more leads, book more clients, and build a dominant local presence through integrated digital marketing.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href={strategySessionUrl} target="_blank" rel="noopener noreferrer">Schedule Strategy Call <ArrowRight className="ml-2 w-5 h-5" /></a>
            </Button>
          </div>
        </section>

        {/* Industry Cards */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Choose Your Specialty
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Every professional service has unique marketing needs. Select your specialty to see how we can help.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {industries.map((industry) => (
                <Link
                  key={industry.title}
                  to={industry.link}
                  className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                >
                  <industry.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{industry.description}</p>
                  <span className="text-primary font-semibold inline-flex items-center gap-1">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProfessionalServices;
