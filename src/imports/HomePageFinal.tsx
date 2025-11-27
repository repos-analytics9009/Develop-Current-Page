import svgPaths from "./svg-9eox9whfin";
import { NavigationPanel } from "../components/NavigationPanel";
import { Header as SharedHeader } from "../components/Header";
import { useState, useEffect } from "react";

// Helper function to get customer profile data
function getCustomerProfile() {
  const storedData = localStorage.getItem("customerProfile");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return {
    companyName: "Early Bird Logistics Pvt Ltd",
    monthlyConsumption: "9,00,000",
    monthlyPurchased: "10,00,000",
    totalAssetCount: "125",
    totalBusinessSites: "5",
    monthlyCreditWithPartner: "1,00,00,000",
  };
}

function GreetingSection() {
  const [greeting, setGreeting] = useState("");
  const [companyName, setCompanyName] = useState("Early Bird Logistics Pvt Ltd");

  useEffect(() => {
    const updateGreeting = () => {
      const currentHour = new Date().getHours();
      
      if (currentHour >= 5 && currentHour < 12) {
        setGreeting("Good Morning");
      } else if (currentHour >= 12 && currentHour < 17) {
        setGreeting("Good Afternoon");
      } else if (currentHour >= 17 && currentHour < 21) {
        setGreeting("Good Evening");
      } else {
        setGreeting("Good Night");
      }
    };

    // Get company name from localStorage
    const profile = getCustomerProfile();
    setCompanyName(profile.companyName);

    updateGreeting();
    // Update greeting every minute
    const interval = setInterval(updateGreeting, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#7a869a] text-[14px]">
        Hello, {greeting}
      </p>
      <h1 className="font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#091e42] text-[24px]">
        {companyName}
      </h1>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1544a900} fill="var(--fill-0, #36A40F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[rgba(54,164,15,0.15)] box-border content-stretch flex gap-[2px] items-center p-[4px] relative rounded-[4px] shrink-0">
      <Icon />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#36a40f] text-[12px] text-nowrap">
        <p className="leading-[14px] whitespace-pre">+5%</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#091e42] text-[20px]">10,00,000</p>
      <Frame35 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#97a0af] text-[12px] uppercase w-full">Fuel iNVENTORY (L)</p>
      <Frame43 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
          <Frame44 />
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#97a0af] text-[0px] text-[12px] w-full">
            <span>{`Total Fuel in your inventory is up `}</span>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[#36a40f]">2.5%</span>
            <span>{` from last month.`}</span>
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaec] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1544a900} fill="var(--fill-0, #36A40F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[rgba(54,164,15,0.15)] box-border content-stretch flex gap-[2px] items-center p-[4px] relative rounded-[4px] shrink-0">
      <Icon1 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#36a40f] text-[12px] text-nowrap">
        <p className="leading-[14px] whitespace-pre">+20%</p>
      </div>
    </div>
  );
}

function Frame46() {
  const [monthlyPurchased, setMonthlyPurchased] = useState("10,00,000");

  useEffect(() => {
    const profile = getCustomerProfile();
    setMonthlyPurchased(profile.monthlyPurchased);
  }, []);

  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#091e42] text-[20px]">{monthlyPurchased}</p>
      <Frame36 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#97a0af] text-[12px] uppercase w-full">Fuel Purchased (L)</p>
      <Frame46 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
          <Frame47 />
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#97a0af] text-[0px] text-[12px] w-full">
            <span>{`Fuel purchase increased by `}</span>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[#36a40f]">80,000 L</span>
            <span>{` from last month.`}</span>
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaec] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1544a900} fill="var(--fill-0, #36A40F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[rgba(54,164,15,0.15)] box-border content-stretch flex gap-[2px] items-center p-[4px] relative rounded-[4px] shrink-0">
      <Icon2 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#36a40f] text-[12px] text-nowrap">
        <p className="leading-[14px] whitespace-pre">+25%</p>
      </div>
    </div>
  );
}

