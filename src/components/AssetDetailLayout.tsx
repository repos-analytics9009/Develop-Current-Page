import { useState } from "react";
import { useNavigate } from "react-router";
import { Header } from "./Header";

export function AssetDetailLayout() {
  const [activeTab, setActiveTab] = useState<"overview" | "statement" | "sub-assets">("overview");
  const navigate = useNavigate();

  return (
    <div className="relative size-full">
      {/* Render Overview, Statement, or Sub-Assets based on active tab */}
      {activeTab === "overview" ? (
        <AssetOverviewWithTabs activeTab={activeTab} setActiveTab={setActiveTab} navigate={navigate} />
      ) : activeTab === "statement" ? (
        <AssetStatementWithTabs activeTab={activeTab} setActiveTab={setActiveTab} navigate={navigate} />
      ) : (
        <AssetSubAssetsWithTabs activeTab={activeTab} setActiveTab={setActiveTab} navigate={navigate} />
      )}
    </div>
  );
}

// Overview Tab with custom tabs
function AssetOverviewWithTabs({ 
  activeTab, 
  setActiveTab,
  navigate
}: { 
  activeTab: "overview" | "statement" | "sub-assets"; 
  setActiveTab: (tab: "overview" | "statement" | "sub-assets") => void;
  navigate: any;
}) {
  const { NavigationPanel } = require("./NavigationPanel");
  const AssetOverview = require("../imports/Asset-1-9681").default;
  
  return (
    <div className="bg-[#ebeef1] relative size-full">
      <NavigationPanel />
      
      {/* Header */}
      <Header />

      {/* Page Title with Back Button */}
      <div className="absolute h-[32px] left-[330px] right-[70px] top-[76px]">
        {/* Back Button */}
        <div 
          className="absolute left-0 top-[50%] translate-y-[-50%] cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#253858" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        {/* Title */}
        <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#253858] text-[18px] text-center text-nowrap top-[16px] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[normal] whitespace-pre">RFD Z – Pimpri Industrial Hub, Pune</p>
        </div>
      </div>

      {/* Custom Tab Navigation */}
      <div className="absolute content-stretch flex items-start left-[330px] right-[70px] top-[120px]">
        {/* Overview Tab - Active */}
        <div
          className="basis-0 content-stretch flex flex-col grow h-[40px] items-start justify-between min-h-px min-w-px relative shrink-0 cursor-pointer"
          onClick={() => setActiveTab("overview")}
        >
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
                <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#059492] text-[14px] text-center">
                  Overview
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

        {/* Statement Tab - Inactive */}
        <div
          className="basis-0 content-stretch flex flex-col grow h-[40px] items-start justify-between min-h-px min-w-px relative shrink-0 cursor-pointer"
          onClick={() => setActiveTab("statement")}
        >
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
                <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center">
                  Statement
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

        {/* Sub-Assets Tab - Inactive */}
        <div
          className="basis-0 content-stretch flex flex-col grow h-[40px] items-start justify-between min-h-px min-w-px relative shrink-0 cursor-pointer"
          onClick={() => setActiveTab("sub-assets")}
        >
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
                <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center">
                  Sub-Assets
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

      {/* Asset Overview Content */}
      <AssetOverviewContentArea />
    </div>
  );
}

// Statement Tab with custom tabs
function AssetStatementWithTabs({ 
  activeTab, 
  setActiveTab,
  navigate
}: { 
  activeTab: "overview" | "statement" | "sub-assets"; 
  setActiveTab: (tab: "overview" | "statement" | "sub-assets") => void;
  navigate: any;
}) {
  const { NavigationPanel } = require("./NavigationPanel");
  
  return (
    <div className="bg-[#ebeef1] relative size-full">
      <NavigationPanel />
      
      {/* Header */}
      <Header />

      {/* Page Title with Back Button */}
      <div className="absolute h-[32px] left-[330px] right-[70px] top-[76px]">
        {/* Back Button */}
        <div 
          className="absolute left-0 top-[50%] translate-y-[-50%] cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#253858" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        {/* Title */}
        <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#253858] text-[18px] text-center text-nowrap top-[16px] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[normal] whitespace-pre">RFD Z – Pimpri Industrial Hub, Pune</p>
        </div>
      </div>

      {/* Custom Tab Navigation */}
      <div className="absolute content-stretch flex items-start left-[330px] right-[70px] top-[120px]">
        {/* Overview Tab - Inactive */}
        <div
          className="basis-0 content-stretch flex flex-col grow h-[40px] items-start justify-between min-h-px min-w-px relative shrink-0 cursor-pointer"
          onClick={() => setActiveTab("overview")}
        >
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
                <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center">
                  Overview
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

        {/* Statement Tab - Active */}
        <div
          className="basis-0 content-stretch flex flex-col grow h-[40px] items-start justify-between min-h-px min-w-px relative shrink-0 cursor-pointer"
          onClick={() => setActiveTab("statement")}
        >
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
                <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#059492] text-[14px] text-center">
                  Statement
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

        {/* Sub-Assets Tab - Inactive */}
        <div
          className="basis-0 content-stretch flex flex-col grow h-[40px] items-start justify-between min-h-px min-w-px relative shrink-0 cursor-pointer"
          onClick={() => setActiveTab("sub-assets")}
        >
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
                <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center">
                  Sub-Assets
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

      {/* Asset Statement Content */}
      <AssetStatementContentArea />
    </div>
  );
}

