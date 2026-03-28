import { SectionHeader } from "@/components/services/SectionHeader";

const integrationLogos = [
  { name: "Google", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg" },
  { name: "Facebook", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" },
  { name: "Instagram", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" },
  { name: "Stripe", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stripe.svg" },
  { name: "Slack", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/slack.svg" },
  { name: "Shopify", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/shopify.svg" },
  { name: "HubSpot", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hubspot.svg" },
  { name: "Zapier", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zapier.svg" },
  { name: "Mailchimp", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mailchimp.svg" },
  { name: "Salesforce", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/salesforce.svg" },
  { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/wordpress.svg" },
  { name: "TikTok", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg" },
  { name: "LinkedIn", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" },
  { name: "YouTube", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" },
  { name: "Twilio", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twilio.svg" },
  { name: "Calendly", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/calendly.svg" },
  { name: "Zoom", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zoom.svg" },
  { name: "PayPal", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/paypal.svg" },
  { name: "QuickBooks", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/quickbooks.svg" },
  { name: "WhatsApp", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" },
];

export const IntegrationsSection = () => {
  // Double the logos for seamless infinite scroll
  const doubledLogos = [...integrationLogos, ...integrationLogos];

  return (
    <section className="section-padding overflow-hidden" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
      <div className="container mx-auto px-4 mb-10">
        <SectionHeader
          title="Easily Integrates With"
          titleHighlight="100+ Leading Apps"
        />
      </div>

      {/* Scrolling marquee strip */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[hsl(var(--ghl-section-bg))] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[hsl(var(--ghl-section-bg))] to-transparent pointer-events-none" />

        <div className="flex animate-marquee gap-12 items-center py-6">
          {doubledLogos.map((app, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center gap-3 bg-card/40 border border-white/10 rounded-xl px-6 py-4 hover:border-primary/40 transition-colors"
            >
              <img
                src={app.logo}
                alt={app.name}
                className="w-8 h-8 invert opacity-80"
              />
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                {app.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
