import { Head } from "vite-react-ssg";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Sparkles, Stethoscope, ArrowRight } from "lucide-react";
import { PageJsonLd } from "@/components/seo/PageJsonLd";

const industries = [
  {
    icon: Sparkles,
    title: "Med Spa Marketing",
    description: "Attract high-value aesthetic clients searching for Botox, fillers, laser treatments, and body contouring in your area.",
    link: "/health-and-wellness-practices/med-spa-marketing/",
  },
  {
    icon: Heart,
    title: "Chiropractic Marketing",
    description: "Reach patients actively searching for pain relief, sports injury recovery, and wellness care in your community.",
    link: "/health-and-wellness-practices/chiropractic-marketing/",
  },
  {
    icon: Stethoscope,
    title: "Dental Marketing",
    description: "Fill your appointment book with new patients searching for dental cleanings, cosmetic dentistry, and emergency care.",
    link: "/health-and-wellness-practices/dental-marketing/",
  },
];

const HealthAndWellness = () => {
  return (
    <>
      <Head>
        <title>Health & Wellness Practice Marketing | GrowSmallBiz</title>
        <meta name="description" content="Digital marketing for med spas, chiropractors, and dental practices. Attract more patients, fill your schedule, and grow your health & wellness practice." />
        <link rel="canonical" href="https://growsmallbiz.io/health-and-wellness-practices/" />
      </Head>
      <PageJsonLd
        pageType="WebPage"
        name="Health & Wellness Practice Marketing"
        description="Digital marketing for med spas, chiropractors, and dental practices."
        url="/health-and-wellness-practices"
        breadcrumbs={[
          { name: "Health & Wellness Practices", url: "/health-and-wellness-practices" },
        ]}
      />

      <Header />

      <main id="main-content" className="min-h-screen pt-20">
        {/* Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Health & Wellness Marketing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Grow Your Health & Wellness Practice
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              From med spas to dental offices to chiropractic clinics — we help health and wellness practices attract more patients, fill schedules, and build lasting patient relationships through integrated digital marketing.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact/">Get Your Free Strategy Session <ArrowRight className="ml-2 w-5 h-5" /></Link>
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
              Every health & wellness practice has unique marketing needs. Select your specialty to see how we can help.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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

export default HealthAndWellness;
