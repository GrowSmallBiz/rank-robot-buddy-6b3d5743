import { DemoVideoPage } from "@/components/services/DemoVideoPage";

export default function CrmDemo() {
  return (
    <DemoVideoPage
      title="CRM"
      subtitle="All of your customers and prospects in one place — manage contacts, deals, and relationships."
      videoUrl="https://storage.googleapis.com/msgsndr/SwP9BuV0qUOPa58lqK1y/media/649b4a9fc681291412876613.mp4"
      metaDescription="See how GrowSmallBiz CRM keeps all your customers and prospects organized in one place."
      introParagraph="When you are focused on turning leads into customers, having a powerful CRM is paramount. Using our CRM, you can truly integrate your business with all of your marketing and follow-up."
      features={[
        { title: "Contact Tracking", description: "Keep customer and prospect information at your fingertips, integrated with all your marketing and follow-up." },
        { title: "Smart Lists", description: "Create filtered lists any way you need — from people in a certain area to those who bought specific products." },
        { title: "Fully Customizable", description: "Add custom fields to track anything you need. Warranty dates, anniversaries — you name it." },
      ]}
    />
  );
}
