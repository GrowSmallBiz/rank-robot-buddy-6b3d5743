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
import { PageJsonLd } from "@/components/seo/PageJsonLd";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
  businessName: z.string().trim().min(1, "Business name is required").max(100, "Business name must be less than 100 characters"),
  industry: z.string().trim().min(1, "Industry is required"),
  zipCode: z.string().trim().min(5, "Valid zip code is required").max(10, "Zip code must be less than 10 characters"),
  website: z.string().trim().max(255, "Website must be less than 255 characters").optional(),
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

const industries = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "General Contractor",
  "Remodeling",
  "Landscaping",
  "Pest Control",
  "Cleaning Services",
  "Auto Repair",
  "Dental",
  "Chiropractic",
  "Med Spa",
  "Real Estate",
  "Photography",
  "Other Home Services",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    industry: "",
    zipCode: "",
    website: "",
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
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        businessName: "",
        industry: "",
        zipCode: "",
        website: "",
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
      <PageJsonLd
        pageType="ContactPage"
        name="Contact GrowSmallBiz Digital Marketing"
        description="Get in touch for a free marketing assessment."
        url="/contact"
        breadcrumbs={[{ name: "Contact", url: "/contact" }]}
      />
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
                    {/* First & Last Name */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-lg font-bold text-white">First Name <span className="text-accent">*</span></label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
                        />
                        {errors.firstName && (
                          <p className="text-sm text-accent">{errors.firstName}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-lg font-bold text-white">Last Name <span className="text-accent">*</span></label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Smith"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
                        />
                        {errors.lastName && (
                          <p className="text-sm text-accent">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid sm:grid-cols-2 gap-6">
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
                    </div>

                    {/* Business Name & Industry */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-lg font-bold text-white">Business Name <span className="text-accent">*</span></label>
                        <Input
                          id="businessName"
                          name="businessName"
                          placeholder="ABC Home Services"
                          value={formData.businessName}
                          onChange={handleChange}
                          className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
                        />
                        {errors.businessName && (
                          <p className="text-sm text-accent">{errors.businessName}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-lg font-bold text-white">Niche/Industry <span className="text-accent">*</span></label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="flex h-12 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                          <option value="" className="bg-[#191321] text-white">Select your industry...</option>
                          {industries.map((ind) => (
                            <option key={ind} value={ind} className="bg-[#191321] text-white">
                              {ind}
                            </option>
                          ))}
                        </select>
                        {errors.industry && (
                          <p className="text-sm text-accent">{errors.industry}</p>
                        )}
                      </div>
                    </div>

                    {/* Zip Code & Website */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-lg font-bold text-white">Business Zip Code <span className="text-accent">*</span></label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          placeholder="78701"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
                        />
                        {errors.zipCode && (
                          <p className="text-sm text-accent">{errors.zipCode}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-lg font-bold text-white">Business Website</label>
                        <Input
                          id="website"
                          name="website"
                          placeholder="https://yourwebsite.com"
                          value={formData.website}
                          onChange={handleChange}
                          className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
                        />
                        {errors.website && (
                          <p className="text-sm text-accent">{errors.website}</p>
                        )}
                      </div>
                    </div>

                    {/* Service Interest */}
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