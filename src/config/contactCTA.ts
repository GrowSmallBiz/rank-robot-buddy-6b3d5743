import subrataHeadshot from "@/assets/subrata-guha-headshot-sm.jpg";

/**
 * Base contact CTA configuration with static fields.
 * Pages should spread this object and override the dynamic fields:
 * - title: Typically "Have more questions about [Service]?"
 * - description: Usually a help message
 * - tagline: A short call-to-action phrase like "Let's [action] together."
 */
export const baseContactCTA = {
  name: "Subrata Guha",
  role: "Founder, GrowSmallBiz",
  buttonText: "Schedule Strategy Call",
  buttonHref: "https://lp.growsmallbiz.io/digital-growth-strategy-session",
  image: subrataHeadshot,
};

/**
 * Helper to create a complete contactCTA object with dynamic fields.
 * 
 * @example
 * createContactCTA({
 *   title: "Have more questions about AI SEO?",
 *   description: "We're here to help!",
 *   tagline: "Let's dominate search with AI together."
 * })
 */
export const createContactCTA = (dynamicFields: {
  title: string;
  description: string;
  tagline: string;
}) => ({
  ...baseContactCTA,
  ...dynamicFields,
});

/**
 * Helper to generate contactCTA for service pages with standard wording.
 * 
 * @example
 * createServiceContactCTA("SEO") 
 * // Returns: { title: "Have more questions about SEO?", description: "We're here to help!", tagline: "Let's grow your business together." }
 * 
 * createServiceContactCTA("AI Receptionist", "Let's automate your front desk together.")
 * // Returns: { title: "Have more questions about AI Receptionist?", description: "We're here to help!", tagline: "Let's automate your front desk together." }
 */
export const createServiceContactCTA = (
  serviceName: string,
  customTagline?: string
) => ({
  ...baseContactCTA,
  title: `Have more questions about ${serviceName}?`,
  description: "We're here to help!",
  tagline: customTagline || "Let's grow your business together.",
});

/**
 * Helper to generate contactCTA for industry pages with standard wording.
 * 
 * @example
 * createIndustryContactCTA("Dental")
 * // Returns: { title: "Have more questions about our Dental solutions?", description: "We're here to help!", tagline: "Let's grow your practice together." }
 */
export const createIndustryContactCTA = (
  industryName: string,
  customTagline?: string
) => ({
  ...baseContactCTA,
  title: `Have more questions about our ${industryName} solutions?`,
  description: "We're here to help!",
  tagline: customTagline || "Let's grow your practice together.",
});
