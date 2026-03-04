/**
 * Static HTML content for pre-rendered pages.
 * Used by vite-plugin-prerender-static to generate crawler-friendly HTML at build time.
 * This content is only seen by search engines and AI crawlers — real users see the full React app.
 */

interface RouteContent {
  body: string;
}

const nav = `<nav><a href="/">Home</a> | <a href="/about">About</a> | <a href="/services/ai-seo-hub">SEO Services</a> | <a href="/services/paid-media">Paid Media</a> | <a href="/services/website-design">Website Design</a> | <a href="/services/ai-receptionist">AI Receptionist</a> | <a href="/services/crm">CRM</a> | <a href="/services/reputation-management">Reputation</a> | <a href="/contact">Contact</a> | <a href="/free-assessment">Free Assessment</a></nav>`;

const cta = `<p><strong>Ready to grow?</strong> <a href="/free-assessment">Schedule a FREE Strategy Session</a> or <a href="/contact">Contact Us</a>.</p>`;

const footer = `<footer><p>&copy; GrowSmallBiz Digital Marketing. AI-powered SEO and digital marketing for local service businesses.</p><p><a href="/llms.txt">LLMs Index</a> | <a href="/llms-full.txt">Full Content for AI</a> | <a href="/sitemap.xml">Sitemap</a></p></footer>`;

