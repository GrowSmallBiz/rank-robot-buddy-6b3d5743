import { DemoVideoPage } from "@/components/services/DemoVideoPage";

export default function ReviewsDemo() {
  return (
    <DemoVideoPage
      title="Reviews"
      subtitle="Automate review generation and manage your online reputation from one dashboard."
      videoUrl="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697cb20f8a08e4aa6358b3.mp4"
      metaDescription="See how GrowSmallBiz Reviews helps you generate 5-star reviews and manage your online reputation."
      introParagraph="Automatically request reviews from happy customers and manage your online reputation. Monitor and respond to reviews on Google, Facebook, and more from one dashboard."
      features={[
        { title: "Automated Requests", description: "Send review requests via SMS and email at the perfect moment after a job is complete." },
        { title: "Reputation Dashboard", description: "Monitor and respond to reviews across Google, Facebook, and other platforms in one place." },
        { title: "Review Widgets", description: "Showcase your best reviews on your website with customizable review widgets." },
      ]}
    />
  );
}
