import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Asset from "../imports/Asset";
import { distributeAssets } from "../utils/assetDistribution";

export default function AssetWithNavigation() {
  const navigate = useNavigate();
  const [assetsDistributed, setAssetsDistributed] = useState(false);

  useEffect(() => {
    // Read total assets from localStorage and distribute them
    const savedData = localStorage.getItem("customerProfile");
    if (savedData && !assetsDistributed) {
      const parsed = JSON.parse(savedData);
      const totalAssets = parseInt(parsed.totalAssetCount) || 250;
      
      // Calculate distribution
      const distribution = distributeAssets(totalAssets);
      
      // Set global data for the Asset component to access
      (window as any).__assetDistribution = distribution;
      setAssetsDistributed(true);
    } else if (!assetsDistributed) {
      // Set default distribution if no form data
      (window as any).__assetDistribution = distributeAssets(250);
      setAssetsDistributed(true);
    }
  }, [assetsDistributed]);

  useEffect(() => {
    // Add click handler and styling to the RFD Z asset card
    const assetCards = document.querySelectorAll('[data-name="Asset Card"]');
    
    assetCards.forEach((card) => {
      const assetText = card.textContent;
      if (assetText?.includes("RFD Z – Pimpri Industrial Hub, Pune")) {
        // Add cursor pointer and hover effect
        (card as HTMLElement).style.cursor = "pointer";
        (card as HTMLElement).style.transition = "all 0.2s ease";
        
        const handleMouseEnter = () => {
          (card as HTMLElement).style.transform = "translateY(-2px)";
          (card as HTMLElement).style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        };
        
        const handleMouseLeave = () => {
          (card as HTMLElement).style.transform = "translateY(0)";
          (card as HTMLElement).style.boxShadow = "none";
        };
        
        const handleClick = () => {
          navigate("/assets/rfd-z-pimpri");
        };
        
        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);
        card.addEventListener("click", handleClick);
        
        // Cleanup
        return () => {
          card.removeEventListener("mouseenter", handleMouseEnter);
          card.removeEventListener("mouseleave", handleMouseLeave);
          card.removeEventListener("click", handleClick);
        };
      }
    });
  }, [navigate]);

  return <Asset />;
}