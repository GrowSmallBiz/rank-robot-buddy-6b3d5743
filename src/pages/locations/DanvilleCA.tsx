import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/services/ServiceHero";

import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { MapPin, TrendingUp, AlertTriangle, Briefcase, Globe, Search, Target, Zap, Home, Heart, Building2, UtensilsCrossed, Brain, Eye, BarChart3, Users, Star, BookOpen } from "lucide-react";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { CardCTA } from "@/components/services";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { useUtm } from "@/hooks/use-utm";
import { baseContactCTA } from "@/config/contactCTA";

const DanvilleCA = () => {
  const { buildUrl } = useUtm();
  const strategyCallUrl = buildUrl("https://lp.growsmallbiz.io/digital-growth-strategy-session", "schedule-strategy-call");
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Digital Marketing Danville CA | GrowSmallBiz</title>
        <meta
          name="description"
          content="GrowSmallBiz helps Danville, CA local service businesses grow with website design, SEO, paid ads, marketing automation, and AI-assisted lead conversion systems."
        />
        <link rel="canonical" href="https://growsmallbiz.io/locations/danville-ca/" />
      </Head>
      <ServiceJsonLd
        serviceName="Digital Marketing Danville CA"
        serviceType="Digital Marketing"
        description="GrowSmallBiz helps Danville, CA local service businesses grow with website design, SEO, paid ads, marketing automation, and AI-assisted lead conversion systems."
        url="/locations/danville-ca/"
        breadcrumbs={[
          { name: "Locations We Serve", url: "/locations/locations-we-serve/" },
          { name: "Danville, CA", url: "/locations/danville-ca/" },
        ]}
      />

      <Header />

      <main id="main-content">

      <ServiceHero
        badge={{ icon: MapPin, text: "Danville, CA" }}
        title="Digital Marketing Danville, CA Businesses Can Use to"
        titleHighlight="Generate More Leads and Grow Smarter"
        subtitle="If you are a Danville business owner tired of paying for disconnected marketing that does not consistently produce leads, you are not alone. Too many companies end up with a website from one vendor, SEO from another, ads from someone else, and no real system tying it all together."
        primaryCTA={{ label: "Schedule Strategy Call", href: strategyCallUrl, external: true }}
        secondaryCTA={{ label: "View Our Services", href: "/services/" }}
      />

      {/* Section: Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-invert max-w-none space-y-8">
            <p>GrowSmallBiz is a marketing agency in Danville, CA built to solve that problem with one connected growth system. We help local service businesses improve visibility, capture more qualified leads, follow up faster, convert more opportunities, and strengthen retention through a practical mix of website design, SEO, paid ads, CRM automation, and AI-assisted lead handling.</p>

            <p>GrowSmallBiz is based in Danville and serves local service businesses across Danville, <Link to="/locations/san-ramon-ca/" className="text-primary hover:underline">San Ramon</Link>, <Link to="/locations/dublin-ca/" className="text-primary hover:underline">Dublin</Link>, <Link to="/locations/pleasanton-ca/" className="text-primary hover:underline">Pleasanton</Link>, and the wider Tri-Valley.</p>
          </div>
        </div>
      </section>

      {/* Section: Why Danville Is a Market Worth Winning */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" /> LOCAL MARKET
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Why Danville Is a Market{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Worth Winning</span>
            </h2>
          </div>
          <div className="prose prose-lg prose-invert max-w-none space-y-8">
            <p>Danville gives local businesses a strong commercial base to compete for. The <a href="https://www.census.gov/quickfacts/fact/table/danvilletowncalifornia/INC110224" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">U.S. Census Bureau</a> reports Danville's 2020–2024 median household income at $232,216, with 2022 retail sales of about $769.9 million and accommodation and food services sales of about $177.0 million. Those numbers matter because they point to real consumer spending power for home services, health and wellness, restaurants, and other local businesses that depend on trust and local intent.</p>

            <p>The local business ecosystem is also active and organized. The <a href="https://www.danville.ca.gov/267/Economic-Development" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Town of Danville</a> says it re-organized its Economic Development Program in 2024/25 to focus on engaging with and empowering small businesses, and the <a href="https://danvilleareachamber.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Danville Area Chamber</a> says it connects nearly 500 members across the greater Danville and San Ramon Valley area. That is good news for serious operators, but it also means visibility, differentiation, and follow-up matter more. A business that is merely present online is not the same as a business that is easy to find, easy to trust, and easy to contact.</p>

            <p>Because GrowSmallBiz is based in Danville, we understand the local business environment beyond generic Bay Area marketing advice. Danville businesses can also tap into resources from the Town of Danville's Economic Development Division, Business Resources hub, and Business Library for market analysis, business guidance, and permitting support. As a Danville Area Chamber member, GrowSmallBiz stays connected to the local business community while helping service businesses across Danville and the Tri-Valley improve visibility, lead flow, and follow-up.</p>
          </div>
        </div>
      </section>

      {/* Section: Why Businesses Need More Than Disconnected Marketing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" /> THE PROBLEM
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Why Danville Businesses Need More Than{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Disconnected Marketing Tactics</span>
            </h2>
          </div>
          <div className="prose prose-lg prose-invert max-w-none space-y-8">
            <p>Most local agencies still sell one-off services. One builds the website. One does SEO. One runs Google Ads. One posts on social media. A business owner ends up managing vendors instead of managing growth. That usually creates waste, delays, and weak accountability because each channel is optimized in isolation rather than as part of the full buyer journey.</p>

            <p>Small business marketing in Danville, CA works better when the customer journey is connected from start to finish. Awareness brings the right people in. Lead capture turns interest into calls, forms, and messages. Lead nurture keeps good prospects from going cold. Conversion improves how many inquiries actually become jobs or appointments. Retention increases repeat business, referrals, reviews, and customer value. That is the difference between fragmented marketing and a real growth system.</p>
          </div>
        </div>
      </section>

      {/* Section: Digital Marketing Services — Card Grid */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" /> SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Digital Marketing Services in Danville, CA for Small Businesses That Want{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Better Results</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">GrowSmallBiz provides four core Danville marketing services that are designed to work together, not compete with one another. Reputation management also supports that system by strengthening trust and conversion after your business gets found.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Globe,
                title: "Website Design For Small Businesses",
                description: <>A business website should not just look polished. It should help prospects trust your company, understand what you do, and take the next step without friction. Our <Link to="/services/website-design/" className="text-primary hover:underline">website design for small businesses</Link> is built around credibility, mobile responsiveness, clear calls to action, and lead capture so your website supports growth instead of acting like a static brochure.</>
              },
              {
                icon: Search,
                title: "SEO and Local SEO With Agentic AI Playbooks",
                description: <>Our <Link to="/services/seo-agency/" className="text-primary hover:underline">SEO and local SEO services</Link> help Danville businesses improve search visibility where local buyers actually make decisions. That includes local intent searches, service-page visibility, search engine optimization fundamentals, trusted content, technical strength, and the local signals that influence who gets the click or call. Google says its AI search features still rely on the same foundational SEO best practices, and pages must be indexed and eligible for Search to appear as supporting links in AI Overviews or AI Mode.</>
              },
              {
                icon: Target,
                title: "Paid Ads With Google PPC, Google LSA, and Meta Ads",
                description: <>Our <Link to="/services/paid-advertising/" className="text-primary hover:underline">paid ads management</Link> uses Google PPC, Google Local Services Ads, and Meta Ads to support faster visibility and more controlled lead generation. Paid campaigns are most effective when they are connected to the right landing pages, tracking, follow-up, and offer structure. That is how businesses improve lead quality instead of just buying traffic.</>
              },
              {
                icon: Zap,
                title: "Marketing Automation for Speed to Lead and Better Conversion",
                description: <><Link to="/services/marketing-automation-for-small-business/" className="text-primary hover:underline">Marketing automation</Link> helps Danville businesses respond faster and convert more of the demand they already create. That includes AI Receptionist support, Conversational AI, CRM workflows, email and SMS follow-up, and capture-to-nurture systems that keep leads moving. When response time improves and follow-up becomes consistent, more opportunities turn into revenue.</>
              },
            ].map((service, i) => (
              <div key={i} className="feature-card-teal rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Why Local Businesses Need an AI-First Marketing Platform */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Brain className="w-4 h-4" /> AI-FIRST PLATFORM
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Why Local Businesses Need an{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">AI-First Marketing Platform</span>
            </h2>
          </div>
          <div className="prose prose-lg prose-invert max-w-none space-y-8">
            <p>An AI-first marketing platform does not mean replacing humans with bots or chasing hype. It means using one connected system that helps your business move faster across websites, ads, CRM, follow-up, reporting, customer communication, and optimization. The practical role of AI in local marketing is speed, consistency, and efficiency.</p>

            <p>That matters because small businesses are already using AI in real operating functions. The <a href="https://www.census.gov/newsroom/blogs/research-matters/2024/12/ai-use-small-businesses.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Census Bureau</a> says generative AI can help with marketing, website work, customer insight, and customer interaction, and the <a href="https://advocacy.sba.gov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SBA's Office of Advocacy</a> says small businesses are closing the AI adoption gap, with some leading use cases in automated marketing. In other words, AI is no longer just an enterprise talking point. It is becoming part of how smaller firms compete.</p>

            <p>The biggest benefit of an AI-first marketing platform is leverage. It can help a Danville service business answer faster, follow up more consistently, manage more inquiries without chaos, optimize campaigns with less waste, and communicate better across channels. It can also help owners spend less time patching together tools and more time improving close rates, service quality, and customer relationships. Census says AI-related technology can support productivity, while <a href="https://www.salesforce.com/resources/research-reports/small-medium-business-trends/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Salesforce's SMB study</a> found strong revenue, margin, and scalability benefits among adopters.</p>

            <p>The consequence of not adopting AI is usually not a dramatic overnight penalty. It is slower response, more manual gaps, weaker follow-up, and less operational consistency while competitors get faster. That is an inference from how AI is being used in marketing and customer interaction today. Businesses that wait too long may still generate interest, but they are more likely to lose leads in the handoff between awareness and conversion while faster competitors build an advantage.</p>
          </div>
        </div>
      </section>

      {/* Section: AI Search Visibility */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Eye className="w-4 h-4" /> AI SEARCH
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              AI Search Visibility for Local Service Businesses{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Now Matters</span>
            </h2>
          </div>
          <div className="prose prose-lg prose-invert max-w-none space-y-8">
            <p>AI search visibility is becoming part of local visibility, not a separate channel. <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google</a> says AI Overviews and AI Mode can surface links from a wider and more diverse set of helpful pages, and may use query fan-out by issuing multiple related searches across subtopics and sources to build a response. Google also says these experiences create opportunities for more types of sites to appear, especially when the content is helpful, unique, and built for real users.</p>

            <p>For a local service business, that means your visibility can no longer depend only on one short keyword and one thin city page. You need strong service pages, credible local signals, helpful content, a technically sound site, and complete business information. <a href="https://support.google.com/business/answer/7091?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google's Business Profile documentation</a> says businesses with complete and accurate information are more likely to show up in local search results, and local results are mainly based on relevance, distance, and popularity. In practical terms, AI search visibility for local businesses is strengthened by the same fundamentals that strengthen local SEO: clear service relevance, trustworthy content, complete profiles, reviews, and indexed pages that genuinely answer real buyer questions.</p>
          </div>
        </div>
      </section>

      {/* Section: How GrowSmallBiz Helps Turn Attention Into Revenue */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" /> GROWTH MODEL
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              How GrowSmallBiz Helps Turn Attention Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Revenue</span>
            </h2>
          </div>
          <div className="prose prose-lg prose-invert max-w-none space-y-8">
            <p>GrowSmallBiz is built around a connected model: Awareness, Lead Capture, Lead Nurture, Conversion, and Retention.</p>

            <p>Awareness comes from search visibility, paid reach, local discovery, stronger positioning, and selective social media marketing support where it helps build local recognition. Lead capture improves when websites, landing pages, forms, chat, and calls-to-action make the next step obvious. Lead nurture uses CRM workflows, email, SMS, and AI-assisted follow-up so good prospects do not go cold. Conversion improves when response is faster, qualification is clearer, and the handoff from inquiry to appointment is smoother. Retention grows through review generation, reactivation campaigns, ongoing customer communication, and reputation management that helps keep your business top of mind.</p>

            <p>That model is especially important for Danville-area local businesses because many leads are high intent but not always ready to act instantly. The businesses that stay visible, follow up well, and reduce friction throughout the process usually outperform the businesses that rely on disconnected tactics and manual guesswork.</p>
          </div>
        </div>
      </section>

      {/* Section: Industry-Specific Marketing — Card Grid */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" /> INDUSTRIES
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Industry-Specific Marketing Support for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Danville Service Businesses</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">GrowSmallBiz is designed for local businesses that depend on trust, local visibility, and measurable lead flow.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Home Services */}
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Home Services</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">Home service businesses often compete in fast-moving, high-intent environments where response speed and trust matter as much as visibility.</p>
              <h4 className="text-lg font-display font-semibold text-foreground mb-2">HVAC, Plumbing, Electrical, and Roofing Companies</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">Home service leads are often driven by urgency. Someone searching for an HVAC contractor, plumber, electrician, or roofer is usually not browsing casually. They need help, they want a credible provider, and they are comparing who seems most trustworthy and responsive. That makes local visibility, strong website structure, clear calls to action, and fast lead handling especially important.</p>
              <p className="text-muted-foreground leading-relaxed">Danville home service companies also face competitive pressure from businesses in nearby service areas trying to win the same demand. Better marketing helps improve lead quality by connecting search visibility, paid traffic, reviews, follow-up, and conversion flow. The goal is not just more inquiries. It is more qualified opportunities with a better chance of turning into revenue.</p>
            </div>

            {/* Health and Wellness */}
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Health and Wellness</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">Health and wellness businesses depend heavily on trust, reputation, and a smooth inquiry experience.</p>
              <h4 className="text-lg font-display font-semibold text-foreground mb-2">Dentists and Med Spas</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">For dentists and med spas, a strong marketing system must support both credibility and conversion. Prospects often review websites carefully, compare ratings, read reviews, and evaluate whether a business feels professional before they take action. A polished online presence matters, but so does the structure behind it: visible contact options, clear service pages, thoughtful follow-up, and a process that reduces friction.</p>
              <p className="text-muted-foreground leading-relaxed">Danville health and wellness businesses also benefit from marketing that supports patient or client inquiry flow over time. Not every prospect books immediately. Some need multiple touchpoints before they commit. Better lead nurture, reputation support, and local search visibility all help move those prospects closer to action while reinforcing trust.</p>
            </div>

            {/* Real Estate */}
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Real Estate</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">Real estate professionals need sustained local authority, not occasional visibility spikes.</p>
              <h4 className="text-lg font-display font-semibold text-foreground mb-2">Realtors Who Need Consistent Local Visibility and Lead Flow</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">Realtors in Danville operate in a market where trust, recognition, and follow-up all play major roles. A single campaign is rarely enough. Consistent local visibility helps agents stay present when buyers and sellers become ready to move. That visibility can come from search, paid campaigns, content, remarketing, and better lead management.</p>
              <p className="text-muted-foreground leading-relaxed">Just as important is what happens after the lead arrives. Real estate inquiries often require longer follow-up windows, stronger organization, and consistent communication. A realtor with good visibility but weak follow-up will still lose opportunities. Marketing for Danville small businesses in real estate works better when authority and lead handling are built together.</p>
            </div>

            {/* Restaurants */}
            <div className="feature-card-teal rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <UtensilsCrossed className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Restaurants</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">Restaurants need more than awareness. They need a reliable system for bringing guests back.</p>
              <h4 className="text-lg font-display font-semibold text-foreground mb-2">Repeat Visits, Promotions, and VIP Club Membership Marketing</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">Restaurant marketing works differently from many service categories because repeat visits matter so much. A restaurant can benefit from local visibility and promotions, but long-term growth often comes from retention. Email offers, SMS promotions, special event reminders, seasonal campaigns, and reactivation messages can help increase repeat traffic from customers who already know the brand.</p>
              <p className="text-muted-foreground leading-relaxed">VIP club membership marketing can make this even more effective. When restaurants create a simple system for collecting contact information and staying in touch, they gain a direct channel for promotions and loyalty-based outreach. That gives them a stronger way to drive repeat visits without depending entirely on third-party platforms or one-time foot traffic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: What Makes GrowSmallBiz Different */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4" /> WHY US
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              What Makes GrowSmallBiz Different From a Typical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Marketing Agency in Danville, CA</span>
            </h2>
          </div>
          <div className="prose prose-lg prose-invert max-w-none space-y-8">
            <p>Many agencies still sell disconnected tactics. One offers SEO. Another builds websites. Another runs ads. Another schedules social content. The client is left trying to stitch together vendors, reports, and responsibilities while hoping the whole thing somehow produces better results. GrowSmallBiz takes a different approach by building a connected growth system designed to support the full path from awareness to retention.</p>

            <p>That means strategy, execution, automation, and measurement work together instead of competing for attention. The website is not treated as a separate project from conversion. SEO is not separated from local intent and trust-building. Paid ads are not run without considering landing pages and follow-up. Marketing automation is not treated as an optional extra after leads are already being lost. The goal is to make each part of the system reinforce the others.</p>

            <p>GrowSmallBiz is built for local service businesses and restaurants that need real business outcomes, not vanity metrics. Danville business owners do not need more dashboards, random activity, or isolated deliverables. They need stronger lead flow, better inquiry handling, clearer performance visibility, and a system that supports actual growth.</p>
          </div>
        </div>
      </section>

      {/* Section: Testimonials */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" /> TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Trusted by Local Service Businesses Across{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Danville and the Tri-Valley</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">Not every client wants to be publicly named on a marketing page. These quotes are written as safe placeholder copy in the same style as the visual proof cards, and can later be replaced with actual client testimonials inside your CMS.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { initials: "AR", role: "Owner", company: "Danville-Area HVAC Company", quote: "GrowSmallBiz approached our marketing like one connected system instead of a collection of separate tasks. That made it much easier to understand how visibility, lead handling, and follow-up were supposed to work together." },
              { initials: "MS", role: "Founder", company: "East Bay Med Spa", quote: "They were organized, responsive, and thoughtful in how they explained each step. What stood out most was their ability to connect branding, lead flow, and follow-up in a way that felt practical for a local business." },
              { initials: "JP", role: "Office Manager", company: "Local Dental Practice", quote: "We appreciated that the focus was not just on getting traffic, but on improving the full patient inquiry experience. Their recommendations felt aligned with how a real service business needs to operate day to day." },
              { initials: "DL", role: "Owner", company: "Tri-Valley Roofing Company", quote: "What we liked most was the emphasis on clarity and follow-through. The strategy felt more complete than what we had experienced before, especially around lead response, website performance, and local visibility." },
              { initials: "KR", role: "Broker Associate", company: "Danville-Area Real Estate Business", quote: "They understood that consistent visibility is only one part of the equation. The way they think about follow-up, communication, and long-term lead handling made the overall approach feel much more useful." },
              { initials: "ST", role: "Operator", company: "Danville-Area Restaurant", quote: "The conversation felt grounded in real business needs, not generic marketing talk. Their ideas around customer communication, promotions, and repeat-visit strategy were especially relevant for a local restaurant." },
            ].map((t, i) => (
              <div key={i} className="p-6 feature-card-teal rounded-2xl">
                <p className="text-foreground/90 italic mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-primary via-orange-400 to-primary" />
                    <div className="relative w-10 h-10 rounded-full bg-card flex items-center justify-center text-primary font-bold text-sm">{t.initials}</div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.role}</p>
                    <p className="text-xs text-muted-foreground">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Why Local Visibility Still Matters */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Eye className="w-4 h-4" /> LOCAL VISIBILITY
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Why Local Visibility Still Matters for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Danville, CA Businesses</span>
            </h2>
          </div>
          <div className="prose prose-lg prose-invert max-w-none space-y-8">
            <p>Local visibility still determines who gets the call, booking, or visit. Buyers use search, maps, reviews, business profiles, service pages, and increasingly AI-assisted search experiences to compare options before they reach out. <a href="https://support.google.com/business/answer/7091?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google's own guidance</a> makes clear that accurate profiles, reviews, and relevance still matter in local discovery.</p>

            <p>That is why small business marketing in Danville, CA cannot rely on having a website alone. Businesses need a stronger local presence across search visibility, trust signals, conversion pathways, and follow-up systems if they want to turn attention into measurable revenue.</p>
          </div>
        </div>
      </section>

      {/* Section: Danville Business Resources */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" /> RESOURCES
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Danville{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Business Resources</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Danville business owners can explore these local resources as they plan growth, expansion, or visibility improvements:</p>
          </div>

          <div className="space-y-4">
            <div className="bg-card/50 border border-border/60 rounded-xl p-5 transition-all hover:border-primary/30 hover:shadow-lg">
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                <a href="https://www.danville.ca.gov/267/Economic-Development" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Town of Danville Economic Development</a>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">The Town of Danville's Economic Development Division is a strong starting point for business owners who want to understand how Danville supports business growth. The Town says this division helps companies start, connect, and grow in Danville, and its Business Concierge can help businesses navigate the Town's development review process. That makes this a useful resource for owners who want a clearer path through local approvals, planning questions, or expansion-related steps.</p>
            </div>

            <div className="bg-card/50 border border-border/60 rounded-xl p-5 transition-all hover:border-primary/30 hover:shadow-lg">
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                <a href="https://www.danville.ca.gov/270/Business-Resources" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Town of Danville Business Resources</a>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Danville's Business Resources page is useful for owners who need practical help beyond general marketing advice. It brings together items such as business funding support, permitting-related tools, startup guidance, and other assistance resources in one place. For a small business trying to move from idea to action, this page works well as a central operational reference rather than just a generic city information page.</p>
            </div>

            <div className="bg-card/50 border border-border/60 rounded-xl p-5 transition-all hover:border-primary/30 hover:shadow-lg">
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                <a href="https://www.danville.ca.gov/818/Business-Library" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Town of Danville Business Library</a>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">The Town's Business Library is especially helpful for small businesses that want to make better decisions before launching, relocating, or expanding. Danville describes it as a place for guiding documents, community information, market analysis, and regional business support tools. In practical terms, that means it can help owners research the local market, review planning materials, and get more context before investing in a new location or growth initiative.</p>
            </div>

            <div className="bg-card/50 border border-border/60 rounded-xl p-5 transition-all hover:border-primary/30 hover:shadow-lg">
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                <a href="https://danvilleareachamber.com/business-resources/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Danville Area Chamber Business Resources</a>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">The Danville Area Chamber's business resources are useful for owners who want stronger local connections in addition to Town resources. The Chamber highlights business resources, community connections, and visibility opportunities, and says it helps members connect with nearly 500 businesses across the greater Danville area and San Ramon Valley. For small businesses, that can support networking, referrals, regional awareness, and a better understanding of the local business ecosystem.</p>
            </div>
          </div>

          {/* Cross-link pills */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">If your business also serves nearby communities, explore our pages for:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "San Ramon", to: "/locations/san-ramon-ca/" },
                { label: "Dublin", to: "/locations/dublin-ca/" },
                { label: "Pleasanton", to: "/locations/pleasanton-ca/" },
                { label: "Walnut Creek", to: "/locations/walnut-creek-ca/" },
                { label: "Livermore", to: "/locations/livermore-ca/" },
                { label: "Concord", to: "/locations/concord-ca/" },
              ].map((city) => (
                <Link
                  key={city.to}
                  to={city.to}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all text-sm font-medium"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  {city.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title={<>Frequently Asked Questions About <span className="text-transparent bg-clip-text bg-gradient-primary italic">Small Business Marketing in Danville, CA</span></>}
        faqs={[
          { question: "What types of businesses does GrowSmallBiz work with in Danville, CA?", answer: "GrowSmallBiz primarily works with local service businesses and repeat-visit local businesses, including home services, dentists, med spas, realtors, restaurants, and other Danville-area companies that depend on visibility, lead flow, follow-up, and retention." },
          { question: "Is GrowSmallBiz only an SEO company?", answer: "No. GrowSmallBiz is not just an SEO company. We combine website design, SEO and local SEO, paid ads, marketing automation, and AI-assisted lead handling into one connected growth system." },
          { question: "Can GrowSmallBiz help if my business already has a website?", answer: "Yes. Many businesses already have a website but still need better messaging, stronger conversion flow, stronger local visibility, cleaner landing pages, or better CRM follow-up. We can improve what exists and connect it more effectively to lead generation and conversion." },
          { question: "How does AI improve digital marketing for small businesses?", answer: "AI improves local marketing when it is used for faster lead response, smarter follow-up, more efficient optimization, and better customer communication. The value is practical: fewer missed opportunities, more consistent handling of inquiries, and better leverage from the marketing you are already paying for." },
          { question: "Do you work with restaurants that want more repeat business?", answer: "Yes. Restaurants can benefit from retention-focused marketing such as promotions, email and SMS offers, reactivation campaigns, and VIP club membership systems that increase repeat visits and customer value." }
        ]}
        schemaType="FAQPage"
        contactCTA={{
          ...baseContactCTA,
          title: "Have questions about marketing in Danville?",
          description: "We're here to help you find the right strategy.",
          tagline: "Let's grow your Danville business together.",
        }}
      />

      <section id="final-cta" className="py-16" style={{ background: 'linear-gradient(180deg, hsl(210 50% 8%) 0%, hsl(210 45% 14%) 50%, hsl(210 50% 8%) 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <p className="text-primary font-medium mb-4">THE NEXT STEP</p>
            <h2 className="section-title">
              Ready to Build a Smarter Marketing System for Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary italic">Danville Business</span>?
            </h2>
            <p className="section-description mt-4 mb-8">
              GrowSmallBiz helps Danville businesses connect website performance, search visibility, paid ads, follow-up, conversion, retention, and AI-assisted marketing into one practical system. That is the difference between paying for activity and building a platform that supports real growth.
            </p>
          </div>
          <CardCTA
            title="Schedule Your Free Marketing Assessment"
            description="If you want a marketing agency in Danville, CA that goes beyond disconnected tactics, GrowSmallBiz is built for that next step. Schedule a strategy conversation or marketing assessment to see where your current system is leaking leads and what a stronger local growth engine could look like."
            buttonText="Schedule Strategy Call"
            buttonHref={strategyCallUrl}
            sectionClassName="pt-0 pb-0"
          />
        </div>
      </section>

      <ConsultationFormSection />
    </main>

    <Footer />
  </div>
  );
};

export default DanvilleCA;
