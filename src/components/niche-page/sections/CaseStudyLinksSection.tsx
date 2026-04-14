import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CaseStudyLink } from "../NicheConfig";

interface CaseStudyLinksSectionProps {
  links: CaseStudyLink[];
}

export const CaseStudyLinksSection = ({ links }: CaseStudyLinksSectionProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Client <span className="text-primary">Results</span>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            See the real data behind our strategies
          </p>
        </div>

        <div className={`grid gap-6 max-w-4xl mx-auto ${links.length === 1 ? 'md:grid-cols-1 max-w-xl' : 'md:grid-cols-2'}`}>
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.url}
                href={link.url}
                className="group flex items-start gap-4 rounded-2xl border-2 border-[hsl(188_78%_41%_/_0.25)] bg-[hsl(210_45%_18%)] p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[hsl(188_78%_41%_/_0.5)] hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {link.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    View Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
