import svgPaths from "./svg-988wv8xdlr";
import imgImage9 from "figma:asset/7a6d5ccb0ffbdfc2870b9b6f29c3ae23a8cdabb8.png";
import { NavigationPanel } from "../components/NavigationPanel";

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

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p15f81600} fill="var(--fill-0, #42526E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute box-border content-stretch flex h-[32px] items-start p-[4px] right-0 rounded-[4px] top-0" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1bc36880} fill="var(--fill-0, #42526E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[4px] h-[32px] items-center justify-end px-[12px] py-[4px] right-[32px] rounded-[4px] top-0" data-name="Button">
      <Icon2 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#42526e] text-[14px] text-nowrap text-right">
        <p className="leading-[1.2] whitespace-pre">Analytics</p>
      </div>
    </div>
  );
}

function TopAppBar() {
  return (
    <div className="absolute h-[32px] left-[330px] right-[70px] top-[76px]" data-name="Top App Bar">
      <Button />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#253858] text-[18px] text-center text-nowrap top-[16px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Orders</p>
      </div>
      <Button1 />
      <Button2 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center">Current</p>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[#c1c7d0] h-px relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="h-px w-full" />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[40px] items-start justify-between min-h-px min-w-px relative shrink-0" data-name="Component 1">
      <Frame50 />
      <Frame48 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#059492] text-[14px] text-center">Past</p>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-[#059492] h-[4px] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full">
      <div className="size-full">
        <div className="h-[4px] w-full" />
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 1">
      <Frame51 />
      <Frame49 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="absolute content-stretch flex items-start left-[330px] right-[70px] top-[120px]">
      <Component />
      <Component1 />
    </div>
  );
}

function Icon3() {
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
          <Icon3 />
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#97a0af] text-[14px] text-nowrap">
            <p className="leading-[1.2] whitespace-pre">Search by Asset</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#36a40f] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-nowrap text-white whitespace-pre">Delivered</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-nowrap text-slate-500 whitespace-pre">Order Date: 25 Aug 2023</p>
      <Frame30 />
    </div>
  );
}

function AssetsIcons() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="assets icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="assets icons">
          <path d={svgPaths.p2831600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-slate-500 box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[16px] relative rounded-[31.413px] shrink-0 size-[36px]">
      <AssetsIcons />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[144px]">
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-slate-800">JCB Machine 1297</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <Frame4 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame24 />
      <Frame18 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative w-full">
          <Frame29 />
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[44px] items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-slate-700">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[16px] w-full">500 L</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[12px] w-full">Ordered Fuel</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[44px] items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-slate-700">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[16px] w-full">489.6 L</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[12px] w-full">Delivered Fuel</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame />
      <Frame57 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative rounded-[40px] shrink-0 size-[16px]" data-name="image 9">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[40px]">
          <img alt="" className="absolute h-[258.67%] left-[-144%] max-w-none top-[-96.51%] w-[388%]" src={imgImage9} />
        </div>
      </div>
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-slate-700">Rajlaxmi Service Center</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1b538d00} fill="var(--fill-0, #334155)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Icon4 />
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-slate-700">Delivery By: 26 Aug 2023</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame13 />
      <Frame22 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame68 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 856 1">
            <line id="Line 143" stroke="var(--stroke-0, #F1F5F9)" x2="856" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame56 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#059492] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[24px] py-[12px] relative w-full">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-50 whitespace-pre">Pay ₹ 46,500/-</p>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[16px] pt-[12px] px-[12px] relative w-full">
          <Frame52 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame31 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 880 1">
              <line id="Line 144" stroke="var(--stroke-0, #EBECF0)" x2="880" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame53 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ebecf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#36a40f] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-nowrap text-white whitespace-pre">Delivered</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-nowrap text-slate-500 whitespace-pre">Order Date: 25 Aug 2023</p>
      <Frame32 />
    </div>
  );
}

function AssetsIcons1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="assets icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="assets icons">
          <path d={svgPaths.p2831600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-slate-500 box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[16px] relative rounded-[31.413px] shrink-0 size-[36px]">
      <AssetsIcons1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[144px]">
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-slate-800">JCB Machine 1297</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame25 />
      <Frame19 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative w-full">
          <Frame35 />
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[44px] items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-slate-700">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[16px] w-full">500 L</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[12px] w-full">Ordered Fuel</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[44px] items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-slate-700">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[16px] w-full">489.6 L</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[12px] w-full">Delivered Fuel</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame62 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative rounded-[40px] shrink-0 size-[16px]" data-name="image 9">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[40px]">
          <img alt="" className="absolute h-[258.67%] left-[-144%] max-w-none top-[-96.51%] w-[388%]" src={imgImage9} />
        </div>
      </div>
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-slate-700">Rajlaxmi Service Center</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1b538d00} fill="var(--fill-0, #334155)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Icon5 />
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-slate-700">Delivery By: 26 Aug 2023</p>
    </div>
  );
}

