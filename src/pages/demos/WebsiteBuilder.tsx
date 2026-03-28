import { DemoVideoPage } from "@/components/services/DemoVideoPage";

export default function WebsiteBuilderDemo() {
  return (
    <DemoVideoPage
      title="Website Builder"
      subtitle="Build beautiful, high-converting websites with our intuitive drag-and-drop builder."
      videoUrl="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697bd00f8a085fea630af5.mp4"
      metaDescription="See how GrowSmallBiz Website Builder lets you create stunning websites without coding."
      introParagraph="Create professional websites that convert visitors into customers. Our drag-and-drop builder makes it easy to design, publish, and optimize your online presence."
      features={[
        { title: "Drag & Drop Editor", description: "Build stunning pages with an intuitive visual editor — no coding needed." },
        { title: "Mobile Responsive", description: "Every page automatically looks great on desktop, tablet, and mobile devices." },
        { title: "Conversion Optimized", description: "Built-in templates and elements designed to maximize lead capture and sales." },
      ]}
    />
  );
}
