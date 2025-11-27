// This component wraps the imported Analytics Fuel Consumption design
// and positions it to show only the content area (metrics + charts)

import { useState, useEffect } from "react";

export function FuelConsumptionContent() {
  const AnalyticsFuelConsumption = require("../../imports/AnalyticsFuelConsumption").default;
  
  const [formData, setFormData] = useState({
    monthlyConsumption: "9,00,000",
    totalAssetCount: "250",
    totalBusinessSites: "300",
  });

  useEffect(() => {
    // Read form data from localStorage
    const savedData = localStorage.getItem("customerProfile");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      const data = {
        monthlyConsumption: parsed.monthlyConsumption || "9,00,000",
        totalAssetCount: parsed.totalAssetCount || "250",
        totalBusinessSites: parsed.totalBusinessSites || "300",
      };
      setFormData(data);
      // Set global data for the imported component to access
      (window as any).__analyticsData = data;
    }
  }, []);
  
  // Render the imported component in a container positioned to show only content
  // The imported design has tabs at top: 140px, and content starting at top: 152px
  return (
    <div className="absolute left-[0px] top-[12px] right-0 bottom-0">
      <div className="relative size-full">
        <div style={{ position: 'absolute', top: '-152px', left: 0, right: 0 }}>
          <AnalyticsFuelConsumption />
        </div>
      </div>
    </div>
  );
}