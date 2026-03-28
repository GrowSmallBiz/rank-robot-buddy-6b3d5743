import { DemoVideoPage } from "@/components/services/DemoVideoPage";

export default function GenerateLeadsDemo() {
  return (
    <DemoVideoPage
      title="Generate Leads Live"
      subtitle="Find and capture leads in real time with smart prospecting tools."
      sourceUrl="https://lp.growsmallbiz.io/generate-lead"
      metaDescription="See how GrowSmallBiz Generate Leads Live helps you find and capture leads in real time."
      introParagraph="Discover and capture new leads with smart prospecting tools. Find potential customers based on location, industry, and business type — and reach out automatically."
      features={[
        { title: "Lead Discovery", description: "Search for potential customers by location, industry, keywords, and more." },
        { title: "Contact Enrichment", description: "Get phone numbers, emails, and business details for your prospects automatically." },
        { title: "Auto-Outreach", description: "Send personalized outreach sequences to new leads directly from the platform." },
      ]}
    />
  );
}
