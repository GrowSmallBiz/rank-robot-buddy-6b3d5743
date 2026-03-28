import { SectionHeader } from "@/components/services/SectionHeader";

const integrationLogos = [
  { name: "Google", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", showName: false },
  { name: "Facebook", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg", showName: false },
  { name: "Slack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg", showName: false },
  { name: "LinkedIn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg", showName: false },
  { name: "Twitter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg", showName: false },
  { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", showName: false },
  { name: "Salesforce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg", showName: false },
  { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify", showName: false },
  { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe", showName: false },
  { name: "PayPal", logo: "https://cdn.simpleicons.org/paypal", showName: false },
  { name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot", showName: false },
  { name: "Zapier", logo: "https://cdn.simpleicons.org/zapier", showName: false },
  { name: "Mailchimp", logo: "https://cdn.simpleicons.org/mailchimp", showName: false },
  { name: "Twilio", logo: "https://cdn.simpleicons.org/twilio", showName: false },
  { name: "Calendly", logo: "https://cdn.simpleicons.org/calendly", showName: false },
  { name: "Zoom", logo: "https://cdn.simpleicons.org/zoom", showName: false },
  { name: "YouTube", logo: "https://cdn.simpleicons.org/youtube", showName: false },
  { name: "WhatsApp", logo: "https://cdn.simpleicons.org/whatsapp", showName: false },
  { name: "TikTok", logo: "https://cdn.simpleicons.org/tiktok", showName: false },
  { name: "Instagram", logo: "https://cdn.simpleicons.org/instagram", showName: false },
  { name: "Telegram", logo: "https://cdn.simpleicons.org/telegram", showName: false },
  { name: "QuickBooks", logo: "https://cdn.simpleicons.org/quickbooks", showName: true },
  { name: "ActiveCampaign", logo: "https://cdn.simpleicons.org/activecampaign", showName: true },
  { name: "Webflow", logo: "https://cdn.simpleicons.org/webflow", showName: true },
];

export const IntegrationsSection = () => {
  const doubledLogos = [...integrationLogos, ...integrationLogos];

  return (
    <section className="py-8 my-0 overflow-hidden bg-white">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Easily Integrates With<br />
            <span className="text-primary italic">100+ Leading Apps</span>
          </h2>
        </div>
      </div>

      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="bg-white py-5">
          <div className="flex animate-marquee gap-10 items-center">
            {doubledLogos.map((app, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center gap-2"
              >
                <img
                  src={app.logo}
                  alt={app.name}
                  className="w-10 h-10 object-contain"
                />
                {app.showName && (
                  <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                    {app.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
