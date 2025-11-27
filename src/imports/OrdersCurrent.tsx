import svgPaths from "./svg-rf8mfvhtce";
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

function Frame57() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#059492] text-[14px] text-center">Current</p>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-[#059492] h-[4px] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full">
      <div className="size-full">
        <div className="h-[4px] w-full" />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 1">
      <Frame57 />
      <Frame55 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center">Past</p>
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-[#c1c7d0] h-px relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="h-px w-full" />
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[40px] items-start justify-between min-h-px min-w-px relative shrink-0" data-name="Component 1">
      <Frame58 />
      <Frame56 />
    </div>
  );
}

function Frame73() {
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

function Frame34() {
  return (
    <div className="bg-[#36a40f] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-nowrap text-white whitespace-pre">Order Placed</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-nowrap text-slate-500 whitespace-pre">Order Date: 25 Aug 2023</p>
      <Frame34 />
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

function Frame28() {
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

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <Frame4 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame28 />
      <Frame20 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative w-full">
          <Frame33 />
          <Frame32 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
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

function Frame24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Icon4 />
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-slate-700">Delivery By: 26 Aug 2023</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame24 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame />
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

function Frame60() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[16px] pt-[12px] px-[12px] relative w-full">
          <Frame59 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame35 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 880 1">
              <line id="Line 144" stroke="var(--stroke-0, #EBECF0)" x2="880" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame60 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ebecf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[#237fc1] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Metropolis:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-nowrap text-white whitespace-pre">Accepted</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-nowrap text-slate-500 whitespace-pre">Order Date: 25 Aug 2023</p>
      <Frame38 />
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

function Frame29() {
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

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame29 />
      <Frame21 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative w-full">
          <Frame40 />
          <Frame41 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[44px] items-start leading-[normal] not-italic relative shrink-0 text-slate-700 w-[560px]">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[16px] w-full">500 L</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[12px] w-full">Ordered Fuel</p>
    </div>
  );
}

function Frame17() {
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

function Frame25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Icon5 />
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-slate-700">Delivery By: 26 Aug 2023</p>
    </div>
  );
}

function C61Iphone() {
  return (
    <div className="absolute bottom-0 left-[21.68%] right-[21.69%] top-0" data-name="c61_iphone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16">
        <g id="c61_iphone">
          <path d={svgPaths.pd215c24} fill="var(--fill-0, #334155)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-0 contents left-[21.68%] right-[21.69%] top-0" data-name="Group">
      <C61Iphone />
    </div>
  );
}

function Capa() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Capa_1">
      <Group />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">Start OTP: 2889</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Capa />
      <Frame8 />
    </div>
  );
}

function C61Iphone1() {
  return (
    <div className="absolute bottom-0 left-[21.68%] right-[21.69%] top-0" data-name="c61_iphone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16">
        <g id="c61_iphone">
          <path d={svgPaths.pd215c24} fill="var(--fill-0, #334155)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-0 contents left-[21.68%] right-[21.69%] top-0" data-name="Group">
      <C61Iphone1 />
    </div>
  );
}

function Capa1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Capa_1">
      <Group1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">End OTP: 2889</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Capa1 />
      <Frame9 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame17 />
      <Frame25 />
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 856 1">
            <line id="Line 143" stroke="var(--stroke-0, #F1F5F9)" x2="856" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame65 />
    </div>
  );
}

function Button4() {
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

function Frame62() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[16px] pt-[12px] px-[12px] relative w-full">
          <Frame61 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame42 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 880 1">
              <line id="Line 144" stroke="var(--stroke-0, #EBECF0)" x2="880" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame62 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ebecf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#ffc67a] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Metropolis:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-nowrap text-slate-800 whitespace-pre">Vehicle Dispatched</p>
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

function Frame30() {
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

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <Frame6 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame30 />
      <Frame22 />
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

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[44px] items-start leading-[normal] not-italic relative shrink-0 text-slate-700 w-[560px]">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[16px] w-full">500 L</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[12px] w-full">Ordered Fuel</p>
    </div>
  );
}

function Frame18() {
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
          <path d={svgPaths.p1b538d00} fill="var(--fill-0, #334155)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Icon6 />
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-slate-700">Delivery By: 26 Aug 2023</p>
    </div>
  );
}

function C61Iphone2() {
  return (
    <div className="absolute bottom-0 left-[21.68%] right-[21.69%] top-0" data-name="c61_iphone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16">
        <g id="c61_iphone">
          <path d={svgPaths.pd215c24} fill="var(--fill-0, #334155)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-0 contents left-[21.68%] right-[21.69%] top-0" data-name="Group">
      <C61Iphone2 />
    </div>
  );
}

function Capa2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Capa_1">
      <Group2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">Start OTP: 2889</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Capa2 />
      <Frame10 />
    </div>
  );
}

function C61Iphone3() {
  return (
    <div className="absolute bottom-0 left-[21.68%] right-[21.69%] top-0" data-name="c61_iphone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16">
        <g id="c61_iphone">
          <path d={svgPaths.pd215c24} fill="var(--fill-0, #334155)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-0 contents left-[21.68%] right-[21.69%] top-0" data-name="Group">
      <C61Iphone3 />
    </div>
  );
}

