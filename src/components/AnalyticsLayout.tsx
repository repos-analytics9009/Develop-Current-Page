import { useState } from "react";
import { NavigationPanel } from "./NavigationPanel";
import { Header } from "./Header";
import { FuelPurchaseContent } from "./analytics/FuelPurchaseContent";
import { FuelConsumptionContent } from "./analytics/FuelConsumptionContent";
import { FuelPaymentsContent } from "./analytics/FuelPaymentsContent";

type AnalyticsTab = "purchase" | "consumption" | "payments";

export function AnalyticsLayout() {
  const [activeTab, setActiveTab] = useState<AnalyticsTab>("purchase");

  return (
    <div className="bg-[#ebeef1] relative size-full">
      <NavigationPanel />
      <Header />
      
      {/* Tab Navigation */}
      <div className="absolute bg-white h-[40px] left-[292px] overflow-clip right-[32px] rounded-[4px] top-[84px]">
        <button
          onClick={() => setActiveTab("purchase")}
          className={`absolute box-border content-stretch flex gap-[10px] h-[32px] items-center justify-center left-[8px] px-0 py-[8px] rounded-[4px] top-[4px] w-[160px] ${
            activeTab === "purchase"
              ? "bg-white border border-[#e8eaec] border-solid shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05),0px_1px_2px_0px_rgba(0,0,0,0.1)]"
              : ""
          }`}
        >
          <div
            className={`flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap ${
              activeTab === "purchase"
                ? "font-['Poppins:SemiBold',sans-serif] text-[#0c0d18]"
                : "font-['Poppins:Medium',sans-serif] text-[#42526e]"
            }`}
          >
            <p className="leading-[1.2] whitespace-pre">Fuel Purchase</p>
          </div>
        </button>

        <button
          onClick={() => setActiveTab("consumption")}
          className={`absolute box-border content-stretch flex h-[32px] items-center justify-center left-[184px] px-[12px] py-[6px] rounded-[4px] top-[4px] w-[160px] ${
            activeTab === "consumption"
              ? "bg-white border border-[#e8eaec] border-solid shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05),0px_1px_2px_0px_rgba(0,0,0,0.1)]"
              : ""
          }`}
        >
          <div
            className={`flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap ${
              activeTab === "consumption"
                ? "font-['Poppins:SemiBold',sans-serif] text-[#0c0d18]"
                : "font-['Poppins:Medium',sans-serif] text-[#42526e]"
            }`}
          >
            <p className="leading-[1.2] whitespace-pre">Fuel Consumption</p>
          </div>
        </button>

        <button
          onClick={() => setActiveTab("payments")}
          className={`absolute box-border content-stretch flex h-[32px] items-center justify-center left-[360px] px-[12px] py-[6px] rounded-[4px] top-[4px] w-[160px] ${
            activeTab === "payments"
              ? "bg-white border border-[#e8eaec] border-solid shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05),0px_1px_2px_0px_rgba(0,0,0,0.1)]"
              : ""
          }`}
        >
          <div
            className={`flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap ${
              activeTab === "payments"
                ? "font-['Poppins:SemiBold',sans-serif] text-[#0c0d18]"
                : "font-['Poppins:Medium',sans-serif] text-[#42526e]"
            }`}
          >
            <p className="leading-[1.2] whitespace-pre">Fuel Payments</p>
          </div>
        </button>
      </div>

      {/* Tab Content */}
      <div className="absolute left-[0px] top-[140px] right-0 bottom-0 overflow-auto pb-[100px]">
        {activeTab === "purchase" && <FuelPurchaseContent />}
        {activeTab === "consumption" && <FuelConsumptionContent />}
        {activeTab === "payments" && <FuelPaymentsContent />}
      </div>
    </div>
  );
}