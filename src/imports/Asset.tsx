import svgPaths from "./svg-4zesi87hr3";
import { NavigationPanel } from "../components/NavigationPanel";
import { Header } from "../components/Header";
import { AssetDistribution } from "../utils/assetDistribution";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p177c1700} fill="var(--fill-0, #42526E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute box-border content-stretch flex h-[32px] items-start left-0 p-[4px] rounded-[4px] top-0" data-name="Button">
      <Icon />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute box-border content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] right-0 rounded-[4px] top-0" data-name="Button">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#059492] text-[14px] text-center text-nowrap">
        <p className="leading-[1.2] whitespace-pre">{`Add New `}</p>
      </div>
    </div>
  );
}

function TopAppBar() {
  return (
    <div className="absolute h-[32px] left-[330px] right-[70px] top-[76px]" data-name="Top App Bar">
      <Button />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#253858] text-[18px] text-center text-nowrap top-[16px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Assets</p>
      </div>
      <Button1 />
    </div>
  );
}

function TiresAndWallsExport() {
  return (
    <div className="absolute bottom-[13.24%] left-0 right-0 top-[13.24%]" data-name="tires_and_walls_export">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 18">
        <g id="tires_and_walls_export">
          <path d={svgPaths.p2bb87a0} fill="var(--fill-0, #059492)" id="transport,-private,-public,-vehicles,-car,-bus" />
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

function Frame64() {
  const assetData = (window as any).__assetDistribution as AssetDistribution;
  const allAssets = assetData?.allAssets || 250;
  
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <AssetIcons />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#059492] text-[16px] text-nowrap whitespace-pre">{allAssets}</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[100px] relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center min-w-inherit px-[12px] py-[8px] relative w-full">
          <Frame64 />
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#059492] text-[12px] text-center w-full">All Assets</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#059492] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function AssetIcons1() {
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

function Frame65() {
  const assetData = (window as any).__assetDistribution as AssetDistribution;
  const datums = assetData?.datums || 3;
  
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <AssetIcons1 />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#122e91] text-[16px] text-nowrap whitespace-pre">{datums}</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[100px] relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center min-w-inherit px-[12px] py-[8px] relative w-full">
          <Frame65 />
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#42526e] text-[12px] text-center w-full">DATUMs</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function AssetIcons2() {
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

function Frame66() {
  const assetData = (window as any).__assetDistribution as AssetDistribution;
  const machinery = assetData?.machinery || 8;
  
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <AssetIcons2 />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#122e91] text-[16px] text-nowrap whitespace-pre">{machinery}</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[100px] relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center min-w-inherit px-[12px] py-[8px] relative w-full">
          <Frame66 />
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#42526e] text-[12px] text-center w-full">Machinery</p>
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
          <path d={svgPaths.p265b9a80} fill="var(--fill-0, #42526E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame67() {
  const assetData = (window as any).__assetDistribution as AssetDistribution;
  const heavyVehicles = assetData?.heavyVehicles || 15;
  
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <AssetIcons3 />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#122e91] text-[16px] text-nowrap whitespace-pre">{heavyVehicles}</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[100px] relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center min-w-inherit px-[12px] py-[8px] relative w-full">
          <Frame67 />
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#42526e] text-[12px] text-center w-full">Heavy Veh.</p>
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

function AssetIcons4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Asset Icons">
      <Group />
    </div>
  );
}

function Frame68() {
  const assetData = (window as any).__assetDistribution as AssetDistribution;
  const infraEquipment = assetData?.infraEquipment || 26;
  
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <AssetIcons4 />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#122e91] text-[16px] text-nowrap whitespace-pre">{infraEquipment}</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[100px] relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center min-w-inherit px-[12px] py-[8px] relative w-full">
          <Frame68 />
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#42526e] text-[12px] text-center w-full">Infra Equip.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[57.68%_21.25%_38.78%_11.62%]">
      <div className="absolute bg-[#42526e] inset-[57.68%_66%_38.78%_11.62%] rounded-[2.333px]" />
      <div className="absolute bg-[#42526e] inset-[57.68%_21.25%_38.78%_56.37%] rounded-[2.333px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[62.34%_21.25%_34.12%_11.62%]">
      <div className="absolute bg-[#42526e] inset-[62.34%_66.01%_34.12%_11.62%] rounded-[2.333px]" />
      <div className="absolute bg-[#42526e] inset-[62.34%_21.25%_34.12%_56.37%] rounded-[2.333px]" />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[57.68%_21.25%_34.12%_11.62%]">
      <Group4 />
      <Group3 />
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

function AssetIcons5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Asset Icons">
      <div className="absolute border-[#42526e] border-[1.4px] border-solid inset-[19.96%_13.78%_24.09%_4.17%] rounded-[0.583px]" />
      <div className="absolute bg-[#42526e] inset-[77.68%_17.51%_16.56%_7.9%] rounded-[1.167px]" />
      <Group5 />
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

function Frame69() {
  const assetData = (window as any).__assetDistribution as AssetDistribution;
  const dgSet = assetData?.dgSet || 70;
  
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <AssetIcons5 />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#122e91] text-[16px] text-nowrap whitespace-pre">{dgSet}</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[100px] relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center min-w-inherit px-[12px] py-[8px] relative w-full">
          <Frame69 />
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#42526e] text-[12px] text-center w-full">DG Set</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function AssetIcons6() {
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

function Frame70() {
  const assetData = (window as any).__assetDistribution as AssetDistribution;
  const farmEquipment = assetData?.farmEquipment || 2;
  
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <AssetIcons6 />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#122e91] text-[16px] text-nowrap whitespace-pre">{farmEquipment}</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[100px] relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center min-w-inherit px-[12px] py-[8px] relative w-full">
          <Frame70 />
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#42526e] text-[12px] text-center w-full">Farm Equip.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Filters() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[330px] overflow-clip right-[70px] top-[124px]" data-name="Filters">
      <Frame57 />
      <Frame63 />
      <Frame58 />
      <Frame59 />
      <Frame61 />
      <Frame62 />
      <Frame60 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p11b61a00} fill="var(--fill-0, #97A0AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Search Bar">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center pl-[12px] pr-[20px] py-[6px] relative w-full">
          <Icon1 />
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#97a0af] text-[14px] text-nowrap">
            <p className="leading-[1.2] whitespace-pre">Search by Asset name</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute inset-[6.25%_7.54%_3.08%_6.25%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 30">
        <g id="Frame 2608546">
          <path d={svgPaths.p2544c580} fill="var(--fill-0, #122E91)" id="Vector" />
          <path d={svgPaths.padb5c00} fill="var(--fill-0, #122E91)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function AssetIcons7() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Asset Icons">
      <Frame54 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <AssetIcons7 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">RFD Z – Pimpri Industrial Hub, Pune</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="h-[18px] relative shrink-0 w-full">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-[rgba(7,31,69,0.6)] text-nowrap top-0 whitespace-pre">Pimpri Chinchwad, Pune</p>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame80 />
      <Frame81 />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[44px] items-center leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-center text-slate-700">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[16px] w-full">1800 L</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[12px] w-full">Last Purchased</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[44px] items-center leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-center text-slate-700">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[16px] w-full">2,000 L</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[12px] w-full">Capacity</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame />
      <div className="relative self-stretch shrink-0 w-0" data-name="line">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 44">
            <path d="M0.5 0V44" id="line" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <Frame71 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[16.67%_16.67%_8.33%_8.33%]">
      <div className="absolute inset-[-1.63%_-12.01%_-1.63%_-1.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 19">
          <g id="Group 61928">
            <path d={svgPaths.p174df440} fill="var(--fill-0, #737373)" id="Vector" />
            <path d={svgPaths.p3e786d00} fill="var(--stroke-0, #737373)" id="Ellipse 1209" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 21">
      <Group12 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <Component />
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-neutral-500">Order a Purchase for this Asset</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#059492] box-border content-stretch flex h-[40px] items-center justify-center px-[12px] py-[10px] relative rounded-[4px] shrink-0 w-[180px]" data-name="Button">
      <div className="basis-0 flex flex-col font-['Poppins:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-white">
        <p className="leading-[normal]">Place Order</p>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame101 />
      <Button2 />
    </div>
  );
}

function AssetCard() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Asset Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
          <Frame103 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 848 1">
                <line id="Line 124" stroke="var(--stroke-0, black)" strokeOpacity="0.1" x2="848" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Frame74 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 848 1">
                <line id="Line 124" stroke="var(--stroke-0, black)" strokeOpacity="0.1" x2="848" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Frame102 />
        </div>
      </div>
    </div>
  );
}

function AssetIcons8() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Asset Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Asset Icons">
          <path d={svgPaths.p24128800} fill="var(--fill-0, #122E91)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <AssetIcons8 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">Baner Machinery</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-[rgba(7,31,69,0.6)] text-nowrap top-0 whitespace-pre">Balewadi Gaon, Pune</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[848px]">
      <Frame82 />
      <Frame83 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Procurement ( /week)</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">1,000 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Last Procurred</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">450 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3aa2c480} fill="var(--fill-0, #059492)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative w-full">
          <Icon2 />
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#059492] text-[14px] text-center text-nowrap">
            <p className="leading-[1.2] whitespace-pre">Add Capacity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6b778c] text-[12px] text-center w-full">Capacity</p>
          <Button3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame9 />
      <Frame8 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#059492] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Poppins:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-white">
            <p className="leading-[normal]">Place Order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssetCard1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Asset Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame77 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_-0.06%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
                <path d="M0.5 0.5H848.5" id="Vector 1104" stroke="var(--stroke-0, #DFE1E6)" strokeDasharray="5 5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <Frame42 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[16.67%_4.17%_19.5%_4.17%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 21">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p396a0b00} fill="var(--fill-0, #122E91)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AssetIcons9() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Asset Icons">
      <Group1 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <AssetIcons9 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">Baner Machinery</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-[rgba(7,31,69,0.6)] text-nowrap top-0 whitespace-pre">Balewadi Gaon, Pune</p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[848px]">
      <Frame84 />
      <Frame85 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Procurement ( /week)</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">1,000 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Last Procurred</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">450 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Capacity</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">2,000 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame7 />
      <Frame11 />
      <Frame10 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#059492] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Poppins:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-white">
            <p className="leading-[normal]">Place Order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssetCard2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Asset Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame78 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_-0.06%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
                <path d="M0.5 0.5H848.5" id="Vector 1104" stroke="var(--stroke-0, #DFE1E6)" strokeDasharray="5 5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <Frame43 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function AssetIcons10() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Asset Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Asset Icons">
          <path d={svgPaths.p24128800} fill="var(--fill-0, #122E91)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <AssetIcons10 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">Chakan Machinery</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-[rgba(7,31,69,0.6)] text-nowrap top-0 whitespace-pre">Chakan, Pune</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[848px]">
      <Frame86 />
      <Frame87 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Procurement ( /week)</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">1,000 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Last Procurred</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">450 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Capacity</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">2,000 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#059492] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Poppins:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-white">
            <p className="leading-[normal]">Place Consumption Order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssetCard3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Asset Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame79 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_-0.06%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
                <path d="M0.5 0.5H848.5" id="Vector 1104" stroke="var(--stroke-0, #DFE1E6)" strokeDasharray="5 5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <Frame44 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function AssetIcons11() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Asset Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Asset Icons">
          <path d={svgPaths.p2112e100} fill="var(--fill-0, #122E91)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <AssetIcons11 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">Baner Machinery</p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-[rgba(7,31,69,0.6)] text-nowrap top-0 whitespace-pre">Balewadi Gaon, Pune</p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[848px]">
      <Frame88 />
      <Frame89 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Procurement ( /week)</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">1,000 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Last Procurred</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">450 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3aa2c480} fill="var(--fill-0, #059492)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative w-full">
          <Icon3 />
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#059492] text-[14px] text-center text-nowrap">
            <p className="leading-[1.2] whitespace-pre">Add Capacity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6b778c] text-[12px] text-center w-full">Capacity</p>
          <Button7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#059492] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Poppins:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-white">
            <p className="leading-[normal]">Place Order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssetCard4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Asset Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame90 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_-0.06%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
                <path d="M0.5 0.5H848.5" id="Vector 1104" stroke="var(--stroke-0, #DFE1E6)" strokeDasharray="5 5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <Frame45 />
          <Button8 />
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="absolute inset-[6.25%_7.54%_3.08%_6.25%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 30">
        <g id="Frame 2608546">
          <path d={svgPaths.p2544c580} fill="var(--fill-0, #122E91)" id="Vector" />
          <path d={svgPaths.padb5c00} fill="var(--fill-0, #122E91)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function AssetIcons12() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Asset Icons">
      <Frame55 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <AssetIcons12 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">{`RFD Z – Maharashtra Heavy Engineering & Infrastructure Solutions Pvt. Ltd., Pune MIDC`}</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="h-[18px] relative shrink-0 w-full">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-[rgba(7,31,69,0.6)] text-nowrap top-0 whitespace-pre">Chakan, Pune</p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame91 />
      <Frame92 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[44px] items-center leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-center text-slate-700">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[16px] w-full">300 L</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[12px] w-full">Last Purchased</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[44px] items-center leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-center text-slate-700">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[16px] w-full">1,000 L</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[12px] w-full">Capacity</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame1 />
      <div className="relative self-stretch shrink-0 w-0" data-name="line">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 44">
            <path d="M0.5 0V44" id="line" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <Frame72 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#ef5350] box-border content-stretch flex gap-[8px] items-center justify-center px-[4px] py-[2px] relative rounded-[2px] shrink-0">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[10px] text-center text-nowrap text-white tracking-[1px] whitespace-pre">NEW</p>
    </div>
  );
}