function Capa3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Capa_1">
      <Group3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">End OTP: 2889</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Capa3 />
      <Frame11 />
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

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">Paid on 12 Aug 2025</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Icon7 />
      <Frame12 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame18 />
      <Frame26 />
      <Frame47 />
      <Frame48 />
      <Frame39 />
    </div>
  );
}

function Frame70() {
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
      <Frame69 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[16px] pt-[12px] px-[12px] relative w-full">
          <Frame70 />
        </div>
      </div>
    </div>
  );
}

function Frame68() {
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
        <Frame71 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ebecf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-[#ffc67a] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Metropolis:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-nowrap text-slate-800 whitespace-pre">Dispensing</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-nowrap text-slate-500 whitespace-pre">Order Date: 25 Aug 2023</p>
      <Frame49 />
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

function Frame31() {
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

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <Frame7 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame31 />
      <Frame23 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative w-full">
          <Frame50 />
          <Frame51 />
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

function Frame19() {
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
          <path d={svgPaths.p1b538d00} fill="var(--fill-0, #334155)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Icon8 />
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-slate-700">Delivery By: 26 Aug 2023</p>
    </div>
  );
}

function C61Iphone4() {
  return (
    <div className="absolute bottom-0 left-[21.68%] right-[21.69%] top-0" data-name="c61_iphone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16">
        <g id="c61_iphone">
          <path d={svgPaths.pd215c24} fill="var(--fill-0, #334155)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-0 contents left-[21.68%] right-[21.69%] top-0" data-name="Group">
      <C61Iphone4 />
    </div>
  );
}

function Capa4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Capa_1">
      <Group4 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">Start OTP: 2889</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Capa4 />
      <Frame13 />
    </div>
  );
}

function C61Iphone5() {
  return (
    <div className="absolute bottom-0 left-[21.68%] right-[21.69%] top-0" data-name="c61_iphone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16">
        <g id="c61_iphone">
          <path d={svgPaths.pd215c24} fill="var(--fill-0, #334155)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute bottom-0 contents left-[21.68%] right-[21.69%] top-0" data-name="Group">
      <C61Iphone5 />
    </div>
  );
}

function Capa5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Capa_1">
      <Group5 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">End OTP: 2889</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Capa5 />
      <Frame14 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame19 />
      <Frame27 />
      <Frame53 />
      <Frame54 />
    </div>
  );
}

function Frame75() {
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
      <Frame72 />
    </div>
  );
}

function Button5() {
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

function Frame76() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[16px] pt-[12px] px-[12px] relative w-full">
          <Frame75 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame52 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 880 1">
              <line id="Line 144" stroke="var(--stroke-0, #EBECF0)" x2="880" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame76 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ebecf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame74() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[330px] right-[70px] top-[176px] pb-[100px]">
      <SearchBar />
      <Frame64 />
      <Frame66 />
      <Frame68 />
      <Frame67 />
    </div>
  );
}

function Group6() {
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
      <Group6 />
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

function Button6() {
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

function Button7() {
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

function Button8() {
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
      <Button6 />
      <Button7 />
      <Button8 />
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

function TiresAndWallsExport() {
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

function Page() {
  return (
    <div className="absolute bottom-[13.24%] contents left-0 right-0 top-[13.24%]" data-name="Page-1">
      <TiresAndWallsExport />
    </div>
  );
}

function AssetIcons() {
  return (
    <div className="absolute left-[10px] overflow-clip size-[24px] top-1/2 translate-y-[-50%]" data-name="Asset Icons">
      <Page />
    </div>
  );
}

function NavItem() {
  return (
    <div className="absolute h-[40px] left-[20px] overflow-clip rounded-[3px] top-[116px] w-[208px]" data-name="Nav Item">
      <p className="absolute font-['Poppins:Medium',sans-serif] h-[40px] leading-[40px] left-[50px] not-italic right-[10px] text-[#42526e] text-[14px] top-[calc(50%-20px)]">Assets</p>
      <AssetIcons />
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
          <path d={svgPaths.p303c1700} fill="var(--fill-0, #059492)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return <div className="absolute bg-[#059492] h-[40px] left-[-21px] rounded-br-[10px] rounded-tr-[10px] top-0 w-[5px]" />;
}

function NavItem2() {
  return (
    <div className="absolute bg-[#ebecf0] h-[40px] left-[20px] rounded-[3px] top-[68px] w-[208px]" data-name="Nav Item">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] h-[40px] leading-[40px] left-[50px] not-italic right-[10px] text-[#059492] text-[14px] top-[calc(50%-20px)]">Order</p>
      <Icon13 />
      <Frame15 />
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

export default function OrdersCurrent() {
  return (
    <div className="bg-[#ebeef1] relative size-full" data-name="Orders / Current">
      <NavigationPanel />
      <TopAppBar />
      <Frame73 />
      <Frame74 />
    </div>
  );
}