import { DemoVideoPage } from "@/components/services/DemoVideoPage";

export default function IntegratedPaymentsDemo() {
  return (
    <DemoVideoPage
      title="Integrated Payments"
      subtitle="Accept payments seamlessly with built-in payment processing and invoicing."
      videoUrl="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697c7fc191e6dbb0e427de.mp4"
      metaDescription="See how GrowSmallBiz Integrated Payments streamlines billing, invoicing, and payment collection."
      introParagraph="Collect payments, send invoices, and manage billing all from one platform. Integrated directly with your CRM and automations for a seamless experience."
      features={[
        { title: "One-Click Payments", description: "Accept credit cards, ACH, and digital payments with a simple, secure checkout." },
        { title: "Automated Invoicing", description: "Send professional invoices and set up recurring billing automatically." },
        { title: "Revenue Tracking", description: "Track all transactions, refunds, and revenue in real-time dashboards." },
      ]}
    />
  );
}