// Sub-Assets Tab with custom tabs
function AssetSubAssetsWithTabs({ 
  activeTab, 
  setActiveTab,
  navigate
}: { 
  activeTab: "overview" | "statement" | "sub-assets"; 
  setActiveTab: (tab: "overview" | "statement" | "sub-assets") => void;
  navigate: any;
}) {
  const { NavigationPanel } = require("./NavigationPanel");
  
  return (
    <div className="bg-[#ebeef1] relative size-full">
      <NavigationPanel />
      
      {/* Header */}
      <Header />

      {/* Page Title with Back Button */}
      <div className="absolute h-[32px] left-[330px] right-[70px] top-[76px]">
        {/* Back Button */}
        <div 
          className="absolute left-0 top-[50%] translate-y-[-50%] cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#253858" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        {/* Title */}
        <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#253858] text-[18px] text-center text-nowrap top-[16px] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[normal] whitespace-pre">RFD Z – Pimpri Industrial Hub, Pune</p>
        </div>
      </div>

      {/* Custom Tab Navigation */}
      <div className="absolute content-stretch flex items-start left-[330px] right-[70px] top-[120px]">
        {/* Overview Tab - Inactive */}
        <div
          className="basis-0 content-stretch flex flex-col grow h-[40px] items-start justify-between min-h-px min-w-px relative shrink-0 cursor-pointer"
          onClick={() => setActiveTab("overview")}
        >
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
                <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center">
                  Overview
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

        {/* Statement Tab - Inactive */}
        <div
          className="basis-0 content-stretch flex flex-col grow h-[40px] items-start justify-between min-h-px min-w-px relative shrink-0 cursor-pointer"
          onClick={() => setActiveTab("statement")}
        >
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
                <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center">
                  Statement
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

        {/* Sub-Assets Tab - Active */}
        <div
          className="basis-0 content-stretch flex flex-col grow h-[40px] items-start justify-between min-h-px min-w-px relative shrink-0 cursor-pointer"
          onClick={() => setActiveTab("sub-assets")}
        >
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
                <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#059492] text-[14px] text-center">
                  Sub-Assets
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

      {/* Asset Sub-Assets Content */}
      <AssetSubAssetsContentArea />
    </div>
  );
}

// Content area components that render the imported Figma designs
function AssetOverviewContentArea() {
  const AssetOverview = require("../imports/Asset-1-9681").default;
  
  return (
    <div className="absolute left-[0px] top-[176px] right-0 bottom-0 overflow-auto pb-[100px]">
      <div className="relative size-full">
        <div style={{ position: 'absolute', top: '-176px', left: 0, right: 0 }}>
          <AssetOverview />
        </div>
      </div>
    </div>
  );
}

function AssetStatementContentArea() {
  const AssetStatement = require("../imports/Asset-1-9926").default;
  
  return (
    <div className="absolute left-[0px] top-[176px] right-0 bottom-0 overflow-auto pb-[100px]">
      <div className="relative size-full">
        <div style={{ position: 'absolute', top: '-176px', left: 0, right: 0 }}>
          <AssetStatement />
        </div>
      </div>
    </div>
  );
}

function AssetSubAssetsContentArea() {
  const AssetSubAssets = require("../imports/Asset-1-10162").default;
  
  return (
    <div className="absolute left-[0px] top-[176px] right-0 bottom-0 overflow-auto pb-[100px]">
      <div className="relative size-full">
        <div style={{ position: 'absolute', top: '-176px', left: 0, right: 0 }}>
          <AssetSubAssets />
        </div>
      </div>
    </div>
  );
}