import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
  service: z.string().optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  "Technical SEO",
  "On-Page SEO",
  "Local SEO",
  "Link Building",
  "AEO / GEO",
  "Paid Media & Advertising",
  "Full-Funnel Strategy",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <MessageSquare className="w-4 h-4" />
                Get In Touch
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up delay-100">
              Let's <span className="text-gradient">Grow Together</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up delay-200">
              Ready to dominate local search? Get in touch for a free consultation 
              and learn how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16" style={{ backgroundColor: '#2d465c' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div 
                className="relative rounded-2xl p-8 animate-fade-up shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]"
                style={{ backgroundColor: '#191321', border: '2px solid #17a2b8' }}
              >
                <h2 className="text-2xl font-display font-bold text-white mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-white/70 mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-lg font-bold text-white">Full Name <span className="text-accent">*</span></label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
                        />
                        {errors.name && (
                          <p className="text-sm text-accent">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-lg font-bold text-white">Email Address <span className="text-accent">*</span></label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
                        />
                        {errors.email && (
                          <p className="text-sm text-accent">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-lg font-bold text-white">Phone Number</label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
                        />
                        {errors.phone && (
                          <p className="text-sm text-accent">{errors.phone}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-lg font-bold text-white">Service Interest</label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="flex h-12 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                          <option value="" className="bg-[#191321] text-white">Select a service...</option>
                          {services.map((service) => (
                            <option key={service} value={service} className="bg-[#191321] text-white">
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-lg font-bold text-white">Message <span className="text-accent">*</span></label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your business and goals..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary min-h-[120px] resize-none"
                      />
                      {errors.message && (
                        <p className="text-sm text-accent">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 text-lg font-bold rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div 
                className="rounded-2xl p-6 animate-fade-up shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]" 
                style={{ animationDelay: "0.1s", backgroundColor: '#191321', border: '2px solid #17a2b8' }}
              >
                <h3 className="text-lg font-display font-semibold text-white mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Email</p>
                      <a href="mailto:hello@growsmallbiz.com" className="text-white hover:text-primary transition-colors">
                        hello@growsmallbiz.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Phone</p>
                      <a href="tel:+15551234567" className="text-white hover:text-primary transition-colors">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Office</p>
                      <p className="text-white">
                        123 Marketing Lane<br />
                        Austin, TX 78701
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Business Hours</p>
                      <p className="text-white">
                        Mon - Fri: 9:00 AM - 6:00 PM<br />
                        Sat - Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div 
                className="rounded-2xl p-6 animate-fade-up shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]" 
                style={{ animationDelay: "0.2s", backgroundColor: '#191321', border: '2px solid #17a2b8' }}
              >
                <h3 className="text-lg font-display font-semibold text-white mb-2">
                  Quick Response Guarantee
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  We respond to all inquiries within 24 hours. For urgent matters, 
                  give us a call directly.
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  Average response time: 4 hours
                </div>
              </div>

              {/* Free Assessment CTA */}
              <div 
                className="rounded-2xl p-6 animate-fade-up shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]" 
                style={{ animationDelay: "0.3s", backgroundColor: '#191321', border: '2px solid #17a2b8' }}
              >
                <h3 className="text-lg font-display font-semibold text-white mb-2">
                  Prefer a Free Assessment?
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  Get a comprehensive SEO audit and growth strategy for your business 
                  at no cost.
                </p>
                <Button className="w-full group rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90" asChild>
                  <a href="/free-assessment">
                    Get Free Assessment
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;