function Icon4() {
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

function Button9() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center pl-[12px] pr-0 py-0 relative rounded-[4px] shrink-0 w-[71px]" data-name="Button">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#059492] text-[14px] text-center text-nowrap">
        <p className="leading-[1.2] whitespace-pre">View</p>
      </div>
      <Icon4 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[18px]">1 Pending RFD Orders</p>
      <Button9 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame99 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[16.67%_16.67%_8.33%_8.33%]">
      <div className="absolute inset-[-1.63%_-12.01%_-1.63%_-1.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 19">
          <g id="Group 61928">
            <path d={svgPaths.p174df440} fill="var(--fill-0, #737373)" id="Vector" />
            <path d={svgPaths.p3e786d00} fill="var(--stroke-0, #737373)" id="Ellipse 1209" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 21">
      <Group13 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <Component1 />
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-neutral-500">Order a Purchase for this Asset</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#059492] box-border content-stretch flex h-[40px] items-center justify-center px-[12px] py-[10px] relative rounded-[4px] shrink-0 w-[180px]" data-name="Button">
      <div className="basis-0 flex flex-col font-['Poppins:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-white">
        <p className="leading-[normal]">Place Order</p>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame106 />
      <Button10 />
    </div>
  );
}

function AssetCard5() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Asset Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
          <Frame105 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 848 1">
                <line id="Line 124" stroke="var(--stroke-0, black)" strokeOpacity="0.1" x2="848" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Frame75 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 848 1">
                <line id="Line 124" stroke="var(--stroke-0, black)" strokeOpacity="0.1" x2="848" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Frame100 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 848 1">
                <line id="Line 124" stroke="var(--stroke-0, black)" strokeOpacity="0.1" x2="848" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Frame107 />
        </div>
      </div>
    </div>
  );
}

