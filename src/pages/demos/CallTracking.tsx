import { DemoVideoPage } from "@/components/services/DemoVideoPage";

export default function CallTrackingDemo() {
  return (
    <DemoVideoPage
      title="Call Tracking"
      subtitle="Track every call, record conversations, and attribute leads to their source."
      videoUrl="https://storage.googleapis.com/msgsndr/SwP9BuV0qUOPa58lqK1y/media/649b4a9fc681295ac4876614.mp4"
      metaDescription="See how GrowSmallBiz Call Tracking helps you monitor calls, record conversations, and track lead sources."
      introParagraph="Know exactly where your phone leads come from. Track, record, and analyze every call to optimize your marketing spend and improve your team's performance."
      features={[
        { title: "Call Attribution", description: "Assign unique tracking numbers to campaigns and know exactly which ads drive calls." },
        { title: "Call Recording", description: "Record and review calls for quality assurance, training, and dispute resolution." },
        { title: "Real-Time Analytics", description: "Track call volume, duration, missed calls, and source attribution in real time." },
      ]}
    />
  );
}
