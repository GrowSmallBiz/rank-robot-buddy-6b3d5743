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
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Decorative arrows */}
      <div className="absolute top-8 left-4 md:left-12 text-primary opacity-60">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="rotate-[30deg]">
          <path d="M10 40 C 30 10, 60 10, 70 40" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
          <path d="M55 35 L 70 40 L 60 52" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="absolute bottom-8 right-4 md:right-12 text-primary opacity-60">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="rotate-[-30deg]">
          <path d="M70 40 C 50 70, 20 70, 10 40" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
          <path d="M25 45 L 10 40 L 20 28" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-4">
            Get a Consultation
          </h2>
          <p className="text-muted-foreground text-lg">
            Fill out this form, and one of our account managers will reach out to you with insights on your site.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-lg font-bold text-foreground">First Name <span className="text-destructive">*</span></label>
              <Input
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className="bg-transparent border-0 border-b border-muted-foreground/30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
              />
              {errors.firstName && <p className="text-destructive text-sm">{errors.firstName}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-lg font-bold text-foreground">Last Name <span className="text-destructive">*</span></label>
              <Input
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className="bg-transparent border-0 border-b border-muted-foreground/30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
              />
              {errors.lastName && <p className="text-destructive text-sm">{errors.lastName}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-lg font-bold text-foreground">Business Email <span className="text-destructive">*</span></label>
            <Input
              type="email"
              placeholder="Business Email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="bg-transparent border-0 border-b border-muted-foreground/30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
            />
            {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-lg font-bold text-foreground">Phone Number <span className="text-destructive">*</span></label>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="bg-transparent border-0 border-b border-muted-foreground/30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
            />
            {errors.phone && <p className="text-destructive text-sm">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-lg font-bold text-foreground">Monthly Budget <span className="text-destructive">*</span></label>
            <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
              <SelectTrigger className="bg-transparent border-0 border-b border-muted-foreground/30 rounded-none px-0 focus:ring-0 focus-visible:ring-0 focus-visible:border-primary">
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
            {errors.budget && <p className="text-destructive text-sm">{errors.budget}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-lg font-bold text-foreground">Your Question <span className="text-destructive">*</span></label>
            <Textarea
              placeholder="Have a specific question? Let us know..."
              value={formData.question}
              onChange={(e) => handleChange("question", e.target.value)}
              className="bg-transparent border-0 border-b border-muted-foreground/30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary min-h-[60px] resize-none"
            />
            {errors.question && <p className="text-destructive text-sm">{errors.question}</p>}
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
    </section>
  );
};
