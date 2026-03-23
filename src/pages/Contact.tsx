import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Bot
} from "lucide-react";
import { PageJsonLd } from "@/components/seo/PageJsonLd";

const Contact = () => {
  const [showIframe, setShowIframe] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowIframe(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us | GrowSmallBiz Digital Marketing</title>
        <meta name="description" content="Get in touch with GrowSmallBiz for a free consultation. Let us help your local service business grow with AI-powered marketing and SEO strategies." />
      </Helmet>
      <PageJsonLd
        pageType="ContactPage"
        name="Contact GrowSmallBiz Digital Marketing"
        description="Get in touch for a free marketing assessment."
        url="/contact"
        breadcrumbs={[{ name: "Contact", url: "/contact" }]}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <MessageSquare className="w-4 h-4" />
                Get In Touch
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100">
              Let's <span className="text-gradient">Grow Together</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up delay-200">
              Ready to dominate local search? Get in touch for a free consultation 
              and learn how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16" style={{ backgroundColor: '#2d465c' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* GHL Contact Form */}
            <div className="lg:col-span-3" ref={formRef}>
              <div 
                className="relative rounded-2xl p-8 animate-fade-up shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]"
                style={{ backgroundColor: '#191321', border: '2px solid #17a2b8' }}
              >
                <h2 className="text-2xl font-display font-bold text-white mb-6">
                  Send Us a Message
                </h2>

                {showIframe ? (
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/8qUn6xE0v2Jwcs63q0uV"
                    style={{ width: "100%", height: "1100px", border: "none", borderRadius: "0px" }}
                    id="contact-inline-8qUn6xE0v2Jwcs63q0uV"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="GrowSmallBiz Website Contact"
                    data-height="1126"
                    data-layout-iframe-id="contact-inline-8qUn6xE0v2Jwcs63q0uV"
                    data-form-id="8qUn6xE0v2Jwcs63q0uV"
                    title="GrowSmallBiz Website Contact"
                    loading="lazy"
                  />
                ) : (
                  <div style={{ width: "100%", height: "1100px" }} className="flex items-center justify-center">
                    <p className="text-white/50">Loading form...</p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div 
                className="rounded-2xl p-6 animate-fade-up shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]" 
                style={{ animationDelay: "0.1s", backgroundColor: '#191321', border: '2px solid #17a2b8' }}
              >
                <h3 className="text-lg font-display font-semibold text-white mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Email</p>
                      <a href="mailto:contact@growsmallbiz.io" className="text-white hover:text-primary transition-colors">
                        contact@growsmallbiz.io
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Phone</p>
                      <a href="tel:+19258863724" className="text-white hover:text-primary transition-colors">
                        +1 (925) 886-3724
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Office</p>
                      <p className="text-white">
                        52 Antelope CT.<br />
                        Danville, CA-94506<br />
                        <span className="text-white/60 text-sm">(By Appointment Only)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div 
                className="rounded-2xl p-6 animate-fade-up shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]" 
                style={{ animationDelay: "0.2s", backgroundColor: '#191321', border: '2px solid #17a2b8' }}
              >
                <h3 className="text-lg font-display font-semibold text-white mb-2">
                  Quick Response Guarantee
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  Our AI Assistant will respond to your inquiry within 3–5 minutes.
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  <Bot className="w-4 h-4" />
                  AI-powered instant response
                </div>
              </div>

              {/* Free Assessment CTA */}
              <div 
                className="rounded-2xl p-6 animate-fade-up shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]" 
                style={{ animationDelay: "0.3s", backgroundColor: '#191321', border: '2px solid #17a2b8' }}
              >
                <h3 className="text-lg font-display font-semibold text-white mb-2">
                  Prefer a Free Assessment?
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  Get a comprehensive SEO audit and growth strategy for your business 
                  at no cost.
                </p>
                <Button className="w-full group rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90" asChild>
                  <a href="https://lp.growsmallbiz.io/digital-growth-strategy-session?utm_source=website&utm_medium=contact-from&utm_campaign=seo-audit-offer" target="_blank" rel="noopener noreferrer">
                    Get Free Assessment
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
