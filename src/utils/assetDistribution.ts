// Utility to distribute total assets across categories
// DATUMs is always fixed at 3

export interface AssetDistribution {
  allAssets: number;
  datums: number; // Always 3
  machinery: number;
  heavyVehicles: number;
  infraEquipment: number;
  dgSet: number;
  farmEquipment: number;
}

export function distributeAssets(totalAssets: number): AssetDistribution {
  // DATUMs is always 3
  const datums = 3;
  
  // If total is less than or equal to 3, only show DATUMs
  if (totalAssets <= 3) {
    return {
      allAssets: totalAssets,
      datums: totalAssets,
      machinery: 0,
      heavyVehicles: 0,
      infraEquipment: 0,
      dgSet: 0,
      farmEquipment: 0,
    };
  }
  
  // Remaining assets to distribute (excluding DATUMs)
  const remaining = totalAssets - datums;
  
  // Distribution percentages (uneven as requested)
  // DG Set gets the most, then Infra Equip, then Heavy Veh, then Machinery, then Farm Equip
  const dgSetPercent = 0.35; // 35%
  const infraPercent = 0.25; // 25%
  const heavyVehPercent = 0.20; // 20%
  const machineryPercent = 0.15; // 15%
  const farmPercent = 0.05; // 5%
  
  const dgSet = Math.floor(remaining * dgSetPercent);
  const infraEquipment = Math.floor(remaining * infraPercent);
  const heavyVehicles = Math.floor(remaining * heavyVehPercent);
  const machinery = Math.floor(remaining * machineryPercent);
  
  // Farm equipment gets the remainder to ensure total adds up
  const farmEquipment = remaining - (dgSet + infraEquipment + heavyVehicles + machinery);
  
  return {
    allAssets: totalAssets,
    datums,
    machinery,
    heavyVehicles,
    infraEquipment,
    dgSet,
    farmEquipment,
  };
}

// Format number with commas for display (e.g., 1000 -> "1,000")
export function formatAssetCount(count: number): string {
  return count.toString();
}
