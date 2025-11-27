import svgPaths from "./svg-1ehrbrpp5f";
import { NavigationPanel } from "../components/NavigationPanel";

function Fi() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi_3838680">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="fi_3838680">
          <path clipRule="evenodd" d={svgPaths.pe7bc380} fill="var(--fill-0, #5EB63F)" fillRule="evenodd" id="path2" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center right-[12px] top-[45px]">
      <Fi />
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5eb63f] text-[14px] text-nowrap whitespace-pre">15%</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 bg-white grow h-[80px] min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0">
      <div className="absolute bottom-0 left-0 top-0 w-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 80">
          <path d={svgPaths.p211d6dc0} fill="var(--fill-0, #4F99CD)" id="Rectangle 10" />
        </svg>
      </div>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[22px] not-italic text-[#97a0af] text-[14px] top-[12px] w-[189px]">{` Fuel Purchased (L)`}</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[22px] not-italic right-[65px] text-[#091e42] text-[20px] top-[38px]">{(window as any).__analyticsData?.monthlyPurchased || "10,00,000"}</p>
      <Frame7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 bg-white grow h-[80px] min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0">
      <div className="absolute bottom-0 left-0 top-0 w-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 80">
          <path d={svgPaths.p211d6dc0} fill="var(--fill-0, #5EB63F)" id="Rectangle 10" />
        </svg>
      </div>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[22px] not-italic text-[#97a0af] text-[14px] top-[12px] w-[189px]">Assets</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[22px] not-italic text-[#091e42] text-[20px] top-[38px] w-[189px]">{(window as any).__analyticsData?.totalAssetCount || "250"}</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 bg-white grow h-[80px] min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0">
      <div className="absolute bottom-0 left-0 top-0 w-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 80">
          <path d={svgPaths.p211d6dc0} fill="var(--fill-0, #FFA733)" id="Rectangle 10" />
        </svg>
      </div>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[22px] not-italic text-[#97a0af] text-[14px] top-[12px] w-[189px]">{` Sites`}</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[22px] not-italic text-[#091e42] text-[20px] top-[38px] w-[189px]">{(window as any).__analyticsData?.totalBusinessSites || "300"}</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 bg-white grow h-[80px] min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0">
      <div className="absolute bottom-0 left-0 top-0 w-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 80">
          <path d={svgPaths.p211d6dc0} fill="var(--fill-0, #E16D81)" id="Rectangle 10" />
        </svg>
      </div>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[22px] not-italic text-[#97a0af] text-[14px] top-[12px] w-[189px]">DATUMs</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[22px] not-italic text-[#091e42] text-[20px] text-nowrap top-[38px] whitespace-pre">4</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[292px] right-[32px] top-[152px]">
      <Frame4 />
      <Frame5 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[10px] h-[32px] items-center justify-center left-[8px] px-0 py-[8px] rounded-[4px] top-[4px] w-[160px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8eaec] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0c0d18] text-[14px] text-center text-nowrap">
        <p className="leading-[1.2] whitespace-pre">Fuel Purchase</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute box-border content-stretch flex h-[32px] items-center justify-center left-[184px] px-[12px] py-[6px] rounded-[4px] top-[4px] w-[160px]" data-name="Button">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#42526e] text-[14px] text-center text-nowrap">
        <p className="leading-[1.2] whitespace-pre">Fuel Consumption</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute box-border content-stretch flex h-[32px] items-center justify-center left-[360px] px-[12px] py-[6px] rounded-[4px] top-[4px] w-[160px]" data-name="Button">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#42526e] text-[14px] text-center text-nowrap">
        <p className="leading-[1.2] whitespace-pre">Fuel Payments</p>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="absolute bg-white h-[40px] left-[292px] overflow-clip right-[32px] rounded-[4px] top-[84px]" data-name="Tab">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <g id="Vector">
            <path d={svgPaths.p190991b0} fill="var(--fill-0, #A5ADBA)" />
            <path d={svgPaths.p16bb9400} fill="var(--fill-0, #A5ADBA)" />
            <path d={svgPaths.p3d7f6d00} fill="var(--fill-0, #A5ADBA)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[20px] top-[20px]">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#091e42] text-[24px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Purchase Trends</p>
      </div>
      <Icon />
    </div>
  );
}

function Title() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Title">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#7a869a] text-[14px] text-center w-full">Monthly Purchase Volume (L)</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Title />
    </div>
  );
}

function YAxisLeft() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-full items-end justify-between leading-[normal] not-italic px-[4px] py-0 relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre" data-name="yAxisLeft">
      <p className="relative shrink-0">2000</p>
      <p className="relative shrink-0">1600</p>
      <p className="relative shrink-0">1200</p>
      <p className="relative shrink-0">800</p>
      <p className="relative shrink-0">400</p>
      <p className="relative shrink-0">0</p>
    </div>
  );
}

function SingleBar() {
  return (
    <div className="absolute bottom-0 left-0 overflow-clip right-[0.33px] top-[47.5%]" data-name="SingleBar">
      <div className="absolute bottom-[-0.15px] flex items-center justify-center left-0 right-[25px] top-0">
        <div className="flex-none h-px rotate-[90deg] w-[123px]">
          <div className="relative size-full" data-name="BarStrip">
            <div className="absolute bottom-0 left-0 right-0 top-[-200px]" style={{ display: 'none' }}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123 200">
                <line id="BarStrip" opacity="0.8" stroke="var(--stroke-0, #8979FF)" strokeDasharray="1 1" strokeWidth="200" x2="123" y1="100" y2="100" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#8979ff] h-[3px] left-0 right-0 top-0" data-name="barAdorn" />
    </div>
  );
}

function BasicNode() {
  return (
    <div className="absolute bottom-[51.67%] left-[calc(50%-0.32px)] top-[47.96%] translate-x-[-50%] w-[0.699px]" data-name="basicNode">
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseLine">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="EllipseLine" r="3.5" stroke="var(--stroke-0, #8979FF)" />
        </svg>
      </div>
    </div>
  );
}

function BarBlock() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarBlock">
      <SingleBar />
      <BasicNode />
    </div>
  );
}

function BarGroup() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[2px] items-start px-[18px] py-0 relative size-full">
          <BarBlock />
        </div>
      </div>
    </div>
  );
}

