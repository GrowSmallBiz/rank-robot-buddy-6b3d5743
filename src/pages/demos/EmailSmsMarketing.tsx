import { DemoVideoPage } from "@/components/services/DemoVideoPage";

export default function EmailSmsMarketingDemo() {
  return (
    <DemoVideoPage
      title="Email & SMS Marketing"
      subtitle="Reach your audience with powerful email and SMS marketing campaigns that convert."
      videoUrl="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697c5302ec935366dea37a.mp4"
      metaDescription="See how GrowSmallBiz Email & SMS Marketing helps you engage leads with automated campaigns."
      introParagraph="Send targeted email and SMS campaigns that drive engagement and sales. Segment your audience, personalize your messages, and track results in real time."
      features={[
        { title: "Smart Campaigns", description: "Create targeted email and SMS campaigns with advanced segmentation and personalization." },
        { title: "Template Library", description: "Choose from professionally designed templates or create your own with our drag-and-drop editor." },
        { title: "Analytics & Tracking", description: "Monitor open rates, click rates, and conversions to optimize your messaging strategy." },
      ]}
    />
  );
}
