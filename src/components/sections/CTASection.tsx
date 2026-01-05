import { PersonCTA } from "@/components/services";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  sectionClassName?: string;
}

export const CTASection = ({
  title = "Ready to Grow Your Business?",
  description = "Get a comprehensive AI-powered audit and discover untapped opportunities to grow your business. No obligations, just actionable insights.",
  buttonText,
  buttonHref,
  sectionClassName = "py-12",
}: CTASectionProps) => {
  return (
    <PersonCTA
      title={title}
      description={description}
      buttonText={buttonText}
      buttonHref={buttonHref}
      sectionClassName={sectionClassName}
    />
  );
};