function AssetIcons13() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Asset Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Asset Icons">
          <path d={svgPaths.p24128800} fill="var(--fill-0, #122E91)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <AssetIcons13 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">Baner Machinery</p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-[rgba(7,31,69,0.6)] text-nowrap top-0 whitespace-pre">Balewadi Gaon, Pune</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[848px]">
      <Frame93 />
      <Frame94 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Procurement ( /week)</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">1,000 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Last Procurred</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">450 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Capacity</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">2,000 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame18 />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#059492] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Poppins:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-white">
            <p className="leading-[normal]">Place Order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssetCard6() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Asset Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame95 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_-0.06%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
                <path d="M0.5 0.5H848.5" id="Vector 1104" stroke="var(--stroke-0, #DFE1E6)" strokeDasharray="5 5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <Frame46 />
          <Button11 />
        </div>
      </div>
    </div>
  );
}

function AssetIcons14() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Asset Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Asset Icons">
          <path d={svgPaths.p24128800} fill="var(--fill-0, #122E91)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <AssetIcons14 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">Hinjewadi Industries</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-[rgba(7,31,69,0.6)] text-nowrap top-0 whitespace-pre">Hinjewadi, Pune</p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[848px]">
      <Frame96 />
      <Frame97 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Procurement ( /week)</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">1,000 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Last Procurred</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">450 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3aa2c480} fill="var(--fill-0, #059492)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative w-full">
          <Icon5 />
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#059492] text-[14px] text-center text-nowrap">
            <p className="leading-[1.2] whitespace-pre">Add Capacity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6b778c] text-[12px] text-center w-full">Capacity</p>
          <Button12 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame21 />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#059492] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Poppins:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-white">
            <p className="leading-[normal]">Place Order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssetCard7() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Asset Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame98 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_-0.06%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
                <path d="M0.5 0.5H848.5" id="Vector 1104" stroke="var(--stroke-0, #DFE1E6)" strokeDasharray="5 5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <Frame47 />
          <Button13 />
        </div>
      </div>
    </div>
  );
}