function SingleBar1() {
  return (
    <div className="absolute bottom-0 left-0 overflow-clip right-[0.33px] top-[11%]" data-name="SingleBar">
      <div className="absolute bottom-[0.26px] flex items-center justify-center left-0 right-[25px] top-0">
        <div className="flex-none">
          <div className="relative size-full" data-name="BarStrip">
            <div className="absolute bottom-0 left-0 right-0 top-[-200px]" style={{ display: 'none' }}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208 200">
                <line id="BarStrip" opacity="0.8" stroke="var(--stroke-0, #8979FF)" strokeDasharray="1 1" strokeWidth="200" x2="208" y1="100" y2="100" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#8979ff] h-[3px] left-0 right-0 top-0" data-name="barAdorn" />
    </div>
  );
}

function BasicNode1() {
  return (
    <div className="absolute bottom-[88.47%] left-[calc(50%+0.35px)] top-[11.17%] translate-x-[-50%] w-[0.699px]" data-name="basicNode">
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseLine">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="EllipseLine" r="3.5" stroke="var(--stroke-0, #8979FF)" />
        </svg>
      </div>
    </div>
  );
}

function BarBlock1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarBlock">
      <SingleBar1 />
      <BasicNode1 />
    </div>
  );
}

function BarGroup1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[2px] items-start px-[18px] py-0 relative size-full">
          <BarBlock1 />
        </div>
      </div>
    </div>
  );
}

function SingleBar2() {
  return (
    <div className="absolute bottom-0 left-0 overflow-clip right-[0.33px] top-[29%]" data-name="SingleBar">
      <div className="absolute bottom-[0.14px] flex items-center justify-center left-0 right-[25px] top-0">
        <div className="flex-none">
          <div className="relative size-full" data-name="BarStrip">
            <div className="absolute bottom-0 left-0 right-0 top-[-200px]" style={{ display: 'none' }}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 166 200">
                <line id="BarStrip" opacity="0.8" stroke="var(--stroke-0, #8979FF)" strokeDasharray="1 1" strokeWidth="200" x2="166" y1="100" y2="100" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#8979ff] h-[3px] left-0 right-0 top-0" data-name="barAdorn" />
    </div>
  );
}

function BasicNode2() {
  return (
    <div className="absolute bottom-[70.51%] left-[calc(50%+0.02px)] top-[29.13%] translate-x-[-50%] w-[0.699px]" data-name="basicNode">
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseLine">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="EllipseLine" r="3.5" stroke="var(--stroke-0, #8979FF)" />
        </svg>
      </div>
    </div>
  );
}

function BarBlock2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarBlock">
      <SingleBar2 />
      <BasicNode2 />
    </div>
  );
}

function BarGroup2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[2px] items-start px-[18px] py-0 relative size-full">
          <BarBlock2 />
        </div>
      </div>
    </div>
  );
}

function SingleBar3() {
  return (
    <div className="absolute bottom-0 left-0 overflow-clip right-[0.33px] top-[9%]" data-name="SingleBar">
      <div className="absolute bottom-[-0.06px] flex items-center justify-center left-0 right-[25px] top-0">
        <div className="flex-none">
          <div className="relative size-full" data-name="BarStrip">
            <div className="absolute bottom-0 left-0 right-0 top-[-200px]" style={{ display: 'none' }}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 213 200">
                <line id="BarStrip" opacity="0.8" stroke="var(--stroke-0, #8979FF)" strokeDasharray="1 1" strokeWidth="200" x2="213" y1="100" y2="100" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#8979ff] h-[3px] left-0 right-0 top-0" data-name="barAdorn" />
    </div>
  );
}

function BasicNode3() {
  return (
    <div className="absolute bottom-[90.41%] left-[calc(50%-0.32px)] top-[9.22%] translate-x-[-50%] w-[0.699px]" data-name="basicNode">
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseLine">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="EllipseLine" r="3.5" stroke="var(--stroke-0, #8979FF)" />
        </svg>
      </div>
    </div>
  );
}

function BarBlock3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarBlock">
      <SingleBar3 />
      <BasicNode3 />
    </div>
  );
}

function BarGroup3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[2px] items-start px-[18px] py-0 relative size-full">
          <BarBlock3 />
        </div>
      </div>
    </div>
  );
}

function SingleBar4() {
  return (
    <div className="absolute bottom-0 left-0 overflow-clip right-[0.33px] top-[40%]" data-name="SingleBar">
      <div className="absolute bottom-[0.4px] flex items-center justify-center left-0 right-[25px] top-0">
        <div className="flex-none">
          <div className="relative size-full" data-name="BarStrip">
            <div className="absolute bottom-0 left-0 right-0 top-[-200px]" style={{ display: 'none' }}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 200">
                <line id="BarStrip" opacity="0.8" stroke="var(--stroke-0, #8979FF)" strokeDasharray="1 1" strokeWidth="200" x2="140" y1="100" y2="100" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#8979ff] h-[3px] left-0 right-0 top-0" data-name="barAdorn" />
    </div>
  );
}

function BasicNode4() {
  return (
    <div className="absolute bottom-[59.83%] left-[calc(50%-0.65px)] top-[39.81%] translate-x-[-50%] w-[0.699px]" data-name="basicNode">
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseLine">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="EllipseLine" r="3.5" stroke="var(--stroke-0, #8979FF)" />
        </svg>
      </div>
    </div>
  );
}

function BarBlock4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarBlock">
      <SingleBar4 />
      <BasicNode4 />
    </div>
  );
}

function BarGroup4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[2px] items-start px-[18px] py-0 relative size-full">
          <BarBlock4 />
        </div>
      </div>
    </div>
  );
}

function SingleBar5() {
  return (
    <div className="absolute bottom-0 left-0 overflow-clip right-[0.33px] top-1/4" data-name="SingleBar">
      <div className="absolute bottom-[-0.5px] flex items-center justify-center left-0 right-[25px] top-0">
        <div className="flex-none">
          <div className="relative size-full" data-name="BarStrip">
            <div className="absolute bottom-0 left-0 right-0 top-[-200px]" style={{ display: 'none' }}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 176 200">
                <line id="BarStrip" opacity="0.8" stroke="var(--stroke-0, #8979FF)" strokeDasharray="1 1" strokeWidth="200" x2="176" y1="100" y2="100" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#8979ff] h-[3px] left-0 right-0 top-0" data-name="barAdorn" />
    </div>
  );
}

function BasicNode5() {
  return (
    <div className="absolute bottom-[74.88%] left-[calc(50%+0.02px)] top-[24.76%] translate-x-[-50%] w-[0.699px]" data-name="basicNode">
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseLine">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="EllipseLine" r="3.5" stroke="var(--stroke-0, #8979FF)" />
        </svg>
      </div>
    </div>
  );
}

function BarBlock5() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarBlock">
      <SingleBar5 />
      <BasicNode5 />
    </div>
  );
}

