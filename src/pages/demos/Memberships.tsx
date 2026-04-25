import { Head } from "vite-react-ssg";
import { Header } from "@/components/layout/Header";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { DemoGuarantee } from "@/components/services/DemoGuarantee";
import { DemoPageNav } from "@/components/services/DemoPageNav";

export default function MembershipsDemo() {
  return (
    <>
      <Head>
        <title>GrowSmallBiz Memberships & Courses: Create & Sell Online Courses</title>
        <meta name="description" content="Launch a course or membership program that generates recurring revenue. Build it once and let GrowSmallBiz handle the delivery." />
        <meta name="keywords" content="online courses, membership sites, digital marketing solutions, GrowSmallBiz memberships, create memberships, manage online courses, benefits of memberships, course creation tools" />
        <link rel="canonical" href="https://growsmallbiz.io/services/marketing-automation-for-small-business/memberships/" />
      </Head>
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="py-10 md:py-14" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h1 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
              Memberships, Courses & Communities
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Create <strong className="text-foreground">UNLIMITED</strong> Free or Paid Memberships, Courses and Communities
            </p>
          </div>
        </section>

        {/* $336.98 Billion Stat */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-black text-foreground mb-6">
                  $336.98 Billion By 2026
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  According to Syngene Research, the online education market is expected to reach $336.98 billion by 2026!
                </p>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/BdnD3TjkxQR9s3Yi5FPM/media/63dd453ea48620f215253f22.png"
                alt="Online education market growth"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Countless Ways */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
              Countless Ways To Increase The Value You Offer
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Create ongoing monthly recurring revenue by offering memberships to your online courses
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-xl p-8">
                <img
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/e8b601f9-0375-4d0a-8d83-94f30b71dda7.png"
                  alt="Membership Offers"
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-foreground mb-3">Membership Offers</h3>
                <p className="text-muted-foreground">
                  Grow your customer base by offering free or paid memberships to exclusive content or offers.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-8">
                <img
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/af7bb20f-8e29-479a-b1f4-b9d932640594.png"
                  alt="Courses"
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-foreground mb-3">Courses</h3>
                <p className="text-muted-foreground">
                  Increase revenue by selling courses in your area of expertise. Help yourself by helping others grow.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-8">
                <img
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4KL47iKeJZ2Ee05j7FBh/media/3fede551-a2d5-4fe2-ac1b-90f104aaed04.png"
                  alt="Employee Training"
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-foreground mb-3">Employee Training</h3>
                <p className="text-muted-foreground">
                  Create online training courses for employees and reduce the time and manpower required to onboard staff.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Flexible Offers */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
                  Flexible Offers
                </h2>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                  Build what you need without limits
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With our membership module, you can upload an unlimited number of videos, enroll unlimited users, and create an unlimited amount of courses and offers.
                </p>
              </div>
              <img
                src="https://b2317160.smushcdn.com/2317160/wp-content/uploads/2023/09/membership-sites--1024x536.jpg?lossy=1&strip=1&webp=1"
                alt="Flexible membership offers"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Course Creation */}
        <section className="py-10" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/BdnD3TjkxQR9s3Yi5FPM/media/63dd40d2077c9a6293488d29.png"
                alt="Course creation templates"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
              <div>
                <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
                  Course Creation
                </h2>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                  Start building quickly
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With our pre-built course templates you can get started building your courses immediately. Don't waste hours trying to figure out how to add lessons and modules.
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
