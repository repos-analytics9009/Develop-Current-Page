import svgPaths from "./svg-g94ghqs0x2";

function Icon() {
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

function Button() {
  return (
    <div className="absolute box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] py-[4px] right-[11px] rounded-[4px] top-[15px] w-[101px]" data-name="Button">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#059492] text-[14px] text-center text-nowrap">
        <p className="leading-[1.2] whitespace-pre">View more</p>
      </div>
      <Icon />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0 w-full">
      <div className="basis-0 bg-[#d94862] grow h-[10px] min-h-px min-w-px shrink-0" data-name="6ms" />
      <div className="bg-[#ff9100] h-[10px] shrink-0 w-[68px]" data-name="due-now" />
      <div className="bg-[#36a40f] h-[10px] shrink-0 w-[17px]" data-name="not-due" />
    </div>
  );
}

function Due() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="due">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #D94862)" id="Ellipse 1116" r="4" />
        </svg>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a869a] text-[14px] text-nowrap whitespace-pre">Overdue</p>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex font-['Poppins:SemiBold',sans-serif] gap-[2px] items-center leading-[normal] not-italic relative shrink-0 text-[#42526e] text-[14px] text-nowrap uppercase whitespace-pre" data-name="price">
      <p className="relative shrink-0 tracking-[1px]">₹</p>
      <p className="relative shrink-0">41,00,000</p>
    </div>
  );
}

function Credit() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="credit">
      <Due />
      <Price />
    </div>
  );
}

function Due1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="due">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #FF9100)" id="Ellipse 1116" r="4" />
        </svg>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a869a] text-[14px] text-nowrap whitespace-pre">Due Now</p>
    </div>
  );
}

function Price1() {
  return (
    <div className="content-stretch flex font-['Poppins:SemiBold',sans-serif] gap-[2px] items-center leading-[normal] not-italic relative shrink-0 text-[#42526e] text-[14px] text-nowrap uppercase whitespace-pre" data-name="price">
      <p className="relative shrink-0 tracking-[1px]">₹</p>
      <p className="relative shrink-0">9,80,000</p>
    </div>
  );
}

function Credit1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="credit">
      <Due1 />
      <Price1 />
    </div>
  );
}

function Due2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="due">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #36A40F)" id="Ellipse 1116" r="4" />
        </svg>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a869a] text-[14px] text-nowrap whitespace-pre">Due Soon</p>
    </div>
  );
}

function Price2() {
  return (
    <div className="content-stretch flex font-['Poppins:SemiBold',sans-serif] gap-[2px] items-center leading-[normal] not-italic relative shrink-0 text-[#42526e] text-[14px] text-nowrap uppercase whitespace-pre" data-name="price">
      <p className="relative shrink-0 tracking-[1px]">₹</p>
      <p className="relative shrink-0">5,60,000</p>
    </div>
  );
}

function Total() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="total">
      <Due2 />
      <Price2 />
    </div>
  );
}

function Divider() {
  return (
    <div className="h-[26px] w-[1px] bg-[#C1C7D0] shrink-0" />
  );
}

function CreditUsedTotal() {
  return (
    <div className="relative shrink-0 w-full" data-name="credit used-total">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between gap-[16px] px-[32px] py-0 relative w-full">
          <Credit />
          <Divider />
          <Credit1 />
          <Divider />
          <Total />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-center justify-center left-[15px] right-[15px] top-[77px]">
      <Frame />
      <CreditUsedTotal />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-white border border-[#eaeaec] border-solid overflow-clip relative rounded-[8px] size-full">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[16px] left-[15px] not-italic text-[#42526e] text-[12px] text-nowrap top-[15px] tracking-[0.36px] whitespace-pre">Total Outstanding</p>
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-[15px] not-italic text-[#172b4d] text-[18px] text-nowrap top-[50px] translate-y-[-50%]">
        <p className="leading-[22px] whitespace-pre">₹ 56,40,000</p>
      </div>
      <Button />
      <Frame1 />
    </div>
  );
}