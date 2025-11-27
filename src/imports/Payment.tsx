import svgPaths from "./svg-u7p0d2f1e5";
import { NavigationPanel } from "../components/NavigationPanel";
import { Header as SharedHeader } from "../components/Header";

function Frame() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p24c61a00} fill="var(--fill-0, #6B778C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame />
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b778c] text-[14px] text-nowrap tracking-[0.42px] whitespace-pre">Total Invoice Due</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Metropolis:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#172b4d] text-[0px] text-nowrap">
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] whitespace-pre">
          <span className="text-[16px]">{`₹ `}</span>
          <span className="text-[18px]">50,00,000</span>
        </p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame44 />
      <Frame46 />
    </div>
  );
}

function AssetIcons() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Asset Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Asset Icons">
          <g id="Vector">
            <path d={svgPaths.p1e612500} fill="var(--fill-0, #6B778C)" />
            <path d={svgPaths.p2013e200} fill="var(--fill-0, #6B778C)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <AssetIcons />
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b778c] text-[14px] text-nowrap tracking-[0.42px] whitespace-pre">Active Subscription</p>
    </div>
  );
}

function Icon() {
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

function Button() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center pl-[12px] pr-0 py-0 relative rounded-[4px] shrink-0 w-[86px]" data-name="Button">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#172b4d] text-[18px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">3 DATUM</p>
      </div>
      <Icon />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame45 />
      <Button />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame42 />
      <Frame41 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#059492] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[12px] py-[6px] relative w-full">
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
            <p className="leading-[normal] whitespace-pre">Pay ₹ 50,00,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-white h-[159px] relative rounded-[8px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] h-[159px] items-start p-[16px] relative w-full">
          <Frame40 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pe1f4500} fill="var(--fill-0, #172B4D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-[552px]">
      <Icon1 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#172b4d] text-[16px]">Tired of manual payments?</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[24px] pr-0 py-0 relative w-full">
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b778c] text-[14px] text-nowrap tracking-[0.42px] whitespace-pre">Enable AutoPay for hassle-free payments</p>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame50 />
      <Frame57 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#059492] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[12px] py-[6px] relative w-full">
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
            <p className="leading-[normal] whitespace-pre">Setup Autopay</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame47 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame43 />
      <Frame56 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[349px] items-start left-[330px] right-[70px] top-[180px]">
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[14px] w-full">Overview</p>
      <Frame59 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26279680} fill="var(--fill-0, #334155)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[6px] py-[6px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.7px] border-slate-300 border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.02)]" />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-slate-700">
        <p className="leading-[1.2] whitespace-pre">DATUM</p>
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
          <path d={svgPaths.p26279680} fill="var(--fill-0, #334155)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[6px] py-[6px] relative rounded-[6px] shrink-0 w-[142px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.7px] border-slate-300 border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.02)]" />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-slate-700">
        <p className="leading-[1.2] whitespace-pre">Invoice Status</p>
      </div>
      <Icon3 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[330px] top-[553px]">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#d94862] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Overdue</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute inset-[6.25%_7.54%_3.08%_6.25%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 26">
        <g id="Frame 2608546">
          <path d={svgPaths.p2a500a80} fill="var(--fill-0, #122E91)" id="Vector" />
          <path d={svgPaths.p1f9d2400} fill="var(--fill-0, #122E91)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function AssetIcons1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Asset Icons">
      <Frame8 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <AssetIcons1 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">RFD – Kothrud Construction Depot, Pune</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[36px] pr-0 py-0 relative w-full">
          <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-[rgba(7,31,69,0.6)]">Survey No. 42/1, Paud Road, Near Karve Statue, Chakan, Pune – 411038, Maharashtra</p>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame51 />
      <Frame58 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame48 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[12px] w-full">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-slate-700">
        <p className="leading-[normal]">Due Date:</p>
      </div>
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#d94862] text-right">Apr 01, 2025</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[12px] w-full">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-slate-700">
        <p className="leading-[normal]">Amount:</p>
      </div>
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#161616] text-right">₹ 20,000.00</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[12px] w-full">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-slate-700">
        <p className="leading-[normal]">Invoice Number:</p>
      </div>
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#161616] text-right">INV-202401</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[12px] w-full">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-slate-700">
        <p className="leading-[normal]">Invoice For:</p>
      </div>
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#161616] text-right">Apr 01 - Apr 30, 2025</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[12px] w-full">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-slate-700">
        <p className="leading-[normal]">Generated On:</p>
      </div>
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#161616] text-right">Mar 15, 2025</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame23 />
      <Frame21 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_-0.06%]" style={{ "--stroke-0": "rgba(226, 232, 240, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
            <path d="M0.5 0.5H848.5" id="Vector 1105" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="5 5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <Frame22 />
      <Frame24 />
      <Frame18 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame2 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_-0.06%]" style={{ "--stroke-0": "rgba(226, 232, 240, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
            <path d="M0.5 0.5H848.5" id="Vector 1105" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="5 5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <Frame34 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p32f1f100} fill="var(--fill-0, #059492)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[12px] py-[4px] relative w-full">
          <Icon4 />
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#059492] text-[14px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">Download invoice</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_6016)" id="Icon">
          <path d={svgPaths.p2ab08600} fill="var(--fill-0, #059492)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_6016">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[12px] py-[4px] relative w-full">
          <Icon5 />
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#059492] text-[14px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">Mail invoice</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="basis-0 bg-[#059492] grow h-[40px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[12px] py-[6px] relative w-full">
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
            <p className="leading-[normal] whitespace-pre">Pay Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start p-[16px] relative w-full">
          <Frame37 />
          <Frame61 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#36a40f] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Paid</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute inset-[6.25%_7.54%_3.08%_6.25%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 26">
        <g id="Frame 2608546">
          <path d={svgPaths.p2a500a80} fill="var(--fill-0, #122E91)" id="Vector" />
          <path d={svgPaths.p1f9d2400} fill="var(--fill-0, #122E91)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function AssetIcons2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Asset Icons">
      <Frame9 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <AssetIcons2 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">RFD – Hinjewadi Construction Depot, Pune</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[36px] pr-0 py-0 relative w-full">
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(7,31,69,0.6)] text-nowrap whitespace-pre">Hinjewadi, Pune</p>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame52 />
      <Frame64 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame49 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[12px] w-full">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-slate-700">
        <p className="leading-[normal]">Paid On:</p>
      </div>
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#161616] text-right">Apr 01, 2025</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[12px] w-full">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-slate-700">
        <p className="leading-[normal]">Amount Paid:</p>
      </div>
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#161616] text-right">₹ 20,000.00</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[12px] w-full">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-slate-700">
        <p className="leading-[normal]">Invoice Number:</p>
      </div>
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#161616] text-right">INV-202401</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[12px] w-full">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-slate-700">
        <p className="leading-[normal]">Invoice For:</p>
      </div>
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#161616] text-right">Apr 01 - Apr 30, 2025</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[12px] w-full">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-slate-700">
        <p className="leading-[normal]">Generated On:</p>
      </div>
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#161616] text-right">Mar 15, 2025</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[12px] w-full">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-slate-700">
        <p className="leading-[normal]">Payment Reference:</p>
      </div>
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#161616] text-right">RXX098327271</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame26 />
      <Frame27 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_-0.06%]" style={{ "--stroke-0": "rgba(226, 232, 240, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
            <path d="M0.5 0.5H848.5" id="Vector 1105" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="5 5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <Frame28 />
      <Frame29 />
      <Frame19 />
      <Frame25 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame3 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_-0.06%]" style={{ "--stroke-0": "rgba(226, 232, 240, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
            <path d="M0.5 0.5H848.5" id="Vector 1105" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="5 5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <Frame35 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p32f1f100} fill="var(--fill-0, #059492)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[12px] py-[4px] relative w-full">
          <Icon6 />
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#059492] text-[14px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">Download invoice</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_6016)" id="Icon">
          <path d={svgPaths.p2ab08600} fill="var(--fill-0, #059492)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_6016">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[12px] py-[4px] relative w-full">
          <Icon7 />
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#059492] text-[14px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">Mail invoice</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Button8 />
      <Button9 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start p-[16px] relative w-full">
          <Frame38 />
          <Frame65 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#ffc67a] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-800 whitespace-pre">Due now</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute inset-[6.25%_7.54%_3.08%_6.25%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 26">
        <g id="Frame 2608546">
          <path d={svgPaths.p2a500a80} fill="var(--fill-0, #122E91)" id="Vector" />
          <path d={svgPaths.p1f9d2400} fill="var(--fill-0, #122E91)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function AssetIcons3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Asset Icons">
      <Frame10 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <AssetIcons3 />
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#122e91] text-[16px]">{`RFD – Maharashtra Heavy Engineering & Infrastructure Solutions Pvt. Ltd., Pune MIDC`}</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[36px] pr-0 py-0 relative w-full">
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(7,31,69,0.6)] text-nowrap whitespace-pre">Chakan, Pune</p>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame53 />
      <Frame69 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame7 />
      <Frame54 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[12px] w-full">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-slate-700">
        <p className="leading-[normal]">Due Date:</p>
      </div>
      <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#d94862] text-right">Apr 01, 2025</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[12px] w-full">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-slate-700">
        <p className="leading-[normal]">Amount:</p>
      </div>
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#161616] text-right">₹ 20,000.00</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[12px] w-full">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-slate-700">
        <p className="leading-[normal]">Invoice Number:</p>
      </div>
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#161616] text-right">INV-202401</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[12px] w-full">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-slate-700">
        <p className="leading-[normal]">Invoice For:</p>
      </div>
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#161616] text-right">Apr 01 - Apr 30, 2025</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[12px] w-full">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-slate-700">
        <p className="leading-[normal]">Generated On:</p>
      </div>
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#161616] text-right">Mar 15, 2025</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame30 />
      <Frame31 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_-0.06%]" style={{ "--stroke-0": "rgba(226, 232, 240, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
            <path d="M0.5 0.5H848.5" id="Vector 1105" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="5 5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <Frame32 />
      <Frame33 />
      <Frame20 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame4 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_-0.06%]" style={{ "--stroke-0": "rgba(226, 232, 240, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849 1">
            <path d="M0.5 0.5H848.5" id="Vector 1105" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="5 5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <Frame36 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p32f1f100} fill="var(--fill-0, #059492)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[12px] py-[4px] relative w-full">
          <Icon8 />
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#059492] text-[14px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">Download invoice</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_6016)" id="Icon">
          <path d={svgPaths.p2ab08600} fill="var(--fill-0, #059492)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_6016">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[12px] py-[4px] relative w-full">
          <Icon9 />
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#059492] text-[14px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">Mail invoice</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Button10 />
      <Button11 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start p-[16px] relative w-full">
          <Frame39 />
          <Frame70 />
        </div>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame55 />
      <Frame66 />
      <Frame62 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1181px] items-start left-[330px] right-[70px] top-[605px] pb-[100px]">
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#111111] text-[14px] w-full">Overview</p>
      <Frame71 />
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

function Icon10() {
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

function Button12() {
  return (
    <div className="box-border content-stretch flex h-[32px] items-start p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <Icon10 />
    </div>
  );
}

function Icon11() {
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

function Button13() {
  return (
    <div className="box-border content-stretch flex h-[32px] items-start p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <Icon11 />
    </div>
  );
}

function Icon12() {
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

function Button14() {
  return (
    <div className="bg-[#059492] box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] py-[4px] relative rounded-[4px] shrink-0 w-[122px]" data-name="Button">
      <Icon12 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre">New Order</p>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center justify-end right-[32px] top-[calc(50%+0.25px)] translate-y-[-50%]" data-name="Actions">
      <Button12 />
      <Button13 />
      <Button14 />
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

function Icon13() {
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

function Button15() {
  return (
    <div className="absolute box-border content-stretch flex h-[32px] items-start left-0 p-[4px] rounded-[4px] top-0" data-name="Button">
      <Icon13 />
    </div>
  );
}

function TopAppBar() {
  return (
    <div className="absolute h-[32px] left-0 right-0 top-[20px]" data-name="Top App Bar">
      <Button15 />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#253858] text-[18px] text-center text-nowrap top-[16px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Payments</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Poppins:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#059492] text-[14px] text-center">Subscription</p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
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
      <Frame13 />
      <Frame11 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center">Partners</p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
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
      <Frame14 />
      <Frame12 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6b778c] text-[14px] text-center">Transactions</p>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
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
    <div className="basis-0 content-stretch flex flex-col grow h-[40px] items-start justify-between min-h-px min-w-px relative shrink-0" data-name="Component 2">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex items-start left-0 right-0 top-[64px]">
      <Component />
      <Component2 />
      <Component1 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="absolute bg-[#ebeef1] h-[104px] left-[330px] right-[70px] top-[56px]">
      <TopAppBar />
      <Frame17 />
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

function AssetIcons4() {
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
      <AssetIcons4 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[10px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p16656800} fill="var(--fill-0, #059492)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return <div className="absolute bg-[#059492] h-[40px] left-[-21px] rounded-br-[10px] rounded-tr-[10px] top-0 w-[5px]" />;
}

function NavItem1() {
  return (
    <div className="absolute bg-[#ebecf0] h-[40px] left-[20px] rounded-[3px] top-[164px] w-[208px]" data-name="Nav Item">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] h-[40px] leading-[40px] left-[50px] not-italic right-[10px] text-[#059492] text-[14px] top-[calc(50%-20px)]">Payments</p>
      <Icon14 />
      <Frame1 />
    </div>
  );
}

function Icon15() {
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
      <Icon15 />
    </div>
  );
}

function Icon16() {
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
      <Icon16 />
    </div>
  );
}

function Icon17() {
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
      <Icon17 />
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

export default function Payment() {
  return (
    <div className="bg-[#ebeef1] relative size-full overflow-auto pb-[100px]" data-name="Payment">
      <Frame67 />
      <NavigationPanel />
      <Frame60 />
      <Frame68 />
      <Frame63 />
      <SharedHeader />
    </div>
  );
}