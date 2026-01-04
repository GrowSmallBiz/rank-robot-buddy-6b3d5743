import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company?: string;
  role?: string;
  rating?: number;
  result?: string;
  delay?: number;
  variant?: "default" | "compact";
  className?: string;
}

export const TestimonialCard = ({
  quote,
  author,
  company,
  role,
  rating = 5,
  result,
  delay = 0,
  variant = "default",
  className = "",
}: TestimonialCardProps) => {
  return (
    <div
      className={`testimonial-card animate-fade-up ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {variant === "default" && (
        <Quote className="w-8 h-8 text-primary/30 mb-4" />
      )}
      
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "fill-amber-400 text-amber-400"
                : "text-muted-foreground/30"
            }`}
          />
        ))}
      </div>

      <blockquote className="text-foreground mb-4 italic leading-relaxed">
        "{quote}"
      </blockquote>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          {(role || company) && (
            <p className="text-sm text-muted-foreground">
              {role}
              {role && company && ", "}
              {company}
            </p>
          )}
        </div>
        
        {result && (
          <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
            {result}
          </span>
        )}
      </div>
    </div>
  );
};

interface TestimonialsGridProps {
  testimonials: Array<{
    quote: string;
    author: string;
    company?: string;
    role?: string;
    rating?: number;
    result?: string;
  }>;
  columns?: 2 | 3 | 4;
  className?: string;
}

export const TestimonialsGrid = ({
  testimonials,
  columns = 3,
  className = "",
}: TestimonialsGridProps) => {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          {...testimonial}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
};