function Frame48() {
  const [monthlyConsumption, setMonthlyConsumption] = useState("9,00,000");

  useEffect(() => {
    const profile = getCustomerProfile();
    setMonthlyConsumption(profile.monthlyConsumption);
  }, []);

  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#091e42] text-[20px]">{monthlyConsumption}</p>
      <Frame37 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#97a0af] text-[12px] uppercase w-full">Fuel Consumed (L)</p>
      <Frame48 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
          <Frame49 />
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#97a0af] text-[0px] text-[12px] w-full">
            <span>{`Fuel consumption grew by `}</span>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[#36a40f]">87,500 L</span>
            <span>{` since last month.`}</span>
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaec] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1544a900} fill="var(--fill-0, #D94862)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[rgba(217,72,98,0.15)] box-border content-stretch flex gap-[2px] items-center p-[4px] relative rounded-[4px] shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon3 />
        </div>
      </div>
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d94862] text-[12px] text-nowrap">
        <p className="leading-[14px] whitespace-pre">-15%</p>
      </div>
    </div>
  );
}

function Frame50() {
  const [monthlyCreditWithPartner, setMonthlyCreditWithPartner] = useState("1,00,00,000");

  useEffect(() => {
    const profile = getCustomerProfile();
    setMonthlyCreditWithPartner(profile.monthlyCreditWithPartner);
  }, []);

  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#091e42] text-[20px]">{monthlyCreditWithPartner}</p>
      <Frame38 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#97a0af] text-[12px] uppercase w-full">Credit Allocated</p>
      <Frame50 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
          <Frame51 />
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#97a0af] text-[0px] text-[12px] w-full">
            <span>{`Credit usage dropped by `}</span>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[#36a40f]">₹9,75,000</span>
            <span>{` from last month.`}</span>
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaec] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame42 />
      <Frame39 />
      <Frame40 />
      <Frame41 />
    </div>
  );
}

function TiresAndWallsExport() {
  return (
    <div className="absolute bottom-[13.24%] left-0 right-0 top-[13.24%]" data-name="tires_and_walls_export">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 18">
        <g id="tires_and_walls_export">
          <path d={svgPaths.p31a41340} fill="var(--fill-0, #059492)" id="transport,-private,-public,-vehicles,-car,-bus" />
        </g>
      </svg>
    </div>
  );
}

function Page() {
  return (
    <div className="absolute bottom-[13.24%] contents left-0 right-0 top-[13.24%]" data-name="Page-1">
      <TiresAndWallsExport />
    </div>
  );
}

function AssetIcons() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Asset Icons">
      <Page />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-0 p-[4px] rounded-[100px] size-[55px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#059492] border-solid inset-0 pointer-events-none rounded-[100px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)]" />
      <AssetIcons />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[75px] relative shrink-0 w-[55px]">
      <Button />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[27.5px] not-italic text-[#42526e] text-[14px] text-center text-nowrap top-[63px] translate-x-[-50%] whitespace-pre">Assets</p>
    </div>
  );
}

function AssetIcons1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Asset Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Asset Icons">
          <g id="Vector">
            <path d={svgPaths.p1e612500} fill="var(--fill-0, #059492)" />
            <path d={svgPaths.p2013e200} fill="var(--fill-0, #059492)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-0 p-[4px] rounded-[100px] size-[55px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#059492] border-solid inset-0 pointer-events-none rounded-[100px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)]" />
      <AssetIcons1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[75px] relative shrink-0 w-[55px]">
      <Button1 />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[27px] not-italic text-[#42526e] text-[14px] text-center text-nowrap top-[63px] translate-x-[-50%] whitespace-pre">DATUMs</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2f102d00} fill="var(--fill-0, #059492)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-0 p-[4px] rounded-[100px] size-[55px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#059492] border-solid inset-0 pointer-events-none rounded-[100px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)]" />
      <Icon4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[75px] relative shrink-0 w-[55px]">
      <Button2 />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[28px] not-italic text-[#42526e] text-[14px] text-center text-nowrap top-[63px] translate-x-[-50%] whitespace-pre">Analytics</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[40px] items-start pl-[32px] pr-[40px] py-[20px] relative w-full">
          <Frame10 />
          <Frame9 />
          <Frame8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaec] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Component33CustomerSummery() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Component 33/customer Summery">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111111] text-[14px] w-full">Your Sections</p>
      <Frame24 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2f35a000} fill="var(--fill-0, #059492)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] py-[4px] right-[12px] rounded-[4px] top-[16px] w-[101px]" data-name="Button">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#059492] text-[14px] text-center text-nowrap">
        <p className="leading-[1.2] whitespace-pre">View more</p>
      </div>
      <Icon5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0 w-full">
      <div className="basis-0 bg-[#d94862] grow h-[10px] min-h-px min-w-px shrink-0" data-name="6ms" />
      <div className="bg-[#ff9100] h-[10px] shrink-0 w-[68px]" data-name="due-now" />
      <div className="bg-[#36a40f] h-[10px] shrink-0 w-[17px]" data-name="not-due" />
    </div>
  );
}

