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

      <section className="pt-32 pb-24 relative overflow-hidden" style={{ backgroundColor: '#2d465c' }}>
        {/* Background Effects */}
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Free AI SEO Assessment
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                Get Your <span className="text-gradient">Custom SEO Roadmap</span>
              </h1>
              <p className="text-lg text-white/70">
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
                          : "bg-white/10 border-white/30 text-white/50"
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
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
              <p className="text-sm text-white/60 text-center mt-2">
                Step {currentStep} of {totalSteps}
              </p>
            </div>

            {/* Form Card */}
            <div 
              className="rounded-2xl p-8 animate-fade-up delay-200 shadow-[0_0_30px_#17a2b8,0_0_60px_#17a2b8]"
              style={{ backgroundColor: '#191321', border: '2px solid #17a2b8' }}
            >
              {/* Step 1: Contact Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-2">
                      Let's start with your information
                    </h2>
                    <p className="text-white/70">
                      Tell us about yourself so we can send your personalized assessment.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-lg font-bold text-white">
                        Your Name <span className="text-accent">*</span>
                      </label>
                      <Input
                        id="contactName"
                        placeholder="John Smith"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="mt-2 bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-lg font-bold text-white">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@yourbusiness.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2 bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-lg font-bold text-white">
                        Phone Number <span className="text-accent">*</span>
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-2 bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-lg font-bold text-white">
                        Business Name <span className="text-accent">*</span>
                      </label>
                      <Input
                        id="businessName"
                        placeholder="Your Business Name"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="mt-2 bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
                        required
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-lg font-bold text-white">
                        Website URL (optional)
                      </label>
                      <Input
                        id="websiteUrl"
                        type="url"
                        placeholder="https://yourbusiness.com"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        className="mt-2 bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Business Type */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-2">
                      What type of business do you have?
                    </h2>
                    <p className="text-white/70">
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
                            ? "border-primary bg-primary/20"
                            : "border-white/30 hover:border-primary/50 hover:bg-white/10"
                        }`}
                      >
                        <span className="text-2xl">{type.icon}</span>
                        <span className="font-medium text-white">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Website Status */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-2">
                      Do you have a website?
                    </h2>
                    <p className="text-white/70">
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
                            ? "border-primary bg-primary/20"
                            : "border-white/30 hover:border-primary/50 hover:bg-white/10"
                        }`}
                        onClick={() => handleWebsiteStatusSelect(status.id)}
                      >
                        <RadioGroupItem value={status.id} id={status.id} className="border-white/50 text-primary" />
                        <Label htmlFor={status.id} className="font-medium text-white cursor-pointer flex-1">
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
                    <h2 className="text-2xl font-display font-bold text-white mb-2">
                      What marketing are you currently doing?
                    </h2>
                    <p className="text-white/70 mb-4">Select all that apply.</p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {currentMarketing.map((option) => (
                        <div
                          key={option.id}
                          onClick={() => handleMarketingToggle(option.id)}
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                            formData.currentMarketing.includes(option.id)
                              ? "border-primary bg-primary/20"
                              : "border-white/30 hover:border-primary/50 hover:bg-white/10"
                          }`}
                        >
                          <Checkbox
                            checked={formData.currentMarketing.includes(option.id)}
                            onCheckedChange={() => handleMarketingToggle(option.id)}
                            className="border-white/50"
                          />
                          <span className="font-medium text-white">{option.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-2">
                      What are your primary goals?
                    </h2>
                    <p className="text-white/70 mb-4">Select your top priorities.</p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {primaryGoals.map((goal) => (
                        <div
                          key={goal.id}
                          onClick={() => handleGoalToggle(goal.id)}
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                            formData.primaryGoals.includes(goal.id)
                              ? "border-primary bg-primary/20"
                              : "border-white/30 hover:border-primary/50 hover:bg-white/10"
                          }`}
                        >
                          <Checkbox
                            checked={formData.primaryGoals.includes(goal.id)}
                            onCheckedChange={() => handleGoalToggle(goal.id)}
                            className="border-white/50"
                          />
                          <span className="font-medium text-white">{goal.label}</span>
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
                    <h2 className="text-2xl font-display font-bold text-white mb-2">
                      What's your monthly marketing budget?
                    </h2>
                    <p className="text-white/70 mb-4">
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
                              ? "border-primary bg-primary/20"
                              : "border-white/30 hover:border-primary/50 hover:bg-white/10"
                          }`}
                          onClick={() => handleBudgetSelect(budget.id)}
                        >
                          <RadioGroupItem value={budget.id} id={budget.id} className="border-white/50 text-primary" />
                          <Label htmlFor={budget.id} className="font-medium text-white cursor-pointer flex-1">
                            {budget.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-2">
                      When are you looking to get started?
                    </h2>
                    <p className="text-white/70 mb-4">
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
                              ? "border-primary bg-primary/20"
                              : "border-white/30 hover:border-primary/50 hover:bg-white/10"
                          }`}
                          onClick={() => handleTimelineSelect(tl.id)}
                        >
                          <RadioGroupItem value={tl.id} id={tl.id} className="border-white/50 text-primary" />
                          <Label htmlFor={tl.id} className="font-medium text-white cursor-pointer flex-1">
                            {tl.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <label className="text-lg font-bold text-white">
                      Anything else you'd like us to know? (optional)
                    </label>
                    <Textarea
                      id="additionalInfo"
                      placeholder="Tell us about your biggest marketing challenges, current competitors, or specific goals..."
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      className="mt-2 min-h-[100px] bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary resize-none"
                    />
                  </div>

                  <p className="text-sm text-white/60">
                    By submitting, you agree to receive communications from GrowSmallBiz. 
                    We respect your privacy and will never share your information.
                  </p>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-8 mt-8 border-t border-white/20">
                {currentStep > 1 ? (
                  <Button variant="ghost" onClick={handleBack} className="text-white hover:bg-white/10">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep < totalSteps ? (
                  <Button 
                    onClick={handleNext} 
                    disabled={!canProceed()} 
                    className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button 
                    onClick={handleSubmit} 
                    disabled={!canProceed()} 
                    className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  >
                    Get My Free Assessment
                    <Sparkles className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 text-center animate-fade-up delay-300">
              <p className="text-sm text-white/60 mb-4">
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
