import subrataHeadshot from "@/assets/subrata-guha-headshot.jpg";

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
  buttonText: "Book A Meeting",
  buttonHref: "/contact",
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