function Due() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="due">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #D94862)" id="Ellipse 1116" r="4" />
        </svg>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a869a] text-[14px] text-nowrap whitespace-pre">Overdue</p>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex font-['Poppins:SemiBold',sans-serif] gap-[2px] items-center leading-[normal] not-italic relative shrink-0 text-[#42526e] text-[14px] text-nowrap uppercase whitespace-pre" data-name="price">
      <p className="relative shrink-0 tracking-[1px]">₹</p>
      <p className="relative shrink-0">41,00,000</p>
    </div>
  );
}

function Credit() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="credit">
      <Due />
      <Price />
    </div>
  );
}

function Due1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="due">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #FF9100)" id="Ellipse 1116" r="4" />
        </svg>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a869a] text-[14px] text-nowrap whitespace-pre">Due Now</p>
    </div>
  );
}

function Price1() {
  return (
    <div className="content-stretch flex font-['Poppins:SemiBold',sans-serif] gap-[2px] items-center leading-[normal] not-italic relative shrink-0 text-[#42526e] text-[14px] text-nowrap uppercase whitespace-pre" data-name="price">
      <p className="relative shrink-0 tracking-[1px]">₹</p>
      <p className="relative shrink-0">9,80,000</p>
    </div>
  );
}

function Credit1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="credit">
      <Due1 />
      <Price1 />
    </div>
  );
}

function Due2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="due">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #36A40F)" id="Ellipse 1116" r="4" />
        </svg>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a869a] text-[14px] text-nowrap whitespace-pre">Due Soon</p>
    </div>
  );
}

function Price2() {
  return (
    <div className="content-stretch flex font-['Poppins:SemiBold',sans-serif] gap-[2px] items-center leading-[normal] not-italic relative shrink-0 text-[#42526e] text-[14px] text-nowrap uppercase whitespace-pre" data-name="price">
      <p className="relative shrink-0 tracking-[1px]">₹</p>
      <p className="relative shrink-0">5,60,000</p>
    </div>
  );
}

function Total() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="total">
      <Due2 />
      <Price2 />
    </div>
  );
}

function Divider() {
  return (
    <div className="h-[26px] w-[1px] bg-[#C1C7D0] shrink-0" />
  );
}

