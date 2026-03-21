import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const consultationSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50),
  lastName: z.string().trim().min(1, "Last name is required").max(50),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  companyName: z.string().trim().max(100).optional(),
  websiteUrl: z.string().trim().max(255).optional(),
  servicesNeeded: z.string().min(1, "Please select a service"),
  question: z.string().trim().min(1, "Please tell us what you want to improve").max(1000),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

const serviceOptions = [
  { value: "website-design", label: "Website Design" },
  { value: "local-seo", label: "Local SEO" },
  { value: "google-meta-ads", label: "Google & Meta Ads" },
  { value: "reputation-management", label: "Reputation Management" },
  { value: "crm-automation", label: "CRM & Automation" },
  { value: "ai-receptionist", label: "AI Receptionist & Lead Handling" },
  { value: "full-growth-system", label: "Full Growth System" },
  { value: "not-sure", label: "Not Sure — Need Guidance" },
];

export const ConsultationFormSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ConsultationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    websiteUrl: "",
    servicesNeeded: "",
    question: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});

  const handleChange = (field: keyof ConsultationFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = consultationSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ConsultationFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ConsultationFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Thank you for reaching out!",
      description: "We'll review your information and reach out with the next best step.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      websiteUrl: "",
      servicesNeeded: "",
      question: "",
    });
    setErrors({});
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#2d465c' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="max-w-xl mx-auto relative rounded-2xl shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]"
          style={{ border: '2px solid #17a2b8' }}
        >
          <div className="relative rounded-2xl p-8" style={{ backgroundColor: '#191321' }}>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-1">
                GET A
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
                <span className="text-accent">CONSULTATION</span>
              </h2>
              <p className="text-white/80 text-lg">
                Tell us about your business and what you want to improve. We'll review your current digital presence and reach out with the next best step.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-lg font-bold text-white">First Name <span className="text-accent">*</span></label>
                  <Input
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
                  />
                  {errors.firstName && <p className="text-accent text-sm">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-lg font-bold text-white">Last Name <span className="text-accent">*</span></label>
                  <Input
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
                  />
                  {errors.lastName && <p className="text-accent text-sm">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-lg font-bold text-white">Business Email <span className="text-accent">*</span></label>
                  <Input
                    type="email"
                    placeholder="Business Email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
                  />
                  {errors.email && <p className="text-accent text-sm">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-lg font-bold text-white">Phone Number <span className="text-accent">*</span></label>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
                  />
                  {errors.phone && <p className="text-accent text-sm">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-lg font-bold text-white">Company Name</label>
                  <Input
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={(e) => handleChange("companyName", e.target.value)}
                    className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-lg font-bold text-white">Website URL</label>
                  <Input
                    placeholder="Website URL"
                    value={formData.websiteUrl}
                    onChange={(e) => handleChange("websiteUrl", e.target.value)}
                    className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-lg font-bold text-white">Services Needed <span className="text-accent">*</span></label>
                <Select value={formData.servicesNeeded} onValueChange={(value) => handleChange("servicesNeeded", value)}>
                  <SelectTrigger className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-primary focus-visible:ring-1 focus-visible:ring-primary [&>span]:text-white/50 [&[data-state=open]>span]:text-white">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.servicesNeeded && <p className="text-accent text-sm">{errors.servicesNeeded}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-lg font-bold text-white">What are you trying to improve? <span className="text-accent">*</span></label>
                <Textarea
                  placeholder="Tell us about your goals and what you'd like to improve..."
                  value={formData.question}
                  onChange={(e) => handleChange("question", e.target.value)}
                  className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary min-h-[100px] resize-none"
                />
                {errors.question && <p className="text-accent text-sm">{errors.question}</p>}
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 text-lg font-bold rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                >
                  {isSubmitting ? "Submitting..." : "Submit!"} 
                  {!isSubmitting && <ArrowUpRight className="ml-2 h-5 w-5" />}
                </Button>
              </div>

              <p className="text-white/50 text-xs text-center">
                No-pressure strategy call. We'll use your details only to contact you about your request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