function BarGroup5() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[2px] items-start px-[18px] py-0 relative size-full">
          <BarBlock5 />
        </div>
      </div>
    </div>
  );
}

function BarArea() {
  return (
    <div className="absolute bottom-[7px] content-stretch flex items-start left-0 right-0 top-[6px]" data-name="BarArea">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,26,0.3)] border-solid bottom-[-1px] left-0 pointer-events-none right-0 top-0" />
      <div className="absolute h-[91px] left-[8.15%] right-[8.15%] top-[25px]">
        <div className="absolute inset-[-0.75%_-0.08%_-0.32%_-0.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 309 92">
            <path d={svgPaths.p23965150} id="Vector 1276" stroke="var(--stroke-0, #4D00FF)" />
          </svg>
        </div>
      </div>
      <BarGroup />
      <BarGroup1 />
      <BarGroup2 />
      <BarGroup3 />
      <BarGroup4 />
      <BarGroup5 />
    </div>
  );
}

function GraphiGrid() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Graphi&Grid">
      <BarArea />
    </div>
  );
}

function MainChart() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-center mb-[-2px] min-h-px min-w-px relative shrink-0 w-full" data-name="MainChart">
      <YAxisLeft />
      <GraphiGrid />
    </div>
  );
}

function XLabelBox() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">April</p>
    </div>
  );
}

function XLabelBox1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">May</p>
    </div>
  );
}

function XLabelBox2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">June</p>
    </div>
  );
}

function XLabelBox3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">July</p>
    </div>
  );
}

function XLabelBox4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">August</p>
    </div>
  );
}

function XLabelBox5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">September</p>
    </div>
  );
}

function XAxis() {
  return (
    <div className="mb-[-2px] relative shrink-0 w-full" data-name="xAxis">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pb-[8px] pl-[38px] pr-0 pt-0 relative w-full">
          <XLabelBox />
          <XLabelBox1 />
          <XLabelBox2 />
          <XLabelBox3 />
          <XLabelBox4 />
          <XLabelBox5 />
        </div>
      </div>
    </div>
  );
}

function ChartAxis() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[2px] pt-0 px-0 relative shrink-0 w-full" data-name="Chart&Axis">
      <MainChart />
      <XAxis />
    </div>
  );
}

function BasicNode6() {
  return (
    <div className="absolute left-[8px] size-px top-[8px]" data-name="basicNode">
      <div className="absolute bg-[#8979ff] border border-solid border-white left-[-4px] size-[8px] top-[-4px]" data-name="SquareFill" />
    </div>
  );
}

function LegendNode() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="LegendNode">
      <BasicNode6 />
    </div>
  );
}

function Legend() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative shrink-0" data-name="Legend">
      <LegendNode />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre">H1 2025</p>
    </div>
  );
}

function FillLegends() {
  return (
    <div className="box-border content-center flex flex-wrap gap-[8px] items-center justify-center overflow-clip px-[8px] py-0 relative shrink-0" data-name="FillLegends">
      <Legend />
    </div>
  );
}

function Legends() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Legends">
      <FillLegends />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <ChartAxis />
      <Legends />
    </div>
  );
}

function BarLineChart() {
  return (
    <div className="basis-0 bg-white grow h-[400px] min-h-px min-w-px relative shrink-0" data-name="BarLineChart">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] h-[400px] items-start pb-[16px] pt-[32px] px-[16px] relative w-full">
          <Frame1 />
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Title">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#7a869a] text-[14px] text-center w-full">Monthly Purchase Variation (%)</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Title1 />
    </div>
  );
}

function YAxisLeft1() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-full items-end justify-between leading-[normal] not-italic px-[4px] py-0 relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre" data-name="yAxisLeft">
      <p className="relative shrink-0">100%</p>
      <p className="relative shrink-0">80%</p>
      <p className="relative shrink-0">60%</p>
      <p className="relative shrink-0">40%</p>
      <p className="relative shrink-0">20%</p>
      <p className="relative shrink-0">0</p>
      <p className="relative shrink-0">-20%</p>
    </div>
  );
}