function CreditUsedTotal() {
  return (
    <div className="relative shrink-0 w-full" data-name="credit used-total">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between gap-[16px] px-[32px] py-0 relative w-full">
          <Credit />
          <Divider />
          <Credit1 />
          <Divider />
          <Total />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-center justify-center left-[16px] right-[16px] top-[78px]">
      <Frame5 />
      <CreditUsedTotal />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-white h-[153px] relative rounded-[8px] shrink-0 w-full">
      <div className="h-[153px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Poppins:Medium',sans-serif] leading-[16px] left-[16px] not-italic text-[#42526e] text-[12px] text-nowrap top-[16px] tracking-[0.36px] whitespace-pre">Total Outstanding</p>
        <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-[16px] not-italic text-[#172b4d] text-[18px] text-nowrap top-[51px] translate-y-[-50%]">
          <p className="leading-[22px] whitespace-pre">₹ 56,40,000</p>
        </div>
        <Button3 />
        <Frame6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaec] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Component33CustomerSummery1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Component 33/customer Summery">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111111] text-[14px] w-full">Credit Summary</p>
      <Frame25 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[#122e91] box-border content-stretch flex items-center left-[16px] overflow-clip px-[8px] py-[4px] rounded-[4px] top-[16px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-nowrap text-white tracking-[0.5px] uppercase">
        <p className="leading-[normal] whitespace-pre">NEW order</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2f35a000} fill="var(--fill-0, #059492)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bottom-[9px] box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] py-[4px] right-[12px] rounded-[4px] w-[103px]" data-name="Button">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#059492] text-[14px] text-center text-nowrap">
        <p className="leading-[1.2] whitespace-pre">View All</p>
      </div>
      <Icon6 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-white h-[84px] relative rounded-[8px] shrink-0 w-full">
      <div className="h-[84px] overflow-clip relative rounded-[inherit] w-full">
        <Frame7 />
        <p className="absolute font-['Poppins:Medium',sans-serif] leading-[1.2] left-[16px] not-italic text-[#42526e] text-[14px] text-nowrap top-[51px] whitespace-pre">9+ DATUM Orders to approve</p>
        <Button4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#122e91] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function AssetIcons2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Asset Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Asset Icons">
          <g id="Vector">
            <path d={svgPaths.p3dbcad00} fill="var(--fill-0, #42526E)" />
            <path d={svgPaths.pc0e2780} fill="var(--fill-0, #42526E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <AssetIcons2 />
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#122e91] text-[20px] text-nowrap whitespace-pre">4</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[186px] relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center min-w-inherit px-[16px] py-[8px] relative w-full">
          <Frame17 />
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#42526e] text-[14px] text-center w-full">DATUMs</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function AssetIcons3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Asset Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Asset Icons">
          <path d={svgPaths.p3805e300} fill="var(--fill-0, #42526E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <AssetIcons3 />
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#122e91] text-[20px] text-nowrap whitespace-pre">8</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[186px] relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center min-w-inherit px-[16px] py-[8px] relative w-full">
          <Frame18 />
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#42526e] text-[14px] text-center w-full">Machinery</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function AssetIcons4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Asset Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Asset Icons">
          <path d={svgPaths.p265b9a80} fill="var(--fill-0, #42526E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <AssetIcons4 />
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#122e91] text-[20px] text-nowrap whitespace-pre">15</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[186px] relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center min-w-inherit px-[16px] py-[8px] relative w-full">
          <Frame19 />
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#42526e] text-[14px] text-center w-full">Heavy Veh.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[16.67%_4.17%_19.5%_4.17%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3ed45580} fill="var(--fill-0, #42526E)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AssetIcons5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Asset Icons">
      <Group />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <AssetIcons5 />
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#122e91] text-[20px] text-nowrap whitespace-pre">26</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[186px] relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center min-w-inherit px-[16px] py-[8px] relative w-full">
          <Frame20 />
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#42526e] text-[14px] text-center w-full">Infra Equip.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[57.68%_21.25%_38.78%_11.62%]">
      <div className="absolute bg-[#42526e] inset-[57.68%_66%_38.78%_11.62%] rounded-[2.333px]" />
      <div className="absolute bg-[#42526e] inset-[57.68%_21.25%_38.78%_56.37%] rounded-[2.333px]" />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[62.34%_21.25%_34.12%_11.62%]">
      <div className="absolute bg-[#42526e] inset-[62.34%_66.01%_34.12%_11.62%] rounded-[2.333px]" />
      <div className="absolute bg-[#42526e] inset-[62.34%_21.25%_34.12%_56.37%] rounded-[2.333px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[57.68%_21.25%_34.12%_11.62%]">
      <Group3 />
      <Group2 />
    </div>
  );
}

