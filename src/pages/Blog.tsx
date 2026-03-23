import { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  Search,
  BookOpen
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  generalBlogPosts,
  hvacBlogPosts,
  dentalBlogPosts,
  medSpaBlogPosts,
  chiropractorBlogPosts,
  autoRepairBlogPosts,
  photographerBlogPosts,
  technicalSeoBlogPosts,
  onPageSeoBlogPosts,
  aeoBlogPosts,
  geoBlogPosts,
  localSeoBlogPosts,
  linkBuildingBlogPosts,
  paidMediaBlogPosts,
  BlogPost
} from "@/components/sections/BlogSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";

// Combine all blog posts with their source category
const allBlogPosts: (BlogPost & { sourceCategory: string })[] = [
  ...generalBlogPosts.map(post => ({ ...post, sourceCategory: "General" })),
  ...paidMediaBlogPosts.map(post => ({ ...post, sourceCategory: "Paid Media" })),
  ...technicalSeoBlogPosts.map(post => ({ ...post, sourceCategory: "Technical SEO" })),
  ...onPageSeoBlogPosts.map(post => ({ ...post, sourceCategory: "On-Page SEO" })),
  ...aeoBlogPosts.map(post => ({ ...post, sourceCategory: "AEO" })),
  ...geoBlogPosts.map(post => ({ ...post, sourceCategory: "GEO" })),
  ...localSeoBlogPosts.map(post => ({ ...post, sourceCategory: "Local SEO" })),
  ...linkBuildingBlogPosts.map(post => ({ ...post, sourceCategory: "Link Building" })),
  ...hvacBlogPosts.map(post => ({ ...post, sourceCategory: "HVAC" })),
  ...dentalBlogPosts.map(post => ({ ...post, sourceCategory: "Dental" })),
  ...medSpaBlogPosts.map(post => ({ ...post, sourceCategory: "Med Spa" })),
  ...chiropractorBlogPosts.map(post => ({ ...post, sourceCategory: "Chiropractor" })),
  ...autoRepairBlogPosts.map(post => ({ ...post, sourceCategory: "Auto Repair" })),
  ...photographerBlogPosts.map(post => ({ ...post, sourceCategory: "Photography" })),
];

const categories = [
  { id: "all", name: "All Articles", count: allBlogPosts.length },
  { id: "Paid Media", name: "Paid Media", count: paidMediaBlogPosts.length },
  { id: "Technical SEO", name: "Technical SEO", count: technicalSeoBlogPosts.length },
  { id: "On-Page SEO", name: "On-Page SEO", count: onPageSeoBlogPosts.length },
  { id: "Local SEO", name: "Local SEO", count: localSeoBlogPosts.length },
  { id: "AEO", name: "AEO", count: aeoBlogPosts.length },
  { id: "GEO", name: "GEO", count: geoBlogPosts.length },
  { id: "Link Building", name: "Link Building", count: linkBuildingBlogPosts.length },
  { id: "HVAC", name: "HVAC", count: hvacBlogPosts.length },
  { id: "Dental", name: "Dental", count: dentalBlogPosts.length },
  { id: "Med Spa", name: "Med Spa", count: medSpaBlogPosts.length },
  { id: "Chiropractor", name: "Chiropractor", count: chiropractorBlogPosts.length },
  { id: "Auto Repair", name: "Auto Repair", count: autoRepairBlogPosts.length },
  { id: "Photography", name: "Photography", count: photographerBlogPosts.length },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    let posts = allBlogPosts;

    // Filter by category
    if (activeCategory !== "all") {
      posts = posts.filter(post => post.sourceCategory === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        post =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query)
      );
    }

    return posts;
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <PageJsonLd
        pageType="Blog"
        name="Blog | GrowSmallBiz Digital Marketing"
        description="Digital marketing insights, SEO tips, and AI strategies for local businesses."
        url="/blog"
        breadcrumbs={[{ name: "Blog", url: "/blog" }]}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <BookOpen className="w-4 h-4" />
                Insights & Resources
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100">
              Local Service Business <span className="text-gradient">Growth Blog</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up delay-200">
              Expert insights on SEO, paid media, and digital marketing strategies 
              to help your local business dominate online.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto animate-fade-up delay-300">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-card border-border"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border bg-card/50 sticky top-20 z-40 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category.name}
                <span className="ml-2 opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <>
              <p className="text-muted-foreground mb-8">
                Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
                {activeCategory !== "all" && ` in ${activeCategory}`}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <article
                    key={index}
                    className="bg-card border border-border rounded-2xl overflow-hidden card-hover group animate-fade-up"
                    style={{ animationDelay: `${(index % 9) * 0.05}s` }}
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
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-2 py-1 bg-background/80 text-foreground text-xs font-medium rounded-full">
                          {post.sourceCategory}
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
                        <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all cursor-pointer">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                No articles found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 text-primary font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Blog;