export const routeContent: Record<string, RouteContent> = {
  "/": {
    body: `
      ${nav}
      <h1>GrowSmallBiz | Digital Marketing & AI Automation for Local Service Businesses</h1>
      <p>Done-for-You marketing and AI automation for local service businesses. Achieve digital dominance with AI-powered SEO, paid ads, reputation management, and 24/7 AI assistants.</p>
      <h2>Our Growth System</h2>
      <ul>
        <li><strong>2-4x Customer Growth</strong></li>
        <li><strong>24/7 AI Automation</strong></li>
        <li><strong>100% Transparency</strong></li>
        <li><strong>15+ Hours Saved/Week</strong></li>
      </ul>
      <h2>Our Services</h2>
      <ul>
        <li><a href="/services/website-design">Website That Converts</a> — Designed to convert with on-brand messaging, clear CTAs, mobile responsive, fast loading</li>
        <li><a href="/services/technical-seo">AI Optimized SEO</a> — Competitors analysis, GBP & Map Pack optimization, citations, AEO, GEO</li>
        <li><a href="/services/paid-media">Google + Facebook/Instagram Ads</a> — Facebook/Instagram Ads, Google LSA, Google & Bing PPC, retargeting, email & SMS nurturing</li>
        <li><a href="/services/reputation-management">Reputation Management</a> — Review requests on autopilot, AI review replies, email & SMS followups</li>
        <li><a href="/services/social-media">Social Media Management</a> — Scheduled organic posts, platform-specific strategies, boost engagement</li>
        <li><a href="/services/ai-receptionist">AI Receptionist & Conversational AI</a> — 24/7 instant responses, AI voice receptionist, qualify & book appointments</li>
        <li><a href="/services/crm">AI Client Growth System</a> — Email & SMS templates, automated followups, lead nurturing & pipeline</li>
        <li><a href="/services/linkedin-outreach">LinkedIn LeadGen</a> — Targeted lead lists, automated outreach, consistent follow-ups</li>
      </ul>
      <h2>Growth Steps</h2>
      <ol>
        <li>Increase Visibility — Get found across search, maps, and social media</li>
        <li>Drive Leads — Attract new prospects through targeted traffic</li>
        <li>Convert Leads — Turn more leads into paying customers</li>
        <li>Grow Revenue — Boost lifetime value through upsells, reviews, and retention</li>
      </ol>
      <h2>FAQs</h2>
      <dl>
        <dt>What makes GrowSmallBiz different?</dt><dd>We focus exclusively on local small businesses with an integrated marketing ecosystem that tracks every lead from first click to final sale.</dd>
        <dt>What types of businesses do you work with?</dt><dd>Local professional service businesses including HVAC, dental, med spas, chiropractors, auto repair, photographers, and more.</dd>
        <dt>How quickly can I expect results?</dt><dd>Paid ads show results in 3-60 days. SEO improvements begin around 60 days. Most clients see meaningful results within 3 months.</dd>
        <dt>What's included in your complete growth package?</dt><dd>Conversion-optimized website, SEO optimization, paid traffic management, AI-powered CRM, smart dashboard analytics, and professional branding.</dd>
      </dl>
      ${cta}
      ${footer}
    `,
  },

  "/about": {
    body: `
      ${nav}
      <h1>About GrowSmallBiz Digital Marketing</h1>
      <p>We're a team of SEO specialists, AI strategists, and digital marketers dedicated to helping small and medium local businesses compete and win in the digital landscape.</p>
      <h2>Stats</h2>
      <ul><li>150+ Local Businesses Served</li><li>3.2x Average Traffic Increase</li><li>85% Client Retention Rate</li><li>5+ Years of Experience</li></ul>
      <h2>Our Story</h2>
      <p>GrowSmallBiz was founded on a simple belief: local businesses deserve the same caliber of digital marketing that enterprise companies enjoy, without the enterprise price tag. We've helped over 150 local businesses across industries like HVAC, dental, med spas, and more.</p>
      <h2>Our Values</h2>
      <ul>
        <li><strong>Results-Driven</strong> — We measure success by your growth, not vanity metrics.</li>
        <li><strong>Transparency First</strong> — No black boxes or hidden tactics.</li>
        <li><strong>Local Expertise</strong> — We specialize in helping local businesses compete with larger competitors.</li>
        <li><strong>AI-Forward Approach</strong> — Integrating AI tools and optimizing for AI platforms.</li>
      </ul>
      ${cta}
      ${footer}
    `,
  },

  "/blog": {
    body: `
      ${nav}
      <h1>Local Service Business Growth Blog</h1>
      <p>Expert insights on SEO, paid media, and digital marketing strategies to help your local business dominate online.</p>
      <h2>Categories</h2>
      <ul><li>Paid Media</li><li>Technical SEO</li><li>On-Page SEO</li><li>Local SEO</li><li>AEO</li><li>GEO</li><li>Link Building</li><li>HVAC</li><li>Dental</li><li>Med Spa</li><li>Chiropractor</li><li>Auto Repair</li><li>Photography</li></ul>
      ${cta}
      ${footer}
    `,
  },

  "/contact": {
    body: `
      ${nav}
      <h1>Contact GrowSmallBiz — Let's Grow Together</h1>
      <p>Ready to dominate local search? Get in touch for a free consultation and learn how we can help your business grow.</p>
      <h2>Contact Information</h2>
      <ul><li>Email: info@growsmallbiz.io</li><li>Response time: Within 24 hours</li></ul>
      <h2>Services Available</h2>
      <ul><li>Technical SEO</li><li>On-Page SEO</li><li>Local SEO</li><li>Link Building</li><li>AEO / GEO</li><li>Paid Media & Advertising</li><li>Full-Funnel Strategy</li></ul>
      ${cta}
      ${footer}
    `,
  },

  "/free-assessment": {
    body: `
      ${nav}
      <h1>Free AI SEO Assessment — Get Your Custom SEO Roadmap</h1>
      <p>Answer a few quick questions so we can create a personalized strategy for your business.</p>
      <h2>Business Types We Serve</h2>
      <ul><li>HVAC / Plumbing / Electrical</li><li>Dental Practice</li><li>Med Spa / Aesthetics</li><li>Auto Repair / Body Shop</li><li>Chiropractic / Physical Therapy</li><li>Photography Business</li><li>Law Firm / Legal Services</li><li>Other Local Service</li></ul>
      <h2>What We'll Assess</h2>
      <ul><li>Your current website and online presence</li><li>Current marketing channels</li><li>Primary business goals</li><li>Budget and timeline</li></ul>
      ${cta}
      ${footer}
    `,
  },

  "/services/technical-seo": {
    body: `
      ${nav}
      <h1>Technical SEO Services — Beyond Audits. Technical SEO That Performs.</h1>
      <p>We go beyond audits. We fix what's broken, optimize what's slow, and unlock higher rankings with clean, crawlable, Core Web Vitals-ready sites.</p>
      <h2>What We Do</h2>
      <ul>
        <li><strong>Full Website Audit</strong> — Crawl errors, redirects, duplicates — everything uncovered.</li>
        <li><strong>Speed & Core Web Vitals</strong> — Load times under 2 seconds on mobile, guaranteed.</li>
        <li><strong>XML Sitemaps & Schema</strong> — Structured data that Google reads and understands.</li>
        <li><strong>Mobile UX & Navigation</strong> — Fast, intuitive, revenue-driving mobile experience.</li>
        <li><strong>Architecture & Indexation</strong> — Optimize site structure and scale SEO impact.</li>
        <li><strong>Performance Monitoring</strong> — Real-time tracking of technical health metrics.</li>
      </ul>
      <h2>What's Included</h2>
      <ul><li>Comprehensive crawl analysis</li><li>Core Web Vitals optimization</li><li>Mobile-first indexing compliance</li><li>Schema markup implementation</li><li>Site speed optimization and caching</li><li>Security audit and HTTPS</li><li>Duplicate content resolution</li><li>URL structure optimization</li></ul>
      <h2>Results</h2>
      <ul><li>98% E-commerce Traffic Increase</li><li>113% Conversion Rate Lift</li><li>10x Organic Sessions Growth</li><li>2s Target Page Load Time</li></ul>
      <h2>FAQs</h2>
      <dl>
        <dt>What does technical SEO include?</dt><dd>Meta tag optimization, site architecture, redirect management, URL structure, image optimization, structured data, internal linking, JavaScript rendering, caching, and more.</dd>
        <dt>Why is technical SEO critical?</dt><dd>Google uses page experience and Core Web Vitals as ranking signals. Poor performance undermines your entire marketing strategy.</dd>
        <dt>Can technical SEO combine with other services?</dt><dd>Yes, our managed SEO campaigns integrate technical SEO with link building, content creation, and other strategies.</dd>
      </dl>
      ${cta}
      ${footer}
    `,
  },

  "/services/on-page-seo": {
    body: `
      ${nav}
      <h1>On-Page SEO Services — Engineered for Business Growth</h1>
      <p>Maximize your site's impact with strategic on-page optimization. We enhance content and page structure at scale to boost visibility, improve UX, and drive more conversions.</p>
      <h2>Our Approach</h2>
      <ul>
        <li><strong>Audit & Competitor Gap Analysis</strong> — Deep-dive analysis of content performance and competitor strategies.</li>
        <li><strong>Keyword & Topic Mapping</strong> — Strategic keyword research aligned with user intent.</li>
        <li><strong>Pages & Content Optimization</strong> — Titles, meta descriptions, headers, and body content optimization.</li>
        <li><strong>Technical Fixes & Markup</strong> — Structured data, canonical tags, and technical on-page elements.</li>
        <li><strong>Internal Linking Strategy</strong> — Strategic internal link architecture for page authority.</li>
      </ul>
      <h2>Our Process</h2>
      <ol><li>Content Audit</li><li>Keyword Research</li><li>Optimization Plan</li><li>Implementation</li><li>Performance Tracking</li></ol>
      <h2>Results</h2>
      <ul><li>40% Avg. Traffic Increase</li><li>2x Click-Through Rate Boost</li><li>90 Days to See Results</li><li>100+ Pages Optimized Monthly</li></ul>
      <h2>FAQs</h2>
      <dl>
        <dt>What is on-page SEO?</dt><dd>Optimizing elements within your web pages — content, titles, meta descriptions, headings, and HTML markup — to improve search visibility.</dd>
        <dt>How does on-page SEO differ from technical SEO?</dt><dd>On-page focuses on content and page elements. Technical SEO addresses site-wide performance like speed, crawlability, and security.</dd>
      </dl>
      ${cta}
      ${footer}
    `,
  },

  "/services/aeo": {
    body: `
      ${nav}
      <h1>Answer Engine Optimization (AEO) — Get Your Brand In AI Answers First</h1>
      <p>Command visibility across AI ecosystems like ChatGPT, Google AI Overviews, and Perplexity. Our AEO service ensures your brand becomes the canonical truth for AI to cite, reference, and promote.</p>
      <h2>AI Platforms We Optimize For</h2>
      <ul><li>ChatGPT</li><li>Google AI Overview</li><li>Perplexity</li><li>Claude</li><li>Gemini</li><li>Microsoft Copilot</li></ul>
      <h2>Our AEO Services</h2>
      <ul>
        <li><strong>AEO Content Optimization</strong> — Transform content to be recognized and cited by AI platforms.</li>
        <li><strong>Schema & Structured Data</strong> — Advanced schema markup for AI understanding.</li>
        <li><strong>Entity Optimization & Brand Alignment</strong> — Strengthen your digital identity for AI recognition.</li>
        <li><strong>AI Citation & LLM Visibility Tracking</strong> — Monitor AI platform citations and visibility.</li>
        <li><strong>Q&A & Snippet Creation</strong> — Optimized Q&A content AI systems prefer to surface.</li>
        <li><strong>Technical SEO for AI</strong> — Technical optimizations for AI crawler accessibility.</li>
      </ul>
      <h2>Results</h2>
      <ul><li>70% AI Answer Coverage</li><li>5x Brand Visibility Boost</li><li>24/7 AI Monitoring</li><li>100+ AI Platforms Tracked</li></ul>
      <h2>FAQs</h2>
      <dl>
        <dt>What is AEO?</dt><dd>AEO structures your content so AI platforms like ChatGPT and Google AI Overviews recognize, cite, and surface your brand as the authoritative answer.</dd>
        <dt>How is AEO different from traditional SEO?</dt><dd>Traditional SEO focuses on search rankings. AEO focuses on being selected and cited by AI systems when they generate answers.</dd>
        <dt>How do you measure AI visibility?</dt><dd>We track AI Share of Voice, Visibility Score, and Sentiment Analysis across all major AI platforms.</dd>
      </dl>
      ${cta}
      ${footer}
    `,
  },

  "/services/geo": {
    body: `
      ${nav}
      <h1>Generative Engine Optimization (GEO) — Shape the Answers AI Delivers</h1>
      <p>Claim your spot in the AI answer box. Our GEO service positions your brand as the trusted source AI platforms cite, reference, and elevate above competitors.</p>
      <h2>GEO vs Traditional SEO</h2>
      <ul>
        <li>Traditional SEO: Optimizes for search engine crawlers, keyword rankings, SERP positions</li>
        <li>GEO: Optimizes for AI understanding, entity recognition, AI citations & mentions</li>
      </ul>
      <h2>Our GEO Services</h2>
      <ul>
        <li><strong>Entity & Knowledge Graph Optimization</strong></li>
        <li><strong>AI-Friendly Content Structuring</strong></li>
        <li><strong>Advanced Schema Implementation</strong></li>
        <li><strong>Semantic & Contextual Enrichment</strong></li>
        <li><strong>E-E-A-T & Digital Authority Development</strong></li>
        <li><strong>LLM Training Data Optimization</strong></li>
      </ul>
      <h2>Results</h2>
      <ul><li>60% AI Citation Rate</li><li>4x Entity Visibility Growth</li><li>100% Knowledge Graph Coverage</li><li>90 Days to Impact</li></ul>
      <h2>FAQs</h2>
      <dl>
        <dt>What is GEO?</dt><dd>GEO optimizes your content, entities, and technical signals so AI platforms like ChatGPT, Gemini, and Claude can recognize, reference, and surface your brand.</dd>
        <dt>Why is GEO important?</dt><dd>As AI-generated responses replace traditional search clicks, GEO ensures your brand remains visible and trusted across generative AI platforms.</dd>
      </dl>
      ${cta}
      ${footer}
    `,
  },

  "/services/local-seo": {
    body: `
      ${nav}
      <h1>Local SEO Services — Dominate Local Search Results</h1>
      <p>Attract nearby customers and dominate local search rankings. We optimize your Google Business Profile, listings, and on-page signals to boost local visibility, traffic, and leads.</p>
      <h2>Local Search Stats</h2>
      <ul><li>46% of Google searches have local intent</li><li>76% of local searches visit a business within 24 hours</li><li>28% of local searches result in a purchase</li></ul>
      <h2>Our Services</h2>
      <ul>
        <li><strong>Local Keyword Research</strong> — High-value local search terms</li>
        <li><strong>Google Business Profile Optimization</strong> — Complete GBP optimization for local pack</li>
        <li><strong>Local Citation & Listing Management</strong> — Consistent NAP citations across directories</li>
        <li><strong>On-Page Local SEO</strong> — Location pages and geo-targeted keywords</li>
        <li><strong>Review & Reputation Management</strong> — Strategic review acquisition</li>
        <li><strong>Local Content Creation</strong> — Locally-focused content that ranks</li>
      </ul>
      <h2>FAQs</h2>
      <dl>
        <dt>What is Local SEO?</dt><dd>Local SEO optimizes your online presence to attract customers in specific geographic areas — Google Business Profiles, citations, reviews, and on-page signals.</dd>
        <dt>How is Local SEO different from general SEO?</dt><dd>General SEO targets national/global visibility. Local SEO focuses on hyper-local audiences with map listings, citations, reviews, and geo-targeted content.</dd>
      </dl>
      ${cta}
      ${footer}
    `,
  },

  "/services/link-building": {
    body: `
      ${nav}
      <h1>Link Building Services — Authority Building Through Quality Backlinks</h1>
      <p>Strategic authority building through high-quality backlinks and digital PR campaigns. We focus exclusively on white-hat, editorial, contextual backlinks.</p>
      <h2>Our Services</h2>
      <ul>
        <li><strong>Backlink Audits & Link Detox</strong> — Identify and disavow toxic links</li>
        <li><strong>High-Quality Link Building</strong> — Authoritative, relevant backlinks</li>
        <li><strong>Digital PR & Media Outreach</strong> — Editorial mentions from trusted publications</li>
        <li><strong>Thought Leadership & Guest Posting</strong> — Expert content on high-authority sites</li>
        <li><strong>Content Promotion & Syndication</strong> — Amplify content to earn natural backlinks</li>
        <li><strong>Competitor Link Gap Reports</strong> — Find linking opportunities competitors have</li>
      </ul>
      <h2>Results</h2>
      <ul><li>50+ Authority Links Monthly</li><li>40+ Avg. Domain Authority</li><li>100% White-Hat Methods</li><li>60 Days to Rankings Impact</li></ul>
      <h2>FAQs</h2>
      <dl>
        <dt>What types of links do you build?</dt><dd>Exclusively editorial, contextual backlinks from authoritative, brand-safe domains. No PBNs, link farms, or risky schemes.</dd>
        <dt>Do you follow Google's guidelines?</dt><dd>Yes. We exclusively use white-hat outreach and digital PR strategies aligned with Google's webmaster guidelines.</dd>
      </dl>
      ${cta}
      ${footer}
    `,
  },

  "/services/paid-media": {
    body: `
      ${nav}
      <h1>Paid Media & Advertising — Strategic Campaigns for Local Businesses</h1>
      <p>Capture high-intent customers with Google PPC, Google LSA, Meta Ads, TikTok, and YouTube advertising. Full-funnel tracking and lead nurturing.</p>
      <h2>Platforms</h2>
      <ul>
        <li><strong>Google PPC</strong> — Search, Display, Shopping, Performance Max</li>
        <li><strong>Google LSA</strong> — Google Guaranteed badge, pay per lead</li>
        <li><strong>Meta Ads</strong> — Facebook, Instagram, retargeting, lookalike audiences</li>
        <li><strong>TikTok Ads</strong> — In-Feed, Spark Ads, TopView</li>
        <li><strong>YouTube Ads</strong> — Pre-roll, bumper ads, remarketing</li>
        <li><strong>Bing/Microsoft Ads</strong> — Search ads on Bing, Yahoo, DuckDuckGo</li>
      </ul>
      <h2>Results</h2>
      <ul><li>4x Average ROAS</li><li>60% Lower Cost Per Lead</li><li>24hr Campaign Launch Time</li><li>100% Transparent Reporting</li></ul>
      <h2>FAQs</h2>
      <dl>
        <dt>What's the difference between Google PPC and Google LSA?</dt><dd>PPC charges per click. LSA charges per lead with a 'Google Guaranteed' badge. LSAs are ideal for service-based local businesses.</dd>
        <dt>How much should I budget?</dt><dd>We recommend $1,500-3,000/month for most local businesses to allow enough data for optimization.</dd>
        <dt>How quickly will I see results?</dt><dd>Paid ads can generate leads immediately. Optimization takes 2-4 weeks. Best ROI after 60-90 days.</dd>
      </dl>
      ${cta}
      ${footer}
    `,
  },

  "/services/social-media": {
    body: `
      ${nav}
      <h1>Social Media Management — Professional Social Strategy for Local Businesses</h1>
      <p>Stay consistent with scheduled organic posts and platform-specific strategies. Build trust, boost engagement, and improve local SEO through professional social media management.</p>
      <h2>Stats</h2>
      <ul><li>90% of consumers research online</li><li>3-8x ROI in first year</li><li>73% check social before buying</li><li>30 posts per month</li></ul>
      <h2>What We Handle</h2>
      <ul><li>Content strategy and creation</li><li>Platform-specific optimization</li><li>Community management</li><li>Performance analytics</li><li>Compliance and ethics review</li></ul>
      <h2>FAQs</h2>
      <dl>
        <dt>Do clients use social media to find professionals?</dt><dd>Over 90% of affluent consumers research professionals online, and 73% check social media profiles as part of their vetting process.</dd>
        <dt>Which platforms should I be on?</dt><dd>Depends on your audience. LinkedIn for B2B, Facebook for local reach, Instagram for visual services, Google Business Profile for all local professionals.</dd>
        <dt>How long to see results?</dt><dd>Brand awareness begins immediately. Lead generation typically starts within 3-6 months. Significant ROI by month 6-12.</dd>
      </dl>
      ${cta}
      ${footer}
    `,
  },

  "/services/website-design": {
    body: `
      ${nav}
      <h1>Website Design Services — Conversion-Optimized Websites for Local Businesses</h1>
      <p>We build websites designed to convert, with SEO built in, mobile-first design, and lightning-fast performance.</p>
      <h2>Stats</h2>
      <ul><li>2s Avg. Load Time</li><li>3x More Conversions</li><li>100% Mobile Responsive</li><li>1-2 Weeks to Launch</li></ul>
      <h2>What's Included</h2>
      <ul><li>Conversion-focused design</li><li>SEO-optimized structure</li><li>Mobile-first responsive</li><li>Fast loading speed</li><li>Call tracking integration</li><li>Google Analytics setup</li><li>Local schema markup</li><li>Content creation</li></ul>
      <h2>FAQs</h2>
      <dl>
        <dt>How long to complete a website?</dt><dd>1-2 weeks for starter templates, 6-8 weeks for premium authority websites.</dd>
        <dt>Do you provide content?</dt><dd>Yes, we handle all SEO-optimized content creation.</dd>
        <dt>Will it work on mobile?</dt><dd>Every website is fully responsive and mobile-optimized with a mobile-first approach.</dd>
      </dl>
      ${cta}
      ${footer}
    `,
  },

  "/services/ai-seo-hub": {
    body: `
      ${nav}
      <h1>AI SEO Hub — All-in-One Managed SEO Platform</h1>
      <p>Six SEO services combined into one AI-powered platform: Technical SEO, On-Page SEO, AEO, GEO, Local SEO, and Link Building.</p>
      <h2>Services Included</h2>
      <ul>
        <li><a href="/services/technical-seo">Technical SEO</a> — Site audits, Core Web Vitals, crawlability</li>
        <li><a href="/services/on-page-seo">On-Page SEO</a> — Content optimization, keyword research</li>
        <li><a href="/services/aeo">Answer Engine Optimization</a> — AI assistant visibility</li>
        <li><a href="/services/geo">Generative Engine Optimization</a> — AI citation building</li>
        <li><a href="/services/local-seo">Local SEO</a> — Google Business Profile, citations</li>
        <li><a href="/services/link-building">Link Building</a> — Digital PR, guest posting</li>
      </ul>
      <h2>Results</h2>
      <ul><li>150% Avg. Traffic Growth</li><li>6 SEO Services Combined</li><li>24/7 AI Monitoring</li><li>90 Days to Results</li></ul>
      ${cta}
      ${footer}
    `,
  },

  "/services/managed-seo-pricing": {
    body: `
      ${nav}
      <h1>Managed SEO Pricing — Transparent Pricing for SEO Services</h1>
      <p>Choose from Starter, Growth, or Authority packages. All include website design, local SEO, technical SEO, on-page SEO, content creation, and authority building.</p>
      <h2>Package Tiers</h2>
      <ul>
        <li><strong>Starter</strong> — 5-10 page website, 25 citations, 2 blog posts/month, 1 PR campaign</li>
        <li><strong>Growth</strong> — 25-page authority website, 50 citations, 4 blog posts/month, 3-channel PR</li>
        <li><strong>Authority</strong> — Full authority website, 100+ citations, 10 blog posts/month, all-channel PR</li>
      </ul>
      <h2>All Packages Include</h2>
      <ul><li>Google Business Profile optimization</li><li>Meta tag optimization</li><li>Schema markup</li><li>Internal linking</li><li>Content creation</li><li>Link building</li></ul>
      ${cta}
      ${footer}
    `,
  },

  "/services/reputation-management": {
    body: `
      ${nav}
      <h1>Reputation Management — AI-Powered Review Management</h1>
      <p>Build trust and control your online reputation with automated review management. Send review requests on autopilot, let AI handle replies, and dominate local search.</p>
      <h2>Features</h2>
      <ul>
        <li><strong>Direct Google Reviews</strong> — Reviews land on your Google Business Profile</li>
        <li><strong>Complete Autopilot Collection</strong> — Automatic outreach to happy customers</li>
        <li><strong>AI-Powered Review Response</strong> — Professional responses within minutes</li>
        <li><strong>Review Monitoring Dashboard</strong> — Google, Facebook, Yelp, 50+ sites</li>
      </ul>
      <h2>Benefits</h2>
      <ul><li>2-5x more reviews within 90 days</li><li>Improved local search rankings within 30-60 days</li><li>24/7 automated monitoring and response</li><li>15-minute setup, no technical skills required</li></ul>
      <h2>FAQs</h2>
      <dl>
        <dt>How quickly will I see more reviews?</dt><dd>Most businesses see increased review volume within 2-4 weeks, with 2-5x more reviews within the first 90 days.</dd>
        <dt>Can this help rank higher in local search?</dt><dd>Yes. Google's algorithm heavily weights review quantity, quality, and recency for local search results.</dd>
        <dt>How much does it cost?</dt><dd>Most small businesses invest $297-497/month, which typically pays for itself through 1-2 additional customers.</dd>
      </dl>
      ${cta}
      ${footer}
    `,
  },

  "/services/ai-receptionist": {
    body: `
      ${nav}
      <h1>AI Receptionist — Never Miss Another Call or Lead</h1>
      <p>24/7 AI-powered phone answering, lead qualification, appointment booking, and multi-channel conversations. Stop losing leads to missed calls.</p>
      <h2>The Problem</h2>
      <ul><li>47% of small businesses miss calls</li><li>85% of callers never call back after being missed</li><li>$1,200 average lost revenue per missed call</li></ul>
      <h2>Features</h2>
      <ul>
        <li><strong>24/7 Inbound Call Handling</strong> — AI answers every call naturally</li>
        <li><strong>Intelligent Lead Qualification</strong> — Gathers info, assesses needs, prioritizes leads</li>
        <li><strong>Automated Appointment Booking</strong> — Books into your calendar with real-time availability</li>
        <li><strong>Multi-Channel Conversations</strong> — SMS, Facebook, Instagram, website chat, Google Business</li>
        <li><strong>Workflow Automation</strong> — Follow-up sequences, SMS confirmations, reminders</li>
        <li><strong>CRM Integration</strong> — Auto-collects contact info, saves call history</li>
      </ul>
      <h2>Results</h2>
      <ul><li>96.7% AI success rate</li><li>67% more calls captured</li><li>600% increase in after-hours bookings</li><li>109% revenue increase</li></ul>
      ${cta}
      ${footer}
    `,
  },

  "/services/crm": {
    body: `
      ${nav}
      <h1>CRM Solutions — AI Client Growth System</h1>
      <p>Convert more leads into paying customers with AI-powered CRM, automated email & SMS followups, pipeline management, and 24/7 lead response.</p>
      <h2>Stats</h2>
      <ul><li>24/7 AI Lead Response</li><li>80% Time Saved on Tasks</li><li>3x More Conversions</li><li>100% Pipeline Visibility</li></ul>
      <h2>Features</h2>
      <ul><li>AI-powered lead response in under 5 minutes</li><li>Automated email & SMS follow-up sequences</li><li>Pipeline management and tracking</li><li>Appointment scheduling integration</li><li>Contact management</li><li>Performance dashboards</li></ul>
      <h2>Results</h2>
      <ul><li>-98% lead response time (from 4+ hours to under 5 min)</li><li>+209% lead conversion rate</li><li>+149% monthly revenue</li></ul>
      ${cta}
      ${footer}
    `,
  },

  "/services/linkedin-outreach": {
    body: `
      ${nav}
      <h1>LinkedIn Outreach — B2B Lead Generation Through LinkedIn</h1>
      <p>Connect with decision-makers and automate outreach with a personal touch. Build targeted lead lists, personalized messaging, and consistent follow-ups.</p>
      <h2>Stats</h2>
      <ul><li>500+ Targeted Prospects/Month</li><li>25% Connection Accept Rate</li><li>15+ Qualified Meetings/Month</li><li>100% Personalized Outreach</li></ul>
      <h2>What Makes Us Different</h2>
      <ul>
        <li><strong>Done-With-You, Not DIY</strong> — We build and execute the strategy with you</li>
        <li><strong>AI-Assisted, Human-Reviewed</strong> — Technology handles research, humans ensure authenticity</li>
        <li><strong>Conversion-Focused</strong> — Goal is consultations that turn into clients</li>
        <li><strong>Proven Playbook</strong> — Refined across dozens of industries</li>
      </ul>
      ${cta}
      ${footer}
    `,
  },

  "/services/quad-bots": {
    body: `
      ${nav}
      <h1>AI QuadBots — Four AI Agents Working Together</h1>
      <p>Conversational AI, Voice AI, Lead Generator Bot, and Supervisor OS — four AI agents working in concert to capture, qualify, and convert leads 24/7.</p>
      <h2>The Four Bots</h2>
      <ul>
        <li><strong>Conversational AI</strong> — Website chat, SMS, and social media messaging</li>
        <li><strong>Voice AI</strong> — Natural-sounding phone conversations for inbound calls</li>
        <li><strong>Lead Generator Bot</strong> — Proactive outreach and lead qualification</li>
        <li><strong>Supervisor OS</strong> — Orchestrates all bots, escalates to humans when needed</li>
      </ul>
      ${cta}
      ${footer}
    `,
  },

  "/industries/hvac": {
    body: `
      ${nav}
      <h1>HVAC Marketing — Digital Marketing for HVAC Companies</h1>
      <p>AI-powered digital marketing designed specifically for HVAC businesses. Dominate local search, capture emergency calls, and grow your service business.</p>
      <h2>Services for HVAC Companies</h2>
      <ul><li>Local SEO & Google Business Profile optimization</li><li>Google Ads & LSA management</li><li>Website design optimized for HVAC</li><li>Reputation management</li><li>AI receptionist for after-hours calls</li><li>CRM & lead nurturing</li></ul>
      <h2>Why HVAC Companies Choose Us</h2>
      <ul><li>Emergency call capture 24/7</li><li>Seasonal campaign management</li><li>Service area optimization</li><li>Competitor displacement strategies</li></ul>
      ${cta}
      ${footer}
    `,
  },

  "/industries/home-services": {
    body: `
      ${nav}
      <h1>Home Services Marketing — Digital Marketing for Contractors</h1>
      <p>Complete digital marketing for home service contractors including plumbers, electricians, roofers, remodelers, landscapers, and more.</p>
      <h2>Industries We Serve</h2>
      <ul><li>Plumbing</li><li>Electrical</li><li>Roofing</li><li>Remodeling</li><li>HVAC</li><li>Landscaping</li><li>Pest Control</li><li>Cleaning Services</li><li>Pool & Spa</li><li>Tree Service</li><li>Painting</li><li>Flooring</li></ul>
      <h2>Services</h2>
      <ul><li>SEO & Local Search Optimization</li><li>Google Ads & LSA</li><li>Website Design</li><li>Reputation Management</li><li>Social Media</li><li>AI Automation</li></ul>
      ${cta}
      ${footer}
    `,
  },

  "/industries/dental": {
    body: `
      ${nav}
      <h1>Dental Marketing — Digital Marketing for Dental Practices</h1>
      <p>Attract more patients, fill your schedule, and grow your dental practice with AI-powered digital marketing designed specifically for dentists.</p>
      <h2>Services for Dental Practices</h2>
      <ul><li>Local SEO for dentists</li><li>Google Ads targeting dental keywords</li><li>Patient review management</li><li>Website design for dental practices</li><li>Social media management</li><li>AI receptionist for patient inquiries</li></ul>
      <h2>Results</h2>
      <ul><li>+200% new patients per month</li><li>+176% cosmetic case value</li><li>#1 Google rankings</li></ul>
      ${cta}
      ${footer}
    `,
  },

  "/industries/med-spa": {
    body: `
      ${nav}
      <h1>Med Spa Marketing — Digital Marketing for Medical Spas</h1>
      <p>Attract high-value aesthetic clients with AI-powered digital marketing designed for med spas. From Botox to body contouring, we fill your treatment rooms.</p>
      <h2>Services for Med Spas</h2>
      <ul><li>Local SEO for med spas</li><li>Instagram & Facebook marketing</li><li>Google Ads for aesthetic treatments</li><li>Before/after portfolio management</li><li>Patient review generation</li><li>AI receptionist and booking</li></ul>
      ${cta}
      ${footer}
    `,
  },

  "/industries/chiropractor": {
    body: `
      ${nav}
      <h1>Chiropractor Marketing — Digital Marketing for Chiropractic Practices</h1>
      <p>Grow your chiropractic practice with AI-powered digital marketing. Attract new patients, build your reputation, and dominate local search.</p>
      <h2>Services for Chiropractors</h2>
      <ul><li>Local SEO for chiropractors</li><li>Google Ads targeting chiropractic keywords</li><li>Patient review management</li><li>Website design for chiropractic practices</li><li>Social media management</li><li>AI receptionist for patient scheduling</li></ul>
      ${cta}
      ${footer}
    `,
  },

  "/industries/auto-repair": {
    body: `
      ${nav}
      <h1>Auto Repair Marketing — Digital Marketing for Auto Repair Shops</h1>
      <p>Drive more customers to your auto repair shop with AI-powered digital marketing. Capture emergency repair calls, build reviews, and dominate local search.</p>
      <h2>Services for Auto Repair Shops</h2>
      <ul><li>Local SEO for auto repair</li><li>Google Ads & LSA for mechanics</li><li>Review management</li><li>Website design for auto shops</li><li>AI receptionist for service scheduling</li><li>CRM & follow-up automation</li></ul>
      ${cta}
      ${footer}
    `,
  },

  "/industries/photographers": {
    body: `
      ${nav}
      <h1>Photographer Marketing — Digital Marketing for Photography Businesses</h1>
      <p>Attract more clients and book more sessions with AI-powered digital marketing designed for photographers. From weddings to portraits, we fill your calendar.</p>
      <h2>Services for Photographers</h2>
      <ul><li>SEO for photography businesses</li><li>Instagram & Pinterest marketing</li><li>Google Ads for photography</li><li>Portfolio website design</li><li>Review management</li><li>Social media content strategy</li></ul>
      <h2>Email & SMS Automation Workflows</h2>
      <p>Automated client nurturing sequences that turn inquiries into booked sessions — from initial contact through post-session follow-up.</p>
      <ul>
        <li><strong>Inquiry Auto-Response</strong> — Instant email & SMS reply within seconds of a new lead</li>
        <li><strong>Nurture Sequences</strong> — Multi-step follow-up campaigns for wedding, portrait, and family photography</li>
        <li><strong>Booking Reminders</strong> — Automated session reminders and preparation guides</li>
        <li><strong>Post-Session Follow-Up</strong> — Review requests, gallery delivery, and upsell campaigns</li>
        <li><strong>Seasonal Campaigns</strong> — Mini-session promotions, holiday specials, and back-to-school offers</li>
      </ul>
      <h2>AI-Powered Content System</h2>
      <ul><li>Content Agents — Research, write, and optimize blog posts, social captions, and website copy</li><li>Content Refiners — Tone matching, SEO optimization, and brand voice consistency</li><li>Topical Authority — Build search authority with pillar content and supporting articles</li></ul>
      <h2>Predictable Marketing System</h2>
      <ol><li>Get Found — SEO, Google Business Profile, paid ads</li><li>Get Chosen — Portfolio, reviews, social proof</li><li>Get Booked — AI receptionist, automated follow-up, CRM</li><li>Get Referrals — Review requests, referral programs, repeat client campaigns</li></ol>
      ${cta}
      ${footer}
    `,
  },

  "/industries/realtors": {
    body: `
      ${nav}
      <h1>Realtor Marketing — Digital Marketing for Real Estate Agents</h1>
      <p>Generate more leads, build your brand, and close more deals with AI-powered digital marketing designed for real estate professionals.</p>
      <h2>Services for Realtors</h2>
      <ul><li>Local SEO for real estate</li><li>Google & Facebook Ads for listings</li><li>IDX website integration</li><li>Social media management</li><li>AI receptionist for lead capture</li><li>CRM & lead nurturing</li><li>LinkedIn outreach for networking</li></ul>
      <h2>IDXAddons Platform — Real Estate Tools for IDX Broker Websites</h2>
      <p>IDXAddons is our all-in-one platform for IDX Broker users with 75+ tools to enhance real estate websites on WordPress, Wix, Duda, or any builder.</p>
      <ul>
        <li><strong>IDX Search Tools</strong> — Advanced property search with map-based, polygon, and radius search</li>
        <li><strong>Google Map Search</strong> — Interactive map with MLS data overlay and neighborhood insights</li>
        <li><strong>Home Valuation Tool</strong> — Plunk-powered instant property valuations for lead capture</li>
        <li><strong>Listing Showcase Widgets</strong> — Featured listings, new listings, open houses, and sold properties</li>
        <li><strong>Agent Roster Pages</strong> — Team pages with bio, listings, and contact forms</li>
        <li><strong>Customizable Layouts & Templates</strong> — Search results, listing details, and agent pages with full style control</li>
        <li><strong>Lead Capture Integration</strong> — Forced registration, saved searches, and CRM sync</li>
      </ul>
      <h2>Realtor Growth System</h2>
      <ul>
        <li><strong>Website & IDX</strong> — Conversion-optimized real estate website with IDX integration</li>
        <li><strong>SEO & Content</strong> — Neighborhood pages, market reports, and local keyword targeting</li>
        <li><strong>Paid Advertising</strong> — Google, Facebook, and Instagram ads for buyer and seller leads</li>
        <li><strong>Reputation Management</strong> — Automated review requests and response management</li>
        <li><strong>AI Receptionist</strong> — 24/7 lead capture and appointment scheduling</li>
        <li><strong>CRM & Nurturing</strong> — Automated drip campaigns, pipeline tracking, and lead scoring</li>
      </ul>
      ${cta}
      ${footer}
    `,
  },
};

export function getRouteHtml(path: string): string {
  const content = routeContent[path];
  if (!content) {
    return `<div id="root"><h1>GrowSmallBiz Digital Marketing</h1><p>Loading...</p></div>`;
  }
  return `<div id="root">${content.body}</div>`;
}