function BoltFill0Wght400Grad0Opsz() {
  return (
    <div className="absolute inset-[16.23%_24.97%_65.12%_56.38%]" data-name="bolt_FILL0_wght400_GRAD0_opsz48 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
        <g id="bolt_FILL0_wght400_GRAD0_opsz48 1">
          <path d={svgPaths.p390deb80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AssetIcons6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Asset Icons">
      <div className="absolute border-[#42526e] border-[1.4px] border-solid inset-[19.96%_13.78%_24.09%_4.17%] rounded-[0.583px]" />
      <div className="absolute bg-[#42526e] inset-[77.68%_17.51%_16.56%_7.9%] rounded-[1.167px]" />
      <Group4 />
      <div className="absolute flex inset-[23.69%_6.25%_27.82%_87.99%] items-center justify-center">
        <div className="flex-none h-[1.382px] rotate-[270deg] w-[11.637px]">
          <div className="bg-[#42526e] rounded-[1.167px] size-full" />
        </div>
      </div>
      <div className="absolute bg-[#42526e] inset-[12.5%_66%_81.91%_11.62%] rounded-[2.333px]" />
      <div className="absolute bg-[#42526e] border-[#42526e] border-[1.4px] border-solid inset-[12.5%_21.24%_61.39%_52.65%] rounded-[0.583px]" />
      <BoltFill0Wght400Grad0Opsz />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <AssetIcons6 />
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#122e91] text-[20px] text-nowrap whitespace-pre">70</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[186px] relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center min-w-inherit px-[16px] py-[8px] relative w-full">
          <Frame21 />
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#42526e] text-[14px] text-center w-full">DG Set</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function AssetIcons7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Asset Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Asset Icons">
          <path d={svgPaths.p35c4fe00} fill="var(--fill-0, #42526E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <AssetIcons7 />
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#122e91] text-[20px] text-nowrap whitespace-pre">2</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[186px] relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center min-w-inherit px-[16px] py-[8px] relative w-full">
          <Frame22 />
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#42526e] text-[14px] text-center w-full">Farm Equip.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame15 />
      <Frame16 />
      <Frame14 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame26 />
      <Frame23 />
    </div>
  );
}

function Component33CustomerSummery2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Component 33/customer Summery">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111111] text-[14px] w-full">Your Assets</p>
      <Frame27 />
    </div>
  );
}

function Tags() {
  return (
    <div className="absolute bg-[#d94862] box-border content-stretch flex gap-[10px] items-start justify-center px-[8px] py-[6px] right-0 rounded-tr-[5px] top-0 w-[78px]" data-name="tags">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">DELIVERY</p>
    </div>
  );
}

function OrderIdTag() {
  return (
    <div className="absolute bg-neutral-100 box-border content-stretch flex gap-[4px] items-start leading-[normal] left-[24px] not-italic p-[4px] rounded-[2px] text-[12px] text-neutral-500 text-nowrap top-[16px] whitespace-pre" data-name="Order id tag">
      <p className="font-['Poppins:Medium',sans-serif] relative shrink-0">Order ID:</p>
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0">0123456789123</p>
    </div>
  );
}

function AssetIcons8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Asset Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Asset Icons">
          <g id="Vector">
            <path d={svgPaths.p1e612500} fill="var(--fill-0, #122E91)" />
            <path d={svgPaths.p2013e200} fill="var(--fill-0, #122E91)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <AssetIcons8 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[18px]">Rajkumar Infra JCB</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#454545] text-[14px] text-nowrap whitespace-pre">500L</p>
      <div className="h-[16px] relative shrink-0 w-0">
        <div className="absolute bottom-0 left-[-0.25px] right-[-0.25px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 16">
            <path d="M0.25 0V16" id="Vector 941" stroke="var(--stroke-0, #737373)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#454545] text-[14px] text-nowrap whitespace-pre">26 July 2022 (Today)</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame29 />
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-neutral-500 w-full">Balewadi Gaon, Pune</p>
      <Frame28 />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-tl-[2px] rounded-tr-[2px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#122e91] border-solid inset-0 pointer-events-none rounded-tl-[2px] rounded-tr-[2px]" />
      <p className="font-['Poppins:Medium',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#122e91] text-[10px] text-center text-nowrap whitespace-pre">MH 12 XB</p>
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#122e91] text-[18px] text-center text-nowrap whitespace-pre">2897</p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#122e91] relative rounded-bl-[2px] rounded-br-[2px] shrink-0 w-full" data-name="tag">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[4px] relative w-full">
          <p className="font-['Poppins:Medium',sans-serif] leading-[12px] not-italic relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre">DIESEL</p>
        </div>
      </div>
    </div>
  );
}

