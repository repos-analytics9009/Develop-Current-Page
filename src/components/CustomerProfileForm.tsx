import svgPaths from "../imports/svg-9gkbubp64j";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Building2, Pickaxe, Truck, Factory, MoreHorizontal } from "lucide-react";
import { toast } from "sonner@2.0.3";

function Logo() {
  return (
    <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Logo">
      <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Layer_1-2">
        <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Layer_1-21">
          <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Layer_1-2-2">
            <div className="absolute contents left-[calc(50%+22.7px)] top-[calc(50%-0.01px)] translate-x-[-50%] translate-y-[-50%]" data-name="Group">
              <div className="absolute h-[17.079px] left-[calc(50%-8.97px)] top-[calc(50%+0.01px)] translate-x-[-50%] translate-y-[-50%] w-[13.282px]" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
                  <path d={svgPaths.p39e0d6f0} fill="var(--fill-0, #010101)" id="Vector" />
                </svg>
              </div>
              <div className="absolute h-[17.063px] left-[calc(50%+5.85px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[11.143px]" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 18">
                  <path d={svgPaths.p170d0900} fill="var(--fill-0, #010101)" id="Vector" />
                </svg>
              </div>
              <div className="absolute h-[17.063px] left-[calc(50%+20.78px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[13.065px]" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
                  <path d={svgPaths.p2d9ad100} fill="var(--fill-0, #010101)" id="Vector" />
                </svg>
              </div>
              <div className="absolute h-[17.792px] left-[calc(50%+36.99px)] top-[calc(50%-0.02px)] translate-x-[-50%] translate-y-[-50%] w-[16.583px]" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 18">
                  <path d={svgPaths.p17ffaf00} fill="var(--fill-0, #010101)" id="Vector" />
                </svg>
              </div>
              <div className="absolute h-[17.746px] left-[calc(50%+53.96px)] top-[calc(50%+0.03px)] translate-x-[-50%] translate-y-[-50%] w-[14.072px]" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18">
                  <path d={svgPaths.p263dc400} fill="var(--fill-0, #010101)" id="Vector" />
                </svg>
              </div>
            </div>
            <div className="absolute h-[17.437px] left-[calc(50%-41.54px)] top-[calc(50%+0.2px)] translate-x-[-50%] translate-y-[-50%] w-[38.915px]" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 18">
                <path d={svgPaths.p274612d0} fill="var(--fill-0, black)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[56px] relative shrink-0 w-full z-[2]" data-name="Header">
      <div className="h-[56px] overflow-clip relative rounded-[inherit] w-full">
        <Logo />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function CustomerProfileForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    otherIndustry: "",
    contactPerson: "",
    mobile: "",
    email: "",
    monthlyConsumption: "",
    monthlyPurchased: "",
    totalBusinessSites: "",
    totalAssetCount: "",
    monthlyCreditWithPartner: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleIndustryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, industry: value, otherIndustry: value !== "Other" ? "" : prev.otherIndustry }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare data for local storage
    const industryValue = formData.industry === "Other" ? formData.otherIndustry : formData.industry;
    const localStorageData = {
      ...formData,
      industry: industryValue,
    };
    
    // Save to localStorage
    localStorage.setItem("customerProfile", JSON.stringify(localStorageData));
    
    // Show success message
    toast.success("Profile saved successfully!");
    
    // Navigate to dashboard
    setTimeout(() => {
      navigate("/dashboard");
    }, 500);
  };

  return (
    <div className="bg-white box-border content-stretch flex flex-col isolate items-start p-0 relative size-full">
      <Header />
      
      <div className="box-border content-stretch flex isolate items-start px-0 py-[48px] relative shrink-0 w-full z-[1]">
        <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0 z-[1]">
          <div className="bg-white box-border content-stretch flex flex-col gap-[56px] items-center px-0 py-[56px] relative shrink-0 w-full z-[1]">
            
            {/* Header Text */}
            <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[700px] not-italic relative shrink-0 text-black text-center w-full">
              <p className="font-['Montserrat:Bold',sans-serif] h-[40px] leading-[40px] relative shrink-0 text-[34px] tracking-[-0.34px] w-full">
                Customer Profile Form
              </p>
              <p className="font-['Poppins:Regular',sans-serif] leading-[24px] relative shrink-0 text-[20px] w-[654px]">
                Please fill out the form below to complete your customer profile with Repos Energy.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[32px] items-start max-w-[700px] relative shrink-0 w-full">
              
              {/* Customer Profile Section */}
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black">
                  Customer Profile
                </p>

                {/* Company Name */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <Label className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black">
                    Company Name
                  </Label>
                  <Input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. ABC Fuels Pvt. Ltd."
                    required
                    className="bg-[rgba(255,255,255,0.8)] h-[45px] rounded-[8px] border border-[rgba(0,0,0,0.16)] font-['Poppins:Regular',sans-serif] text-[14px] placeholder:opacity-60"
                  />
                </div>

                {/* Industry */}
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <Label className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black">
                    Industry
                  </Label>
                  
                  {/* Industry Cards Grid */}
                  <div className="grid grid-cols-3 gap-[16px] w-full">
                    {/* Infrastructure */}
                    <button
                      type="button"
                      onClick={() => handleIndustryChange("Infrastructure")}
                      className={`flex flex-col items-center justify-center gap-[12px] p-[20px] rounded-[8px] border-2 transition-all cursor-pointer ${
                        formData.industry === "Infrastructure"
                          ? "border-[#059492] bg-[rgba(5,148,146,0.05)]"
                          : "border-[rgba(0,0,0,0.1)] bg-[rgba(255,255,255,0.8)] hover:border-[#059492] hover:bg-[rgba(5,148,146,0.02)]"
                      }`}
                    >
                      <Building2 
                        className={`size-[40px] ${
                          formData.industry === "Infrastructure" ? "text-[#059492]" : "text-[#666]"
                        }`} 
                        strokeWidth={1.5}
                      />
                      <p className={`font-['Poppins:Medium',sans-serif] text-[14px] text-center ${
                        formData.industry === "Infrastructure" ? "text-[#059492]" : "text-black"
                      }`}>
                        Infrastructure
                      </p>
                    </button>

                    {/* Mining */}
                    <button
                      type="button"
                      onClick={() => handleIndustryChange("Mining")}
                      className={`flex flex-col items-center justify-center gap-[12px] p-[20px] rounded-[8px] border-2 transition-all cursor-pointer ${
                        formData.industry === "Mining"
                          ? "border-[#059492] bg-[rgba(5,148,146,0.05)]"
                          : "border-[rgba(0,0,0,0.1)] bg-[rgba(255,255,255,0.8)] hover:border-[#059492] hover:bg-[rgba(5,148,146,0.02)]"
                      }`}
                    >
                      <Pickaxe 
                        className={`size-[40px] ${
                          formData.industry === "Mining" ? "text-[#059492]" : "text-[#666]"
                        }`} 
                        strokeWidth={1.5}
                      />
                      <p className={`font-['Poppins:Medium',sans-serif] text-[14px] text-center ${
                        formData.industry === "Mining" ? "text-[#059492]" : "text-black"
                      }`}>
                        Mining
                      </p>
                    </button>

                    {/* Logistics */}
                    <button
                      type="button"
                      onClick={() => handleIndustryChange("Logistics")}
                      className={`flex flex-col items-center justify-center gap-[12px] p-[20px] rounded-[8px] border-2 transition-all cursor-pointer ${
                        formData.industry === "Logistics"
                          ? "border-[#059492] bg-[rgba(5,148,146,0.05)]"
                          : "border-[rgba(0,0,0,0.1)] bg-[rgba(255,255,255,0.8)] hover:border-[#059492] hover:bg-[rgba(5,148,146,0.02)]"
                      }`}
                    >
                      <Truck 
                        className={`size-[40px] ${
                          formData.industry === "Logistics" ? "text-[#059492]" : "text-[#666]"
                        }`} 
                        strokeWidth={1.5}
                      />
                      <p className={`font-['Poppins:Medium',sans-serif] text-[14px] text-center ${
                        formData.industry === "Logistics" ? "text-[#059492]" : "text-black"
                      }`}>
                        Logistics
                      </p>
                    </button>

                    {/* Manufacturing */}
                    <button
                      type="button"
                      onClick={() => handleIndustryChange("Manufacturing")}
                      className={`flex flex-col items-center justify-center gap-[12px] p-[20px] rounded-[8px] border-2 transition-all cursor-pointer ${
                        formData.industry === "Manufacturing"
                          ? "border-[#059492] bg-[rgba(5,148,146,0.05)]"
                          : "border-[rgba(0,0,0,0.1)] bg-[rgba(255,255,255,0.8)] hover:border-[#059492] hover:bg-[rgba(5,148,146,0.02)]"
                      }`}
                    >
                      <Factory 
                        className={`size-[40px] ${
                          formData.industry === "Manufacturing" ? "text-[#059492]" : "text-[#666]"
                        }`} 
                        strokeWidth={1.5}
                      />
                      <p className={`font-['Poppins:Medium',sans-serif] text-[14px] text-center ${
                        formData.industry === "Manufacturing" ? "text-[#059492]" : "text-black"
                      }`}>
                        Manufacturing
                      </p>
                    </button>

                    {/* Other */}
                    <button
                      type="button"
                      onClick={() => handleIndustryChange("Other")}
                      className={`flex flex-col items-center justify-center gap-[12px] p-[20px] rounded-[8px] border-2 transition-all cursor-pointer ${
                        formData.industry === "Other"
                          ? "border-[#059492] bg-[rgba(5,148,146,0.05)]"
                          : "border-[rgba(0,0,0,0.1)] bg-[rgba(255,255,255,0.8)] hover:border-[#059492] hover:bg-[rgba(5,148,146,0.02)]"
                      }`}
                    >
                      <MoreHorizontal 
                        className={`size-[40px] ${
                          formData.industry === "Other" ? "text-[#059492]" : "text-[#666]"
                        }`} 
                        strokeWidth={1.5}
                      />
                      <p className={`font-['Poppins:Medium',sans-serif] text-[14px] text-center ${
                        formData.industry === "Other" ? "text-[#059492]" : "text-black"
                      }`}>
                        Other
                      </p>
                    </button>
                  </div>
                  
                  {/* Other Industry Input */}
                  {formData.industry === "Other" && (
                    <Input
                      type="text"
                      name="otherIndustry"
                      value={formData.otherIndustry}
                      onChange={handleChange}
                      placeholder="Specify other industry"
                      required
                      className="bg-[rgba(255,255,255,0.8)] h-[45px] rounded-[8px] border border-[rgba(0,0,0,0.16)] font-['Poppins:Regular',sans-serif] text-[14px] placeholder:opacity-60"
                    />
                  )}
                </div>

                {/* Contact Person */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <Label className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black">
                    Contact Person
                  </Label>
                  <Input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                    className="bg-[rgba(255,255,255,0.8)] h-[45px] rounded-[8px] border border-[rgba(0,0,0,0.16)] font-['Poppins:Regular',sans-serif] text-[14px] placeholder:opacity-60"
                  />
                </div>

                {/* Contact Details - Mobile and Email */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <Label className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black">
                    Contact Details
                  </Label>
                  
                  <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                    {/* Mobile */}
                    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                      <Label className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-[#666]">
                        Mobile
                      </Label>
                      <Input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        required
                        className="bg-[rgba(255,255,255,0.8)] h-[45px] rounded-[8px] border border-[rgba(0,0,0,0.16)] font-['Poppins:Regular',sans-serif] text-[14px] placeholder:opacity-60"
                      />
                    </div>

                    {/* Email */}
                    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                      <Label className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-[#666]">
                        Email
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. contact@company.com"
                        required
                        className="bg-[rgba(255,255,255,0.8)] h-[45px] rounded-[8px] border border-[rgba(0,0,0,0.16)] font-['Poppins:Regular',sans-serif] text-[14px] placeholder:opacity-60"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Metrics Section */}
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black">
                  Business Metrics
                </p>

                {/* Monthly Purchased and Monthly Consumption */}
                <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                    <Label className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black">
                      Monthly Purchased
                    </Label>
                    <Input
                      type="text"
                      name="monthlyPurchased"
                      value={formData.monthlyPurchased}
                      onChange={handleChange}
                      placeholder="e.g. 25,000 L"
                      required
                      className="bg-[rgba(255,255,255,0.8)] h-[45px] rounded-[8px] border border-[rgba(0,0,0,0.16)] font-['Poppins:Regular',sans-serif] text-[14px] placeholder:opacity-60"
                    />
                  </div>

                  <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                    <Label className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black">
                      Monthly Consumption
                    </Label>
                    <Input
                      type="text"
                      name="monthlyConsumption"
                      value={formData.monthlyConsumption}
                      onChange={handleChange}
                      placeholder="e.g. 24,300 L"
                      required
                      className="bg-[rgba(255,255,255,0.8)] h-[45px] rounded-[8px] border border-[rgba(0,0,0,0.16)] font-['Poppins:Regular',sans-serif] text-[14px] placeholder:opacity-60"
                    />
                  </div>
                </div>

                {/* Total Business Sites and Total Asset Count */}
                <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                    <Label className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black">
                      Total Business Sites
                    </Label>
                    <Input
                      type="text"
                      name="totalBusinessSites"
                      value={formData.totalBusinessSites}
                      onChange={handleChange}
                      placeholder="e.g. 5"
                      required
                      className="bg-[rgba(255,255,255,0.8)] h-[45px] rounded-[8px] border border-[rgba(0,0,0,0.16)] font-['Poppins:Regular',sans-serif] text-[14px] placeholder:opacity-60"
                    />
                  </div>

                  <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                    <Label className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black">
                      Total Asset Count
                    </Label>
                    <Input
                      type="text"
                      name="totalAssetCount"
                      value={formData.totalAssetCount}
                      onChange={handleChange}
                      placeholder="e.g. 18"
                      required
                      className="bg-[rgba(255,255,255,0.8)] h-[45px] rounded-[8px] border border-[rgba(0,0,0,0.16)] font-['Poppins:Regular',sans-serif] text-[14px] placeholder:opacity-60"
                    />
                  </div>
                </div>

                {/* Monthly Credit with Partner */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full max-w-[338px]">
                  <Label className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black">
                    Monthly Credit with Partner
                  </Label>
                  <Input
                    type="text"
                    name="monthlyCreditWithPartner"
                    value={formData.monthlyCreditWithPartner}
                    onChange={handleChange}
                    placeholder="e.g. ₹4,00,000"
                    required
                    className="bg-[rgba(255,255,255,0.8)] h-[45px] rounded-[8px] border border-[rgba(0,0,0,0.16)] font-['Poppins:Regular',sans-serif] text-[14px] placeholder:opacity-60 w-full"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`box-border content-stretch flex items-center justify-center px-[24px] py-[12px] relative shrink-0 border-0 transition-colors ${
                  isSubmitting 
                    ? "bg-[#048280] cursor-not-allowed opacity-70" 
                    : "bg-[#059492] cursor-pointer hover:bg-[#048280]"
                }`}
              >
                <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">
                  {isSubmitting ? "Submitting..." : "Submit"}
                </p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}