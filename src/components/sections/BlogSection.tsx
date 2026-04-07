import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  slug?: string;
}

interface BlogSectionProps {
  posts: BlogPost[];
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
  viewAllLink?: string;
}

export const BlogSection = ({
  posts,
  title = "Latest Insights",
  subtitle = "Expert tips and strategies to grow your business",
  showViewAll = true,
  viewAllLink = "#"
}: BlogSectionProps) => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 section-glow" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden card-hover group"
            >
              {/* Placeholder Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-display font-bold text-primary">
                      {post.category.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                  <div className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <div className="pt-2">
                  <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to={viewAllLink}>
                View All Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

// Pre-defined blog posts for different contexts
export const generalBlogPosts: BlogPost[] = [
  {
    title: "The Complete Guide to AI SEO in 2025",
    excerpt: "Learn how AI is transforming search engine optimization and what your business needs to do to stay ahead of the competition.",
    category: "AI SEO",
    author: "Sarah Mitchell",
    date: "Dec 28, 2025",
    readTime: "8 min read"
  },
  {
    title: "Local SEO Strategies That Actually Work",
    excerpt: "Discover proven local SEO tactics that help small businesses dominate their market and attract more customers.",
    category: "Local SEO",
    author: "Michael Chen",
    date: "Dec 22, 2025",
    readTime: "6 min read"
  },
  {
    title: "How to Optimize Your Website for Voice Search",
    excerpt: "Voice search is growing rapidly. Here's how to ensure your business gets found when customers ask their smart devices for help.",
    category: "Voice Search",
    author: "Emily Rodriguez",
    date: "Dec 18, 2025",
    readTime: "5 min read"
  }
];

export const hvacBlogPosts: BlogPost[] = [
  {
    title: "HVAC SEO: How to Rank #1 for Emergency AC Repair",
    excerpt: "Learn the strategies top HVAC companies use to capture emergency service calls and dominate local search results.",
    category: "HVAC SEO",
    author: "Mike Thompson",
    date: "Dec 28, 2025",
    readTime: "7 min read"
  },
  {
    title: "Google Business Profile Optimization for HVAC Companies",
    excerpt: "Your Google Business Profile is your digital storefront. Here's how to optimize it for maximum visibility and leads.",
    category: "Local SEO",
    author: "Sarah Chen",
    date: "Dec 22, 2025",
    readTime: "6 min read"
  },
  {
    title: "How to Get More 5-Star Reviews for Your HVAC Business",
    excerpt: "Reviews are crucial for local rankings. Discover ethical strategies to generate more positive reviews from happy customers.",
    category: "Reputation",
    author: "David Martinez",
    date: "Dec 18, 2025",
    readTime: "5 min read"
  }
];

export const dentalBlogPosts: BlogPost[] = [
  {
    title: "Dental SEO: Attracting High-Value Cosmetic Patients",
    excerpt: "Learn how to rank for lucrative cosmetic dentistry keywords and attract patients seeking premium treatments.",
    category: "Dental SEO",
    author: "Subrata Guha",
    date: "Dec 28, 2025",
    readTime: "8 min read"
  },
  {
    title: "How to Rank #1 for 'Dentist Near Me' Searches",
    excerpt: "Local search dominance is essential for dental practices. Here's your complete guide to local SEO success.",
    category: "Local SEO",
    author: "Michael Chen",
    date: "Dec 22, 2025",
    readTime: "6 min read"
  },
  {
    title: "Building Patient Trust Through Online Reviews",
    excerpt: "Discover how top dental practices leverage online reviews to build credibility and attract new patients.",
    category: "Reputation",
    author: "Sarah Mitchell",
    date: "Dec 18, 2025",
    readTime: "5 min read"
  }
];

export const medSpaBlogPosts: BlogPost[] = [
  {
    title: "Med Spa SEO: Ranking for Botox and Filler Keywords",
    excerpt: "Learn how to dominate search results for high-value aesthetic treatment keywords and attract premium clients.",
    category: "Med Spa SEO",
    author: "Dr. Jessica Liu",
    date: "Dec 28, 2025",
    readTime: "8 min read"
  },
  {
    title: "Instagram vs SEO: Which Drives More Med Spa Clients?",
    excerpt: "Compare the ROI of social media marketing versus SEO for medical spas and learn where to invest your budget.",
    category: "Marketing",
    author: "Amanda Roberts",
    date: "Dec 22, 2025",
    readTime: "6 min read"
  },
  {
    title: "HIPAA-Compliant Marketing for Med Spas",
    excerpt: "Navigate the complexities of healthcare marketing while staying compliant with HIPAA regulations.",
    category: "Compliance",
    author: "Michael Chen",
    date: "Dec 18, 2025",
    readTime: "5 min read"
  }
];

export const chiropractorBlogPosts: BlogPost[] = [
  {
    title: "Chiropractic SEO: Ranking for Back Pain Keywords",
    excerpt: "Learn how to capture patients searching for back pain, neck pain, and spinal health solutions in your area.",
    category: "Chiro SEO",
    author: "Dr. James Wilson",
    date: "Dec 28, 2025",
    readTime: "7 min read"
  },
  {
    title: "Content Marketing for Chiropractors: What Works",
    excerpt: "Discover the content strategies that help chiropractic practices build authority and attract new patients.",
    category: "Content",
    author: "Sarah Mitchell",
    date: "Dec 22, 2025",
    readTime: "6 min read"
  },
  {
    title: "How to Get More Patient Referrals Through SEO",
    excerpt: "Combine the power of referral marketing with SEO to create a sustainable patient acquisition strategy.",
    category: "Marketing",
    author: "Emily Rodriguez",
    date: "Dec 18, 2025",
    readTime: "5 min read"
  }
];

export const autoRepairBlogPosts: BlogPost[] = [
  {
    title: "Auto Repair SEO: Ranking for Emergency Car Services",
    excerpt: "Learn how to capture customers searching for immediate auto repair services in your area.",
    category: "Auto SEO",
    author: "Tony Martinez",
    date: "Dec 28, 2025",
    readTime: "7 min read"
  },
  {
    title: "Building Trust Online for Your Auto Shop",
    excerpt: "Discover how successful auto repair shops use online presence to build credibility and attract customers.",
    category: "Reputation",
    author: "Michael Chen",
    date: "Dec 22, 2025",
    readTime: "6 min read"
  },
  {
    title: "Google Maps Optimization for Auto Repair Shops",
    excerpt: "Your Google Maps listing is crucial for local visibility. Here's how to optimize it for maximum impact.",
    category: "Local SEO",
    author: "Sarah Mitchell",
    date: "Dec 18, 2025",
    readTime: "5 min read"
  }
];

export const photographerBlogPosts: BlogPost[] = [
  {
    title: "Photography SEO: Ranking for Wedding Photographer",
    excerpt: "Learn the SEO strategies that help wedding photographers book more high-value clients through organic search.",
    category: "Photo SEO",
    author: "Sarah Williams",
    date: "Dec 28, 2025",
    readTime: "8 min read"
  },
  {
    title: "Image SEO: Making Your Portfolio Work Harder",
    excerpt: "Your stunning photos can drive traffic too. Learn how to optimize images for search engines.",
    category: "Image SEO",
    author: "Marcus Chen",
    date: "Dec 22, 2025",
    readTime: "6 min read"
  },
  {
    title: "Booking More Sessions Through Local Search",
    excerpt: "Discover how photographers use local SEO to fill their calendars with ideal clients.",
    category: "Local SEO",
    author: "Emily Rodriguez",
    date: "Dec 18, 2025",
    readTime: "5 min read"
  }
];

export const technicalSeoBlogPosts: BlogPost[] = [
  {
    title: "Core Web Vitals: The Complete Optimization Guide",
    excerpt: "Everything you need to know about Core Web Vitals and how to improve your scores for better rankings.",
    category: "Technical SEO",
    author: "David Chen",
    date: "Dec 28, 2025",
    readTime: "10 min read"
  },
  {
    title: "Site Speed Optimization: From Slow to Lightning Fast",
    excerpt: "Practical techniques to dramatically improve your website loading speed and user experience.",
    category: "Performance",
    author: "Sarah Mitchell",
    date: "Dec 22, 2025",
    readTime: "8 min read"
  },
  {
    title: "Schema Markup: Getting Rich Snippets in Search",
    excerpt: "Learn how to implement structured data to stand out in search results with enhanced listings.",
    category: "Schema",
    author: "Michael Rodriguez",
    date: "Dec 18, 2025",
    readTime: "6 min read"
  }
];

export const onPageSeoBlogPosts: BlogPost[] = [
  {
    title: "Keyword Research in 2025: What's Changed",
    excerpt: "Modern keyword research goes beyond volume. Learn how to find keywords that convert.",
    category: "On-Page SEO",
    author: "Emily Rodriguez",
    date: "Dec 28, 2025",
    readTime: "7 min read"
  },
  {
    title: "Title Tags & Meta Descriptions That Get Clicks",
    excerpt: "Your title tag is prime real estate. Learn how to write titles that rank AND get clicks.",
    category: "Optimization",
    author: "Sarah Mitchell",
    date: "Dec 22, 2025",
    readTime: "5 min read"
  },
  {
    title: "Internal Linking Strategy for Better Rankings",
    excerpt: "Discover how strategic internal linking can boost your most important pages in search results.",
    category: "Link Strategy",
    author: "Michael Chen",
    date: "Dec 18, 2025",
    readTime: "6 min read"
  }
];

export const aeoBlogPosts: BlogPost[] = [
  {
    title: "Answer Engine Optimization: The Complete Guide",
    excerpt: "Learn how to optimize your content to become the answer AI platforms cite and recommend.",
    category: "AEO",
    author: "Dr. Sarah Mitchell",
    date: "Dec 28, 2025",
    readTime: "10 min read"
  },
  {
    title: "Getting Your Brand Cited by ChatGPT",
    excerpt: "Practical strategies to increase your brand's visibility and citations in AI-generated responses.",
    category: "AI Visibility",
    author: "Michael Chen",
    date: "Dec 22, 2025",
    readTime: "7 min read"
  },
  {
    title: "FAQ Schema: The Key to AI Search Visibility",
    excerpt: "How structured FAQ content helps AI systems understand and cite your expertise.",
    category: "Schema",
    author: "Emily Rodriguez",
    date: "Dec 18, 2025",
    readTime: "5 min read"
  }
];

export const geoBlogPosts: BlogPost[] = [
  {
    title: "Generative Engine Optimization Explained",
    excerpt: "Understanding how AI platforms decide which sources to cite and how to become one of them.",
    category: "GEO",
    author: "Dr. Alex Thompson",
    date: "Dec 28, 2025",
    readTime: "9 min read"
  },
  {
    title: "Building Entity Authority for AI Recognition",
    excerpt: "Learn how to establish your brand as an authoritative entity that AI systems trust and cite.",
    category: "Entity SEO",
    author: "Sarah Mitchell",
    date: "Dec 22, 2025",
    readTime: "8 min read"
  },
  {
    title: "E-E-A-T Signals That Matter for GEO",
    excerpt: "Experience, Expertise, Authoritativeness, and Trust are crucial for AI visibility. Here's how to build them.",
    category: "Authority",
    author: "Michael Chen",
    date: "Dec 18, 2025",
    readTime: "6 min read"
  }
];

export const localSeoBlogPosts: BlogPost[] = [
  {
    title: "Google Business Profile: The 2025 Optimization Guide",
    excerpt: "Everything you need to know to maximize your GBP visibility and attract more local customers.",
    category: "Local SEO",
    author: "Sarah Mitchell",
    date: "Dec 28, 2025",
    readTime: "8 min read"
  },
  {
    title: "Local Citations: Quality Over Quantity",
    excerpt: "Learn which citation sources actually matter and how to build a citation profile that ranks.",
    category: "Citations",
    author: "Michael Chen",
    date: "Dec 22, 2025",
    readTime: "6 min read"
  },
  {
    title: "Winning the Local Map Pack: Proven Strategies",
    excerpt: "Discover the tactics successful local businesses use to dominate the Google Map Pack.",
    category: "Map Pack",
    author: "Emily Rodriguez",
    date: "Dec 18, 2025",
    readTime: "7 min read"
  }
];

export const linkBuildingBlogPosts: BlogPost[] = [
  {
    title: "Link Building in 2025: What Actually Works",
    excerpt: "Forget outdated tactics. Learn the link building strategies that move the needle today.",
    category: "Link Building",
    author: "David Chen",
    date: "Dec 28, 2025",
    readTime: "9 min read"
  },
  {
    title: "Digital PR: Earning Links Through Newsworthy Content",
    excerpt: "How to create content that earns natural backlinks from authoritative publications.",
    category: "Digital PR",
    author: "Sarah Mitchell",
    date: "Dec 22, 2025",
    readTime: "7 min read"
  },
  {
    title: "Competitor Backlink Analysis: Finding Link Opportunities",
    excerpt: "Use competitor analysis to discover untapped link building opportunities in your niche.",
    category: "Strategy",
    author: "Michael Chen",
    date: "Dec 18, 2025",
    readTime: "6 min read"
  }
];

export const paidMediaBlogPosts: BlogPost[] = [
  {
    title: "Google Ads for Local Businesses: The 2025 Playbook",
    excerpt: "Master Google PPC campaigns that generate qualified leads while maximizing every dollar of your ad budget.",
    category: "Google Ads",
    author: "Marcus Johnson",
    date: "Dec 28, 2025",
    readTime: "9 min read"
  },
  {
    title: "Meta Retargeting: Cut Your Cost Per Lead by 60%",
    excerpt: "Learn how to build retargeting audiences from SEO traffic and dramatically reduce your advertising costs.",
    category: "Retargeting",
    author: "Sarah Mitchell",
    date: "Dec 24, 2025",
    readTime: "7 min read"
  },
  {
    title: "Google LSA vs PPC: Which Is Right for Your Business?",
    excerpt: "Compare Local Service Ads and traditional PPC to find the best advertising strategy for your industry.",
    category: "Google Ads",
    author: "David Chen",
    date: "Dec 20, 2025",
    readTime: "6 min read"
  },
  {
    title: "TikTok Ads for Local Services: A Beginner's Guide",
    excerpt: "Discover how service businesses are using TikTok advertising to reach younger demographics and build brand awareness.",
    category: "TikTok Ads",
    author: "Emily Rodriguez",
    date: "Dec 16, 2025",
    readTime: "8 min read"
  },
  {
    title: "YouTube Advertising: Building Trust Through Video",
    excerpt: "How to create YouTube ad campaigns that educate prospects and build brand authority before they need your services.",
    category: "YouTube Ads",
    author: "Michael Chen",
    date: "Dec 12, 2025",
    readTime: "7 min read"
  },
  {
    title: "The Full-Funnel Strategy: SEO + Paid Media for Maximum ROI",
    excerpt: "Combine organic traffic with strategic retargeting to create a marketing engine that reduces cost per acquisition.",
    category: "Strategy",
    author: "Sarah Mitchell",
    date: "Dec 8, 2025",
    readTime: "10 min read"
  }
];

export const reputationManagementBlogPosts: BlogPost[] = [
  {
    title: "The Complete Guide to Google Review Management in 2025",
    excerpt: "Learn how to build a 5-star reputation on Google, respond to reviews professionally, and turn customer feedback into your best marketing tool.",
    category: "Reviews",
    author: "Sarah Mitchell",
    date: "Dec 28, 2025",
    readTime: "9 min read"
  },
  {
    title: "AI-Powered Review Response: Best Practices",
    excerpt: "Discover how AI can help you respond to every review within minutes while maintaining your authentic brand voice.",
    category: "AI Automation",
    author: "Michael Chen",
    date: "Dec 24, 2025",
    readTime: "7 min read"
  },
  {
    title: "How to Handle Negative Reviews Without Damaging Your Brand",
    excerpt: "Turn negative feedback into opportunities. Learn the proven framework for responding to unhappy customers professionally.",
    category: "Crisis Management",
    author: "Dr. Emily Rodriguez",
    date: "Dec 20, 2025",
    readTime: "6 min read"
  },
  {
    title: "Review Generation Strategies That Actually Work",
    excerpt: "Stop leaving reviews to chance. Implement automated systems that consistently generate positive feedback from happy customers.",
    category: "Automation",
    author: "David Martinez",
    date: "Dec 16, 2025",
    readTime: "8 min read"
  },
  {
    title: "Online Reputation & Local SEO: The Connection Explained",
    excerpt: "Understand how your review profile directly impacts local search rankings and how to leverage reviews for better visibility.",
    category: "Local SEO",
    author: "Sarah Mitchell",
    date: "Dec 12, 2025",
    readTime: "7 min read"
  },
  {
    title: "Multi-Platform Reputation Management: Beyond Google",
    excerpt: "Monitor and manage your reputation across Yelp, Facebook, industry sites, and 50+ platforms from one dashboard.",
    category: "Strategy",
    author: "Michael Chen",
    date: "Dec 8, 2025",
    readTime: "6 min read"
  }
];

export default BlogSection;