function AssetType() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Asset Type">
      <Tag />
      <Tag1 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[24px] right-[24px] top-[58px]">
      <Frame30 />
      <AssetType />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Poppins:Medium',sans-serif] gap-[4px] grow items-start justify-center leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px]">
      <p className="relative shrink-0 text-[#161616] uppercase w-full">SANTOSH</p>
      <p className="relative shrink-0 text-neutral-500 w-full">Driver is arriving soon</p>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute left-1/2 size-[36px] top-[calc(50%+1.6px)] translate-x-[-50%] translate-y-[-50%]" data-name="Mask group">
      <div className="absolute inset-[-11.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <g filter="url(#filter0_d_1_2762)" id="Mask group">
            <mask height="36" id="mask0_1_2762" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="36" x="4" y="4">
              <circle cx="22" cy="22" fill="var(--fill-0, #E9EFEF)" id="Ellipse 1217" r="17.5" stroke="var(--stroke-0, #764444)" />
            </mask>
            <g mask="url(#mask0_1_2762)">
              <g id="Group 62142">
                <circle cx="21.9994" cy="21.9992" fill="var(--fill-0, #C0C0C0)" id="Ellipse 1215" r="19.8947" />
                <path d={svgPaths.p1dfa2080} id="Vector 1263" stroke="var(--stroke-0, #FDFEFF)" />
                <path d={svgPaths.p370f5f00} id="Vector 1269" stroke="var(--stroke-0, #FDFEFF)" strokeWidth="0.5" />
                <path d={svgPaths.p179bf4a0} fill="var(--fill-0, #D1DBDD)" id="Vector 1264" />
                <path d={svgPaths.p3624ef00} fill="var(--fill-0, #D1DBDD)" id="Vector 1265" />
                <path d={svgPaths.p3b912400} fill="var(--fill-0, #D1DBDD)" id="Vector 1267" />
                <path d={svgPaths.p297075f0} fill="var(--fill-0, #D1DBDD)" id="Vector 1272" />
                <path d={svgPaths.p31c42300} fill="var(--fill-0, #D1DBDD)" id="Vector 1268" />
                <path d={svgPaths.p28837200} fill="var(--fill-0, #D1DBDD)" id="Vector 1266" />
                <path d={svgPaths.p283808d0} fill="var(--fill-0, #69B48A)" id="Vector 1270" />
                <path d={svgPaths.pd5fd900} id="Vector 1273" stroke="var(--stroke-0, #8DD8F8)" strokeWidth="1.5" />
                <path d={svgPaths.p277cbf00} fill="var(--fill-0, #69B48A)" id="Vector 1271" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_1_2762" width="44" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2762" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2762" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute h-[19.2px] left-[calc(50%-8.77px)] top-[calc(50%-10.4px)] translate-x-[-50%] translate-y-[-50%] w-[14.769px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20">
        <g id="Group 61937">
          <path d={svgPaths.p44b3900} fill="var(--fill-0, #D94862)" id="Vector" />
          <path d={svgPaths.p1866b400} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-1/2 top-[calc(50%-0.2px)] translate-x-[-50%] translate-y-[-50%]">
      <MaskGroup />
      <Group5 />
    </div>
  );
}

function IconsFinal() {
  return (
    <div className="relative size-[42px]" data-name="Icons-final">
      <Group6 />
    </div>
  );
}

function IconsFinal1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons-final">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons-final">
          <g id="Vector"></g>
          <path d={svgPaths.p10eab900} id="Vector_2" stroke="var(--stroke-0, #059492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <IconsFinal />
        </div>
      </div>
      <IconsFinal1 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[24px] right-[24px] top-[164px]">
      <Frame />
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Poppins:Medium',sans-serif] gap-[4px] grow items-start justify-center leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px]">
      <p className="relative shrink-0 text-[#161616] uppercase w-full">Ramesh</p>
      <p className="relative shrink-0 text-neutral-500 w-full">Receiver</p>
    </div>
  );
}