function BasicNode7() {
  return (
    <div className="absolute inset-[61.27%_91.48%_38.38%_8.33%]" data-name="basicNode">
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseLine">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="EllipseLine" r="3.5" stroke="var(--stroke-0, #8979FF)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode8() {
  return (
    <div className="absolute bottom-[45.49%] left-1/4 right-[74.81%] top-[54.17%]" data-name="basicNode">
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseLine">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="EllipseLine" r="3.5" stroke="var(--stroke-0, #8979FF)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode9() {
  return (
    <div className="absolute inset-[36.09%_58.15%_63.57%_41.67%]" data-name="basicNode">
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseLine">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="EllipseLine" r="3.5" stroke="var(--stroke-0, #8979FF)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode10() {
  return (
    <div className="absolute inset-[43.34%_41.48%_56.32%_58.33%]" data-name="basicNode">
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseLine">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="EllipseLine" r="3.5" stroke="var(--stroke-0, #8979FF)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode11() {
  return (
    <div className="absolute bottom-[0.49%] left-3/4 right-[24.81%] top-[99.17%]" data-name="basicNode">
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseLine">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="EllipseLine" r="3.5" stroke="var(--stroke-0, #8979FF)" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode12() {
  return (
    <div className="absolute inset-[54.06%_8.15%_45.6%_91.67%]" data-name="basicNode">
      <div className="absolute left-[-4px] size-[8px] top-[-4px]" data-name="EllipseLine">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="EllipseLine" r="3.5" stroke="var(--stroke-0, #8979FF)" />
        </svg>
      </div>
    </div>
  );
}

function LineNodes() {
  return (
    <div className="absolute contents inset-[36.09%_8.15%_0.49%_8.33%]" data-name="LineNodes0">
      <BasicNode7 />
      <BasicNode8 />
      <BasicNode9 />
      <BasicNode10 />
      <BasicNode11 />
      <BasicNode12 />
    </div>
  );
}

function LineGroup() {
  return (
    <div className="absolute contents inset-[36.09%_8.15%_0.49%_8.33%]" data-name="LineGroup0">
      <div className="absolute inset-[36.09%_8.33%_0.83%_8.33%]" data-name="singleLineArea0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 306 157">
          <path d={svgPaths.p1c71c1b0} fill="url(#paint0_linear_1_8204)" id="singleLineArea0" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_8204" x1="152.917" x2="152.917" y1="0" y2="156.426">
              <stop stopColor="#8979FF" stopOpacity="0.3" />
              <stop offset="1" stopColor="#8979FF" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[36.09%_8.33%_0.83%_8.33%]" data-name="singleLine0">
        <div className="absolute inset-[-6.1%_-6.03%_-17.98%_-5.93%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 195">
            <g filter="url(#filter0_ddd_1_8202)" id="singleLine0">
              <path d={svgPaths.p21376bf0} stroke="var(--stroke-0, #8979FF)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="194.105" id="filter0_ddd_1_8202" width="342.41" x="2.98023e-07" y="2.38419e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.537451 0 0 0 0 0.474902 0 0 0 0 1 0 0 0 0.4 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_8202" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="6" />
                <feGaussianBlur stdDeviation="4.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.537451 0 0 0 0 0.474902 0 0 0 0 1 0 0 0 0.4 0" />
                <feBlend in2="effect1_dropShadow_1_8202" mode="normal" result="effect2_dropShadow_1_8202" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="9" />
                <feGaussianBlur stdDeviation="9" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.537451 0 0 0 0 0.474902 0 0 0 0 1 0 0 0 0.4 0" />
                <feBlend in2="effect2_dropShadow_1_8202" mode="normal" result="effect3_dropShadow_1_8202" />
                <feBlend in="SourceGraphic" in2="effect3_dropShadow_1_8202" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <LineNodes />
    </div>
  );
}

function LineArea() {
  return (
    <div className="absolute bottom-[7px] left-0 right-0 top-[7px]" data-name="LineArea">
      <LineGroup />
    </div>
  );
}

function GraphiGrid1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Graphi&Grid">
      <div className="absolute h-0 left-px right-px top-[214px]" data-name="Line">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 365 1">
            <line id="Line" stroke="var(--stroke-0, #00001A)" strokeOpacity="0.3" x2="365" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <LineArea />
    </div>
  );
}

function MainChart1() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-center mb-[-2px] min-h-px min-w-px relative shrink-0 w-full" data-name="MainChart">
      <YAxisLeft1 />
      <GraphiGrid1 />
    </div>
  );
}

function XLabelBox6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">April</p>
    </div>
  );
}

function XLabelBox7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">May</p>
    </div>
  );
}

function XLabelBox8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">June</p>
    </div>
  );
}

function XLabelBox9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">July</p>
    </div>
  );
}

function XLabelBox10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">August</p>
    </div>
  );
}

function XLabelBox11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">September</p>
    </div>
  );
}

function XAxis1() {
  return (
    <div className="mb-[-2px] relative shrink-0 w-full" data-name="xAxis">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pb-[8px] pl-[29px] pr-0 pt-0 relative w-full">
          <XLabelBox6 />
          <XLabelBox7 />
          <XLabelBox8 />
          <XLabelBox9 />
          <XLabelBox10 />
          <XLabelBox11 />
        </div>
      </div>
    </div>
  );
}

function ChartAxis1() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[2px] pt-0 px-0 relative shrink-0 w-full" data-name="Chart&Axis">
      <MainChart1 />
      <XAxis1 />
    </div>
  );
}

function BasicNode13() {
  return (
    <div className="absolute left-[8px] size-px top-[8px]" data-name="basicNode">
      <div className="absolute inset-[-400%_-300%_-300%_-400%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <g id="basicNode">
            <circle cx="4" cy="4" fill="var(--fill-0, white)" id="EllipseLine" r="3.5" stroke="var(--stroke-0, #8979FF)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LegendNode1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="LegendNode">
      <div className="absolute bg-[#8979ff] h-[2px] left-0 top-[7px] w-[16px]" data-name="Line" />
      <BasicNode13 />
    </div>
  );
}

function Legend1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative shrink-0" data-name="Legend">
      <LegendNode1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre">H1 2025</p>
    </div>
  );
}

function LineLegends() {
  return (
    <div className="box-border content-center flex flex-wrap gap-[8px] items-center justify-center overflow-clip px-[8px] py-0 relative shrink-0" data-name="LineLegends">
      <Legend1 />
    </div>
  );
}

function Legends1() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Legends">
      <LineLegends />
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <ChartAxis1 />
      <Legends1 />
    </div>
  );
}

function BarLineChart1() {
  return (
    <div className="basis-0 bg-white grow h-[400px] min-h-px min-w-px relative shrink-0" data-name="BarLineChart">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] h-[400px] items-start pb-[16px] pt-[32px] px-[16px] relative w-full">
          <Frame12 />
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex gap-[40px] items-center left-[20px] right-[20px] top-[62px]">
      <BarLineChart />
      <BarLineChart1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pd60d100} fill="var(--fill-0, #42526E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[4px] h-[32px] items-center justify-end px-[12px] py-[4px] right-[20px] rounded-[4px] top-[22px]" data-name="Button">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#42526e] text-[14px] text-nowrap text-right">
        <p className="leading-[normal] whitespace-pre">Year</p>
      </div>
      <Icon1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white h-[482px] relative rounded-[12px] shrink-0 w-full">
      <div className="h-[482px] overflow-clip relative rounded-[inherit] w-full">
        <Frame21 />
        <Frame16 />
        <Button3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eaec] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Title2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Title">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#7a869a] text-[14px] text-center w-full">Top Assets by Purchase Volume</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Title2 />
    </div>
  );
}

function YAxisLeft2() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-full items-end justify-between leading-[normal] not-italic px-[4px] py-0 relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre" data-name="yAxisLeft">
      <p className="relative shrink-0">2000</p>
      <p className="relative shrink-0">1600</p>
      <p className="relative shrink-0">1200</p>
      <p className="relative shrink-0">800</p>
      <p className="relative shrink-0">400</p>
      <p className="relative shrink-0">0</p>
    </div>
  );
}

function SingleBar6() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.33px] top-[10%]" data-name="SingleBar">
      <div className="absolute bg-[#8979ff] bottom-[0.5px] left-0 opacity-60 right-0 top-0" data-name="BarStrip" />
      <div className="absolute bg-[#8979ff] h-[3px] left-0 right-0 top-0" data-name="barAdorn" />
    </div>
  );
}

function BarBlock6() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarBlock">
      <SingleBar6 />
    </div>
  );
}

