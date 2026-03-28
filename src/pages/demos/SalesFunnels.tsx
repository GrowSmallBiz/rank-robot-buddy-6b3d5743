import { DemoVideoPage } from "@/components/services/DemoVideoPage";

export default function SalesFunnelsDemo() {
  return (
    <DemoVideoPage
      title="Sales Funnels"
      subtitle="Build high-converting sales funnels with smart, auto-generated layouts."
      videoUrl="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697bd00f8a085fea630af5.mp4"
      metaDescription="See how GrowSmallBiz Sales Funnels help you build high-converting funnels to close more deals."
      introParagraph="Create multi-step sales funnels that guide prospects from awareness to purchase. Our funnel builder makes it easy to design landing pages, order forms, and upsell sequences."
      features={[
        { title: "Funnel Templates", description: "Start with proven templates for lead gen, webinars, product launches, and more." },
        { title: "A/B Testing", description: "Test different headlines, images, and offers to maximize your conversion rates." },
        { title: "Order Forms & Upsells", description: "Add order forms, one-click upsells, and downsells to maximize revenue per customer." },
      ]}
    />
  );
}