function IconsFinal2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons-final">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons-final">
          <g id="Vector"></g>
          <path d="M12 15H9V12L18 3L21 6L12 15Z" id="Vector_2" stroke="var(--stroke-0, #059492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M15.75 5.25L18.75 8.25" id="Vector_3" stroke="var(--stroke-0, #059492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p325dd4c0} id="Vector_4" stroke="var(--stroke-0, #059492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconsFinal3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons-final">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons-final">
          <g id="Vector"></g>
          <path d={svgPaths.p10eab900} id="Vector_2" stroke="var(--stroke-0, #059492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <IconsFinal2 />
      <IconsFinal3 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[24px] right-[24px] top-[238px]">
      <Frame1 />
      <Frame3 />
    </div>
  );
}

function OngoingOrders() {
  return (
    <div className="bg-white h-[294px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Ongoing Orders">
      <div className="absolute h-0 left-0 right-0 top-[148px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 880 1">
            <line id="Line 125" stroke="var(--stroke-0, black)" strokeOpacity="0.1" x2="880" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Tags />
      <OrderIdTag />
      <Frame31 />
      <div className="absolute h-0 left-0 right-0 top-[222px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 880 1">
            <line id="Line 124" stroke="var(--stroke-0, black)" strokeOpacity="0.1" x2="880" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function Component33CustomerSummery3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Component 33/customer Summery">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111111] text-[14px] text-nowrap whitespace-pre">Ongoing Orders</p>
      <OngoingOrders />
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[330px] right-[70px] top-[80px] pb-[100px]">
      <GreetingSection />
      <Frame45 />
      <Component33CustomerSummery />
      <Component33CustomerSummery1 />
      <Component33CustomerSummery2 />
      <Component33CustomerSummery3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[77.39px] top-[calc(50%-0.01px)] translate-y-[-50%]" data-name="Group">
      <div className="absolute h-[17.079px] left-[77.39px] top-[calc(50%+0.01px)] translate-y-[-50%] w-[13.282px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
          <path d={svgPaths.p39e0d6f0} fill="var(--fill-0, #010101)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[17.063px] left-[93.28px] top-1/2 translate-y-[-50%] w-[11.143px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 18">
          <path d={svgPaths.p170d0900} fill="var(--fill-0, #010101)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[17.063px] left-[107.24px] top-1/2 translate-y-[-50%] w-[13.065px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
          <path d={svgPaths.p2d9ad100} fill="var(--fill-0, #010101)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[17.792px] left-[121.7px] top-[calc(50%-0.02px)] translate-y-[-50%] w-[16.583px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 18">
          <path d={svgPaths.p17ffaf00} fill="var(--fill-0, #010101)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[17.746px] left-[139.93px] top-[calc(50%+0.03px)] translate-y-[-50%] w-[14.072px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18">
          <path d={svgPaths.p263dc400} fill="var(--fill-0, #010101)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Layer2() {
  return (
    <div className="absolute contents left-[32px] top-1/2 translate-y-[-50%]" data-name="Layer_1-2-2">
      <Group1 />
      <div className="absolute h-[17.437px] left-[32px] top-[calc(50%+0.2px)] translate-y-[-50%] w-[38.915px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 18">
          <path d={svgPaths.p274612d0} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute contents left-[32px] top-1/2 translate-y-[-50%]" data-name="Layer_1-21">
      <Layer2 />
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute contents left-[32px] top-1/2 translate-y-[-50%]" data-name="Layer_1-2">
      <Layer1 />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute contents left-[32px] top-[calc(50%+0.25px)] translate-y-[-50%]" data-name="Logo">
      <Layer />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p323eac80} fill="var(--fill-0, #42526E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="box-border content-stretch flex h-[32px] items-start p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <Icon7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p15960b00} fill="var(--fill-0, #42526E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="box-border content-stretch flex h-[32px] items-start p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <Icon8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3aa2c480} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#059492] box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] py-[4px] relative rounded-[4px] shrink-0 w-[122px]" data-name="Button">
      <Icon9 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre">New Order</p>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center justify-end right-[32px] top-[calc(50%+0.25px)] translate-y-[-50%]" data-name="Actions">
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function OldHeader() {
  return (
    <div className="absolute bg-white border-[#dfe1e6] border-[0px_0px_0.5px] border-solid h-[56px] left-0 overflow-clip right-0 top-0" data-name="Header">
      <Logo />
      <Actions />
    </div>
  );
}