function AssetIcons15() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Asset Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Asset Icons">
          <path d={svgPaths.p2112e100} fill="var(--fill-0, #122E91)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <AssetIcons15 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">Baner Machinery</p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-[rgba(7,31,69,0.6)] text-nowrap top-0 whitespace-pre">Balewadi Gaon, Pune</p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[848px]">
      <Frame108 />
      <Frame109 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Procurement ( /week)</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">1,000 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Last Procurred</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">450 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Capacity</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">2,000 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame24 />
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#059492] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Poppins:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-white">
            <p className="leading-[normal]">Place Order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssetCard8() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Asset Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame110 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_-0.06%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
                <path d="M0.5 0.5H848.5" id="Vector 1104" stroke="var(--stroke-0, #DFE1E6)" strokeDasharray="5 5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <Frame48 />
          <Button14 />
        </div>
      </div>
    </div>
  );
}

function AssetIcons16() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Asset Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Asset Icons">
          <path d={svgPaths.p29c69e00} fill="var(--fill-0, #122E91)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <AssetIcons16 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">Baner Machinery</p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-[rgba(7,31,69,0.6)] text-nowrap top-0 whitespace-pre">Balewadi Gaon, Pune</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[848px]">
      <Frame111 />
      <Frame112 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Procurement ( /week)</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">1,000 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Last Procurred</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">450 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3aa2c480} fill="var(--fill-0, #059492)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative w-full">
          <Icon6 />
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#059492] text-[14px] text-center text-nowrap">
            <p className="leading-[1.2] whitespace-pre">Add Capacity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6b778c] text-[12px] text-center w-full">Capacity</p>
          <Button15 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame27 />
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#059492] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Poppins:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-white">
            <p className="leading-[normal]">Place Order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssetCard9() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Asset Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame113 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_-0.06%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
                <path d="M0.5 0.5H848.5" id="Vector 1104" stroke="var(--stroke-0, #DFE1E6)" strokeDasharray="5 5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <Frame49 />
          <Button16 />
        </div>
      </div>
    </div>
  );
}

