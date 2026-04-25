import { useMemo, useState, useRef, useEffect } from "react";
import { buildCtaUrl } from "@/lib/utm";

interface ConsultationFormSectionProps {
  iframeHeight?: string;
  /** Optional UTM campaign label for this form */
  utmCampaign?: string;
  /** Optional UTM medium override */
  utmMedium?: string;
  /** Optional override for the H2 heading text */
  headingOverride?: string;
}

const BASE_FORM_URL = "https://api.leadconnectorhq.com/widget/form/8qUn6xE0v2Jwcs63q0uV";

export const ConsultationFormSection = ({
  iframeHeight = "1006px",
  utmCampaign = "consultation-form",
  utmMedium,
  headingOverride,
}: ConsultationFormSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const iframeSrc = useMemo(
    () => buildCtaUrl(BASE_FORM_URL, utmCampaign, utmMedium),
    [utmCampaign, utmMedium]
  );

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#2d465c' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div
          className="max-w-3xl mx-auto relative rounded-2xl shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]"
          style={{ border: '2px solid #17a2b8' }}
        >
          <div className="relative rounded-2xl p-8" style={{ backgroundColor: '#191321' }}>
            <div className="text-center mb-8">
              <p className="text-primary font-medium mb-3 text-sm">Ready to Talk?</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4 bg-gradient-heading bg-clip-text text-transparent">
                Get a Consultation
              </h2>
              <p className="text-white/80 text-lg">
                Tell us a little about your business and what kind of growth support you need. We will review your inquiry and follow up with the next best step.
              </p>
            </div>

            {isVisible ? (
              <iframe
                src={iframeSrc}
                style={{ width: "100%", height: iframeHeight, border: "none", borderRadius: "0px" }}
                id="inline-8qUn6xE0v2Jwcs63q0uV"
                loading="lazy"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="GrowSmallBiz Website Contact"
                data-height="1126"
                data-layout-iframe-id="inline-8qUn6xE0v2Jwcs63q0uV"
                data-form-id="8qUn6xE0v2Jwcs63q0uV"
                title="GrowSmallBiz Website Contact"
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