function TiresAndWallsExport1() {
  return (
    <div className="absolute bottom-[13.24%] left-0 right-0 top-[13.24%]" data-name="tires_and_walls_export">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 18">
        <g id="tires_and_walls_export">
          <path d={svgPaths.p31a41340} fill="var(--fill-0, #42526E)" id="transport,-private,-public,-vehicles,-car,-bus" />
        </g>
      </svg>
    </div>
  );
}

function Page1() {
  return (
    <div className="absolute bottom-[13.24%] contents left-0 right-0 top-[13.24%]" data-name="Page-1">
      <TiresAndWallsExport1 />
    </div>
  );
}

function AssetIcons9() {
  return (
    <div className="absolute left-[10px] overflow-clip size-[24px] top-1/2 translate-y-[-50%]" data-name="Asset Icons">
      <Page1 />
    </div>
  );
}

function NavItem() {
  return (
    <div className="absolute h-[40px] left-[20px] overflow-clip rounded-[3px] top-[116px] w-[208px]" data-name="Nav Item">
      <p className="absolute font-['Poppins:Medium',sans-serif] h-[40px] leading-[40px] left-[50px] not-italic right-[10px] text-[#42526e] text-[14px] top-[calc(50%-20px)]">Assets</p>
      <AssetIcons9 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[10px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p16656800} fill="var(--fill-0, #42526E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavItem1() {
  return (
    <div className="absolute h-[40px] left-[20px] overflow-clip rounded-[3px] top-[164px] w-[208px]" data-name="Nav Item">
      <p className="absolute font-['Poppins:Medium',sans-serif] h-[40px] leading-[40px] left-[50px] not-italic right-[10px] text-[#42526e] text-[14px] top-[calc(50%-20px)]">Payments</p>
      <Icon10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[10px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p303c1700} fill="var(--fill-0, #42526E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavItem2() {
  return (
    <div className="absolute h-[40px] left-[20px] overflow-clip rounded-[3px] top-[68px] w-[208px]" data-name="Nav Item">
      <p className="absolute font-['Poppins:Medium',sans-serif] h-[40px] leading-[40px] left-[50px] not-italic right-[10px] text-[#42526e] text-[14px] top-[calc(50%-20px)]">Order</p>
      <Icon11 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[10px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p33b54200} fill="var(--fill-0, #059492)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return <div className="absolute bg-[#059492] h-[40px] left-[-21px] rounded-br-[10px] rounded-tr-[10px] top-0 w-[5px]" />;
}

function NavItem3() {
  return (
    <div className="absolute bg-[#ebecf0] h-[40px] left-[20px] rounded-[3px] top-[20px] w-[208px]" data-name="Nav Item">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] h-[40px] leading-[40px] left-[50px] not-italic right-[10px] text-[#059492] text-[14px] top-[calc(50%-20px)]">Home</p>
      <Icon12 />
      <Frame4 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[10px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p20a3c100} fill="var(--fill-0, #42526E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavItem4() {
  return (
    <div className="absolute h-[40px] left-[20px] overflow-clip rounded-[3px] top-[212px] w-[208px]" data-name="Nav Item">
      <p className="absolute font-['Poppins:Medium',sans-serif] h-[40px] leading-[40px] left-[50px] not-italic right-[10px] text-[#42526e] text-[14px] top-[calc(50%-20px)]">Analytics</p>
      <Icon13 />
    </div>
  );
}

function NavPanel() {
  return (
    <div className="absolute bg-white bottom-0 left-0 overflow-clip rounded-br-[5px] top-[56px] w-[260px]" data-name="Nav Panel">
      <NavItem />
      <NavItem1 />
      <NavItem2 />
      <NavItem3 />
      <NavItem4 />
    </div>
  );
}

export default function HomePageFinal() {
  return (
    <div className="bg-[#ebeef1] relative size-full overflow-auto pb-[100px]" data-name="Home Page / Final">
      <NavigationPanel />
      <Frame34 />
      <SharedHeader />
    </div>
  );
}