function AssetIcons17() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Asset Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Asset Icons">
          <path d={svgPaths.p29c69e00} fill="var(--fill-0, #122E91)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <AssetIcons17 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">Baner Machinery</p>
    </div>
  );
}

function Frame115() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-[rgba(7,31,69,0.6)] text-nowrap top-0 whitespace-pre">Balewadi Gaon, Pune</p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[848px]">
      <Frame114 />
      <Frame115 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Procurement ( /week)</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">1,000 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame31() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Last Procurred</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">450 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame32() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Capacity</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">2,000 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame30 />
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#059492] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Poppins:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-white">
            <p className="leading-[normal]">Place Order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssetCard10() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Asset Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame116 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_-0.06%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
                <path d="M0.5 0.5H848.5" id="Vector 1104" stroke="var(--stroke-0, #DFE1E6)" strokeDasharray="5 5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <Frame50 />
          <Button17 />
        </div>
      </div>
    </div>
  );
}

function AssetIcons18() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Asset Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Asset Icons">
          <path d={svgPaths.p24128800} fill="var(--fill-0, #122E91)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <AssetIcons18 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">Hinjewadi Machinery</p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-[rgba(7,31,69,0.6)] text-nowrap top-0 whitespace-pre">Hinjewadi Phase-1, Pune</p>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[848px]">
      <Frame117 />
      <Frame118 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Procurement ( /week)</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">1,000 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame34() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Last Procurred</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">450 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame35() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Capacity</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">2,000 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame33 />
      <Frame34 />
      <Frame35 />
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[#059492] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Poppins:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-white">
            <p className="leading-[normal]">Place Order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssetCard11() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Asset Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame119 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_-0.06%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
                <path d="M0.5 0.5H848.5" id="Vector 1104" stroke="var(--stroke-0, #DFE1E6)" strokeDasharray="5 5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <Frame51 />
          <Button18 />
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute inset-[6.25%_7.54%_3.08%_6.25%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 30">
        <g id="Frame 2608546">
          <path d={svgPaths.p2544c580} fill="var(--fill-0, #122E91)" id="Vector" />
          <path d={svgPaths.padb5c00} fill="var(--fill-0, #122E91)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function AssetIcons19() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Asset Icons">
      <Frame56 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <AssetIcons19 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">RFD Z – Chakan Auto Works, Pune</p>
    </div>
  );
}

