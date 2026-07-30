import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/services/ServiceHero";
import eastBayHero from "@/assets/east-bay-tri-valley-hero.webp";
import { CardCTA } from "@/components/services";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { useUtm } from "@/hooks/use-utm";
import { baseContactCTA } from "@/config/contactCTA";
import { PageJsonLd } from "@/components/seo/PageJsonLd";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import {
  MapPin,
  Building2,
  TrendingUp,
  Star,
  Globe,
  Shield,
  Smartphone,
  Zap,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Users,
  Brain,
  Target,
  MessageSquare,
  Search,
} from "lucide-react";

const PRIMARY_CTA_BASE = "https://lp.growsmallbiz.io/digital-growth-strategy-session";

const faqs = [
  {
    question: "What is the average ROI for Google Ads campaigns in the Bay Area?",
    answer: "Google Ads campaigns in competitive Bay Area markets typically achieve an average ROI of 400%, depending on industry and campaign optimization. Businesses focusing on tech startups and professional services often see higher returns due to targeted audience segments, as reported by Google Ads Resources.",
  },
  {
    question: "How important is local SEO for small businesses in cities like Oakland and Fremont?",
    answer: "Local SEO is crucial for small businesses in Oakland and Fremont, as it significantly improves visibility in local search results. Effective local SEO can increase website traffic by up to 30% and lead inquiries by 25%, directly impacting revenue, according to BrightLocal.",
  },
  {
    question: "How can AI marketing systems benefit healthcare providers in San Jose?",
    answer: "AI marketing systems help healthcare providers personalize patient outreach, predict appointment needs, and optimize advertising spend. This leads to improved patient engagement, higher appointment rates, and better resource allocation, as demonstrated in our work with multiple San Jose healthcare clients.",
  },
  {
    question: "What digital marketing channels are most effective for Bay Area restaurants?",
    answer: "Bay Area restaurants benefit most from a combination of local SEO, reputation management, and social media advertising. These channels drive foot traffic, enhance online reviews, and increase brand awareness in a competitive dining scene, supported by data from HubSpot and Search Engine Journal's insights on local search ranking factors.",
  },
  {
    question: "How do I choose the right digital marketing mix for my Bay Area business?",
    answer: "Choosing the right digital marketing mix involves assessing your business size, industry vertical, target audience behavior, and budget. Using a data-driven framework that considers these factors ensures your marketing efforts are efficient and effective. Our proprietary framework, refined through years of Bay Area client engagements, guides this process with proven success.",
  },
];

