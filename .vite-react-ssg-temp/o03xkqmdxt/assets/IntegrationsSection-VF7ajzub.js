import { j as jsxDEV } from "../main.mjs";
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
  { name: "Webflow", logo: "https://cdn.simpleicons.org/webflow", showName: true }
];
const IntegrationsSection = () => {
  const doubledLogos = [...integrationLogos, ...integrationLogos];
  return /* @__PURE__ */ jsxDEV("section", { className: "py-2 !my-0 overflow-hidden bg-white", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 mb-6", children: /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-4", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 bg-gradient-heading bg-clip-text text-transparent", children: "Easily Integrates With 100+ Leading Apps" }, void 0, false, {
      fileName: "/dev-server/src/components/sections/IntegrationsSection.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/sections/IntegrationsSection.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/sections/IntegrationsSection.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "relative w-full", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" }, void 0, false, {
        fileName: "/dev-server/src/components/sections/IntegrationsSection.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" }, void 0, false, {
        fileName: "/dev-server/src/components/sections/IntegrationsSection.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-white py-5", children: /* @__PURE__ */ jsxDEV("div", { className: "flex animate-marquee gap-10 items-center", children: doubledLogos.map((app, index) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "flex-shrink-0 flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: app.logo,
                alt: app.name,
                width: 48,
                height: 48,
                className: "w-10 h-10 object-contain"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/sections/IntegrationsSection.tsx",
                lineNumber: 55,
                columnNumber: 17
              },
              void 0
            ),
            app.showName && /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-semibold text-gray-700 whitespace-nowrap", children: app.name }, void 0, false, {
              fileName: "/dev-server/src/components/sections/IntegrationsSection.tsx",
              lineNumber: 62,
              columnNumber: 19
            }, void 0)
          ]
        },
        index,
        true,
        {
          fileName: "/dev-server/src/components/sections/IntegrationsSection.tsx",
          lineNumber: 51,
          columnNumber: 15
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/components/sections/IntegrationsSection.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/sections/IntegrationsSection.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/sections/IntegrationsSection.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/sections/IntegrationsSection.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, void 0);
};
export {
  IntegrationsSection as I
};
