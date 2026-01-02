import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "GrowSmallBiz transformed our online presence. Our traffic doubled, and we saw a 200% increase in qualified leads within just three months. Their team truly understands our needs.",
    author: "Jamie L.",
    role: "Marketing Director",
    company: "TechStart Inc.",
    rating: 5,
  },
  {
    quote: "The AI-powered approach to SEO is revolutionary. We're now ranking for keywords we never thought possible. The ROI has been exceptional.",
    author: "Marcus R.",
    role: "CEO",
    company: "Digital Commerce Co.",
    rating: 5,
  },
  {
    quote: "Their technical SEO audit revealed issues we'd missed for years. After implementing their recommendations, our Core Web Vitals are now all in the green.",
    author: "Sarah K.",
    role: "Head of Digital",
    company: "Enterprise Solutions",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 section-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-medium mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary/50 border border-border rounded-2xl p-8 space-y-6 animate-fade-up card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
