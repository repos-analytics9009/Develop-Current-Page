import { useState } from "react";
import { Header } from "./Header";
import { OrdersCurrentContentArea } from "./orders/OrdersCurrentContent";
import { OrdersPastContentArea } from "./orders/OrdersPastContent";

export function OrdersLayout() {
  const [activeTab, setActiveTab] = useState<"current" | "past">("current");

  return (
    <div className="relative size-full">
      {/* Render Current or Past based on active tab */}
      {activeTab === "current" ? (
        <OrdersCurrentWithTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      ) : (
        <OrdersPastWithTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
    </div>
  );
}

// Current Orders with custom tabs
function OrdersCurrentWithTabs({ 
  activeTab, 
  setActiveTab 
}: { 
  activeTab: "current" | "past"; 
  setActiveTab: (tab: "current" | "past") => void 
}) {
  const { NavigationPanel } = require("./NavigationPanel");
  
  return (
    <div className="bg-[#ebeef1] relative size-full">
      <NavigationPanel />
      
      {/* Header */}
      <Header />

      {/* Page Title */}
      <div className="absolute h-[32px] left-[330px] right-[70px] top-[76px]">
        <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#253858] text-[18px] text-center text-nowrap top-[16px] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[normal] whitespace-pre">Orders</p>
        </div>
      </div>

      {/* Custom Tab Navigation */}
      <div className="absolute content-stretch flex items-start left-[330px] right-[70px] top-[120px]">
        {/* Current Tab - Active */}
        <div
          className="basis-0 content-stretch flex flex-col grow h-[40px] items-start justify-between min-h-px min-w-px relative shrink-0 cursor-pointer"
          onClick={() => setActiveTab("current")}
        >
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
                <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#059492] text-[14px] text-center">
                  Current
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#059492] h-[4px] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full">
            <div className="size-full">
              <div className="h-[4px] w-full" />
            </div>
          </div>
        </div>

        {/* Past Tab - Inactive */}
        <div
          className="basis-0 content-stretch flex flex-col grow h-[40px] items-start justify-between min-h-px min-w-px relative shrink-0 cursor-pointer"
          onClick={() => setActiveTab("past")}
        >
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
                <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center">
                  Past
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#c1c7d0] h-px relative shrink-0 w-full">
            <div className="flex flex-col justify-center size-full">
              <div className="h-px w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Orders Current Content - just the Frame74 part */}
      <OrdersCurrentContentArea />
    </div>
  );
}

// Past Orders with custom tabs
function OrdersPastWithTabs({ 
  activeTab, 
  setActiveTab 
}: { 
  activeTab: "current" | "past"; 
  setActiveTab: (tab: "current" | "past") => void 
}) {
  const { NavigationPanel } = require("./NavigationPanel");
  
  return (
    <div className="bg-[#ebeef1] relative size-full">
      <NavigationPanel />
      
      {/* Header */}
      <Header />

      {/* Page Title */}
      <div className="absolute h-[32px] left-[330px] right-[70px] top-[76px]">
        <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#253858] text-[18px] text-center text-nowrap top-[16px] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[normal] whitespace-pre">Orders</p>
        </div>
      </div>

      {/* Custom Tab Navigation */}
      <div className="absolute content-stretch flex items-start left-[330px] right-[70px] top-[120px]">
        {/* Current Tab - Inactive */}
        <div
          className="basis-0 content-stretch flex flex-col grow h-[40px] items-start justify-between min-h-px min-w-px relative shrink-0 cursor-pointer"
          onClick={() => setActiveTab("current")}
        >
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
                <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center">
                  Current
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#c1c7d0] h-px relative shrink-0 w-full">
            <div className="flex flex-col justify-center size-full">
              <div className="h-px w-full" />
            </div>
          </div>
        </div>

        {/* Past Tab - Active */}
        <div
          className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 cursor-pointer"
        >
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
                <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#059492] text-[14px] text-center">
                  Past
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#059492] h-[4px] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full">
            <div className="size-full">
              <div className="h-[4px] w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Orders Past Content - just the Frame67 part */}
      <OrdersPastContentArea />
    </div>
  );
}