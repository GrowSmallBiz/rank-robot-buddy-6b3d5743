import { DemoVideoPage } from "@/components/services/DemoVideoPage";

export default function UniversalInboxDemo() {
  return (
    <DemoVideoPage
      title="Universal Inbox"
      subtitle="Bring all communication from all channels into one universal inbox — SMS, Email, Social Media, Webchat & Recorded Calls."
      videoUrl="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697cdbbd180f262a3725d9.mp4"
      metaDescription="See how GrowSmallBiz Universal Inbox consolidates SMS, email, social media, webchat and calls into one place."
      introParagraph="No more going to multiple websites or checking multiple devices just to get your messages. Communicate with your customers and prospects from one inbox, regardless if they are communicating via Email, Phone, SMS, Facebook Messenger, Facebook or Instagram Comments, Google Business, and Instagram DM."
      features={[
        { title: "Every Message In One Place", description: "Connect with leads and customers through texting, live chat, bulk messaging, Google Business Profile, and Facebook messages." },
        { title: "Be Channel-Agnostic", description: "No matter where the conversation started, you can keep it organized in one centralized inbox." },
        { title: "Chat With Context", description: "See the history of every conversation and interaction. Pick up the conversation seamlessly right inside the contact record." },
      ]}
    />
  );
}