function BarGroup6() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[2px] items-start px-[18px] py-0 relative size-full">
          <BarBlock6 />
        </div>
      </div>
    </div>
  );
}

function SingleBar7() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.33px] top-1/4" data-name="SingleBar">
      <div className="absolute bg-[#8979ff] bottom-[0.25px] left-0 opacity-60 right-0 top-0" data-name="BarStrip" />
      <div className="absolute bg-[#8979ff] h-[3px] left-0 right-0 top-0" data-name="barAdorn" />
    </div>
  );
}

function BarBlock7() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarBlock">
      <SingleBar7 />
    </div>
  );
}

function BarGroup7() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[2px] items-start px-[18px] py-0 relative size-full">
          <BarBlock7 />
        </div>
      </div>
    </div>
  );
}

function SingleBar8() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.33px] top-[40%]" data-name="SingleBar">
      <div className="absolute bg-[#8979ff] inset-0 opacity-60" data-name="BarStrip" />
      <div className="absolute bg-[#8979ff] h-[3px] left-0 right-0 top-0" data-name="barAdorn" />
    </div>
  );
}

function BarBlock8() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarBlock">
      <SingleBar8 />
    </div>
  );
}

function BarGroup8() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[2px] items-start px-[18px] py-0 relative size-full">
          <BarBlock8 />
        </div>
      </div>
    </div>
  );
}

function SingleBar9() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.33px] top-[57.5%]" data-name="SingleBar">
      <div className="absolute bg-[#8979ff] bottom-[-0.13px] left-0 opacity-60 right-0 top-0" data-name="BarStrip" />
      <div className="absolute bg-[#8979ff] h-[3px] left-0 right-0 top-0" data-name="barAdorn" />
    </div>
  );
}

function BarBlock9() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarBlock">
      <SingleBar9 />
    </div>
  );
}

function BarGroup9() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[2px] items-start px-[18px] py-0 relative size-full">
          <BarBlock9 />
        </div>
      </div>
    </div>
  );
}

function SingleBar10() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.33px] top-[77.5%]" data-name="SingleBar">
      <div className="absolute bg-[#8979ff] bottom-[-0.13px] left-0 opacity-60 right-0 top-0" data-name="BarStrip" />
      <div className="absolute bg-[#8979ff] h-[3px] left-0 right-0 top-0" data-name="barAdorn" />
    </div>
  );
}

function BarBlock10() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarBlock">
      <SingleBar10 />
    </div>
  );
}

function BarGroup10() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[2px] items-start px-[18px] py-0 relative size-full">
          <BarBlock10 />
        </div>
      </div>
    </div>
  );
}

function SingleBar11() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.33px] top-[94%]" data-name="SingleBar">
      <div className="absolute bg-[#8979ff] bottom-[0.3px] left-0 opacity-60 right-0 top-0" data-name="BarStrip" />
      <div className="absolute bg-[#8979ff] h-[3px] left-0 right-0 top-0" data-name="barAdorn" />
    </div>
  );
}

function BarBlock11() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarBlock">
      <SingleBar11 />
    </div>
  );
}

function BarGroup11() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[2px] items-start px-[18px] py-0 relative size-full">
          <BarBlock11 />
        </div>
      </div>
    </div>
  );
}

function BarArea1() {
  return (
    <div className="absolute bottom-[7px] content-stretch flex items-start left-0 right-0 top-[6px]" data-name="BarArea">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,26,0.3)] border-solid bottom-[-1px] left-0 pointer-events-none right-0 top-0" />
      <BarGroup6 />
      <BarGroup7 />
      <BarGroup8 />
      <BarGroup9 />
      <BarGroup10 />
      <BarGroup11 />
    </div>
  );
}

function GraphiGrid2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Graphi&Grid">
      <BarArea1 />
    </div>
  );
}

function MainChart2() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-center mb-[-2px] min-h-px min-w-px relative shrink-0 w-full" data-name="MainChart">
      <YAxisLeft2 />
      <GraphiGrid2 />
    </div>
  );
}

function XLabelBox12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">JCB 1</p>
    </div>
  );
}

function XLabelBox13() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">Eicher 2</p>
    </div>
  );
}

function XLabelBox14() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">Tractor 3</p>
    </div>
  );
}

function XLabelBox15() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">Mercedes</p>
    </div>
  );
}

function XLabelBox16() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">Asset</p>
    </div>
  );
}

function XLabelBox17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center w-full">Truck</p>
    </div>
  );
}

function XAxis2() {
  return (
    <div className="mb-[-2px] relative shrink-0 w-full" data-name="xAxis">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pb-[8px] pl-[38px] pr-0 pt-0 relative w-full">
          <XLabelBox12 />
          <XLabelBox13 />
          <XLabelBox14 />
          <XLabelBox15 />
          <XLabelBox16 />
          <XLabelBox17 />
        </div>
      </div>
    </div>
  );
}

function ChartAxis2() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[2px] pt-0 px-0 relative shrink-0 w-full" data-name="Chart&Axis">
      <MainChart2 />
      <XAxis2 />
    </div>
  );
}

function BasicNode14() {
  return (
    <div className="absolute left-[8px] size-px top-[8px]" data-name="basicNode">
      <div className="absolute bg-[#8979ff] border border-solid border-white left-[-4px] size-[8px] top-[-4px]" data-name="SquareFill" />
    </div>
  );
}

function LegendNode2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="LegendNode">
      <BasicNode14 />
    </div>
  );
}

function Legend2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative shrink-0" data-name="Legend">
      <LegendNode2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre">Asset Name</p>
    </div>
  );
}

function FillLegends1() {
  return (
    <div className="box-border content-center flex flex-wrap gap-[8px] items-center justify-center overflow-clip px-[8px] py-0 relative shrink-0" data-name="FillLegends">
      <Legend2 />
    </div>
  );
}

function Legends2() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Legends">
      <FillLegends1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <ChartAxis2 />
      <Legends2 />
    </div>
  );
}

