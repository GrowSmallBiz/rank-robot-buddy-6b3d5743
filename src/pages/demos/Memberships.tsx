import { DemoVideoPage } from "@/components/services/DemoVideoPage";

export default function MembershipsDemo() {
  return (
    <DemoVideoPage
      title="Memberships"
      subtitle="Create and manage membership sites, courses, and gated content for your customers."
      sourceUrl="https://lp.growsmallbiz.io/membership"
      metaDescription="See how GrowSmallBiz Memberships lets you create courses and membership sites effortlessly."
      introParagraph="Build membership sites and online courses that generate recurring revenue. Gate your best content behind membership tiers and deliver value to your community."
      features={[
        { title: "Course Builder", description: "Create structured courses with modules, lessons, videos, and downloadable resources." },
        { title: "Membership Tiers", description: "Set up multiple membership levels with different access and pricing." },
        { title: "Drip Content", description: "Release content on a schedule to keep members engaged and coming back." },
      ]}
    />
  );
}
