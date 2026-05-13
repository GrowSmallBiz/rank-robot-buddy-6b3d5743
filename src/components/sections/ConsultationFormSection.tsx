import { useMemo, useState, useRef, useEffect } from "react";
import { buildCtaUrl } from "@/lib/utm";

interface ConsultationFormSectionProps {
  iframeHeight?: string;
  iframeBorderRadius?: string;
  /** Optional UTM campaign label for this form */
  utmCampaign?: string;
  /** Optional UTM medium override */
  utmMedium?: string;
  /** Optional override for the H2 heading text */
  headingOverride?: string;
  /** Optional override for the eyebrow text */
  eyebrowOverride?: string;
  /** Optional override for the description text */
  descriptionOverride?: string;
  /** Optional override for the form iframe URL */
  formUrlOverride?: string;
  /** Optional override for the form name (data-form-name & title) */
  formNameOverride?: string;
  /** Optional override for the data-height attribute */
  dataHeightOverride?: string;
  /** Optional className for the section background */
  sectionClassName?: string;
  /** Optional Tailwind gradient classes for the H2 */
  headingGradientClass?: string;
  /** Optional override for the card border color (CSS color) */
  cardBorderColor?: string;
  /** Optional override for the card outer glow shadow class */
  cardGlowClass?: string;
  /** When true, render hero-style radial glow overlays on the section background */
  heroOverlay?: boolean;
}

const BASE_FORM_URL = "https://api.leadconnectorhq.com/widget/form/8qUn6xE0v2Jwcs63q0uV";

export const ConsultationFormSection = ({
  iframeHeight = "1006px",
  iframeBorderRadius = "0px",
  utmCampaign = "consultation-form",
  utmMedium,
  headingOverride,
  eyebrowOverride,
  descriptionOverride,
  formUrlOverride,
  formNameOverride,
  dataHeightOverride,
  sectionClassName,
  headingGradientClass,
  cardBorderColor = "#17a2b8",
  cardGlowClass = "shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]",
  heroOverlay = false,
}: ConsultationFormSectionProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Inject GHL form embed script once when an override form is used.
  useEffect(() => {
    if (!formUrlOverride) return;
    const scriptSrc = "https://link.msgsndr.com/js/form_embed.js";
    if (document.querySelector(`script[src="${scriptSrc}"]`)) return;
    const s = document.createElement("script");
    s.src = scriptSrc;
    s.async = true;
    document.body.appendChild(s);
  }, [formUrlOverride]);

  const iframeSrc = useMemo(
    () => formUrlOverride ?? buildCtaUrl(BASE_FORM_URL, utmCampaign, utmMedium),
    [formUrlOverride, utmCampaign, utmMedium]
  );

  const formId = formUrlOverride
    ? iframeSrc.split("/").pop() ?? ""
    : "8qUn6xE0v2Jwcs63q0uV";
  const inlineId = `inline-${formId}`;
  const formName = formNameOverride ?? "GrowSmallBiz Website Contact";
  const dataHeight = dataHeightOverride ?? "1126";

  return (
    <section ref={sectionRef} className={`py-16 md:py-24 relative overflow-hidden ${sectionClassName ?? "bg-[#2d465c]"}`}>
      {heroOverlay && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,210,190,0.16),transparent_55%)] pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[hsl(18_85%_65%/0.18)] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[hsl(280_60%_70%/0.14)] blur-3xl pointer-events-none" />
        </>
      )}
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto relative rounded-2xl ${cardGlowClass}`}
          style={{ border: `2px solid ${cardBorderColor}` }}
        >
          <div className="relative rounded-2xl p-8" style={{ backgroundColor: '#191321' }}>
            <div className="text-center mb-8">
              <p className="text-primary font-medium mb-3 text-sm">{eyebrowOverride ?? "Ready to Talk?"}</p>
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 bg-clip-text text-transparent ${headingGradientClass ?? "bg-gradient-heading text-white"}`}>
                {headingOverride ?? "Get a Consultation"}
              </h2>
              <p className="text-white/80 text-lg">
                {descriptionOverride ?? "Tell us a little about your business and what kind of growth support you need. We will review your inquiry and follow up with the next best step."}
              </p>
            </div>

            {isVisible ? (
              <iframe
                src={iframeSrc}
                style={{ width: "100%", height: iframeHeight, border: "none", borderRadius: iframeBorderRadius }}
                id={inlineId}
                loading="lazy"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name={formName}
                data-height={dataHeight}
                data-layout-iframe-id={inlineId}
                data-form-id={formId}
                title={formName}
              />
            ) : (
              <div style={{ width: "100%", height: iframeHeight }} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
