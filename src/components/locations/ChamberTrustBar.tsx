import chamberDanville from "@/assets/cohort/chamber-danville.webp";
import chamberSanRamon from "@/assets/cohort/chamber-sanramon.webp";
import chamberWalnutCreek from "@/assets/cohort/chamber-walnutcreek.webp";
import chamberConcord from "@/assets/cohort/chamber-concord.png";

const CHAMBERS = [
  {
    src: chamberWalnutCreek,
    alt: "Walnut Creek Chamber of Commerce",
    href: "https://members.walnut-creek.com/list/Details/growsmallbiz-digital-marketing-4248068",
  },
  {
    src: chamberDanville,
    alt: "Danville Area Chamber of Commerce",
    href: "https://business.danvilleareachamber.com/list/member/growsmallbiz-digital-marketing-10687",
  },
  {
    src: chamberSanRamon,
    alt: "San Ramon Chamber of Commerce",
    href: "https://members.sanramon.org/list/member/growsmallbiz-digital-marketing-4986",
  },
  {
    src: chamberConcord,
    alt: "Greater Concord Chamber of Commerce",
    href: "https://www.concordchamber.com/list/member/growsmallbiz-digital-marketing-12991",
  },
];

/**
 * Trust badge strip displaying GrowSmallBiz Chamber of Commerce memberships.
 * White background to make multi-color chamber logos legible. Logos link to
 * the GrowSmallBiz member profile on each chamber's directory (high-authority
 * local citation backlinks). Used on all city/location pages.
 */
export const ChamberTrustBar = () => (
  <section
    aria-label="Proud Chamber of Commerce member"
    className="bg-white py-6 md:py-8 border-y border-black/5"
  >
    <div className="container mx-auto px-4">
      <p className="text-center text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-5">
        Proud Member Of
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
        {CHAMBERS.map((c) => (
          <a
            key={c.alt}
            href={c.href}
            target="_blank"
            rel="noopener"
            aria-label={`${c.alt} — view GrowSmallBiz member profile`}
            className="inline-block transition-transform duration-300 hover:-translate-y-0.5"
          >
            <img
              src={c.src}
              alt={c.alt}
              loading="lazy"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);
