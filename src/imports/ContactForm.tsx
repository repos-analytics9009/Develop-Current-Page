import svgPaths from "./svg-9gkbubp64j";

function Group() {
  return (
    <div className="absolute contents left-[calc(50%+22.7px)] top-[calc(50%-0.01px)] translate-x-[-50%] translate-y-[-50%]" data-name="Group">
      <div className="absolute h-[17.079px] left-[calc(50%-8.97px)] top-[calc(50%+0.01px)] translate-x-[-50%] translate-y-[-50%] w-[13.282px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
          <path d={svgPaths.p39e0d6f0} fill="var(--fill-0, #010101)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[17.063px] left-[calc(50%+5.85px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[11.143px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 18">
          <path d={svgPaths.p170d0900} fill="var(--fill-0, #010101)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[17.063px] left-[calc(50%+20.78px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[13.065px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
          <path d={svgPaths.p2d9ad100} fill="var(--fill-0, #010101)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[17.792px] left-[calc(50%+36.99px)] top-[calc(50%-0.02px)] translate-x-[-50%] translate-y-[-50%] w-[16.583px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 18">
          <path d={svgPaths.p17ffaf00} fill="var(--fill-0, #010101)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[17.746px] left-[calc(50%+53.96px)] top-[calc(50%+0.03px)] translate-x-[-50%] translate-y-[-50%] w-[14.072px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18">
          <path d={svgPaths.p263dc400} fill="var(--fill-0, #010101)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Layer2() {
  return (
    <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Layer_1-2-2">
      <Group />
      <div className="absolute h-[17.437px] left-[calc(50%-41.54px)] top-[calc(50%+0.2px)] translate-x-[-50%] translate-y-[-50%] w-[38.915px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 18">
          <path d={svgPaths.p274612d0} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Layer_1-21">
      <Layer2 />
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Layer_1-2">
      <Layer1 />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute contents left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Logo">
      <Layer />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[56px] relative shrink-0 w-full z-[2]" data-name="Header">
      <div className="h-[56px] overflow-clip relative rounded-[inherit] w-full">
        <Logo />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[700px] not-italic relative shrink-0 text-black text-center w-full" data-name="textContent">
      <p className="font-['Montserrat:Bold',sans-serif] h-[40px] leading-[40px] relative shrink-0 text-[34px] tracking-[-0.34px] w-full">Repos Experience Program</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] relative shrink-0 text-[20px] w-[654px]">Please fill out the form below to start Repos Experience Program with Repos Energy.</p>
    </div>
  );
}

function AmInputDontRename() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] cursor-pointer h-[45px] relative rounded-[8px] shrink-0 w-full" data-name="AMInput (Dont rename)" role="button" tabIndex="0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[45px] items-center leading-[normal] p-[12px] relative text-[14px] text-black text-nowrap w-full whitespace-pre">
          <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            &nbsp;
          </p>
          <p className="font-['Poppins:Regular',sans-serif] not-italic opacity-60 relative shrink-0">e.g. ABC Fuels Pvt. Ltd.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.16)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Company name</p>
      <AmInputDontRename />
    </div>
  );
}

function AmInputDontRename1() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="AMInput (Dont rename)" role="button" tabIndex="0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center leading-[normal] p-[12px] relative text-[14px] text-black text-nowrap w-full whitespace-pre">
          <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            &nbsp;
          </p>
          <p className="font-['Poppins:Regular',sans-serif] not-italic opacity-60 relative shrink-0">{`e.g. 25,000 L `}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.16)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Monthly fuel purchased</p>
      <AmInputDontRename1 />
    </div>
  );
}

function AmInputDontRename2() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="AMInput (Dont rename)" role="button" tabIndex="0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center leading-[normal] p-[12px] relative text-[14px] text-black text-nowrap w-full whitespace-pre">
          <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            &nbsp;
          </p>
          <p className="font-['Poppins:Regular',sans-serif] not-italic opacity-60 relative shrink-0">e.g. 24,300 L</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.16)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Monthly fuel consumed</p>
      <AmInputDontRename2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function AmInputDontRename3() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="AMInput (Dont rename)" role="button" tabIndex="0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center leading-[normal] p-[12px] relative text-[14px] text-black text-nowrap w-full whitespace-pre">
          <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            &nbsp;
          </p>
          <p className="font-['Poppins:Regular',sans-serif] not-italic opacity-60 relative shrink-0">e.g. 5</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.16)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Total sites in operation</p>
      <AmInputDontRename3 />
    </div>
  );
}

function AmInputDontRename4() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="AMInput (Dont rename)" role="button" tabIndex="0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center leading-[normal] p-[12px] relative text-[14px] text-black text-nowrap w-full whitespace-pre">
          <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            &nbsp;
          </p>
          <p className="font-['Poppins:Regular',sans-serif] not-italic opacity-60 relative shrink-0">e.g. 18</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.16)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Total asset count</p>
      <AmInputDontRename4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function AmInputDontRename5() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] cursor-pointer relative rounded-[8px] shrink-0 w-[338px]" data-name="AMInput (Dont rename)" role="button" tabIndex="0">
      <div className="box-border content-stretch flex items-center leading-[normal] overflow-clip p-[12px] relative rounded-[inherit] text-[14px] text-black text-nowrap w-[338px] whitespace-pre">
        <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          &nbsp;
        </p>
        <p className="font-['Poppins:Regular',sans-serif] not-italic opacity-60 relative shrink-0">e.g. ₹4,00,000</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.16)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Monthly credit limit with partner</p>
      <AmInputDontRename5 />
    </div>
  );
}

function ButtonFilledStandard() {
  return (
    <div className="bg-[#059492] box-border content-stretch cursor-pointer flex items-center justify-center px-[24px] py-[12px] relative shrink-0" data-name="buttonFilledStandard" role="button" tabIndex="0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Submit</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[700px] relative shrink-0 w-full" data-name="form">
      <Frame2 />
      <Frame />
      <Frame1 />
      <Frame7 />
      <ButtonFilledStandard />
    </div>
  );
}

function BusinessEstablishmentContactForm() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[56px] items-center px-0 py-[56px] relative shrink-0 w-full z-[1]" data-name="Business Establishment Contact Form">
      <TextContent />
      <Form />
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Main Content">
      <BusinessEstablishmentContactForm />
    </div>
  );
}

function Container() {
  return (
    <div className="box-border content-stretch flex isolate items-start px-0 py-[48px] relative shrink-0 w-full z-[1]" data-name="Container">
      <MainContent />
    </div>
  );
}

export default function ContactForm() {
  return (
    <button className="bg-white box-border content-stretch cursor-pointer flex flex-col isolate items-start p-0 relative size-full" data-name="Contact Form">
      <Header />
      <Container />
    </button>
  );
}