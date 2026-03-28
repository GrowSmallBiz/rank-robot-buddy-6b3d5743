import { DemoVideoPage } from "@/components/services/DemoVideoPage";

export default function SocialMediaPlannerDemo() {
  return (
    <DemoVideoPage
      title="Social Media Planner"
      subtitle="Plan, schedule, and auto-post content across all your social media channels."
      videoUrl="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697d2002ec939081dee944.mp4"
      metaDescription="See how GrowSmallBiz Social Media Planner helps you schedule and manage social content effortlessly."
      introParagraph="Manage all your social media from one dashboard. Plan content calendars, schedule posts, and analyze performance across Facebook, Instagram, Google Business, and more."
      features={[
        { title: "Content Calendar", description: "Plan and visualize your social media content across all platforms in one calendar view." },
        { title: "Auto-Publishing", description: "Schedule posts in advance and let the system publish them automatically at the best times." },
        { title: "Multi-Platform", description: "Post to Facebook, Instagram, Google Business Profile, LinkedIn, and more from one place." },
      ]}
    />
  );
}