function BarLineChart2() {
  return (
    <div className="basis-0 bg-white grow h-[400px] min-h-px min-w-px relative shrink-0" data-name="BarLineChart">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] h-[400px] items-start pb-[16px] pt-[32px] px-[16px] relative w-full">
          <Frame13 />
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function PieLayer() {
  return (
    <div className="relative size-[182px]" data-name="PieLayer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 182 182">
        <g id="PieLayer">
          <path d={svgPaths.p203f9f80} fill="var(--fill-0, #FFAE4C)" id="pie4" />
          <path d={svgPaths.p3d960f00} fill="var(--fill-0, #3CC3DF)" id="pie3" />
          <path d={svgPaths.p9f32e00} fill="var(--fill-0, #8979FF)" id="pie1" />
          <path d={svgPaths.p133c7e00} fill="var(--fill-0, #FF928A)" id="pie2" />
        </g>
      </svg>
    </div>
  );
}

function LabelContent() {
  return (
    <div className="absolute bottom-[55.68%] contents leading-[normal] left-[calc(50%+163px)] not-italic text-[12px] top-[36.63%] translate-x-[-50%]" data-name="LabelContent">
      <p className="absolute bottom-[60.02%] font-['Inter:Regular',sans-serif] font-normal left-[calc(50%+127px)] text-[rgba(0,0,0,0.7)] top-[36.63%] w-[72px]">Maharashtra</p>
      <p className="absolute bottom-[55.68%] font-['Inter:Semi_Bold',sans-serif] font-semibold left-[calc(50%+169px)] text-[#8979ff] top-[40.97%] w-[30px]">1800</p>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute bottom-[55.68%] contents left-[calc(50%+135.46px)] top-[36.63%] translate-x-[-50%]" data-name="Label0">
      <LabelContent />
      <div className="absolute bottom-[58.39%] left-[calc(50%+134.34px)] top-[40.75%] translate-x-[-50%] w-[124.864px]" data-name="Vector">
        <div className="absolute bottom-[-14.63%] left-[-0.15%] right-0 top-[-15.71%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126 5">
            <path d={svgPaths.p242e5d00} id="Vector" stroke="var(--stroke-0, #8979FF)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LabelContent1() {
  return (
    <div className="absolute bottom-[27.81%] contents leading-[normal] left-[calc(50%+178px)] not-italic text-[12px] top-[63.96%] translate-x-[-50%]" data-name="LabelContent">
      <p className="absolute bottom-[32.69%] font-['Inter:Regular',sans-serif] font-normal left-[calc(50%+157px)] text-[rgba(0,0,0,0.7)] top-[63.96%] w-[42px]">Gujarat</p>
      <p className="absolute bottom-[27.81%] font-['Inter:Semi_Bold',sans-serif] font-semibold left-[calc(50%+169px)] text-[#ff928a] top-[68.84%] w-[30px]">1500</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute bottom-[27.81%] contents left-[calc(50%+130.63px)] top-[63.96%] translate-x-[-50%]" data-name="Label1">
      <LabelContent1 />
      <div className="absolute bottom-[31.38%] left-[calc(50%+129.51px)] top-[66.88%] translate-x-[-50%] w-[134.521px]" data-name="Vector">
        <div className="absolute bottom-[-7.8%] left-[-0.36%] right-0 top-[-1.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 8">
            <path d={svgPaths.p2a90ec40} id="Vector" stroke="var(--stroke-0, #FF928A)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LabelContent2() {
  return (
    <div className="absolute contents leading-[normal] left-[calc(50%-169.5px)] not-italic text-[12px] text-nowrap top-[219.11px] translate-x-[-50%] whitespace-pre" data-name="LabelContent">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[calc(50%-199px)] text-[rgba(0,0,0,0.7)] top-[219.11px]">Telangana</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold left-[calc(50%-199px)] text-[#3cc3df] top-[236.11px]">1200</p>
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute contents left-[calc(50%-141.41px)] top-[219.11px] translate-x-[-50%]" data-name="Label2">
      <LabelContent2 />
      <div className="absolute bottom-[35.91%] left-[calc(50%-140.3px)] top-[61.96%] translate-x-[-50%] w-[112.954px]" data-name="Vector">
        <div className="absolute bottom-[-6.37%] left-0 right-[-0.25%] top-[-5.3%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114 9">
            <path d={svgPaths.p33420180} id="Vector" stroke="var(--stroke-0, #3CC3DF)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LabelContent3() {
  return (
    <div className="absolute contents leading-[normal] left-[calc(50%-180px)] not-italic text-[12px] text-nowrap top-[133.96px] translate-x-[-50%] whitespace-pre" data-name="LabelContent">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[calc(50%-199px)] text-[rgba(0,0,0,0.7)] top-[133.96px]">Assam</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold left-[calc(50%-199px)] text-[#ffae4c] top-[150.96px]">850</p>
    </div>
  );
}

function Label3() {
  return (
    <div className="absolute contents left-[calc(50%-140.69px)] top-[133.96px] translate-x-[-50%]" data-name="Label3">
      <LabelContent3 />
      <div className="absolute bottom-[57.64%] left-[calc(50%-139.57px)] top-[40.81%] translate-x-[-50%] w-[114.403px]" data-name="Vector">
        <div className="absolute bottom-[-5.44%] left-0 right-[-0.34%] top-[-8.79%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115 7">
            <path d={svgPaths.p27fe27c0} id="Vector" stroke="var(--stroke-0, #FFAE4C)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PieLabels() {
  return (
    <div className="absolute contents left-1/2 top-[133.96px] translate-x-[-50%]" data-name="PieLabels">
      <Label />
      <Label1 />
      <Label2 />
      <Label3 />
    </div>
  );
}

function MainChart3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="MainChart">
      <div className="absolute flex items-center justify-center left-[calc(50%-6px)] size-[231.117px] top-[calc(50%+8px)] translate-x-[-50%] translate-y-[-50%]" style={{ "--transform-inner-width": "182", "--transform-inner-height": "182" } as React.CSSProperties}>
        <div className="flex-none rotate-[341.112deg]">
          <PieLayer />
        </div>
      </div>
      <PieLabels />
    </div>
  );
}

function Title3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Title">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#7a869a] text-[14px] text-center w-full">State Wise Purchase Volume (L)</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-[16px] right-[16px] top-[32px]">
      <Title3 />
    </div>
  );
}

function PieChart() {
  return (
    <div className="basis-0 bg-white grow h-[400px] min-h-px min-w-px relative shrink-0" data-name="PieChart">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[400px] items-start pb-[8px] pt-[24px] px-[8px] relative w-full">
          <MainChart3 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex gap-[40px] items-center left-[20px] right-[20px] top-[62px]">
      <BarLineChart2 />
      <PieChart />
    </div>
  );
}

function Title4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Title">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#7a869a] text-[14px] text-center w-full">DATUM Purchase Volume (L)</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Title4 />
    </div>
  );
}

function XLabelBox18() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end justify-center min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre">Pune DATUM</p>
    </div>
  );
}