function Frame121() {
  return (
    <div className="h-[18px] relative shrink-0 w-full">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-[rgba(7,31,69,0.6)] text-nowrap top-0 whitespace-pre">Chakan, Pune</p>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame120 />
      <Frame121 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[44px] items-center leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-center text-slate-700">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[16px] w-full">1500 L</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[12px] w-full">Last Purchased</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[44px] items-center leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-center text-slate-700">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[16px] w-full">2,000 L</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[12px] w-full">Capacity</p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame2 />
      <div className="relative self-stretch shrink-0 w-0" data-name="line">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 44">
            <path d="M0.5 0V44" id="line" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <Frame73 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#ef5350] box-border content-stretch flex gap-[8px] items-center justify-center px-[4px] py-[2px] relative rounded-[2px] shrink-0">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[10px] text-center text-nowrap text-white tracking-[1px] whitespace-pre">NEW</p>
    </div>
  );
}

function Icon7() {
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

function Button19() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center pl-[12px] pr-0 py-0 relative rounded-[4px] shrink-0 w-[71px]" data-name="Button">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#059492] text-[14px] text-center text-nowrap">
        <p className="leading-[1.2] whitespace-pre">View</p>
      </div>
      <Icon7 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[18px]">4 Pending RFD Orders</p>
      <Button19 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame123 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[16.67%_16.67%_8.33%_8.33%]">
      <div className="absolute inset-[-1.63%_-12.01%_-1.63%_-1.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 19">
          <g id="Group 61928">
            <path d={svgPaths.p174df440} fill="var(--fill-0, #737373)" id="Vector" />
            <path d={svgPaths.p3e786d00} fill="var(--stroke-0, #737373)" id="Ellipse 1209" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 21">
      <Group14 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <Component2 />
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-neutral-500">Order a Purchase for this Asset</p>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-[#059492] box-border content-stretch flex h-[40px] items-center justify-center px-[12px] py-[10px] relative rounded-[4px] shrink-0 w-[180px]" data-name="Button">
      <div className="basis-0 flex flex-col font-['Poppins:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-white">
        <p className="leading-[normal]">Place Order</p>
      </div>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame125 />
      <Button20 />
    </div>
  );
}

function AssetCard12() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Asset Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
          <Frame122 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 848 1">
                <line id="Line 124" stroke="var(--stroke-0, black)" strokeOpacity="0.1" x2="848" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Frame76 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 848 1">
                <line id="Line 124" stroke="var(--stroke-0, black)" strokeOpacity="0.1" x2="848" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Frame124 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 848 1">
                <line id="Line 124" stroke="var(--stroke-0, black)" strokeOpacity="0.1" x2="848" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Frame126 />
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[57.68%_21.25%_38.78%_11.62%]">
      <div className="absolute bg-[#122e91] inset-[57.68%_66.01%_38.78%_11.62%] rounded-[2.333px]" />
      <div className="absolute bg-[#122e91] inset-[57.68%_21.25%_38.78%_56.37%] rounded-[2.333px]" />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[62.34%_21.25%_34.12%_11.62%]">
      <div className="absolute bg-[#122e91] inset-[62.34%_66.01%_34.12%_11.62%] rounded-[2.333px]" />
      <div className="absolute bg-[#122e91] inset-[62.34%_21.25%_34.12%_56.37%] rounded-[2.333px]" />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[57.68%_21.25%_34.12%_11.62%]">
      <Group6 />
      <Group7 />
    </div>
  );
}

function BoltFill0Wght400Grad0Opsz1() {
  return (
    <div className="absolute inset-[16.23%_24.97%_65.12%_56.38%]" data-name="bolt_FILL0_wght400_GRAD0_opsz48 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_1_5479)" id="bolt_FILL0_wght400_GRAD0_opsz48 1">
          <path d={svgPaths.p4827e00} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_5479">
            <rect fill="white" height="5.96772" width="5.96772" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AssetIcons20() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Asset Icons">
      <div className="absolute border-[#122e91] border-[1.4px] border-solid inset-[19.96%_13.78%_24.09%_4.17%] rounded-[0.583px]" />
      <div className="absolute bg-[#122e91] inset-[77.68%_17.51%_16.56%_7.9%] rounded-[1.167px]" />
      <Group8 />
      <div className="absolute flex inset-[23.69%_6.25%_27.82%_87.99%] items-center justify-center">
        <div className="flex-none h-[1.843px] rotate-[270deg] w-[15.516px]">
          <div className="bg-[#122e91] rounded-[1.167px] size-full" />
        </div>
      </div>
      <div className="absolute bg-[#122e91] inset-[12.5%_66%_81.91%_11.62%] rounded-[2.333px]" />
      <div className="absolute bg-[#122e91] border-[#122e91] border-[1.4px] border-solid inset-[12.5%_21.24%_61.39%_52.65%] rounded-[0.583px]" />
      <BoltFill0Wght400Grad0Opsz1 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <AssetIcons20 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">Baner Machinery</p>
    </div>
  );
}

