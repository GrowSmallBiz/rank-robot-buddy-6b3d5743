import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const consultationSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone number must be less than 20 characters"),
  budget: z.string().min(1, "Please select a budget range"),
  question: z.string().trim().min(1, "Question is required").max(1000, "Question must be less than 1000 characters"),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

const budgetOptions = [
  { value: "under-1000", label: "Under $1,000/month" },
  { value: "1000-2500", label: "$1,000 - $2,500/month" },
  { value: "2500-5000", label: "$2,500 - $5,000/month" },
  { value: "5000-10000", label: "$5,000 - $10,000/month" },
  { value: "over-10000", label: "Over $10,000/month" },
];

export const ConsultationFormSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ConsultationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Thank you for reaching out!",
      description: "One of our account managers will contact you within 24 hours.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      budget: "",
      question: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#2d465c' }}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Form card with dark background and glow effect */}
        <div 
          className="max-w-xl mx-auto relative rounded-2xl shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]"
          style={{ border: '2px solid #17a2b8' }}
        >
          {/* Form container with header */}
          <div className="relative rounded-2xl p-8" style={{ backgroundColor: '#191321' }}>
            <div className="text-center mb-8">
              <p className="text-primary font-medium mb-3 text-sm">Ready to Talk?</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4">
                Get a <span className="text-accent">Consultation</span>
              </h2>
              <p className="text-white/80 text-lg">
                Tell us a little about your business and what kind of growth support you need. We will review your inquiry and follow up with the next best step.
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

          <div className="space-y-2">
            <label className="text-lg font-bold text-white">Monthly Budget <span className="text-accent">*</span></label>
            <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
              <SelectTrigger className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-primary focus-visible:ring-1 focus-visible:ring-primary [&>span]:text-white/50 [&[data-state=open]>span]:text-white">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                {budgetOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.budget && <p className="text-accent text-sm">{errors.budget}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-lg font-bold text-white">Your Question <span className="text-accent">*</span></label>
            <Textarea
              placeholder="Have a specific question? Let us know..."
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
