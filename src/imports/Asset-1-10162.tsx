import svgPaths from "./svg-bntmely0is";

function AssetIcons() {
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

function Frame27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <AssetIcons />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">Sus Road Machineries</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-[rgba(7,31,69,0.6)] text-nowrap top-0 whitespace-pre">Near Datta Mandir, Sus Road, Pune</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[848px]">
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame1() {
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

function Frame4() {
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

function Frame5() {
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

function Frame13() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Button() {
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

function AssetCard() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Asset Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame24 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_-0.06%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
                <path d="M0.5 0.5H848.5" id="Vector 1104" stroke="var(--stroke-0, #DFE1E6)" strokeDasharray="5 5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <Frame13 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function AssetIcons1() {
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

function Frame29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <AssetIcons1 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">Wakad Machinery Hub</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-[rgba(7,31,69,0.6)] text-nowrap top-0 whitespace-pre">Near Bhumkar Chowk, Wakad, Pune</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[848px]">
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Frame2() {
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

function Frame6() {
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

function Icon() {
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

function Button1() {
  return (
    <div className="h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative w-full">
          <Icon />
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#059492] text-[14px] text-center text-nowrap">
            <p className="leading-[1.2] whitespace-pre">Add Capacity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6b778c] text-[12px] text-center w-full">Capacity</p>
          <Button1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame6 />
      <Frame3 />
    </div>
  );
}

function Button2() {
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

function AssetCard1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Asset Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame25 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_-0.06%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
                <path d="M0.5 0.5H848.5" id="Vector 1104" stroke="var(--stroke-0, #DFE1E6)" strokeDasharray="5 5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <Frame14 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Group() {
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

function AssetIcons2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Asset Icons">
      <Group />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <AssetIcons2 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">Aundh Industrial Machines</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-[rgba(7,31,69,0.6)] text-nowrap top-0 whitespace-pre">Near Bremen Chowk, Aundh, Pune</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[848px]">
      <Frame31 />
      <Frame32 />
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

function Frame8() {
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

function Frame9() {
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

function Frame15() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Button3() {
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

function AssetCard2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Asset Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame26 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_-0.06%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
                <path d="M0.5 0.5H848.5" id="Vector 1104" stroke="var(--stroke-0, #DFE1E6)" strokeDasharray="5 5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <Frame15 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function AssetIcons3() {
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

function Frame33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <AssetIcons3 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">Hinjewadi Asset</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-[rgba(7,31,69,0.6)] text-nowrap top-0 whitespace-pre">Rajiv Gandhi Infotech Park, Hinjewadi, Pune</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[848px]">
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function Frame10() {
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

function Icon1() {
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

function Button4() {
  return (
    <div className="h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative w-full">
          <Icon1 />
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#059492] text-[14px] text-center text-nowrap">
            <p className="leading-[1.2] whitespace-pre">Add Capacity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6b778c] text-[12px] text-center w-full">Capacity</p>
          <Button4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c7d0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Button5() {
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
          <Frame35 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_-0.06%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
                <path d="M0.5 0.5H848.5" id="Vector 1104" stroke="var(--stroke-0, #DFE1E6)" strokeDasharray="5 5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <Frame16 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[330px] right-[70px] top-[180px] pb-[100px]">
      <AssetCard />
      <AssetCard1 />
      <AssetCard2 />
      <AssetCard3 />
    </div>
  );
}

function Icon2() {
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

function Button6() {
  return (
    <div className="absolute box-border content-stretch flex h-[32px] items-start left-0 p-[4px] rounded-[4px] top-0" data-name="Button">
      <Icon2 />
    </div>
  );
}

function TopAppBar() {
  return (
    <div className="absolute h-[32px] left-0 right-0 top-[20px]" data-name="Top App Bar">
      <Button6 />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#253858] text-[18px] text-center text-nowrap top-[16px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">RFD Z – Pimpri Industrial Hub, Pune</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center">Overview</p>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
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
      <Frame19 />
      <Frame17 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center">Statement</p>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#c1c7d0] h-px relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="h-px w-full" />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[40px] items-start justify-between min-h-px min-w-px relative shrink-0" data-name="Component 1">
      <Frame20 />
      <Frame18 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#059492] text-[14px] text-center">Sub-Assets</p>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
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
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Component 2">
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex items-start left-0 right-0 top-[64px]">
      <Component />
      <Component2 />
      <Component1 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute bg-[#ebeef1] h-[104px] left-[330px] right-[70px] top-[56px]">
      <TopAppBar />
      <Frame23 />
    </div>
  );
}

function Group1() {
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
      <Group1 />
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

function Icon3() {
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

function Button7() {
  return (
    <div className="box-border content-stretch flex h-[32px] items-start p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <Icon3 />
    </div>
  );
}

function Icon4() {
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

function Button8() {
  return (
    <div className="box-border content-stretch flex h-[32px] items-start p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <Icon4 />
    </div>
  );
}

function Icon5() {
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

function Button9() {
  return (
    <div className="bg-[#059492] box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] py-[4px] relative rounded-[4px] shrink-0 w-[122px]" data-name="Button">
      <Icon5 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre">New Order</p>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center justify-end right-[32px] top-[calc(50%+0.25px)] translate-y-[-50%]" data-name="Actions">
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function Header() {
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
          <path d={svgPaths.p31a41340} fill="var(--fill-0, #059492)" id="transport,-private,-public,-vehicles,-car,-bus" />
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

function AssetIcons4() {
  return (
    <div className="absolute left-[10px] overflow-clip size-[24px] top-1/2 translate-y-[-50%]" data-name="Asset Icons">
      <Page />
    </div>
  );
}

function Frame() {
  return <div className="absolute bg-[#059492] h-[40px] left-[-21px] rounded-br-[10px] rounded-tr-[10px] top-0 w-[5px]" />;
}

function NavItem() {
  return (
    <div className="absolute bg-[#ebecf0] h-[40px] left-[20px] rounded-[3px] top-[116px] w-[208px]" data-name="Nav Item">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] h-[40px] leading-[40px] left-[50px] not-italic right-[10px] text-[#059492] text-[14px] top-[calc(50%-20px)]">Assets</p>
      <AssetIcons4 />
      <Frame />
    </div>
  );
}

function Icon6() {
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
      <Icon6 />
    </div>
  );
}

function Icon7() {
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
      <Icon7 />
    </div>
  );
}

function Icon8() {
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
      <Icon8 />
    </div>
  );
}

function Icon9() {
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
      <Icon9 />
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
    <div className="bg-[#ebeef1] relative size-full" data-name="Asset">
      <Frame36 />
      <Header />
      <NavPanel />
      <Frame37 />
    </div>
  );
}