function Frame128() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-[rgba(7,31,69,0.6)] text-nowrap top-0 whitespace-pre">Balewadi Gaon, Pune</p>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[848px]">
      <Frame127 />
      <Frame128 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Procurement ( /week)</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">1,000 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame37() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Last Procurred</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">450 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame38() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Capacity</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">2,000 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame36 />
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-[#059492] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Poppins:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-white">
            <p className="leading-[normal]">Place Order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssetCard13() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Asset Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame129 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_-0.06%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
                <path d="M0.5 0.5H848.5" id="Vector 1104" stroke="var(--stroke-0, #DFE1E6)" strokeDasharray="5 5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <Frame52 />
          <Button21 />
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[57.68%_21.25%_38.78%_11.62%]">
      <div className="absolute bg-[#122e91] inset-[57.68%_66.01%_38.78%_11.62%] rounded-[2.333px]" />
      <div className="absolute bg-[#122e91] inset-[57.68%_21.25%_38.78%_56.37%] rounded-[2.333px]" />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[62.34%_21.25%_34.12%_11.62%]">
      <div className="absolute bg-[#122e91] inset-[62.34%_66.01%_34.12%_11.62%] rounded-[2.333px]" />
      <div className="absolute bg-[#122e91] inset-[62.34%_21.25%_34.12%_56.37%] rounded-[2.333px]" />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[57.68%_21.25%_34.12%_11.62%]">
      <Group9 />
      <Group10 />
    </div>
  );
}

function BoltFill0Wght400Grad0Opsz2() {
  return (
    <div className="absolute inset-[16.23%_24.97%_65.12%_56.38%]" data-name="bolt_FILL0_wght400_GRAD0_opsz48 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_1_5479)" id="bolt_FILL0_wght400_GRAD0_opsz48 1">
          <path d={svgPaths.p4827e00} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_5479">
            <rect fill="white" height="5.96772" width="5.96772" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AssetIcons21() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Asset Icons">
      <div className="absolute border-[#122e91] border-[1.4px] border-solid inset-[19.96%_13.78%_24.09%_4.17%] rounded-[0.583px]" />
      <div className="absolute bg-[#122e91] inset-[77.68%_17.51%_16.56%_7.9%] rounded-[1.167px]" />
      <Group11 />
      <div className="absolute flex inset-[23.69%_6.25%_27.82%_87.99%] items-center justify-center">
        <div className="flex-none h-[1.843px] rotate-[270deg] w-[15.516px]">
          <div className="bg-[#122e91] rounded-[1.167px] size-full" />
        </div>
      </div>
      <div className="absolute bg-[#122e91] inset-[12.5%_66%_81.91%_11.62%] rounded-[2.333px]" />
      <div className="absolute bg-[#122e91] border-[#122e91] border-[1.4px] border-solid inset-[12.5%_21.24%_61.39%_52.65%] rounded-[0.583px]" />
      <BoltFill0Wght400Grad0Opsz2 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <AssetIcons21 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">Baner Machinery</p>
    </div>
  );
}

function Frame131() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-[rgba(7,31,69,0.6)] text-nowrap top-0 whitespace-pre">Balewadi Gaon, Pune</p>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[848px]">
      <Frame130 />
      <Frame131 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Procurement ( /week)</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">1,000 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame40() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center not-italic px-[12px] py-[8px] relative text-center w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#6b778c] text-[12px] w-full">Last Procurred</p>
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#42526e] text-[14px] w-full">
            <p className="leading-[normal]">450 L</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3aa2c480} fill="var(--fill-0, #059492)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative w-full">
          <Icon8 />
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#059492] text-[14px] text-center text-nowrap">
            <p className="leading-[1.2] whitespace-pre">Add Capacity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6b778c] text-[12px] text-center w-full">Capacity</p>
          <Button22 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame39 />
      <Frame40 />
      <Frame41 />
    </div>
  );
}