const LocationsWeServe = () => {
  const { buildUrl } = useUtm();
  const PRIMARY_CTA_URL = buildUrl(PRIMARY_CTA_BASE, "strategy-session");

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Digital Marketing & SEO Services in Bay Area and Nationwide</title>
        <meta name="description" content="GrowSmallBiz serves local service businesses across Greater San Francisco Bay Area (Sacramento to San Jose) and the entire United States. Contact us." />
        <meta name="keywords" content="local digital marketing, Bay Area marketing services, SEO for local businesses, paid advertising Bay Area, reputation management services, GrowSmallBiz Digital Marketing, localized marketing strategies, small business marketing solutions" />
        <link rel="canonical" href="https://growsmallbiz.io/locations/locations-we-serve/" />
        <meta property="og:title" content="AI-Driven Small Businesses Growth System | GrowSmallBiz" />
      </Head>
      <PageJsonLd
        pageType="WebPage"
        name="Digital Marketing Agency Bay Area — Local Marketing Services by City"
        description="GrowSmallBiz serves local service businesses across the Bay Area — Walnut Creek, Danville, San Ramon, Dublin, Pleasanton, Concord, and more."
        url="/locations/locations-we-serve/"
        breadcrumbs={[
          { name: "Locations", url: "/locations/locations-we-serve/" },
        ]}
      />

      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <ServiceHero
          badge={{ icon: MapPin, text: "Bay Area Coverage" }}
          title="Digital Marketing Agency Serving the Bay Area —"
          titleHighlight="Find Your City"
          subtitle="In the highly competitive and diverse Bay Area market, local businesses face unique challenges in effectively reaching their target audiences. With over 7.5 million residents across cities like San Francisco, San Jose, Oakland, and Fremont, the region demands tailored digital marketing strategies that reflect its dynamic economy and varied industry sectors."
          description="Per the U.S. Census Bureau, the Bay Area continues to see robust population growth and a thriving small business ecosystem, making localized marketing essential."
          primaryCTA={{ label: "Schedule Strategy Call", href: PRIMARY_CTA_URL, external: true }}
          secondaryCTA={{ label: "View Our Services", href: "/services/" }}
          stats={[
            { value: "7.5M+", label: "Bay Area Residents" },
            { value: "150+", label: "Local Clients Served" },
            { value: "40%", label: "Avg Lead Increase" },
            { value: "12+", label: "Years Experience" },
          ]}
          backgroundImage={eastBayHero}
          overlayOpacity={80}
        />

        {/* East Bay Section */}
        <section className="pt-8 pb-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="service-badge mb-4">
                <Building2 className="w-4 h-4" />
                <span>East Bay Coverage</span>
              </div>
              <h2 className="section-title bg-gradient-heading bg-clip-text text-transparent">
                Digital Marketing Services Across the East Bay
              </h2>
              <p className="section-description mt-4">
                GrowSmallBiz Digital Marketing proudly serves all East Bay communities, covering both the Diablo Valley and Tri-Valley regions. Our tailored digital marketing services address the unique business landscapes and growth opportunities in each city, ensuring local businesses thrive in their specific markets.
              </p>
            </div>

            {/* Diablo Valley */}
            <div className="mb-16">
              <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-primary">Diablo Valley</span> Region
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    city: "Walnut Creek",
                    slug: "/locations/walnut-creek-ca/",
                    desc: "Walnut Creek's vibrant retail and professional services sectors require comprehensive local SEO and reputation management to capture both foot traffic and online leads.",
                  },
                  {
                    city: "Pleasant Hill",
                    slug: "/locations/pleasant-hill-ca/",
                    desc: "Sitting at the heart of the 680 corridor between Walnut Creek and Concord, Pleasant Hill's affluent homeowner base, Diablo Valley College population, and BART-connected professional community create high-intent demand for local service businesses — with surprisingly thin digital competition.",
                  },
                  {
                    city: "Concord",
                    slug: "/locations/concord-ca/",
                    desc: "Concord's diverse small and medium business market thrives with localized SEO, social media engagement, and targeted advertising campaigns tailored to varied industries.",
                  },
                  {
                    city: "Martinez",
                    slug: "/locations/martinez-ca/",
                    desc: "As the seat of Contra Costa County, Martinez businesses operate in a distinct market with a historic downtown, waterfront district, and a community-oriented customer base that rewards local credibility and reputation above all else.",
                  },
                ].map((item) => (
                  <Link
                    key={item.city}
                    to={item.slug}
                    className="group block p-6 feature-card-teal rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        Digital Marketing in {item.city}, CA
                      </h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    <div className="flex items-center gap-2 text-primary font-medium pt-4 group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tri-Valley */}
            <div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-primary">Tri-Valley</span> & Extended Service Area
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    city: "Danville",
                    slug: "/locations/danville-ca/",
                    desc: "Danville's affluent market supports high-value service businesses, making targeted digital marketing strategies focused on premium branding and lead generation essential for success.",
                  },
                  {
                    city: "San Ramon",
                    slug: "/locations/san-ramon-ca/",
                    desc: "With a strong corporate and B2B presence, San Ramon businesses benefit from AI-driven marketing systems and professional content marketing to engage decision-makers effectively.",
                  },
                  {
                    city: "Dublin",
                    slug: "/locations/dublin-ca/",
                    desc: "Dublin's fast-growing residential and retail markets demand dynamic digital marketing strategies that combine local SEO with social media advertising to attract new residents and shoppers.",
                  },
                  {
                    city: "Pleasanton",
                    slug: "/locations/pleasanton-ca/",
                    desc: "Known as a small business hub, Pleasanton businesses benefit from integrated marketing approaches including PPC, content marketing, and reputation management to drive growth.",
                  },
                  {
                    city: "Livermore",
                    slug: "/locations/livermore-ca/",
                    desc: "Livermore's unique blend of wine country tourism and industrial sectors requires specialized marketing strategies that highlight local attractions and B2B services.",
                  },
                  {
                    city: "Tracy",
                    slug: "/locations/tracy-ca/",
                    desc: "Tracy's fast-growing commuter market and Bay Area affordability migration wave create consistent demand across home services, healthcare, restaurants, and real estate — with digital competition well behind the Bay Area cities to the west.",
                  },
                ].map((item) => (
                  <Link
                    key={item.city}
                    to={item.slug}
                    className="group block p-6 feature-card-teal rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        Digital Marketing in {item.city}, CA
                      </h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    <div className="flex items-center gap-2 text-primary font-medium pt-4 group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI-Powered Marketing Systems */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="service-badge mb-4">
                  <Brain className="w-4 h-4" />
                  <span>AI-Powered Marketing</span>
                </div>
                <h2 className="section-title bg-gradient-heading bg-clip-text text-transparent">
                  Understanding AI-Powered Marketing Systems in the Bay Area
                </h2>
                <p className="section-description mt-4">
                  AI-powered marketing systems utilize advanced algorithms to analyze consumer behavior and optimize marketing strategies, a critical advantage in the data-driven Bay Area market. These systems process vast datasets to identify patterns and trends, enabling businesses to deliver personalized content and targeted advertising that resonates with local audiences. According to Google research, 76% of people who search for something nearby on their smartphone visit a business within a day, underscoring the importance of timely, personalized marketing efforts.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 rounded-2xl bg-card border border-border text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Key Benefits</h3>
                  <p className="text-muted-foreground text-sm">Enhanced visibility, improved engagement, and efficient lead generation.</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Bay Area Impact</h3>
                  <p className="text-muted-foreground text-sm">According to a 2024 report by BrightLocal, AI marketing adoption has increased by 35% among local businesses since 2023, with tech startups leading the way.</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Performance Benchmarks</h3>
                  <p className="text-muted-foreground text-sm">Businesses using AI-driven marketing report an average 25% increase in customer retention and a 30% boost in conversion rates, as documented in HubSpot's 2024 Marketing Statistics.</p>
                </div>
              </div>

              <p className="text-muted-foreground text-center italic">
                Research highlights AI's transformative role in personalization and predictive analytics, essential for Bay Area businesses competing in saturated markets.
              </p>
            </div>
          </div>
        </section>

        {/* Section A: AI-Powered Marketing System */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="service-badge mb-4">
                  <Brain className="w-4 h-4" />
                  <span>AI-Powered Digital Marketing Automation</span>
                </div>
                <h2 className="section-title bg-gradient-heading bg-clip-text text-transparent">
                  Boost Greater Bay Area SMB Growth with Agentic AI Marketing Playbooks
                </h2>
                <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mt-4">
                  Get More Calls, More Booked Jobs, and Grow Revenue
                </h3>
              </div>

              {/* Stat highlight paragraph */}
              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-8 text-center">
                <p className="text-foreground/90 leading-relaxed text-lg">
                  <a href="https://www.thinkwithgoogle.com/_qs/documents/645/consumer-search-i-want-to-go-micro-moments-b.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">According to Google research</a>, <span className="text-primary font-bold text-2xl">76%</span> of people who search for something nearby on their smartphone visit a business within a day, underscoring the importance of timely, personalized marketing efforts.
                </p>
              </div>

              {/* Main body card */}
              <div className="p-8 rounded-2xl bg-card border border-primary/30 shadow-[0_0_40px_rgba(255,127,80,0.1)]">
                <p className="text-foreground/90 leading-relaxed text-lg">
                  AI-powered marketing works best when it is not treated as a standalone tool. GrowSmallBiz connects website performance, local SEO, paid ads, CRM automation, AI Receptionist, and Conversational AI into one coordinated system designed to help small and mid-sized businesses respond faster, follow up more consistently, and convert more opportunities into revenue. The goal is not more technology for its own sake. The goal is fewer missed leads, stronger lead handling, and better business outcomes from the marketing you are already investing in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local SEO Strategies */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="service-badge mb-4">
                  <Search className="w-4 h-4" />
                  <span>AI Powered Local SEO</span>
                </div>
                <h3 className="section-title bg-gradient-heading bg-clip-text text-transparent">
                  Local SEO Strategies for Bay Area Cities: San Francisco, San Jose, Oakland, and Fremont
                </h3>
                <p className="section-description mt-4">
                  Local SEO is vital for businesses targeting customers within specific Bay Area cities. Effective local SEO enhances online visibility, making it easier for potential customers to find services nearby. BrightLocal research shows that 87% of consumers read online reviews for local businesses, highlighting the importance of reputation alongside SEO. Below are city-specific strategies and insights for optimizing local SEO in 2025-2026.
                </p>
              </div>

              {/* San Francisco */}
              <div className="mb-12 p-8 rounded-2xl bg-card border border-border">
                <h4 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary" />
                  San Francisco: Tech and Professional Services Hub
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Optimize Google My Business:</span> Ensure complete profiles with updated hours and service details, especially for tech startups and professional services. Google data confirms that businesses with fully optimized Google Business Profiles are twice as likely to be considered reputable by consumers.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Local Keywords:</span> Use neighborhood-specific terms like "SoMa tech consulting" or "Financial District legal services."
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Customer Reviews:</span> Encourage reviews on platforms like Yelp and Google, as San Francisco consumers heavily rely on peer feedback. BrightLocal's Local Consumer Review Survey indicates that 79% of consumers trust online reviews as much as personal recommendations.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <BarChart3 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Performance Benchmark:</span> According to Statista, average local SEO campaigns in San Francisco yield a 35% increase in organic traffic within six months, supported by BrightEdge research showing that organic search drives over 53% of website traffic on average.
                    </p>
                  </div>
                </div>
              </div>

              {/* San Jose */}
              <div className="mb-12 p-8 rounded-2xl bg-card border border-border">
                <h4 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-primary" />
                  San Jose: Focus on Healthcare and Tech Startups
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Google My Business Optimization:</span> Highlight specialties and certifications for healthcare providers and tech firms. Google reports that 46% of all searches have local intent, making this optimization critical.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Local Keywords:</span> Incorporate terms like "Silicon Valley healthcare" or "San Jose SaaS solutions."
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Customer Reviews:</span> Prioritize patient testimonials and case studies to build trust. BrightLocal data shows that 73% of consumers say positive reviews make them trust a local business more.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <BarChart3 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Performance Benchmark:</span> Local SEO efforts typically result in a 28% increase in appointment bookings, as reported by BrightLocal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Oakland */}
              <div className="mb-12 p-8 rounded-2xl bg-card border border-border">
                <h4 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  Oakland: Diverse Market with Growing Restaurant Scene
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Google My Business:</span> Feature menus, hours, and reservation options prominently. Google research finds that 76% of people who search for something nearby on their smartphone visit a business within a day, making accurate GMB info vital.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Local Keywords:</span> Use neighborhood-specific phrases such as "Jack London Square dining" or "Oakland vegan restaurants."
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Customer Reviews:</span> Actively respond to reviews to foster community engagement. BrightLocal's survey highlights that 89% of consumers read businesses' responses to reviews.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <BarChart3 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Performance Benchmark:</span> Restaurants see an average 30% boost in foot traffic from local SEO improvements, according to HubSpot data.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fremont */}
              <div className="mb-12 p-8 rounded-2xl bg-card border border-border">
                <h4 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  Fremont: Residential and Professional Services Focus
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Google My Business:</span> Emphasize family-friendly services and local community involvement.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Local Keywords:</span> Target terms like "Fremont home services" or "Bay Area family dentistry."
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Customer Reviews:</span> Leverage positive feedback to build credibility in a suburban market. BrightLocal research shows that 82% of consumers read online reviews for local businesses in suburban areas.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <BarChart3 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Performance Benchmark:</span> Local SEO campaigns often increase lead inquiries by 25%, as verified by BrightLocal.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-center italic">
                Academic studies underscore the strategic importance of local SEO for small and medium-sized businesses seeking to enhance their online presence.
              </p>
              <p className="text-sm text-muted-foreground text-center mt-2 italic">
                SEO Strategy and Implementation for a local Company — A Aliu, 2020
              </p>
            </div>
          </div>
        </section>

        {/* Marketing Mix Framework */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="service-badge mb-4">
                  <Target className="w-4 h-4" />
                  <span>Strategic Framework</span>
                </div>
                <h2 className="section-title bg-gradient-heading bg-clip-text text-transparent">
                  A Unique Framework for Choosing the Right Digital Marketing Mix for Bay Area Businesses
                </h2>
                <p className="section-description mt-4">
                  Given the Bay Area's diverse economy and competitive landscape, selecting the right digital marketing mix is critical. Our proprietary framework helps businesses evaluate and prioritize marketing channels based on:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    num: "1",
                    title: "Business Size and Stage",
                    desc: "Startups may prioritize brand awareness and social media, while established businesses focus on lead generation and retention. SBA data confirms that small businesses make up over 99% of Bay Area enterprises, highlighting the need for scalable marketing solutions.",
                  },
                  {
                    num: "2",
                    title: "Industry Vertical",
                    desc: "Tech startups benefit from AI-driven content and PPC, healthcare relies on reputation management and local SEO, restaurants emphasize social media and review management, and professional services focus on SEO and content marketing.",
                  },
                  {
                    num: "3",
                    title: "Target Audience Behavior",
                    desc: "Understanding where customers spend time online guides channel selection. Google's research shows that mobile searches with local intent have grown over 50% in recent years, emphasizing mobile-first strategies.",
                  },
                  {
                    num: "4",
                    title: "Budget and ROI Expectations",
                    desc: "Allocating resources to channels with proven ROI in the Bay Area, such as Google Ads with an average ROI of 400% in competitive markets, as reported by Google Ads Resources.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">{item.num}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground text-center mt-8">
                This framework ensures a tailored, data-driven approach that maximizes marketing effectiveness and budget efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <CardCTA
          title="Ready to Dominate Your Local Market?"
          description="Get a personalized marketing assessment and discover growth opportunities specific to your Bay Area business."
          buttonText="Schedule Strategy Call"
          buttonHref={PRIMARY_CTA_URL}
          sectionClassName="py-16"
        />

        {/* Reputation Management */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="service-badge mb-4">
                  <Star className="w-4 h-4" />
                  <span>Reputation Management</span>
                </div>
                <h2 className="section-title bg-gradient-heading bg-clip-text text-transparent">
                  Reputation Management and Social Proof in the Bay Area Market
                </h2>
                <p className="section-description mt-4">
                  Online reputation management is critical in the Bay Area, where consumers heavily rely on reviews and ratings. BrightLocal's Local Consumer Review Survey reveals that 91% of consumers regularly or occasionally read online reviews, making reputation management a key competitive factor. Effective strategies include:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 rounded-2xl bg-card border border-border text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Monitoring Online Mentions</h3>
                  <p className="text-muted-foreground text-sm">Use tools like Google Alerts and ReviewTrackers to stay informed.</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Engaging with Customers</h3>
                  <p className="text-muted-foreground text-sm">Respond promptly to both positive and negative feedback. SEJ research emphasizes that businesses responding to reviews see higher customer loyalty and improved local rankings.</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Promoting Positive Testimonials</h3>
                  <p className="text-muted-foreground text-sm">Share success stories on websites and social media.</p>
                </div>
              </div>

              <p className="text-muted-foreground text-center italic">
                Studies confirm that a strong online reputation attracts more customers and builds corporate trust.
              </p>

              <div className="mt-8 p-6 rounded-2xl bg-card border border-border">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Developments in communication and information technologies have obliged corporations to be aware of the importance of their reputation in the virtual world as well as the real world. Corporations with a robust reputation are more attractive to investors and customers. At the same time, corporations having a robust corporate reputation manage crises more successfully. Reputation management is among the primary functions of public relations practices. One of the essential purposes of public relations practices is to manage the relations between corporations and their audiences, develop and maintain a strong reputation both in the real and virtual worlds.
                </p>
                <p className="text-xs text-muted-foreground mt-3 italic">
                  A review on online reputation management and online reputation components, N Şirzad, 2022
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Website Optimization */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="service-badge mb-4">
                  <Smartphone className="w-4 h-4" />
                  <span>Website Optimization</span>
                </div>
                <h2 className="section-title bg-gradient-heading bg-clip-text text-transparent">
                  Website Optimization for Lead Conversion in Bay Area Businesses
                </h2>
                <p className="section-description mt-4">
                  Optimizing your website is essential for converting visitors into leads, especially in the Bay Area's competitive market. BrightEdge research shows that organic search is the largest driver of website traffic, making SEO and site performance critical. Key elements include:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 rounded-2xl bg-card border border-border text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Clear Call-to-Action (CTA)</h3>
                  <p className="text-muted-foreground text-sm">Prominent and compelling CTAs encourage user engagement.</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Mobile Responsiveness</h3>
                  <p className="text-muted-foreground text-sm">With over 60% of local searches on mobile devices, responsive design is critical, as reported by Statista and supported by Google's findings on mobile search behavior.</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Fast Loading Speed</h3>
                  <p className="text-muted-foreground text-sm">Optimized images and server response times improve user experience and SEO rankings.</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Additional conversion-focused elements include:</h3>
                {[
                  {
                    num: "1",
                    title: "User-Friendly Navigation",
                    desc: "Simplify site structure to help users find information quickly.",
                  },
                  {
                    num: "2",
                    title: "Compelling Content",
                    desc: "Address customer pain points with engaging, solution-oriented content. HubSpot's State of Marketing report highlights content marketing as a top driver of lead generation.",
                  },
                  {
                    num: "3",
                    title: "Trust Signals",
                    desc: "Incorporate testimonials, case studies, and security badges to build credibility.",
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">{item.num}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">{item.title}:</span>{" "}
                      <span className="text-muted-foreground">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="section-title bg-gradient-heading bg-clip-text text-transparent">
                  Comparison Table: Digital Marketing Services by City and Business Size
                </h2>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="px-6 py-4 text-left font-bold text-foreground">City</th>
                      <th className="px-6 py-4 text-left font-bold text-foreground">Small Businesses</th>
                      <th className="px-6 py-4 text-left font-bold text-foreground">Medium Businesses</th>
                      <th className="px-6 py-4 text-left font-bold text-foreground">Large Businesses</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        city: "San Francisco",
                        small: "Local SEO, Reputation Management, Social Media Ads",
                        medium: "AI Marketing Systems, PPC, Content Marketing",
                        large: "Comprehensive AI Integration, Advanced Analytics, Multi-Channel Campaigns",
                      },
                      {
                        city: "San Jose",
                        small: "Google My Business Optimization, Local SEO, Review Management",
                        medium: "AI-Powered Email Marketing, PPC, SEO",
                        large: "Full-Scale Digital Transformation, Predictive Analytics, Programmatic Advertising",
                      },
                      {
                        city: "Oakland",
                        small: "Local SEO, Social Media Engagement, Reputation Management",
                        medium: "AI Content Creation, PPC, Localized Campaigns",
                        large: "Integrated AI Systems, Omnichannel Marketing, Data-Driven Strategies",
                      },
                      {
                        city: "Fremont",
                        small: "Local SEO, Review Solicitation, Community Outreach",
                        medium: "AI Marketing Tools, PPC, Content Marketing",
                        large: "Advanced AI Analytics, Cross-Platform Campaigns, Custom Solutions",
                      },
                    ].map((row, i) => (
                      <tr key={row.city} className={i % 2 === 0 ? "bg-card" : "bg-card/50"}>
                        <td className="px-6 py-4 font-semibold text-foreground">{row.city}</td>
                        <td className="px-6 py-4 text-muted-foreground text-sm">{row.small}</td>
                        <td className="px-6 py-4 text-muted-foreground text-sm">{row.medium}</td>
                        <td className="px-6 py-4 text-muted-foreground text-sm">{row.large}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Points */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="service-badge mb-4">
                  <TrendingUp className="w-4 h-4" />
                  <span>Proof Points</span>
                </div>
                <h2 className="section-title bg-gradient-heading bg-clip-text text-transparent">
                  Case Studies and Proof Points Demonstrating Success in the Bay Area
                </h2>
                <p className="section-description mt-4">
                  Real-world examples illustrate the impact of targeted digital marketing strategies executed by GrowSmallBiz Digital Marketing:
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "HVAC & Plumbing Company (Concord)",
                    result: "40% increase in lead generation and 30% increase in lead conversions within three months",
                    detail: "Implemented AI SEO & Local SEO, Google LSA & PPC ads, Speed 2 Lead with AI Receptionist",
                  },
                  {
                    title: "Dental Practice (Dublin)",
                    result: "30% increase in new patient appointments",
                    detail: "Enhanced local SEO over six months, Facebook Retargeting ads confirmed by appointment tracking software.",
                  },
                  {
                    title: "Restaurant (San Ramon)",
                    result: "25% increase in return customers during off-peak hours",
                    detail: "Used Restaurant Loyalty Booster System as measured by POS",
                  },
                  {
                    title: "Real Estate Agency (Pleasanton)",
                    result: "30% boost in appointment booking with buyers & sellers",
                    detail: "Implemented Speed 2 Lead AI Receptionist & Website AI Live Chat for appointment booking and Referral Tracking System in CRM",
                  },
                  {
                    title: "Photography Studio (Walnut Creek)",
                    result: "35% increase in bookings in 90 days",
                    detail: "Applied local SEO strategies, and Marketing Automation System to Capture, Nurture and Close validated by Google GSC, Google Analytics and client booking systems",
                  },
                  {
                    title: "San Jose Restaurant Client (Danville)",
                    result: "43% increase in organic traffic in 90 days",
                    detail: "Targeted local SEO, AI-Powered Reputation Management, and Facebook & Instagram ads content marketing, as reported in Google Analytics.",
                  },
                  {
                    title: "Cleaning Service Company (Livermore)",
                    result: "50% increase in lead generation within six months",
                    detail: "Implemented AI SEO & Local SEO, Google PPC, Speed 2 Lead with AI Receptionist & Review Management",
                  },
                ].map((cs) => (
                  <div
                    key={cs.title}
                    className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <h3 className="font-bold text-foreground mb-2">{cs.title}</h3>
                    <p className="text-primary font-semibold mb-2">{cs.result}</p>
                    <p className="text-muted-foreground text-sm">{cs.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section B: Why Trust Us */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="service-badge mb-4">
                  <Shield className="w-4 h-4" />
                  <span>Why Trust Us</span>
                </div>
                <h2 className="section-title bg-gradient-heading bg-clip-text text-transparent">
                  Why Businesses Trust GrowSmallBiz
                </h2>
              </div>
              <div className="p-8 rounded-2xl bg-card border border-primary/30 shadow-[0_0_40px_rgba(255,127,80,0.1)]">
                <p className="text-foreground/90 leading-relaxed text-lg mb-6">
                  GrowSmallBiz is founder-led by Subrata Guha, whose background includes enterprise business system solutions across Sales, Marketing, and Supply Chain operations. That experience shapes a practical, systems-driven approach to marketing — helping small and mid-sized businesses connect visibility, lead capture, follow-up, and conversion instead of relying on disconnected tactics. Supported by platform-certified virtual assistants and grounded in Bay Area business understanding, GrowSmallBiz focuses on clear execution, stronger follow-through, and measurable business outcomes.
                </p>
                <p className="text-foreground/90 leading-relaxed text-lg">
                  GrowSmallBiz is also connected to the local business community through membership in the{" "}
                  <a href="https://danvilleareachamber.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Danville Area Chamber</a>,{" "}
                  <a href="https://sanramon.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">San Ramon Chamber of Commerce</a>, and{" "}
                  <a href="https://www.walnut-creek.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Walnut Creek Chamber of Commerce</a>, reinforcing our commitment to the Bay Area markets and service businesses we support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQSection
          title="Frequently Asked Questions About Bay Area Digital Marketing"
          faqs={faqs.map(f => ({
            question: f.question,
            answer: f.answer,
          }))}
          schemaType="FAQPage"
          contactCTA={{
            ...baseContactCTA,
            title: "Have questions about Bay Area marketing?",
            description: "We're here to help you find the right strategy for your local market.",
            tagline: "Let's grow your business together.",
          }}
        />

        {/* Final CTA */}
        <section id="final-cta" className="py-24" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <p className="text-primary font-medium mb-4">THE NEXT STEP</p>
              <h2 className="section-title bg-gradient-heading bg-clip-text text-transparent">
                Unlock Your Bay Area Business's Digital Potential
              </h2>
              <p className="section-description mt-4 mb-6">
                GrowSmallBiz Digital Marketing offers a Free Marketing Assessment tailored to Bay Area businesses. This assessment provides personalized insights into your current marketing strategies and identifies opportunities for growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {[
                {
                  num: "1",
                  title: "Personalized Insights",
                  desc: "Receive recommendations based on your unique business needs and local market conditions.",
                },
                {
                  num: "2",
                  title: "Expert Guidance",
                  desc: "Collaborate with marketing professionals experienced in Bay Area industries and trends.",
                },
                {
                  num: "3",
                  title: "Actionable Strategies",
                  desc: "Implement practical steps to enhance your online presence and customer engagement immediately.",
                },
              ].map((item) => (
                <div key={item.num} className="p-6 rounded-2xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">{item.num}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-center">{item.title}</h3>
                  <p className="text-muted-foreground text-sm text-center">{item.desc}</p>
                </div>
              ))}
            </div>

            <CardCTA
              title="Ready to Grow Your Bay Area Business?"
              description="Take the first step toward optimizing your digital marketing strategy and achieving your business goals in 2025 and beyond."
              buttonText="Schedule Strategy Call"
              buttonHref={PRIMARY_CTA_URL}
              sectionClassName="pt-0 pb-0"
            />

            <div className="text-center mt-12 text-sm text-muted-foreground space-y-1 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <p>GrowSmallBiz Digital Marketing — Danville, CA — Serving Local Service Businesses Nationwide</p>
              <p>The Digital Dominance Method: Website. SEO. Ads. Reputation. Automation. AI.</p>
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <ConsultationFormSection />
      </main>

      <Footer />
    </div>
  );
};

export default LocationsWeServe;
