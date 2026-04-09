import { Head } from "vite-react-ssg";
import { Header } from "@/components/layout/Header";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { DemoGuarantee } from "@/components/services/DemoGuarantee";
import { DemoPageNav } from "@/components/services/DemoPageNav";

export default function FormsSurveysDemo() {
  return (
    <>
      <Head>
        <title>Forms & Surveys Demo for Small Businesses | GrowSmallBiz</title>
        <meta name="description" content="See how GrowSmallBiz Forms & Surveys help you capture leads and collect valuable customer data." />
        <link rel="canonical" href="https://growsmallbiz.io/services/marketing-automation-for-small-business/forms-surveys/" />
      </Head>
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="py-10 md:py-14" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-semibold uppercase tracking-widest mb-4">FORMS BUILDER</p>
                <h1 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
                  Turn Every Website Visit Into a Lead With Smart Forms and Surveys
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Create forms that you can integrate into websites or landing pages that you have built. Customize your form's layout, use custom fields, custom CSS, all the features you want in a form to capture the lead info you need for your nurture campaign.
                </p>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/e5c171eb-d513-449d-af8a-8990b3a4e2ab.png"
                alt="Forms Builder"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Survey Builder */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-semibold uppercase tracking-widest mb-4">SURVEY BUILDER</p>
                <h2 className="text-2xl md:text-4xl font-black text-foreground mb-6">
                  Learn More About Your Prospects And Customers
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Using our survey builder you can create surveys to ask your contacts and leads for information or opinions on anything you need. You can also add an unlimited number of fields and create different slides.
                </p>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/BdnD3TjkxQR9s3Yi5FPM/media/63dd852da486209e88257da3.png"
                alt="Survey Builder"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Full Featured and Easy */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/BdnD3TjkxQR9s3Yi5FPM/media/63dee200a48620c04a25f818.png"
                alt="Drag and drop form builder"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
              <div>
                <p className="text-primary font-semibold uppercase tracking-widest mb-4">FULL FEATURED AND EASY</p>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                  Simple drag-and-drop builder
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  There is no need to be a coder or expert for our forms and surveys. Simply use the easy drag-and-drop builder to make anything you need.
                </p>
              </div>
            </div>
          </div>
        </section>

        <IntegrationsSection />
        <DemoGuarantee />
        <DemoPageNav />
      </main>
    </>
  );
}
