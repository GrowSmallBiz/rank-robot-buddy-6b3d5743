import { DemoVideoPage } from "@/components/services/DemoVideoPage";

export default function WebchatDemo() {
  return (
    <DemoVideoPage
      title="Webchat"
      subtitle="Engage website visitors instantly with live chat and AI-powered chatbot responses."
      videoUrl="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697cdbbd180f262a3725d9.mp4"
      metaDescription="See how GrowSmallBiz Webchat converts website visitors into leads with live chat and AI chatbots."
      introParagraph="Convert website visitors into leads with live chat and AI-powered chatbots. Engage visitors immediately and capture their contact information before they leave."
      features={[
        { title: "Live Chat", description: "Chat with website visitors in real time from your dashboard or mobile app." },
        { title: "AI Chatbot", description: "Auto-respond to common questions with AI-powered chatbot responses 24/7." },
        { title: "Lead Capture", description: "Automatically capture visitor information and route them into your CRM and automations." },
      ]}
    />
  );
}