function Tick() {
  return (
    <div className="absolute left-[1.5px] size-[9px] top-[1.5px]" data-name="Tick 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="Tick 1">
          <path d={svgPaths.p15039600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute inset-[12.5%]">
      <div className="absolute left-0 size-[12px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <circle cx="6" cy="6" fill="var(--fill-0, #36A40F)" id="Ellipse 1117" r="6" />
        </svg>
      </div>
      <Tick />
    </div>
  );
}

function Capa() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Capa_1">
      <Frame17 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">Paid on 12 Aug 2025</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Capa />
      <Frame8 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame14 />
      <Frame23 />
      <Frame33 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame69 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 856 1">
            <line id="Line 143" stroke="var(--stroke-0, #F1F5F9)" x2="856" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame63 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[16px] pt-[12px] px-[12px] relative w-full">
          <Frame54 />
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame37 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 880 1">
              <line id="Line 144" stroke="var(--stroke-0, #EBECF0)" x2="880" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame55 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ebecf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[#da4964] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Metropolis:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-nowrap text-white whitespace-pre">Cancelled</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-nowrap text-slate-500 whitespace-pre">Order Date: 25 Aug 2023</p>
      <Frame38 />
    </div>
  );
}

function AssetsIcons2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="assets icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="assets icons">
          <path d={svgPaths.p2831600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-slate-500 box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[16px] relative rounded-[31.413px] shrink-0 size-[36px]">
      <AssetsIcons2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[144px]">
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-slate-800">JCB Machine 1297</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <Frame6 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame26 />
      <Frame20 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative w-full">
          <Frame39 />
          <Frame40 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[44px] items-start leading-[normal] not-italic relative shrink-0 text-slate-700 w-[560px]">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[16px] w-full">500 L</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[12px] w-full">Ordered Fuel</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative rounded-[40px] shrink-0 size-[16px]" data-name="image 9">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[40px]">
          <img alt="" className="absolute h-[258.67%] left-[-144%] max-w-none top-[-96.51%] w-[388%]" src={imgImage9} />
        </div>
      </div>
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-slate-700">Rajlaxmi Service Center</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.peae99f0} fill="var(--fill-0, #DA4964)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">Rejected on 26 Aug 2023</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Icon6 />
      <Frame9 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1650fb00} fill="var(--fill-0, #36A40F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">Paid on 26 Aug 2023</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Icon7 />
      <Frame10 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame42 />
      <Frame34 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame2 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 856 1">
            <line id="Line 143" stroke="var(--stroke-0, #F1F5F9)" x2="856" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame64 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[16px] pt-[12px] px-[12px] relative w-full">
          <Frame65 />
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame41 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 880 1">
              <line id="Line 144" stroke="var(--stroke-0, #EBECF0)" x2="880" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame70 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ebecf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#da4964] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Metropolis:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-nowrap text-white whitespace-pre">Cancelled</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-nowrap text-slate-500 whitespace-pre">Order Date: 25 Aug 2023</p>
      <Frame43 />
    </div>
  );
}

function AssetsIcons3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="assets icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="assets icons">
          <path d={svgPaths.p2831600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-slate-500 box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[16px] relative rounded-[31.413px] shrink-0 size-[36px]">
      <AssetsIcons3 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[144px]">
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-slate-800">JCB Machine 1297</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <Frame7 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame27 />
      <Frame21 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative w-full">
          <Frame44 />
          <Frame45 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[44px] items-start leading-[normal] not-italic relative shrink-0 text-slate-700 w-[560px]">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[16px] w-full">500 L</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[12px] w-full">Ordered Fuel</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative rounded-[40px] shrink-0 size-[16px]" data-name="image 9">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[40px]">
          <img alt="" className="absolute h-[258.67%] left-[-144%] max-w-none top-[-96.51%] w-[388%]" src={imgImage9} />
        </div>
      </div>
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-slate-700">Rajlaxmi Service Center</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.peae99f0} fill="var(--fill-0, #DA4964)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">Rejected on 26 Aug 2023</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Icon8 />
      <Frame11 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame47 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame3 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 856 1">
            <line id="Line 143" stroke="var(--stroke-0, #F1F5F9)" x2="856" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame71 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[16px] pt-[12px] px-[12px] relative w-full">
          <Frame72 />
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame46 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 880 1">
              <line id="Line 144" stroke="var(--stroke-0, #EBECF0)" x2="880" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame73 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ebecf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[330px] right-[70px] top-[176px] pb-[100px]">
      <SearchBar />
      <Frame60 />
      <Frame58 />
      <Frame59 />
      <Frame61 />
    </div>
  );
}

export default function OrdersPast() {
  return (
    <div className="bg-[#ebeef1] relative size-full" data-name="Orders / Past">
      <NavigationPanel />
      <TopAppBar />
      <Frame66 />
      <Frame67 />
    </div>
  );
}