function XLabelBox19() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end justify-center min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre">Mumbai DATUM</p>
    </div>
  );
}

function XLabelBox20() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end justify-center min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre">Hyderabad DATUM</p>
    </div>
  );
}

function XAxis3() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-end px-[2px] py-0 relative shrink-0" data-name="xAxis">
      <XLabelBox18 />
      <XLabelBox19 />
      <XLabelBox20 />
    </div>
  );
}

function BarBg() {
  return <div className="absolute bg-[rgba(214,219,237,0.4)] bottom-0 left-0 opacity-80 right-[0.33px] top-0" data-name="BarBG" />;
}

function SingleBar12() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.33px] top-1/4" data-name="SingleBar">
      <div className="absolute bg-[#8979ff] bottom-[-0.5px] left-0 opacity-60 right-0 top-0" data-name="BarStrip" />
      <div className="absolute bg-[#8979ff] h-[3px] left-0 right-0 top-0" data-name="barAdorn" />
    </div>
  );
}

function DataLabel() {
  return (
    <div className="relative size-full" data-name="DataLabel">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic right-[29.83px] text-[10px] text-[rgba(0,0,0,0.7)] text-nowrap top-[calc(50%-6.29px)] translate-x-[100%] whitespace-pre">15000</p>
    </div>
  );
}

function BarBlock12() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarBlock">
      <BarBg />
      <SingleBar12 />
      <div className="absolute flex inset-[17.18%_40.27%_75.92%_40.27%] items-center justify-center">
        <div className="flex-none h-[10.573px] rotate-[270deg] w-[18.828px]">
          <DataLabel />
        </div>
      </div>
    </div>
  );
}

function BarGroup12() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[2px] items-start px-[20px] py-0 relative size-full">
          <BarBlock12 />
        </div>
      </div>
    </div>
  );
}

function BarBg1() {
  return <div className="absolute bg-[rgba(214,219,237,0.4)] bottom-0 left-0 opacity-80 right-[0.33px] top-0" data-name="BarBG" />;
}

function SingleBar13() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.33px] top-[40%]" data-name="SingleBar">
      <div className="absolute bg-[#8979ff] bottom-[-0.2px] left-0 opacity-60 right-0 top-0" data-name="BarStrip" />
      <div className="absolute bg-[#8979ff] h-[3px] left-0 right-0 top-0" data-name="barAdorn" />
    </div>
  );
}

function DataLabel1() {
  return (
    <div className="relative size-full" data-name="DataLabel">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic right-[29.83px] text-[10px] text-[rgba(0,0,0,0.7)] text-nowrap top-[calc(50%-6.29px)] translate-x-[100%] whitespace-pre">12000</p>
    </div>
  );
}

function BarBlock13() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarBlock">
      <BarBg1 />
      <SingleBar13 />
      <div className="absolute flex inset-[32.18%_40.27%_60.92%_40.27%] items-center justify-center">
        <div className="flex-none h-[10.573px] rotate-[270deg] w-[18.828px]">
          <DataLabel1 />
        </div>
      </div>
    </div>
  );
}

function BarGroup13() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[2px] items-start px-[20px] py-0 relative size-full">
          <BarBlock13 />
        </div>
      </div>
    </div>
  );
}

function BarBg2() {
  return <div className="absolute bg-[rgba(214,219,237,0.4)] bottom-0 left-0 opacity-80 right-[0.33px] top-0" data-name="BarBG" />;
}

function SingleBar14() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.33px] top-[55%]" data-name="SingleBar">
      <div className="absolute bg-[#8979ff] bottom-[0.1px] left-0 opacity-60 right-0 top-0" data-name="BarStrip" />
      <div className="absolute bg-[#8979ff] h-[3px] left-0 right-0 top-0" data-name="barAdorn" />
    </div>
  );
}

function DataLabel2() {
  return (
    <div className="relative size-full" data-name="DataLabel">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic right-[24.69px] text-[10px] text-[rgba(0,0,0,0.7)] text-nowrap top-[calc(50%-6.29px)] translate-x-[100%] whitespace-pre">9000</p>
    </div>
  );
}

function BarBlock14() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarBlock">
      <BarBg2 />
      <SingleBar14 />
      <div className="absolute flex inset-[48.33%_40.27%_45.92%_40.27%] items-center justify-center">
        <div className="flex-none h-[10.573px] rotate-[270deg] w-[15.69px]">
          <DataLabel2 />
        </div>
      </div>
    </div>
  );
}

function BarGroup14() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[2px] items-start px-[20px] py-0 relative size-full">
          <BarBlock14 />
        </div>
      </div>
    </div>
  );
}

function BarArea2() {
  return (
    <div className="absolute bottom-px content-stretch flex items-start left-0 right-0 top-px" data-name="BarArea">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,26,0.3)] border-solid bottom-[-1px] left-0 pointer-events-none right-0 top-0" />
      <BarGroup12 />
      <BarGroup13 />
      <BarGroup14 />
    </div>
  );
}

function GraphiGrid3() {
  return (
    <div className="relative size-full" data-name="Graphi&Grid">
      <BarArea2 />
    </div>
  );
}

function MainChart4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="MainChart">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] items-center px-[8px] py-0 relative size-full">
          <XAxis3 />
          <div className="basis-0 flex grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "240.171875", "--transform-inner-height": "283.203125" } as React.CSSProperties}>
            <div className="flex-none rotate-[90deg] size-full">
              <GraphiGrid3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BarLineChart3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="BarLineChart">
      <MainChart4 />
    </div>
  );
}

function BasicNode15() {
  return (
    <div className="absolute left-[8px] size-px top-[8px]" data-name="basicNode">
      <div className="absolute bg-[#8979ff] border border-solid border-white left-[-4px] size-[8px] top-[-4px]" data-name="SquareFill" />
    </div>
  );
}

function LegendNode3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="LegendNode">
      <BasicNode15 />
    </div>
  );
}

function Legend3() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative shrink-0" data-name="Legend">
      <LegendNode3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre">Asset Name</p>
    </div>
  );
}

function FillLegends2() {
  return (
    <div className="box-border content-start flex flex-wrap gap-[8px] items-start overflow-clip px-[8px] py-0 relative shrink-0" data-name="FillLegends">
      <Legend3 />
    </div>
  );
}

function Legends3() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Legends">
      <FillLegends2 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <BarLineChart3 />
      <Legends3 />
    </div>
  );
}

