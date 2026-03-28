import { DemoVideoPage } from "@/components/services/DemoVideoPage";

export default function WorkflowAutomationsDemo() {
  return (
    <DemoVideoPage
      title="Workflow Automations"
      subtitle="Simplify your business by automating tasks with intelligent, self-optimizing workflows."
      videoUrl="https://storage.googleapis.com/msgsndr/4KL47iKeJZ2Ee05j7FBh/media/69697d43ed7c36cfd35fffd0.mp4"
      metaDescription="See how GrowSmallBiz Workflow Automations simplify your business by automating repetitive tasks."
      introParagraph="Automate your entire customer journey from lead capture to close. Set up triggers, actions, and conditions that run your business on autopilot 24/7."
      features={[
        { title: "Visual Workflow Builder", description: "Drag and drop to create powerful automations without any coding required." },
        { title: "Smart Triggers", description: "Automatically trigger workflows based on form submissions, appointments, tags, and more." },
        { title: "Multi-Step Sequences", description: "Build complex sequences with SMS, email, calls, wait steps, and conditional logic." },
      ]}
    />
  );
}
