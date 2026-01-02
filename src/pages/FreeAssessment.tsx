import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, ArrowLeft, CheckCircle2, Building2, Globe, Target, Users, Sparkles } from "lucide-react";

const businessTypes = [
  { id: "hvac", label: "HVAC / Plumbing / Electrical", icon: "🔧" },
  { id: "dental", label: "Dental Practice", icon: "🦷" },
  { id: "medspa", label: "Med Spa / Aesthetics", icon: "✨" },
  { id: "auto", label: "Auto Repair / Body Shop", icon: "🚗" },
  { id: "chiropractic", label: "Chiropractic / Physical Therapy", icon: "💆" },
  { id: "photographer", label: "Photography Business", icon: "📷" },
  { id: "legal", label: "Law Firm / Legal Services", icon: "⚖️" },
  { id: "other", label: "Other Local Service", icon: "🏢" },
];

const websiteStatus = [
  { id: "yes-happy", label: "Yes, and I'm happy with it" },
  { id: "yes-outdated", label: "Yes, but it's outdated or needs work" },
  { id: "no-need", label: "No, I need a website" },
  { id: "building", label: "Currently building one" },
];

const monthlyBudget = [
  { id: "under-1k", label: "Under $1,000/month" },
  { id: "1k-3k", label: "$1,000 - $3,000/month" },
  { id: "3k-5k", label: "$3,000 - $5,000/month" },
  { id: "5k-plus", label: "$5,000+/month" },
  { id: "unsure", label: "Not sure yet" },
];

const currentMarketing = [
  { id: "google-ads", label: "Google Ads / PPC" },
  { id: "social-ads", label: "Facebook/Instagram Ads" },
  { id: "seo", label: "SEO (with another agency)" },
  { id: "referrals", label: "Word of mouth / Referrals only" },
  { id: "directories", label: "Directories (Yelp, HomeAdvisor, etc.)" },
  { id: "nothing", label: "Not doing any marketing currently" },
];

const primaryGoals = [
  { id: "more-leads", label: "Get more phone calls & leads" },
  { id: "rank-higher", label: "Rank higher on Google" },
  { id: "beat-competitors", label: "Outrank local competitors" },
  { id: "ai-visibility", label: "Appear in AI search (ChatGPT, etc.)" },
  { id: "brand-authority", label: "Build brand authority online" },
  { id: "reviews", label: "Get more positive reviews" },
];

const timeline = [
  { id: "asap", label: "Ready to start now" },
  { id: "1-month", label: "Within 1 month" },
  { id: "3-months", label: "Within 3 months" },
  { id: "researching", label: "Just researching options" },
];

