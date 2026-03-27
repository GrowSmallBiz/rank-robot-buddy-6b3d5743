import { SectionHeader } from "@/components/services/SectionHeader";

const integrationApps = [
  "Google", "Facebook", "Instagram", "Stripe", "PayPal", "Mailgun",
  "Twilio", "Calendly", "Zoom", "Slack", "WordPress", "Shopify",
  "QuickBooks", "Zapier", "HubSpot", "Salesforce", "Google Sheets",
  "Google Analytics", "TikTok", "LinkedIn", "Twitter", "YouTube",
  "WhatsApp", "Telegram", "Outlook", "Gmail", "Dropbox", "Square",
  "Google My Business", "Yelp", "Yext", "CallRail", "Mailchimp",
  "ActiveCampaign", "Typeform", "Jotform", "Wix", "Webflow",
  "ClickFunnels", "Kajabi",
];

export const IntegrationsSection = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Easily Integrates With"
          titleHighlight="100+ Leading Apps"
        />
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto animate-fade-up">
          {integrationApps.map((app, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors duration-200"
            >
              {app}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
