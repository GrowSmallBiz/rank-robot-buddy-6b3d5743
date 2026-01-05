import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import linkedinHeroBg from "@/assets/linkedin-outreach-hero.jpg";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/sections/FAQSection";
import { BlogSection, generalBlogPosts } from "@/components/sections/BlogSection";
import { PersonCTA } from "@/components/services";
import { baseContactCTA } from "@/config/contactCTA";
import {
  ServiceHero,
  SectionHeader,
  FeatureCard,
} from "@/components/services";
import {
  Target,
  MessageSquare,
  Calendar,
  Users,
  CheckCircle,
  ArrowRight,
  Bot,
  Search,
  Repeat,
  BarChart3,
  Building2,
  Wrench,
  Stethoscope,
  Scale,
  Briefcase,
  Laptop,
  Send,
  Clock,
  Linkedin,
} from "lucide-react";

const LinkedInOutreach = () => {
  const painPoints = [
    {
      icon: Target,
      title: "Weak Targeting",
      description: "Reaching the wrong people or casting too wide a net wastes time and money.",
    },
    {
      icon: MessageSquare,
      title: "Generic Messaging",
      description: "Copy-paste templates get ignored. Prospects can spot automation from a mile away.",
    },
    {
      icon: Calendar,
      title: "No Conversion Path",
      description: "Getting connections and conversations but no clear next step to book calls.",
    },
    {
      icon: BarChart3,
      title: "No Benchmarks",
      description: "Flying blind without metrics means you can't improve or scale what works.",
    },
  ];

  const differentiators = [
    {
      icon: Users,
      title: "Done-With-You, Not DIY",
      description: "We don't just give you a course and wish you luck. We build and execute the strategy with you.",
    },
    {
      icon: Bot,
      title: "AI-Assisted, Human-Reviewed",
      description: "Technology handles research and drafting. Humans ensure every message sounds authentic and strategic.",
    },
    {
      icon: Target,
      title: "Conversion-Focused",
      description: "The goal isn't connections—it's consultations that turn into clients. Every step is designed for that outcome.",
    },
    {
      icon: CheckCircle,
      title: "Proven Playbook",
      description: "We've refined this system across dozens of industries. You get a strategy that's already working, not an experiment.",
    },
  ];

  const journeySteps = [
    {
      icon: Search,
      title: "Precision Targeting",
      description: "We identify and reach decision-makers in your ideal customer profile using advanced LinkedIn search and AI-powered filtering.",
      step: "01",
    },
    {
      icon: MessageSquare,
      title: "Conversation-First Outreach",
      description: "No generic templates. Every message is personalized, relevant, and designed to start meaningful conversations.",
      step: "02",
    },
    {
      icon: Calendar,
      title: "Consultation Call Conversion",
      description: "We guide prospects through a natural progression from connection to conversation to consultation.",
      step: "03",
    },
    {
      icon: Clock,
      title: "Long-Term Nurture",
      description: "Not ready now doesn't mean not ready ever. We keep warm relationships alive with value-first content.",
      step: "04",
    },
    {
      icon: Repeat,
      title: "Conversion & Re-Engagement",
      description: "Track results, optimize messaging, and re-engage past connections when timing is right.",
      step: "05",
    },
  ];

  const targetAudiences = [
    {
      icon: Wrench,
      title: "Home Services",
      industries: ["HVAC", "Plumbing", "Roofing", "Landscaping"],
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      industries: ["Private Practices", "Clinics", "Wellness Centers"],
    },
    {
      icon: Scale,
      title: "Legal Services",
      industries: ["Law Firms", "Estate Planning", "Business Law"],
    },
    {
      icon: Briefcase,
      title: "B2B Services",
      industries: ["Consulting", "Marketing", "Financial Services"],
    },
    {
      icon: Building2,
      title: "Professional Services",
      industries: ["Accounting", "Engineering", "Architecture"],
    },
    {
      icon: Laptop,
      title: "Technology & SaaS",
      industries: ["Software", "IT Services", "Tech Consulting"],
    },
  ];

  const faqs = [
    {
      question: "Is this safe for my LinkedIn account?",
      answer: "Yes. Outreach is executed conservatively and designed to align with commonly accepted LinkedIn usage thresholds.",
    },
    {
      question: "Do you use bots, scraping, or credential sharing?",
      answer: "No. We do not scrape LinkedIn, share credentials, or use prohibited automation methods.",
    },
    {
      question: "Where do the 100 complimentary leads come from?",
      answer: "They are identified using our white-label Lead Finder tool and used for strategy and planning only. They are not scraped from LinkedIn.",
    },
    {
      question: "Are results guaranteed?",
      answer: "No. Results vary by industry, offer, messaging, and market conditions.",
    },
    {
      question: "Do I need LinkedIn Sales Navigator?",
      answer: "Yes. Sales Navigator is required for compliant targeting and execution.",
    },
    {
      question: "Can I pause or adjust outreach?",
      answer: "Yes. Because this is Done-With-You, we can adjust targeting and messaging based on your capacity and goals.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>LinkedIn Outreach Automation | Done-With-You B2B Lead Generation | GrowSmallBiz</title>
        <meta
          name="description"
          content="Transform your LinkedIn prospecting with our Done-With-You outreach system. AI-assisted targeting, personalized messaging, and conversion-focused strategies to book more consultations."
        />
        <meta name="keywords" content="LinkedIn outreach, B2B lead generation, LinkedIn automation, sales prospecting, LinkedIn marketing, done with you LinkedIn" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <ServiceHero
          badge={{ icon: Linkedin, text: "LinkedIn Outreach Automation" }}
          title="A Done-With-You"
          titleHighlight="LinkedIn Outreach System"
          subtitle="One conversation can change your business. The right connections make it repeatable."
          primaryCTA={{ label: "Get Started Now", href: "#contact" }}
          secondaryCTA={{ label: "Book A Demo", href: "/free-assessment" }}
          backgroundImage={linkedinHeroBg}
        />

        {/* Pain Points Section */}
        <section className="section-dark py-24">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="The Problem"
              title="Why LinkedIn Prospecting Breaks Down"
              titleHighlight="for Most Businesses"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="feature-card group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="icon-container bg-destructive/20 text-destructive mb-6">
                    <point.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different Section */}
        <section className="section-card py-24">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Our Approach"
              title="What Makes the GrowSmallBiz LinkedIn"
              titleHighlight="Prospecting Engine Different"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentiators.map((item, index) => (
                <FeatureCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  variant="default"
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* The Complete Growth Journey */}
        <section className="section-dark py-24">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="The Process"
              title="The Complete"
              titleHighlight="Growth Journey"
            />

            <div className="relative">
              {/* Journey Timeline */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50" />
              
              <div className="space-y-12">
                {journeySteps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                      <div
                        className="feature-card inline-block w-full max-w-md"
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="icon-container-lg bg-primary/20 text-primary">
                            <step.icon className="w-8 h-8" />
                          </div>
                          <span className="text-5xl font-bold text-primary/30 font-display">
                            {step.step}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Center dot */}
                    <div className="hidden lg:flex w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/30 z-10" />
                    
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-16">
              <Button variant="hero" size="lg" asChild>
                <Link to="/free-assessment">
                  Schedule Your Strategy Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Who This System Is For */}
        <section className="section-card py-24">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Target Audience"
              title="Who This System"
              titleHighlight="Is For"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {targetAudiences.map((audience, index) => (
                <div
                  key={index}
                  className="feature-card group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="icon-container bg-primary/20 text-primary mb-6">
                    <audience.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{audience.title}</h3>
                  <ul className="space-y-2">
                    {audience.industries.map((industry, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {industry}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="section-dark py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeader
                subtitle="Get Started"
                title="Ready to See If LinkedIn Outreach"
                titleHighlight="Makes Financial Sense for Your Business?"
                description="Fill out the LinkedIn Growth Strategy Form. We'll analyze your market, discuss your goals, and show you exactly how this system can work for your business."
              />

              <div className="feature-card max-w-xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="icon-container-lg bg-primary/20 text-primary">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Get Your Complimentary ICP-Aligned Lead List
                  </h3>
                </div>
                <p className="text-muted-foreground mb-8">
                  We'll provide you with 100 targeted leads matching your ideal customer profile, 
                  completely free, to demonstrate the power of precision targeting.
                </p>
                <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                  <Link to="/free-assessment">
                    Claim Your Free Lead List
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          faqs={faqs}
          contactCTA={{
            ...baseContactCTA,
            title: "Have more questions about LinkedIn Outreach?",
            description: "We're here to help! Reach out to us for a personalized consultation.",
            tagline: "Let's generate B2B leads together.",
          }}
        />

        {/* Blog Section */}
        <BlogSection
          posts={generalBlogPosts.slice(0, 3)}
          title="B2B Lead Generation Insights"
          subtitle="Expert strategies for LinkedIn prospecting and outreach"
          showViewAll={true}
          viewAllLink="/blog"
        />

        {/* CTA Section */}
        <PersonCTA
          title="Ready to Fill Your Pipeline with Qualified Leads?"
          description="Get your complimentary ICP-aligned lead list and see how our Done-With-You LinkedIn system can transform your B2B prospecting."
          sectionClassName="py-12 bg-section-dark"
        />

        {/* Disclaimer */}
        <section className="bg-background py-12 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Disclaimer:</strong> GrowSmallBiz is not affiliated with, endorsed by, or partnered with LinkedIn Corporation. 
                LinkedIn® and LinkedIn Sales Navigator® are registered trademarks of LinkedIn Corporation. 
                Metrics shown represent typical engagement ranges observed across campaigns. 
                Results vary and are not guaranteed. Clients are responsible for maintaining compliance with LinkedIn's Terms of Service.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LinkedInOutreach;