function BarLineChart4() {
  return (
    <div className="basis-0 bg-white grow h-[400px] min-h-px min-w-px relative shrink-0" data-name="BarLineChart">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] h-[400px] items-start pb-[16px] pt-[32px] px-[16px] relative w-full">
          <Frame14 />
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function PieLayer1() {
  return (
    <div className="absolute left-[calc(50%-4px)] size-[250px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="PieLayer">
      <div className="absolute bottom-[-1.2%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 250 253">
          <g id="PieLayer">
            <path d={svgPaths.p12fa7680} fill="var(--fill-0, #3CC3DF)" id="pie3" />
            <path d={svgPaths.pa2a4090} fill="var(--fill-0, #3CC3DF)" id="pie1" />
            <path d={svgPaths.p21175c80} fill="var(--fill-0, #FF928A)" id="pie2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LabelContent4() {
  return (
    <div className="absolute contents leading-[normal] left-[9.36px] not-italic text-nowrap top-[244.93px] whitespace-pre" data-name="LabelContent">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[9.36px] text-[9.359px] text-[rgba(0,0,0,0.7)] top-[244.93px]">Kerala</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold left-[9.36px] text-[#ff928a] text-[12px] top-[258.19px]">4</p>
    </div>
  );
}

function Label4() {
  return (
    <div className="absolute contents left-[9.36px] top-[244.93px]" data-name="Label1">
      <LabelContent4 />
      <div className="absolute inset-[85.98%_65.6%_10.31%_2.45%]" data-name="Vector">
        <div className="absolute bottom-[-3.66%] left-0 right-[-0.24%] top-[-1.97%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 12">
            <path d={svgPaths.p38bf3700} id="Vector" stroke="var(--stroke-0, #FF928A)" strokeWidth="0.779891" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LabelContent5() {
  return (
    <div className="absolute contents leading-[normal] left-[9.36px] not-italic text-nowrap top-[38.02px] whitespace-pre" data-name="LabelContent">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[9.36px] text-[9.359px] text-[rgba(0,0,0,0.7)] top-[38.02px]">Gujarat</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold left-[9.36px] text-[#3cc3df] text-[12px] top-[51.28px]">3</p>
    </div>
  );
}

function Label5() {
  return (
    <div className="absolute contents left-[9.36px] top-[38.02px]" data-name="Label2">
      <LabelContent5 />
      <div className="absolute inset-[17.59%_72.06%_79.38%_2.45%]" data-name="Vector">
        <div className="absolute bottom-[-3.32%] left-0 right-[-0.24%] top-[-4.48%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108 10">
            <path d={svgPaths.p7a5380} id="Vector" stroke="var(--stroke-0, #3CC3DF)" strokeWidth="0.779891" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PieLabels1() {
  return (
    <div className="absolute contents left-[9.36px] top-[38.02px]" data-name="PieLabels">
      <Label4 />
      <Label5 />
    </div>
  );
}

function MainChart5() {
  return (
    <div className="absolute h-[287px] left-1/2 top-[calc(50%+36.5px)] translate-x-[-50%] translate-y-[-50%] w-[422px]" data-name="MainChart">
      <PieLayer1 />
      <PieLabels1 />
    </div>
  );
}

function Title5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Title">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#7a869a] text-[14px] text-center w-full">Fuel purchased from Repos</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-[16px] right-[16px] top-[32px]">
      <Title5 />
    </div>
  );
}

function PieChart1() {
  return (
    <div className="basis-0 bg-white grow h-[400px] min-h-px min-w-px relative shrink-0" data-name="PieChart">
      <MainChart5 />
      <Frame3 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex gap-[40px] items-center left-[20px] right-[20px] top-[522px]">
      <BarLineChart4 />
      <PieChart1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pd60d100} fill="var(--fill-0, #42526E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute box-border content-stretch flex gap-[4px] h-[32px] items-center justify-end px-[12px] py-[4px] right-[20px] rounded-[4px] top-[22px]" data-name="Button">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#42526e] text-[14px] text-nowrap text-right">
        <p className="leading-[normal] whitespace-pre">Month</p>
      </div>
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <g id="Vector">
            <path d={svgPaths.p190991b0} fill="var(--fill-0, #A5ADBA)" />
            <path d={svgPaths.p16bb9400} fill="var(--fill-0, #A5ADBA)" />
            <path d={svgPaths.p3d7f6d00} fill="var(--fill-0, #A5ADBA)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[20px] top-[20px]">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#091e42] text-[24px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Purchase Details</p>
      </div>
      <Icon3 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white h-[977px] relative rounded-[12px] shrink-0 w-full">
      <div className="h-[977px] overflow-clip relative rounded-[inherit] w-full">
        <Frame19 />
        <Frame18 />
        <Button4 />
        <Frame22 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eaec] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[292px] right-[32px] top-[272px]">
      <Frame15 />
      <Frame23 />
    </div>
  );
}

function Group() {
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
      <Group />
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

function Icon4() {
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
      <Icon4 />
    </div>
  );
}

function Icon5() {
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
      <Icon5 />
    </div>
  );
}

function Icon6() {
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
      <Icon6 />
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

function Icon7() {
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
      <Icon7 />
    </div>
  );
}

function Icon8() {
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
      <Icon8 />
    </div>
  );
}

function Icon9() {
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
      <Icon9 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[10px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p20a3c100} fill="var(--fill-0, #059492)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return <div className="absolute bg-[#059492] h-[40px] left-[-21px] rounded-br-[10px] rounded-tr-[10px] top-0 w-[5px]" />;
}

function NavItem4() {
  return (
    <div className="absolute bg-[#ebecf0] h-[40px] left-[20px] rounded-[3px] top-[212px] w-[208px]" data-name="Nav Item">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] h-[40px] leading-[40px] left-[50px] not-italic right-[10px] text-[#059492] text-[14px] top-[calc(50%-20px)]">Analytics</p>
      <Icon10 />
      <Frame />
    </div>
  );
}

function NavPanel() {
  return (
    <div className="absolute bg-white bottom-[-508px] left-0 overflow-clip rounded-br-[5px] top-[56px] w-[260px]" data-name="Nav Panel">
      <NavItem />
      <NavItem1 />
      <NavItem2 />
      <NavItem3 />
      <NavItem4 />
    </div>
  );
}

export default function AnalyticsFuelPurchase() {
  return (
    <div className="bg-[#ebeef1] relative size-full pb-[100px]" data-name="Analytics - Fuel Purchase">
      <NavPanel />
      <Frame6 />
      <Tab />
      <Frame24 />
    </div>
  );
}