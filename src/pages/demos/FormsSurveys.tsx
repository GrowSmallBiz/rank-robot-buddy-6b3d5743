import { DemoVideoPage } from "@/components/services/DemoVideoPage";

export default function FormsSurveysDemo() {
  return (
    <DemoVideoPage
      title="Forms & Surveys"
      subtitle="Create custom forms and surveys to capture leads and gather customer feedback."
      sourceUrl="https://lp.growsmallbiz.io/forms-and-survey"
      metaDescription="See how GrowSmallBiz Forms & Surveys help you capture leads and collect valuable customer data."
      introParagraph="Build custom forms and surveys that capture leads and collect valuable data. Embed them anywhere and connect responses directly to your CRM and automations."
      features={[
        { title: "Drag & Drop Builder", description: "Create beautiful forms and surveys with our intuitive visual builder — no coding needed." },
        { title: "Conditional Logic", description: "Show or hide fields based on previous answers to create personalized experiences." },
        { title: "CRM Integration", description: "Automatically route form submissions to your CRM, trigger automations, and notify your team." },
      ]}
    />
  );
}
