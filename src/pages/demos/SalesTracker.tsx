import { DemoVideoPage } from "@/components/services/DemoVideoPage";

export default function SalesTrackerDemo() {
  return (
    <DemoVideoPage
      title="Sales Tracker"
      subtitle="Track your sales pipeline and opportunities with real-time insights and dashboards."
      videoUrl="https://storage.googleapis.com/msgsndr/SwP9BuV0qUOPa58lqK1y/media/649b45f974a73015f562f32f.mp4"
      metaDescription="See how GrowSmallBiz Sales Tracker helps you monitor deals, pipelines, and revenue in real time."
      introParagraph="Visualize your entire sales pipeline and track every opportunity from lead to close. Get real-time insights into deal values, stages, and team performance."
      features={[
        { title: "Pipeline Management", description: "Drag and drop deals through custom pipeline stages to track progress visually." },
        { title: "Deal Tracking", description: "Monitor deal values, expected close dates, and win probabilities at a glance." },
        { title: "Performance Insights", description: "Get real-time dashboards showing revenue, conversion rates, and sales velocity." },
      ]}
    />
  );
}