const FreeAssessment = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: "",
    websiteStatus: "",
    websiteUrl: "",
    monthlyBudget: "",
    currentMarketing: [] as string[],
    primaryGoals: [] as string[],
    timeline: "",
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    additionalInfo: "",
  });

  // Auto-select industry from URL parameter
  useEffect(() => {
    const industry = searchParams.get("industry");
    if (industry) {
      const matchingType = businessTypes.find(t => t.id === industry);
      if (matchingType) {
        setFormData(prev => ({ ...prev, businessType: industry }));
      }
    }
  }, [searchParams]);

  const totalSteps = 5;

  const handleBusinessTypeSelect = (type: string) => {
    setFormData({ ...formData, businessType: type });
  };

  const handleWebsiteStatusSelect = (status: string) => {
    setFormData({ ...formData, websiteStatus: status });
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData({ ...formData, monthlyBudget: budget });
  };

  const handleTimelineSelect = (tl: string) => {
    setFormData({ ...formData, timeline: tl });
  };

  const handleMarketingToggle = (id: string) => {
    const updated = formData.currentMarketing.includes(id)
      ? formData.currentMarketing.filter((m) => m !== id)
      : [...formData.currentMarketing, id];
    setFormData({ ...formData, currentMarketing: updated });
  };

  const handleGoalToggle = (id: string) => {
    const updated = formData.primaryGoals.includes(id)
      ? formData.primaryGoals.filter((g) => g !== id)
      : [...formData.primaryGoals, id];
    setFormData({ ...formData, primaryGoals: updated });
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.businessName && formData.contactName && formData.email && formData.phone;
      case 2:
        return formData.businessType !== "";
      case 3:
        return formData.websiteStatus !== "";
      case 4:
        return formData.currentMarketing.length > 0 && formData.primaryGoals.length > 0;
      case 5:
        return formData.monthlyBudget !== "" && formData.timeline !== "";
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // In a real application, this would send the data to a backend
    console.log("Form submitted:", formData);
    toast({
      title: "Assessment Request Submitted!",
      description: "We'll review your information and reach out within 24 hours.",
    });
    // Reset form or redirect
    setCurrentStep(1);
    setFormData({
      businessType: "",
      websiteStatus: "",
      websiteUrl: "",
      monthlyBudget: "",
      currentMarketing: [],
      primaryGoals: [],
      timeline: "",
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      additionalInfo: "",
    });
  };

  const stepIcons = [Users, Building2, Globe, Target, Sparkles];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Free AI SEO Assessment
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Get Your <span className="text-gradient">Custom SEO Roadmap</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Answer a few quick questions so we can create a personalized strategy for your business.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8 animate-fade-up delay-100">
              <div className="flex justify-between items-center mb-3">
                {[1, 2, 3, 4, 5].map((step) => {
                  const StepIcon = stepIcons[step - 1];
                  return (
                    <div
                      key={step}
                      className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                        step === currentStep
                          ? "bg-primary border-primary text-primary-foreground"
                          : step < currentStep
                          ? "bg-primary/20 border-primary text-primary"
                          : "bg-muted border-border text-muted-foreground"
                      }`}
                    >
                      {step < currentStep ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <StepIcon className="w-5 h-5" />
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Step {currentStep} of {totalSteps}
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl animate-fade-up delay-200">
              {/* Step 1: Contact Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                      Let's start with your information
                    </h2>
                    <p className="text-muted-foreground">
                      Tell us about yourself so we can send your personalized assessment.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactName" className="text-foreground">
                        Your Name *
                      </Label>
                      <Input
                        id="contactName"
                        placeholder="John Smith"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@yourbusiness.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-foreground">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="businessName" className="text-foreground">
                        Business Name *
                      </Label>
                      <Input
                        id="businessName"
                        placeholder="Your Business Name"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="mt-2"
                        required
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <Label htmlFor="websiteUrl" className="text-foreground">
                        Website URL (optional)
                      </Label>
                      <Input
                        id="websiteUrl"
                        type="url"
                        placeholder="https://yourbusiness.com"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Business Type */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                      What type of business do you have?
                    </h2>
                    <p className="text-muted-foreground">
                      This helps us tailor recommendations for your industry.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {businessTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => handleBusinessTypeSelect(type.id)}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                          formData.businessType === type.id
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50 hover:bg-muted/50"
                        }`}
                      >
                        <span className="text-2xl">{type.icon}</span>
                        <span className="font-medium text-foreground">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Website Status */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                      Do you have a website?
                    </h2>
                    <p className="text-muted-foreground">
                      We'll assess your current online presence.
                    </p>
                  </div>

                  <RadioGroup
                    value={formData.websiteStatus}
                    onValueChange={handleWebsiteStatusSelect}
                    className="space-y-3"
                  >
                    {websiteStatus.map((status) => (
                      <div
                        key={status.id}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                          formData.websiteStatus === status.id
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50 hover:bg-muted/50"
                        }`}
                        onClick={() => handleWebsiteStatusSelect(status.id)}
                      >
                        <RadioGroupItem value={status.id} id={status.id} />
                        <Label htmlFor={status.id} className="font-medium text-foreground cursor-pointer flex-1">
                          {status.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {/* Step 4: Current Marketing & Goals */}
              {currentStep === 4 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                      What marketing are you currently doing?
                    </h2>
                    <p className="text-muted-foreground mb-4">Select all that apply.</p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {currentMarketing.map((option) => (
                        <div
                          key={option.id}
                          onClick={() => handleMarketingToggle(option.id)}
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                            formData.currentMarketing.includes(option.id)
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50 hover:bg-muted/50"
                          }`}
                        >
                          <Checkbox
                            checked={formData.currentMarketing.includes(option.id)}
                            onCheckedChange={() => handleMarketingToggle(option.id)}
                          />
                          <span className="font-medium text-foreground">{option.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                      What are your primary goals?
                    </h2>
                    <p className="text-muted-foreground mb-4">Select your top priorities.</p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {primaryGoals.map((goal) => (
                        <div
                          key={goal.id}
                          onClick={() => handleGoalToggle(goal.id)}
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                            formData.primaryGoals.includes(goal.id)
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50 hover:bg-muted/50"
                          }`}
                        >
                          <Checkbox
                            checked={formData.primaryGoals.includes(goal.id)}
                            onCheckedChange={() => handleGoalToggle(goal.id)}
                          />
                          <span className="font-medium text-foreground">{goal.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Budget & Timeline */}
              {currentStep === 5 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                      What's your monthly marketing budget?
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      This helps us recommend the right package for your needs.
                    </p>

                    <RadioGroup
                      value={formData.monthlyBudget}
                      onValueChange={handleBudgetSelect}
                      className="space-y-3"
                    >
                      {monthlyBudget.map((budget) => (
                        <div
                          key={budget.id}
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                            formData.monthlyBudget === budget.id
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50 hover:bg-muted/50"
                          }`}
                          onClick={() => handleBudgetSelect(budget.id)}
                        >
                          <RadioGroupItem value={budget.id} id={budget.id} />
                          <Label htmlFor={budget.id} className="font-medium text-foreground cursor-pointer flex-1">
                            {budget.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                      When are you looking to get started?
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We'll prioritize based on your timeline.
                    </p>

                    <RadioGroup
                      value={formData.timeline}
                      onValueChange={handleTimelineSelect}
                      className="space-y-3"
                    >
                      {timeline.map((tl) => (
                        <div
                          key={tl.id}
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                            formData.timeline === tl.id
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50 hover:bg-muted/50"
                          }`}
                          onClick={() => handleTimelineSelect(tl.id)}
                        >
                          <RadioGroupItem value={tl.id} id={tl.id} />
                          <Label htmlFor={tl.id} className="font-medium text-foreground cursor-pointer flex-1">
                            {tl.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Label htmlFor="additionalInfo" className="text-foreground">
                      Anything else you'd like us to know? (optional)
                    </Label>
                    <Textarea
                      id="additionalInfo"
                      placeholder="Tell us about your biggest marketing challenges, current competitors, or specific goals..."
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      className="mt-2 min-h-[100px]"
                    />
                  </div>

                  <p className="text-sm text-muted-foreground">
                    By submitting, you agree to receive communications from GrowSmallBiz. 
                    We respect your privacy and will never share your information.
                  </p>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-8 mt-8 border-t border-border">
                {currentStep > 1 ? (
                  <Button variant="ghost" onClick={handleBack}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep < totalSteps ? (
                  <Button onClick={handleNext} disabled={!canProceed()} variant="hero">
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={!canProceed()} variant="hero">
                    Get My Free Assessment
                    <Sparkles className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 text-center animate-fade-up delay-300">
              <p className="text-sm text-muted-foreground mb-4">
                ✓ No obligation  ✓ Personalized recommendations  ✓ Response within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeAssessment;
