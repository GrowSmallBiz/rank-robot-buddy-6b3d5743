import { DemoVideoPage } from "@/components/services/DemoVideoPage";

export default function CalendarSchedulingDemo() {
  return (
    <DemoVideoPage
      title="Calendar Scheduling"
      subtitle="Smart calendar booking that lets prospects schedule appointments automatically."
      videoUrl="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697c25ed7c362a3f5fa8e9.mp4"
      metaDescription="See how GrowSmallBiz Calendar Scheduling automates appointment booking and reduces no-shows."
      introParagraph="Let your prospects and customers book appointments directly on your calendar. Automated reminders reduce no-shows while keeping your schedule organized."
      features={[
        { title: "Online Booking", description: "Share your booking link and let clients schedule at their convenience — 24/7." },
        { title: "Automated Reminders", description: "Send SMS and email reminders to reduce no-shows and keep appointments on track." },
        { title: "Calendar Sync", description: "Sync with Google Calendar, Outlook, and more to avoid double-booking." },
      ]}
    />
  );
}
