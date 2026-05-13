import { Head } from "vite-react-ssg";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Clock, Gift, ExternalLink } from "lucide-react";
import { PageJsonLd } from "@/components/seo/PageJsonLd";

const PAGE_URL = "https://growsmallbiz.io/specials/current-offers/";
const PAGE_TITLE = "Current Specials & Limited-Time Offers | GrowSmallBiz";
const PAGE_DESC =
  "Active GrowSmallBiz specials for local service businesses — limited-time appreciation offers, seasonal promotions, and chamber-exclusive deals.";

interface SpecialOffer {
  badge: string;
  title: string;
  shortDescription: string;
  highlights: string[];
  deadline: string;
  url: string;
  ctaLabel: string;
}

const specials: SpecialOffer[] = [
  {
    badge: "Mother's Day Appreciation",
    title: "Complimentary Starter Website for Mom-Owned Small Businesses",
    shortDescription:
      "For 5 mom-owned local service businesses: a complimentary Starter Website ($2,500 value), $500 off Client Growth System Setup, and annual-only appreciation pricing that will not be repeated.",
    highlights: [
      "Complimentary Starter Website — $2,500 value",
      "$500 off Client Growth System Setup",
      "Limited to 5 mom-owned businesses",
    ],
    deadline: "Extended through May 31, 2026 — or until 5 spots are filled",
    url: "/specials/mothers-day/",
    ctaLabel: "View Mother's Day Offer",
  },
];

const CurrentOffers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
      </Head>
      <PageJsonLd
        pageType="WebPage"
        name="Current Specials & Limited-Time Offers"
        description={PAGE_DESC}
        url="/specials/current-offers/"
        breadcrumbs={[
          { name: "Specials", url: "/specials/current-offers/" },
          { name: "Current Offers", url: "/specials/current-offers/" },
        ]}
      />
      <Header />

      <main id="main-content">
        {/* HERO */}
        <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 hero-glow" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/40 text-primary text-xs md:text-sm font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Limited-Time Offers
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Current{" "}
                <span className="bg-gradient-heading bg-clip-text text-transparent">
                  Specials
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Active GrowSmallBiz appreciation offers, seasonal promotions, and chamber-exclusive deals for local service businesses. Each offer has limited spots and a hard deadline — when it closes, it closes.
              </p>
            </div>
          </div>
        </section>

        {/* SPECIALS LIST */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              {specials.map((offer) => (
                <article
                  key={offer.url}
                  className="group relative rounded-2xl border-2 border-primary/30 bg-card/80 backdrop-blur-sm p-6 md:p-8 shadow-xl hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center">
                        <Gift className="w-7 h-7 text-primary" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                        {offer.badge}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3 leading-tight">
                        {offer.title}
                      </h2>
                      <p className="text-base text-muted-foreground leading-relaxed mb-5">
                        {offer.shortDescription}
                      </p>

                      <ul className="space-y-2 mb-5">
                        {offer.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-sm text-foreground/90"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center gap-2 text-xs md:text-sm text-primary font-semibold mb-5">
                        <Clock className="w-4 h-4" />
                        <span>{offer.deadline}</span>
                      </div>

                      <Button asChild variant="hero" size="lg">
                        <a
                          href={offer.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {offer.ctaLabel}
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-12 text-center">
              <p className="text-sm text-muted-foreground italic">
                Looking for something else? Check back regularly — new seasonal and chamber-exclusive specials are added throughout the year.
              </p>
              <div className="mt-6">
                <Button asChild size="lg" variant="outline">
                  <a href="/contact/">
                    Contact Us About a Custom Offer
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CurrentOffers;
