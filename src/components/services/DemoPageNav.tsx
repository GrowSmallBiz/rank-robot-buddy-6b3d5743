import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const DemoPageNav = () => (
  <>
    {/* Schedule a Consultation CTA */}
    <section className="py-16" style={{ backgroundColor: "hsl(var(--ghl-section-bg))" }}>
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <Button variant="hero" size="xl" asChild>
          <Link to="/services/marketing-automation-for-small-business#ready-to-talk">
            Schedule a Consultation
          </Link>
        </Button>
      </div>
    </section>

    {/* Back to All Demos */}
    <div className="text-center py-8" style={{ backgroundColor: "hsl(var(--background))" }}>
      <Button variant="heroOutline" size="lg" asChild>
        <Link to="/services/marketing-automation-for-small-business#demo-videos">
          <ArrowLeft className="w-5 h-5 mr-2" />
          View All Demo Videos
        </Link>
      </Button>
    </div>
  </>
);