function Button23() {
  return (
    <div className="bg-[#059492] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[12px] py-[10px] relative w-full">
          <div className="basis-0 flex flex-col font-['Poppins:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-white">
            <p className="leading-[normal]">Place Order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssetCard14() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Asset Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame132 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_-0.06%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
                <path d="M0.5 0.5H848.5" id="Vector 1104" stroke="var(--stroke-0, #DFE1E6)" strokeDasharray="5 5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <Frame53 />
          <Button23 />
        </div>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[330px] right-[70px] top-[218px] pb-[100px]">
      <SearchBar />
      <AssetCard />
      <AssetCard1 />
      <AssetCard2 />
      <AssetCard3 />
      <AssetCard4 />
      <AssetCard2 />
      <AssetCard5 />
      <AssetCard6 />
      <AssetCard7 />
      <AssetCard8 />
      <AssetCard9 />
      <AssetCard10 />
      <AssetCard2 />
      <AssetCard11 />
      <AssetCard12 />
      <AssetCard13 />
      {[...Array(2).keys()].map((_, i) => (
        <AssetCard14 key={i} />
      ))}
      <AssetCard9 />
      <AssetCard4 />
    </div>
  );
}

function Group2() {
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
      <Group2 />
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

function Icon9() {
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

function Button24() {
  return (
    <div className="box-border content-stretch flex h-[32px] items-start p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <Icon9 />
    </div>
  );
}

function Icon10() {
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

function Button25() {
  return (
    <div className="box-border content-stretch flex h-[32px] items-start p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <Icon10 />
    </div>
  );
}

function Icon11() {
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

function Button26() {
  return (
    <div className="bg-[#059492] box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] py-[4px] relative rounded-[4px] shrink-0 w-[122px]" data-name="Button">
      <Icon11 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre">New Order</p>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center justify-end right-[32px] top-[calc(50%+0.25px)] translate-y-[-50%]" data-name="Actions">
      <Button24 />
      <Button25 />
      <Button26 />
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
          <path d={svgPaths.p31a41340} fill="var(--fill-0, #059492)" id="transport,-private,-public,-vehicles,-car,-bus" />
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

function AssetIcons22() {
  return (
    <div className="absolute left-[10px] overflow-clip size-[24px] top-1/2 translate-y-[-50%]" data-name="Asset Icons">
      <Page1 />
    </div>
  );
}

function Frame5() {
  return <div className="absolute bg-[#059492] h-[40px] left-[-21px] rounded-br-[10px] rounded-tr-[10px] top-0 w-[5px]" />;
}

function NavItem() {
  return (
    <div className="absolute bg-[#ebecf0] h-[40px] left-[20px] rounded-[3px] top-[116px] w-[208px]" data-name="Nav Item">
      <p className="absolute font-['Poppins:Medium',sans-serif] h-[40px] leading-[40px] left-[50px] not-italic right-[10px] text-[#059492] text-[14px] top-[calc(50%-20px)]">Assets</p>
      <AssetIcons22 />
      <Frame5 />
    </div>
  );
}

function Icon12() {
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
      <Icon12 />
    </div>
  );
}

function Icon13() {
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
      <Icon13 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[10px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p33b54200} fill="var(--fill-0, #42526E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavItem3() {
  return (
    <div className="absolute h-[40px] left-[20px] overflow-clip rounded-[3px] top-[20px] w-[208px]" data-name="Nav Item">
      <p className="absolute font-['Poppins:Medium',sans-serif] h-[40px] leading-[40px] left-[50px] not-italic right-[10px] text-[#42526e] text-[14px] top-[calc(50%-20px)]">Home</p>
      <Icon14 />
    </div>
  );
}

function Icon15() {
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
      <Icon15 />
    </div>
  );
}

function NavPanel() {
  return (
    <div className="absolute bg-white bottom-[-1px] left-0 overflow-clip rounded-br-[5px] top-[56px] w-[260px]" data-name="Nav Panel">
      <NavItem />
      <NavItem1 />
      <NavItem2 />
      <NavItem3 />
      <NavItem4 />
    </div>
  );
}

export default function Asset() {
  return (
    <div className="bg-[#ebeef1] relative size-full overflow-auto pb-[100px]" data-name="Asset">
      <NavigationPanel />
      <Header />
      <TopAppBar />
      <Filters />
      <div className="absolute h-0 left-[330px] right-[70px] top-[202px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 880 1">
            <path d="M0 0.5H880" id="Vector 1" stroke="var(--stroke-0, #C1C7D0)" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <Frame104 />
    </div>
  );
}