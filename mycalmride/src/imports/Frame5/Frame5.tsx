import svgPaths from "./svg-8qypzr6iua";

function Time() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[15.642px] pr-[5.866px] relative size-full">
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[21.507px] relative shrink-0 text-[16.62px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer() {
  return <div className="h-[9.776px] shrink-0 w-[121.224px]" data-name="Dynamic Island spacer" />;
}

function Battery() {
  return (
    <div className="h-[12.709px] relative shrink-0 w-[26.716px]" data-name="Battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.7162 12.709">
        <g id="Battery">
          <rect height="11.7313" id="Border" opacity="0.35" rx="3.71493" stroke="var(--stroke-0, white)" strokeWidth="0.977612" width="23.4627" x="0.488806" y="0.488806" />
          <path d={svgPaths.p3c9de380} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, white)" height="8.79851" id="Capacity" rx="2.44403" width="20.5299" x="1.95522" y="1.95522" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6.843px] items-center justify-center pl-[5.866px] pr-[15.642px] relative size-full">
          <div className="h-[11.953px] relative shrink-0 w-[18.77px]" data-name="Cellular Connection">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7702 11.9527">
              <path clipRule="evenodd" d={svgPaths.paeb8c80} fill="var(--fill-0, white)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.052px] relative shrink-0 w-[16.758px]" data-name="Wifi">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7579 12.0523">
              <path clipRule="evenodd" d={svgPaths.p1aed50f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Battery />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[100px] left-[calc(50%-0.5px)] top-[calc(50%-152px)] w-[150px]">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal inset-[0_32.49%_77.47%_31.57%] leading-[normal] text-[#9ab89c] text-[15.561px] text-center">CALM</p>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal inset-[76.79%_33.85%_-0.5%_34.12%] leading-[normal] text-[#9ab89c] text-[16.063px] text-center">RIDE</p>
      <div className="absolute inset-[27.38%_67.65%_72.62%_0]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.5294 1.00392">
            <path d="M0 0.501961H48.5294" id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeWidth="1.00392" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.38%_0_72.62%_67.65%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.5294 1.00392">
            <path d="M0 0.501961H48.5294" id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeWidth="1.00392" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[40.77%_77.45%_59.23%_2.94%]" data-name="Vector">
        <div className="absolute inset-[-0.38px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.4118 0.752941">
            <path d="M0 0.376471H29.4118" id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeWidth="0.752941" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[49.7%_77.45%_50.3%_2.94%]" data-name="Vector">
        <div className="absolute inset-[-0.38px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.4118 0.752941">
            <path d="M0 0.376471H29.4118" id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeWidth="0.752941" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.63%_80.39%_41.37%_2.94%]" data-name="Vector">
        <div className="absolute inset-[-0.38px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 0.752941">
            <path d="M0 0.376471H25" id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeWidth="0.752941" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[40.77%_2.94%_59.23%_77.45%]" data-name="Vector">
        <div className="absolute inset-[-0.38px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.4118 0.752941">
            <path d="M0 0.376471H29.4118" id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeWidth="0.752941" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[49.7%_2.94%_50.3%_77.45%]" data-name="Vector">
        <div className="absolute inset-[-0.38px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.4118 0.752941">
            <path d="M0 0.376471H29.4118" id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeWidth="0.752941" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.63%_2.94%_41.37%_80.39%]" data-name="Vector">
        <div className="absolute inset-[-0.38px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 0.752941">
            <path d="M0 0.376471H25" id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeWidth="0.752941" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.38%_51.96%_30.95%_34.31%]" data-name="Vector">
        <div className="absolute inset-[-1.81%_-3.66%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0942 43.1727">
            <path d={svgPaths.p12d33700} id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeLinecap="round" strokeWidth="1.50588" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.38%_37.25%_27.98%_43.01%]" data-name="Vector">
        <div className="absolute inset-[-1.69%_-2.54%_-1.69%_-2.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.1056 46.1489">
            <path d={svgPaths.p2a1682c0} id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeLinecap="round" strokeWidth="1.50588" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.76%_22.55%_26.49%_52.33%]" data-name="Vector">
        <div className="absolute inset-[-1.43%_-1.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.941 45.005">
            <path d={svgPaths.p2e5ebd97} id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeLinecap="round" strokeWidth="1.2549" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-start pb-[4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['SF_Compact_Text:Medium',sans-serif] leading-[20px] max-w-[355px] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">Enter your email to login or sign up</p>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="content-stretch flex gap-[4px] items-start px-[12px] py-[11px] relative size-full">
        <p className="font-['72:Italic',sans-serif] italic leading-[22px] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">email@domain.com</p>
      </div>
    </div>
  );
}

function Inner() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Inner">
      <Text />
    </div>
  );
}

function InputField() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Inner />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(148,190,189,0.83)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function MarginFrame() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin Frame">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pr-[16px] py-[11px] relative size-full">
          <Label />
          <InputField />
        </div>
      </div>
    </div>
  );
}

function PrimaryFrame() {
  return (
    <div className="relative shrink-0 w-full" data-name="Primary Frame">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pl-[16px] relative size-full">
          <MarginFrame />
        </div>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="bg-[#9ab89c] h-[48px] relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#042b48] text-[17px] text-center whitespace-nowrap">Let’s Go</p>
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bg-[#042b48] h-[852px] left-0 overflow-clip top-0 w-[393px]" data-name="1">
      <div className="absolute content-stretch flex flex-col h-[48.881px] items-start left-0 pt-[20.53px] top-0 w-[393px]" data-name="Status Bar - iPhone">
        <Frame />
      </div>
      <div className="absolute h-[33.405px] left-0 top-[819px] w-[393px]" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[7.86px] flex h-[4.913px] items-center justify-center left-1/2 w-[141.48px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-white h-[4.913px] rounded-[100px] w-[141.48px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <Frame4 />
      <div className="absolute content-stretch flex flex-col items-center left-0 top-[417px] w-[393px]" data-name="Text Field Form Cell">
        <PrimaryFrame />
      </div>
      <div className="absolute content-stretch flex flex-col items-center justify-center left-[17px] min-h-[44px] py-[3px] top-[523px] w-[360px]" data-name="Button">
        <ButtonContainer />
      </div>
    </div>
  );
}

function Time1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[15.642px] pr-[5.866px] relative size-full">
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[21.507px] relative shrink-0 text-[16.62px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer1() {
  return <div className="h-[9.776px] shrink-0 w-[121.224px]" data-name="Dynamic Island spacer" />;
}

function Battery1() {
  return (
    <div className="h-[12.709px] relative shrink-0 w-[26.716px]" data-name="Battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.7162 12.709">
        <g id="Battery">
          <rect height="11.7313" id="Border" opacity="0.35" rx="3.71493" stroke="var(--stroke-0, white)" strokeWidth="0.977612" width="23.4627" x="0.488806" y="0.488806" />
          <path d={svgPaths.p3c9de380} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, white)" height="8.79851" id="Capacity" rx="2.44403" width="20.5299" x="1.95522" y="1.95522" />
        </g>
      </svg>
    </div>
  );
}

function Levels1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6.843px] items-center justify-center pl-[5.866px] pr-[15.642px] relative size-full">
          <div className="h-[11.953px] relative shrink-0 w-[18.77px]" data-name="Cellular Connection">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7702 11.9527">
              <path clipRule="evenodd" d={svgPaths.paeb8c80} fill="var(--fill-0, white)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.052px] relative shrink-0 w-[16.758px]" data-name="Wifi">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7579 12.0523">
              <path clipRule="evenodd" d={svgPaths.p1aed50f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Battery1 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time1 />
      <DynamicIslandSpacer1 />
      <Levels1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[100px] left-[calc(50%-0.5px)] top-[calc(50%-242px)] w-[150px]">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal inset-[0_32.49%_77.47%_31.57%] leading-[normal] text-[#9ab89c] text-[15.561px] text-center">CALM</p>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal inset-[76.79%_33.85%_-0.5%_34.12%] leading-[normal] text-[#9ab89c] text-[16.063px] text-center">RIDE</p>
      <div className="absolute inset-[27.38%_67.65%_72.62%_0]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.5294 1.00392">
            <path d="M0 0.501961H48.5294" id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeWidth="1.00392" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.38%_0_72.62%_67.65%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.5294 1.00392">
            <path d="M0 0.501961H48.5294" id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeWidth="1.00392" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[40.77%_77.45%_59.23%_2.94%]" data-name="Vector">
        <div className="absolute inset-[-0.38px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.4118 0.752941">
            <path d="M0 0.376471H29.4118" id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeWidth="0.752941" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[49.7%_77.45%_50.3%_2.94%]" data-name="Vector">
        <div className="absolute inset-[-0.38px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.4118 0.752941">
            <path d="M0 0.376471H29.4118" id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeWidth="0.752941" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.63%_80.39%_41.37%_2.94%]" data-name="Vector">
        <div className="absolute inset-[-0.38px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 0.752941">
            <path d="M0 0.376471H25" id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeWidth="0.752941" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[40.77%_2.94%_59.23%_77.45%]" data-name="Vector">
        <div className="absolute inset-[-0.38px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.4118 0.752941">
            <path d="M0 0.376471H29.4118" id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeWidth="0.752941" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[49.7%_2.94%_50.3%_77.45%]" data-name="Vector">
        <div className="absolute inset-[-0.38px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.4118 0.752941">
            <path d="M0 0.376471H29.4118" id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeWidth="0.752941" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.63%_2.94%_41.37%_80.39%]" data-name="Vector">
        <div className="absolute inset-[-0.38px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 0.752941">
            <path d="M0 0.376471H25" id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeWidth="0.752941" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.38%_51.96%_30.95%_34.31%]" data-name="Vector">
        <div className="absolute inset-[-1.81%_-3.66%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0942 43.1727">
            <path d={svgPaths.p12d33700} id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeLinecap="round" strokeWidth="1.50588" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.38%_37.25%_27.98%_43.01%]" data-name="Vector">
        <div className="absolute inset-[-1.69%_-2.54%_-1.69%_-2.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.1056 46.1489">
            <path d={svgPaths.p2a1682c0} id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeLinecap="round" strokeWidth="1.50588" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.76%_22.55%_26.49%_52.33%]" data-name="Vector">
        <div className="absolute inset-[-1.43%_-1.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.941 45.005">
            <path d={svgPaths.p2e5ebd97} id="Vector" stroke="var(--stroke-0, #9AB89C)" strokeLinecap="round" strokeWidth="1.2549" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-start pb-[4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['SF_Compact_Text:Medium',sans-serif] leading-[20px] max-w-[355px] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">Enter your email to login or sign up</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="content-stretch flex gap-[4px] items-start px-[12px] py-[11px] relative size-full">
        <p className="font-['72:Italic',sans-serif] italic leading-[22px] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">email@domain.com</p>
      </div>
    </div>
  );
}

function Inner1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Inner">
      <Text1 />
    </div>
  );
}

function InputField1() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Inner1 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(148,190,189,0.83)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function MarginFrame1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin Frame">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pr-[16px] py-[11px] relative size-full">
          <Label1 />
          <InputField1 />
        </div>
      </div>
    </div>
  );
}

function PrimaryFrame1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Primary Frame">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pl-[16px] relative size-full">
          <MarginFrame1 />
        </div>
      </div>
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="bg-[#9ab89c] h-[48px] relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#042b48] text-[17px] text-center whitespace-nowrap">Let’s Go</p>
        </div>
      </div>
    </div>
  );
}

function AutocompleteSuggestion() {
  return (
    <div className="bg-[#ebedf0] flex-[1_0_0] h-full min-w-px relative rounded-[4.6px]" data-name="Autocomplete Suggestion">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] overflow-hidden text-[17px] text-black text-center text-ellipsis tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] overflow-hidden text-ellipsis">“The”</p>
      </div>
    </div>
  );
}

function SeparatorClear() {
  return (
    <div className="content-stretch flex h-[25px] items-center justify-center px-[2px] relative shrink-0" data-name="Separator (Clear)">
      <div className="bg-black h-full opacity-0 shrink-0 w-px" data-name="Separator" />
    </div>
  );
}

function AutocompleteSuggestion1() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[4.6px]" data-name="Autocomplete Suggestion">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] overflow-hidden text-[17px] text-black text-center text-ellipsis tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] overflow-hidden text-ellipsis">the</p>
      </div>
    </div>
  );
}

function Separator() {
  return (
    <div className="content-stretch flex h-[25px] items-center justify-center px-[2px] relative shrink-0" data-name="Separator">
      <div className="bg-black h-full opacity-10 shrink-0 w-px" data-name="Separator" />
    </div>
  );
}

function AutocompleteSuggestion2() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[4.6px]" data-name="Autocomplete Suggestion">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] overflow-hidden text-[17px] text-black text-center text-ellipsis tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] overflow-hidden text-ellipsis">to</p>
      </div>
    </div>
  );
}

function AccessoryBar() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[2px] relative shrink-0 w-full" data-name="Accessory Bar">
      <div className="flex-[1_0_0] h-[39px] min-w-px relative" data-name="Autocorrection">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[2px] items-center px-px relative size-full">
            <AutocompleteSuggestion />
            <SeparatorClear />
            <AutocompleteSuggestion1 />
            <Separator />
            <AutocompleteSuggestion2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="absolute bottom-0 h-[42px] left-[25.7%] right-[25.7%]" data-name="Row 4">
      <div className="absolute h-[42px] left-0 right-0 rounded-[4.6px] top-0" data-name="Space">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] left-0 right-0 text-[16px] text-black text-center top-1/2 tracking-[-0.31px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[21px]">space</p>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="absolute bottom-[54px] content-stretch flex gap-[6px] items-start left-[15.78%] right-[15.78%]" data-name="Row 3">
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">z</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">x</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">c</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">v</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">b</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">n</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">m</p>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="absolute bottom-[108px] content-stretch flex gap-[6px] items-start left-[5.85%] right-[5.85%]" data-name="Row 2">
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">a</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">s</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">d</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">f</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">g</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">h</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">j</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">k</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">l</p>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="absolute bottom-[162px] content-stretch flex gap-[6px] items-start left-[0.76%] right-[0.76%]" data-name="Row 1">
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">q</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">w</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">e</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">r</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">t</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">y</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">u</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">i</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">o</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative rounded-[4.6px]" data-name="Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[25px] text-black text-center top-[calc(50%-3px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[28px]">p</p>
        </div>
      </div>
    </div>
  );
}

function EmojiAndMic() {
  return (
    <div className="h-[55px] relative shrink-0 w-full" data-name="Emoji and Mic">
      <div className="content-stretch flex items-start justify-between pl-[20px] pr-[24px] pt-[27px] relative size-full">
        <div className="relative shrink-0 size-[26.92px]" data-name="Emoji">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.92 26.92">
            <path d={svgPaths.p2d450400} fill="var(--fill-0, #1B1F26)" fillOpacity="0.72" id="Emoji" />
          </svg>
        </div>
        <div className="h-[28.213px] relative shrink-0 w-[18.866px]" data-name="Mic">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.8657 28.2129">
            <path d={svgPaths.p10f8a600} fill="var(--fill-0, #1B1F26)" fillOpacity="0.72" id="Mic" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute bg-[#042b48] h-[852px] left-[473px] overflow-clip top-0 w-[393px]" data-name="2">
      <div className="absolute content-stretch flex flex-col h-[48.881px] items-start left-0 pt-[20.53px] top-0 w-[393px]" data-name="Status Bar - iPhone">
        <Frame1 />
      </div>
      <Frame6 />
      <div className="absolute content-stretch flex flex-col items-center left-0 top-[327px] w-[393px]" data-name="Text Field Form Cell">
        <PrimaryFrame1 />
      </div>
      <div className="absolute content-stretch flex flex-col items-center justify-center left-[17px] min-h-[44px] py-[3px] top-[433px] w-[360px]" data-name="Button">
        <ButtonContainer1 />
      </div>
      <div className="absolute content-stretch flex flex-col items-center justify-end left-0 pt-[3px] top-[516px] w-[393px]" data-name="Keyboard - iPhone">
        <div className="-translate-y-1/2 absolute h-[336px] left-0 right-0 top-1/2" data-name="Background">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute bg-[rgba(85,85,85,0.9)] inset-0 mix-blend-luminosity" />
            <div className="absolute bg-[rgba(86,88,92,0.87)] inset-0" />
            <div className="absolute backdrop-blur-[75px] bg-[#939393] inset-0 mix-blend-color-dodge" />
          </div>
        </div>
        <AccessoryBar />
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="-scale-y-100 flex-none w-full">
            <div className="h-[5px] opacity-60 w-full" data-name="Spacer" />
          </div>
        </div>
        <div className="h-[204px] relative shrink-0 w-full" data-name="Keyboard Layouts">
          <Row3 />
          <div className="absolute bottom-0 h-[42px] left-[75.83%] right-[0.76%] rounded-[4.6px]" data-name="Return">
            <div className="absolute bg-[#8f8f8f] inset-0 mix-blend-color-burn rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
            <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] left-0 right-0 text-[16px] text-black text-center top-1/2 tracking-[-0.31px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[21px]">return</p>
            </div>
          </div>
          <div className="absolute bottom-0 h-[42px] left-[0.76%] right-[75.83%] rounded-[4.6px]" data-name="Keyboard Switch">
            <div className="absolute bg-[#8f8f8f] inset-0 mix-blend-color-burn rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
            <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] left-0 right-0 text-[16px] text-black text-center top-1/2 tracking-[-0.31px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[21px]">ABC</p>
            </div>
          </div>
          <Row2 />
          <div className="absolute bottom-[54px] h-[42px] left-[88.04%] right-[0.76%] rounded-[4.6px]" data-name="Delete Key">
            <div className="absolute bg-[#8f8f8f] inset-0 mix-blend-color-burn rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[20px] text-black text-center top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[28px]">{`\u{10019B}`}</p>
            </div>
          </div>
          <div className="absolute bottom-[54px] h-[42px] left-[0.76%] right-[88.04%] rounded-[4.6px]" data-name="Shift Key">
            <div className="absolute bg-[#8f8f8f] inset-0 mix-blend-color-burn rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.35)]" data-name="Key" />
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+0.5px)] text-[20px] text-black text-center top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[28px]">{`\u{10019D}`}</p>
            </div>
          </div>
          <Row1 />
          <Row />
        </div>
        <EmojiAndMic />
        <div className="h-[26px] relative shrink-0 w-[402px]" data-name="Home Indicator">
          <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="bg-black h-[5px] rounded-[100px] w-[144px]" data-name="Home Indicator" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Time2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] relative size-full">
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer2() {
  return <div className="h-[10px] shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery2() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, white)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, white)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] relative size-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, white)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Battery2 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time2 />
      <DynamicIslandSpacer2 />
      <Levels2 />
    </div>
  );
}

function TitleAndControls() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Title and Controls">
      <p className="absolute bottom-1/4 font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] left-[45.55%] right-[45.5%] text-[17px] text-center text-white top-1/4 tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Welcome Rider
      </p>
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contents">
      <TitleAndControls />
    </div>
  );
}

function ButtonContainer2() {
  return (
    <div className="bg-[#9ab89c] h-[48px] relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#042b48] text-[17px] text-center whitespace-nowrap">Create Account</p>
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute bg-[#042b48] h-[852px] left-[946px] overflow-clip top-0 w-[393px]" data-name="3">
      <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[393px]" data-name="Navigation Bar - iPhone (Compact Size Class)">
        <div className="content-stretch flex flex-col h-[54px] items-start pt-[21px] relative shrink-0 w-[402px]" data-name="Status Bar - iPhone">
          <Frame2 />
        </div>
        <Contents />
      </div>
      <div className="absolute content-stretch flex flex-col items-center justify-center left-[17px] min-h-[44px] py-[3px] top-[395px] w-[360px]" data-name="Button">
        <ButtonContainer2 />
      </div>
      <p className="absolute font-['SF_Compact_Text:Medium',sans-serif] h-[20px] leading-[0] left-[calc(50%-167.5px)] not-italic text-[12px] text-[rgba(255,255,255,0.5)] top-[539px] w-[335px]">
        <span className="leading-[normal]">{`By continuing you agree to our `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[normal] text-white underline">terms</span>
        <span className="leading-[normal]">{` and `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[normal] text-white underline">privacy policy</span>
      </p>
    </div>
  );
}

function Time3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] relative size-full">
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer3() {
  return <div className="h-[10px] shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery3() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, white)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, white)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] relative size-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, white)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Battery3 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time3 />
      <DynamicIslandSpacer3 />
      <Levels3 />
    </div>
  );
}

function TitleAndControls1() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Title and Controls">
      <p className="absolute bottom-1/4 font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] left-[45.55%] right-[45.5%] text-[17px] text-center text-white top-1/4 tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Welcome Rider
      </p>
    </div>
  );
}

function Contents1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contents">
      <TitleAndControls1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-start pb-[4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['SF_Compact_Text:Medium',sans-serif] leading-[20px] max-w-[355px] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">What’s your name?</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="content-stretch flex gap-[4px] items-start px-[12px] py-[11px] relative size-full">
        <p className="font-['72:Italic',sans-serif] italic leading-[22px] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">enter your full name</p>
      </div>
    </div>
  );
}

function Inner2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Inner">
      <Text2 />
    </div>
  );
}

function InputField2() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Inner2 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(148,190,189,0.83)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function MarginFrame2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin Frame">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pr-[16px] py-[11px] relative size-full">
          <Label2 />
          <InputField2 />
        </div>
      </div>
    </div>
  );
}

function PrimaryFrame2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Primary Frame">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pl-[16px] relative size-full">
          <MarginFrame2 />
        </div>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex items-start pb-[4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['72:Semibold',sans-serif] leading-[20px] max-w-[355px] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">What’s your name?</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="content-stretch flex gap-[4px] items-start px-[12px] py-[11px] relative size-full">
        <p className="font-['72:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">jane.doe@abc.com</p>
      </div>
    </div>
  );
}

function Inner3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Inner">
      <Text3 />
    </div>
  );
}

function InputField3() {
  return (
    <div className="bg-[rgba(3,88,108,0.5)] content-stretch flex flex-col items-center overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <Inner3 />
    </div>
  );
}

function MarginFrame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="Margin Frame">
      <p className="flex-[1_0_0] font-['72:Regular',sans-serif] leading-[18px] min-w-px not-italic relative text-[13px] text-[rgba(255,255,255,0.5)]">Read-only field</p>
    </div>
  );
}

function PrimaryFrame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px pt-[4px] relative" data-name="Primary Frame">
      <MarginFrame4 />
    </div>
  );
}

function MarginFrame3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin Frame">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pr-[16px] py-[11px] relative size-full">
          <Label3 />
          <InputField3 />
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Form Cell Semantic Message">
            <PrimaryFrame4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function PrimaryFrame3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Primary Frame">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pl-[16px] relative size-full">
          <MarginFrame3 />
        </div>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex items-start pb-[4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['SF_Compact_Text:Medium',sans-serif] leading-[20px] max-w-[355px] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">What’s your name?</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="content-stretch flex gap-[4px] items-start px-[12px] py-[11px] relative size-full">
        <p className="font-['72:Italic',sans-serif] italic leading-[22px] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">enter your full name</p>
      </div>
    </div>
  );
}

function Inner4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Inner">
      <Text4 />
    </div>
  );
}

function InputField4() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Inner4 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(148,190,189,0.83)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function MarginFrame5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin Frame">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pr-[16px] py-[11px] relative size-full">
          <Label4 />
          <InputField4 />
        </div>
      </div>
    </div>
  );
}

function PrimaryFrame5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Primary Frame">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pl-[16px] relative size-full">
          <MarginFrame5 />
        </div>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex items-start pb-[4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['72:Semibold',sans-serif] leading-[20px] max-w-[355px] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">What’s your name?</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="content-stretch flex gap-[4px] items-start px-[12px] py-[11px] relative size-full">
        <p className="font-['72:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">jane.doe@abc.com</p>
      </div>
    </div>
  );
}

function Inner5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Inner">
      <Text5 />
    </div>
  );
}

function InputField5() {
  return (
    <div className="bg-[rgba(3,88,108,0.5)] content-stretch flex flex-col items-center overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <Inner5 />
    </div>
  );
}

function MarginFrame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="Margin Frame">
      <p className="flex-[1_0_0] font-['72:Regular',sans-serif] leading-[18px] min-w-px not-italic relative text-[13px] text-[rgba(255,255,255,0.5)]">Read-only field</p>
    </div>
  );
}

function PrimaryFrame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px pt-[4px] relative" data-name="Primary Frame">
      <MarginFrame7 />
    </div>
  );
}

function MarginFrame6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin Frame">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pr-[16px] py-[11px] relative size-full">
          <Label5 />
          <InputField5 />
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Form Cell Semantic Message">
            <PrimaryFrame7 />
          </div>
        </div>
      </div>
    </div>
  );
}

function PrimaryFrame6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Primary Frame">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pl-[16px] relative size-full">
          <MarginFrame6 />
        </div>
      </div>
    </div>
  );
}

function ButtonContainer3() {
  return (
    <div className="bg-[#9ab89c] h-[48px] relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#042b48] text-[17px] text-center whitespace-nowrap">Create Account</p>
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute bg-[#042b48] h-[852px] left-[946px] overflow-clip top-0 w-[393px]" data-name="3">
      <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[393px]" data-name="Navigation Bar - iPhone (Compact Size Class)">
        <div className="content-stretch flex flex-col h-[54px] items-start pt-[21px] relative shrink-0 w-[402px]" data-name="Status Bar - iPhone">
          <Frame3 />
        </div>
        <Contents1 />
      </div>
      <div className="absolute h-[33.405px] left-0 top-[819px] w-[393px]" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[7.86px] flex h-[4.913px] items-center justify-center left-1/2 w-[141.48px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-white h-[4.913px] rounded-[100px] w-[141.48px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-center left-0 top-[154px] w-[393px]" data-name="Text Field Form Cell">
        <PrimaryFrame2 />
      </div>
      <div className="absolute content-stretch flex flex-col items-center left-0 top-[244px] w-[393px]" data-name="Text Field Form Cell">
        <PrimaryFrame3 />
      </div>
      <p className="-translate-x-1/2 absolute font-['SF_Compact_Text:Medium',sans-serif] h-[60px] leading-[20px] left-[calc(50%-5px)] not-italic text-[15px] text-[rgba(255,255,255,0.8)] text-center top-[366px] w-[335px]">{`you don’t need a password to create an account. To login next time we’ll send you a special link `}</p>
      <div className="absolute content-stretch flex flex-col items-center left-0 top-[154px] w-[393px]" data-name="Text Field Form Cell">
        <PrimaryFrame5 />
      </div>
      <div className="absolute content-stretch flex flex-col items-center left-0 top-[244px] w-[393px]" data-name="Text Field Form Cell">
        <PrimaryFrame6 />
      </div>
      <p className="-translate-x-1/2 absolute font-['SF_Compact_Text:Medium',sans-serif] h-[60px] leading-[20px] left-[calc(50%-5px)] not-italic text-[15px] text-[rgba(255,255,255,0.8)] text-center top-[366px] w-[335px]">{`you don’t need a password to create an account. To login next time we’ll send you a special link `}</p>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] min-h-[44px] py-[3px] top-[513px] w-[360px]" data-name="Button">
        <ButtonContainer3 />
      </div>
      <p className="absolute font-['SF_Compact_Text:Medium',sans-serif] h-[20px] leading-[0] left-[calc(50%-167.5px)] not-italic text-[12px] text-[rgba(255,255,255,0.5)] top-[582px] w-[335px]">
        <span className="leading-[normal]">{`By continuing you agree to our `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[normal] text-white underline">terms</span>
        <span className="leading-[normal]">{` and `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[normal] text-white underline">privacy policy</span>
      </p>
    </div>
  );
}

function Time4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] relative size-full">
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer4() {
  return <div className="h-[10px] shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery4() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, white)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, white)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] relative size-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, white)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Battery4 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time4 />
      <DynamicIslandSpacer4 />
      <Levels4 />
    </div>
  );
}

function TitleAndControls2() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Title and Controls">
      <p className="absolute bottom-1/4 font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] left-[45.55%] right-[45.5%] text-[17px] text-center text-white top-1/4 tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        ​
      </p>
    </div>
  );
}

function Contents2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contents">
      <TitleAndControls2 />
    </div>
  );
}

function Spinner() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Spinner">
      <div className="absolute flex inset-[43.18%_68.18%_43.18%_0] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="bg-[#9ab89c] opacity-75 rounded-[1.5px] size-full" data-name="325" />
        </div>
      </div>
      <div className="absolute flex inset-[9.82%_58.04%_58.04%_9.82%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-45 flex-none h-[hypot(70cqw,70cqh)] w-[hypot(30cqw,-30cqh)]">
          <div className="bg-[#9ab89c] opacity-87 rounded-[1.5px] size-full" data-name="270" />
        </div>
      </div>
      <div className="absolute bg-[#9ab89c] inset-[68.18%_43.18%_0_43.18%] opacity-51 rounded-[1.5px]" data-name="225" />
      <div className="absolute flex inset-[58.04%_58.04%_9.82%_9.82%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-70cqw,70cqh)] rotate-45 w-[hypot(30cqw,30cqh)]">
          <div className="bg-[#9ab89c] opacity-63 rounded-[1.5px] size-full" data-name="180" />
        </div>
      </div>
      <div className="absolute flex inset-[58.03%_9.82%_9.83%_58.04%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-45 flex-none h-[hypot(70cqw,70cqh)] w-[hypot(30cqw,-30cqh)]">
          <div className="bg-[#9ab89c] opacity-39 rounded-[1.5px] size-full" data-name="135" />
        </div>
      </div>
      <div className="absolute flex inset-[43.18%_0_43.18%_68.18%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="bg-[#9ab89c] opacity-27 rounded-[1.5px] size-full" data-name="90" />
        </div>
      </div>
      <div className="absolute flex inset-[9.82%_9.82%_58.04%_58.04%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-70cqw,70cqh)] rotate-45 w-[hypot(30cqw,30cqh)]">
          <div className="bg-[#9ab89c] opacity-15 rounded-[1.5px] size-full" data-name="45" />
        </div>
      </div>
      <div className="absolute bg-[#9ab89c] inset-[0_43.18%_68.18%_43.18%] rounded-[1.5px]" data-name="0" />
    </div>
  );
}

function ButtonContainer4() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Activity Indicator">
            <Spinner />
          </div>
          <p className="font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#9ab89c] text-[17px] text-center whitespace-nowrap">Loading</p>
        </div>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute bg-[#042b48] h-[852px] left-[1419px] overflow-clip top-0 w-[393px]" data-name="4">
      <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[393px]" data-name="Navigation Bar - iPhone (Compact Size Class)">
        <div className="content-stretch flex flex-col h-[54px] items-start pt-[21px] relative shrink-0 w-[402px]" data-name="Status Bar - iPhone">
          <Frame7 />
        </div>
        <Contents2 />
      </div>
      <div className="absolute h-[33.405px] left-0 top-[819px] w-[393px]" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[7.86px] flex h-[4.913px] items-center justify-center left-1/2 w-[141.48px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-white h-[4.913px] rounded-[100px] w-[141.48px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] min-h-[44px] py-[3px] top-[calc(50%-48px)] w-[360px]" data-name="Button">
        <ButtonContainer4 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[58px] left-0 top-0 w-[801px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 801 58">
        <g id="Group 1">
          <path d="M476 0V58H422V0H476Z" fill="var(--fill-0, #94BEBD)" id="Line 1 (Stroke)" />
          <rect fill="var(--fill-0, #7CA6B0)" height="58" id="input" width="60" x="362" />
          <rect fill="var(--fill-0, #D97E7E)" height="57" id="input_2" width="47" x="754" />
          <rect fill="var(--fill-0, #012942)" height="57" id="Rectangle 14" width="60.3846" />
          <rect fill="var(--fill-0, #56807F)" height="57" id="Rectangle 37" width="60.3846" x="181.154" />
          <rect fill="var(--fill-0, #03586C)" height="57" id="Rectangle 15" width="60.3846" x="60.3846" />
          <rect fill="var(--fill-0, #638B8A)" height="57" id="Rectangle 38" width="60.3846" x="241.538" />
          <rect fill="var(--fill-0, #326367)" height="57" id="Rectangle 17" width="60.3846" x="120.769" />
          <rect fill="var(--fill-0, #709D9A)" height="57" id="Rectangle 39" width="60.3846" x="301.923" />
          <rect fill="var(--fill-0, #A2C1B9)" height="57" id="Rectangle 40" width="54" x="476" />
          <rect fill="var(--fill-0, #8BA195)" height="57" id="Rectangle 41" width="60.3846" x="530" />
          <rect fill="var(--fill-0, #D9D095)" height="57" id="Rectangle 9" width="48.3077" x="590" />
          <rect fill="var(--fill-0, #FBEE9B)" height="57" id="Rectangle 44" width="48.3077" x="638.308" />
          <rect fill="var(--fill-0, white)" height="57" id="Rectangle 45" width="48.3077" x="686.615" />
        </g>
      </svg>
    </div>
  );
}

function ColorPallet() {
  return (
    <div className="absolute h-[58px] left-0 top-[1907px] w-[801px]" data-name="color pallet">
      <Group />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex items-start pb-[4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['SF_Compact_Text:Medium',sans-serif] leading-[20px] max-w-[355px] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">Label</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="content-stretch flex gap-[4px] items-start px-[12px] py-[11px] relative size-full">
        <p className="font-['SF_Compact_Text:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-[rgba(255,255,255,0.75)] whitespace-nowrap">Value</p>
      </div>
    </div>
  );
}

function ButtonContainer5() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[8px] shrink-0 size-[38px]" data-name="Button Container">
      <div className="relative shrink-0 size-[18px]" data-name="fiori.bar.code">
        <div className="absolute inset-[6.36%_0_6.13%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15.7518">
            <path d={svgPaths.p15b55570} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RightAccessory() {
  return (
    <div className="content-stretch flex h-[44px] items-start justify-end pr-[4px] pt-px relative shrink-0" data-name="Right Accessory">
      <div className="content-stretch flex flex-col h-[44px] items-center justify-center min-h-[44px] py-[3px] relative shrink-0 w-[38px]" data-name="Button">
        <ButtonContainer5 />
      </div>
    </div>
  );
}

function Inner6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Inner">
      <Text6 />
      <RightAccessory />
    </div>
  );
}

function InputField6() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Inner6 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(148,190,189,0.83)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function CharacterCount() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 text-right whitespace-nowrap" data-name="Character Count">
      <p className="font-['SF_Compact_Text:Regular',sans-serif] relative shrink-0">5</p>
      <p className="font-['72:Regular',sans-serif] relative shrink-0">/</p>
      <p className="font-['SF_Compact_Text:Regular',sans-serif] relative shrink-0">30</p>
    </div>
  );
}

function MarginFrame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start leading-[18px] min-w-px not-italic relative text-[13px] text-[rgba(255,255,255,0.5)]" data-name="Margin Frame">
      <p className="flex-[1_0_0] font-['SF_Compact_Text:Regular',sans-serif] min-w-px relative">Helper text</p>
      <CharacterCount />
    </div>
  );
}

function PrimaryFrame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px pt-[4px] relative" data-name="Primary Frame">
      <MarginFrame9 />
    </div>
  );
}

function MarginFrame8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0.37)] border-b-[0.33px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pr-[16px] py-[11px] relative size-full">
          <Label6 />
          <InputField6 />
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Form Cell Semantic Message">
            <PrimaryFrame9 />
          </div>
        </div>
      </div>
    </div>
  );
}

function PrimaryFrame8() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="Primary Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0.37)] border-solid border-t-[0.33px] inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pl-[16px] relative size-full">
          <MarginFrame8 />
        </div>
      </div>
    </div>
  );
}

function TextFieldFormCellCompactTypedNo({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center left-0 top-0 w-[393px]"} data-name="Text Field Form Cell/Compact/Typed/No">
      <PrimaryFrame8 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex items-start pb-[4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['SF_Compact_Text:Medium',sans-serif] leading-[20px] max-w-[355px] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">Label</p>
    </div>
  );
}

function Typing() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Typing">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.75)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Value
      </p>
      <div className="h-[20px] relative shrink-0 w-[2px]" data-name="Cursor">
        <div className="absolute bg-[#94bebd] bottom-0 left-0 rounded-[1px] top-0 w-[2px]" data-name="Cursor" />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="content-stretch flex gap-[4px] items-start px-[12px] py-[11px] relative size-full">
        <Typing />
      </div>
    </div>
  );
}

function ButtonContainer6() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[8px] shrink-0 size-[38px]" data-name="Button Container">
      <div className="relative shrink-0 size-[18px]" data-name="Fill=False">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p2820bcf0} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function RightAccessory1() {
  return (
    <div className="content-stretch flex h-[44px] items-start justify-end pr-[4px] pt-px relative shrink-0" data-name="Right Accessory">
      <div className="content-stretch flex flex-col h-[44px] items-center justify-center min-h-[44px] py-[3px] relative shrink-0 w-[38px]" data-name="Button">
        <ButtonContainer6 />
      </div>
    </div>
  );
}

function Inner7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Inner">
      <Text7 />
      <RightAccessory1 />
    </div>
  );
}

function InputField7() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Inner7 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#94bebd] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function CharacterCount1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 text-right whitespace-nowrap" data-name="Character Count">
      <p className="font-['SF_Compact_Text:Regular',sans-serif] relative shrink-0">5</p>
      <p className="font-['72:Regular',sans-serif] relative shrink-0">/</p>
      <p className="font-['SF_Compact_Text:Regular',sans-serif] relative shrink-0">30</p>
    </div>
  );
}

function MarginFrame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start leading-[18px] min-w-px not-italic relative text-[13px] text-[rgba(255,255,255,0.5)]" data-name="Margin Frame">
      <p className="flex-[1_0_0] font-['SF_Compact_Text:Regular',sans-serif] min-w-px relative">Helper text</p>
      <CharacterCount1 />
    </div>
  );
}

function PrimaryFrame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px pt-[4px] relative" data-name="Primary Frame">
      <MarginFrame11 />
    </div>
  );
}

function MarginFrame10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0.37)] border-b-[0.33px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pr-[16px] py-[11px] relative size-full">
          <Label7 />
          <InputField7 />
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Form Cell Semantic Message">
            <PrimaryFrame11 />
          </div>
        </div>
      </div>
    </div>
  );
}

function PrimaryFrame10() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="Primary Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0.37)] border-solid border-t-[0.33px] inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pl-[16px] relative size-full">
          <MarginFrame10 />
        </div>
      </div>
    </div>
  );
}

function TextFieldFormCellCompactTypingNo({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center left-[439px] top-[3px] w-[393px]"} data-name="Text Field Form Cell/Compact/Typing/No">
      <PrimaryFrame10 />
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex items-start pb-[4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['SF_Compact_Text:Medium',sans-serif] leading-[20px] max-w-[355px] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">Label</p>
    </div>
  );
}

function Active() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Active">
      <div className="h-[20px] relative shrink-0 w-[2px]" data-name="Cursor">
        <div className="absolute bg-[#94bebd] bottom-0 left-0 rounded-[1px] top-0 w-[2px]" data-name="Cursor" />
      </div>
      <p className="font-['72:Italic',sans-serif] italic leading-[22px] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.75)] whitespace-nowrap">Placeholder</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="content-stretch flex gap-[4px] items-start px-[12px] py-[11px] relative size-full">
        <Active />
      </div>
    </div>
  );
}

function ButtonContainer7() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[8px] shrink-0 size-[38px]" data-name="Button Container">
      <div className="relative shrink-0 size-[18px]" data-name="fiori.bar.code">
        <div className="absolute inset-[6.36%_0_6.13%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15.7518">
            <path d={svgPaths.p15b55570} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RightAccessory2() {
  return (
    <div className="content-stretch flex h-[44px] items-start justify-end pr-[4px] pt-px relative shrink-0" data-name="Right Accessory">
      <div className="content-stretch flex flex-col h-[44px] items-center justify-center min-h-[44px] py-[3px] relative shrink-0 w-[38px]" data-name="Button">
        <ButtonContainer7 />
      </div>
    </div>
  );
}

function Inner8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Inner">
      <Text8 />
      <RightAccessory2 />
    </div>
  );
}

function InputField8() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Inner8 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#94bebd] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function CharacterCount2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 text-right whitespace-nowrap" data-name="Character Count">
      <p className="relative shrink-0">0</p>
      <p className="relative shrink-0">/</p>
      <p className="relative shrink-0">30</p>
    </div>
  );
}

function MarginFrame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['72:Regular',sans-serif] gap-[8px] items-start leading-[18px] min-w-px not-italic relative text-[13px] text-[rgba(255,255,255,0.5)]" data-name="Margin Frame">
      <p className="flex-[1_0_0] min-w-px relative">Helper text</p>
      <CharacterCount2 />
    </div>
  );
}

function PrimaryFrame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px pt-[4px] relative" data-name="Primary Frame">
      <MarginFrame13 />
    </div>
  );
}

function MarginFrame12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0.37)] border-b-[0.33px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pr-[16px] py-[11px] relative size-full">
          <Label8 />
          <InputField8 />
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Form Cell Semantic Message">
            <PrimaryFrame13 />
          </div>
        </div>
      </div>
    </div>
  );
}

function PrimaryFrame12() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="Primary Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0.37)] border-solid border-t-[0.33px] inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pl-[16px] relative size-full">
          <MarginFrame12 />
        </div>
      </div>
    </div>
  );
}

function TextFieldFormCellCompactActiveNo({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center left-[915px] top-[24px] w-[393px]"} data-name="Text Field Form Cell/Compact/Active/No">
      <PrimaryFrame12 />
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex items-start pb-[4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['72:Semibold',sans-serif] leading-[20px] max-w-[355px] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Label</p>
    </div>
  );
}

function Active1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Active">
      <div className="h-[20px] relative shrink-0 w-[2px]" data-name="Cursor">
        <div className="absolute bg-[#d97e7e] bottom-0 left-0 rounded-[1px] top-0 w-[2px]" data-name="Cursor" />
      </div>
      <p className="font-['72:Italic',sans-serif] italic leading-[22px] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.75)] whitespace-nowrap">Placeholder</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="content-stretch flex gap-[4px] items-start px-[12px] py-[11px] relative size-full">
        <Active1 />
      </div>
    </div>
  );
}

function ButtonContainer8() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[8px] shrink-0 size-[38px]" data-name="Button Container">
      <div className="relative shrink-0 size-[18px]" data-name="fiori.bar.code">
        <div className="absolute inset-[6.36%_0_6.13%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15.7518">
            <path d={svgPaths.p15b55570} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RightAccessory3() {
  return (
    <div className="content-stretch flex h-[44px] items-start justify-end pr-[4px] pt-px relative shrink-0" data-name="Right Accessory">
      <div className="content-stretch flex flex-col h-[44px] items-center justify-center min-h-[44px] py-[3px] relative shrink-0 w-[38px]" data-name="Button">
        <ButtonContainer8 />
      </div>
    </div>
  );
}

function Inner9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Inner">
      <Text9 />
      <RightAccessory3 />
    </div>
  );
}

function InputField9() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Inner9 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d97e7e] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center pt-[2px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[14px]" data-name="fiori.notification.3">
        <div className="absolute inset-[0_-0.03%_0_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0044 14">
            <path d={svgPaths.p32a79600} fill="var(--fill-0, #D97E7E)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MarginFrame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="Margin Frame">
      <Icon />
      <p className="flex-[1_0_0] font-['72:Regular',sans-serif] leading-[18px] min-w-px not-italic relative text-[#d97e7e] text-[13px]">Error message</p>
    </div>
  );
}

function PrimaryFrame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px pt-[4px] relative" data-name="Primary Frame">
      <MarginFrame15 />
    </div>
  );
}

function MarginFrame14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0.37)] border-b-[0.33px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pr-[16px] py-[11px] relative size-full">
          <Label9 />
          <InputField9 />
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Form Cell Semantic Message">
            <PrimaryFrame15 />
          </div>
        </div>
      </div>
    </div>
  );
}

function PrimaryFrame14() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="Primary Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0.37)] border-solid border-t-[0.33px] inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pl-[16px] relative size-full">
          <MarginFrame14 />
        </div>
      </div>
    </div>
  );
}

function TextFieldFormCellCompactActiveYes({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center left-0 top-[140px] w-[393px]"} data-name="Text Field Form Cell/Compact/Active/Yes">
      <PrimaryFrame14 />
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex items-start pb-[4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['72:Semibold',sans-serif] leading-[20px] max-w-[355px] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Label</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="content-stretch flex gap-[4px] items-start px-[12px] py-[11px] relative size-full">
        <p className="font-['72:Italic',sans-serif] italic leading-[22px] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.75)] whitespace-nowrap">Placeholder</p>
      </div>
    </div>
  );
}

function ButtonContainer9() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[8px] shrink-0 size-[38px]" data-name="Button Container">
      <div className="relative shrink-0 size-[18px]" data-name="fiori.bar.code">
        <div className="absolute inset-[6.36%_0_6.13%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15.7518">
            <path d={svgPaths.p15b55570} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RightAccessory4() {
  return (
    <div className="content-stretch flex h-[44px] items-start justify-end pr-[4px] pt-px relative shrink-0" data-name="Right Accessory">
      <div className="content-stretch flex flex-col h-[44px] items-center justify-center min-h-[44px] py-[3px] relative shrink-0 w-[38px]" data-name="Button">
        <ButtonContainer9 />
      </div>
    </div>
  );
}

function Inner10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Inner">
      <Text10 />
      <RightAccessory4 />
    </div>
  );
}

function InputField10() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Inner10 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d97e7e] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center pt-[2px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[14px]" data-name="fiori.notification.3">
        <div className="absolute inset-[0_-0.03%_0_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0044 14">
            <path d={svgPaths.p32a79600} fill="var(--fill-0, #D97E7E)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MarginFrame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="Margin Frame">
      <Icon1 />
      <p className="flex-[1_0_0] font-['72:Regular',sans-serif] leading-[18px] min-w-px not-italic relative text-[#d97e7e] text-[13px]">Error message</p>
    </div>
  );
}

function PrimaryFrame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px pt-[4px] relative" data-name="Primary Frame">
      <MarginFrame17 />
    </div>
  );
}

function MarginFrame16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0.37)] border-b-[0.33px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pr-[16px] py-[11px] relative size-full">
          <Label10 />
          <InputField10 />
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Form Cell Semantic Message">
            <PrimaryFrame17 />
          </div>
        </div>
      </div>
    </div>
  );
}

function PrimaryFrame16() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="Primary Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0.37)] border-solid border-t-[0.33px] inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pl-[16px] relative size-full">
          <MarginFrame16 />
        </div>
      </div>
    </div>
  );
}

function TextFieldFormCellCompactEnabledYes({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center left-[448px] top-[134px] w-[393px]"} data-name="Text Field Form Cell/Compact/Enabled/Yes">
      <PrimaryFrame16 />
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex items-start pb-[4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['72:Semibold',sans-serif] leading-[20px] max-w-[355px] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Label</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="content-stretch flex gap-[4px] items-start px-[12px] py-[11px] relative size-full">
        <p className="font-['72:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-white whitespace-nowrap">Value</p>
      </div>
    </div>
  );
}

function Inner11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Inner">
      <Text11 />
    </div>
  );
}

function InputField11() {
  return (
    <div className="bg-[rgba(3,88,108,0.5)] content-stretch flex flex-col items-center overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <Inner11 />
    </div>
  );
}

function MarginFrame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="Margin Frame">
      <p className="flex-[1_0_0] font-['72:Regular',sans-serif] leading-[18px] min-w-px not-italic relative text-[13px] text-[rgba(255,255,255,0.5)]">Read-only field</p>
    </div>
  );
}

function PrimaryFrame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px pt-[4px] relative" data-name="Primary Frame">
      <MarginFrame19 />
    </div>
  );
}

function MarginFrame18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0.37)] border-b-[0.33px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pr-[16px] py-[11px] relative size-full">
          <Label11 />
          <InputField11 />
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Form Cell Semantic Message">
            <PrimaryFrame19 />
          </div>
        </div>
      </div>
    </div>
  );
}

function PrimaryFrame18() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="Primary Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0.37)] border-solid border-t-[0.33px] inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pl-[16px] relative size-full">
          <MarginFrame18 />
        </div>
      </div>
    </div>
  );
}

function TextFieldFormCellCompactReadOnlyNo({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center left-[915px] top-[140px] w-[393px]"} data-name="Text Field Form Cell/Compact/Read-only/No">
      <PrimaryFrame18 />
    </div>
  );
}

function Label12() {
  return (
    <div className="content-stretch flex items-start pb-[4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['72:Semibold',sans-serif] leading-[20px] max-w-[355px] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">Label</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="content-stretch flex gap-[4px] items-start px-[12px] py-[11px] relative size-full">
        <p className="font-['72:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">Value</p>
      </div>
    </div>
  );
}

function Inner12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Inner">
      <Text12 />
    </div>
  );
}

function InputField12() {
  return (
    <div className="bg-[rgba(3,88,108,0.5)] content-stretch flex flex-col items-center overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <Inner12 />
    </div>
  );
}

function MarginFrame20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0.37)] border-b-[0.33px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pr-[16px] py-[11px] relative size-full">
          <Label12 />
          <InputField12 />
        </div>
      </div>
    </div>
  );
}

function PrimaryFrame20() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="Primary Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0.37)] border-solid border-t-[0.33px] inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pl-[16px] relative size-full">
          <MarginFrame20 />
        </div>
      </div>
    </div>
  );
}

function TextFieldFormCellCompactDisabledNo({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center left-[915px] top-[284px] w-[393px]"} data-name="Text Field Form Cell/Compact/Disabled/No">
      <PrimaryFrame20 />
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex items-start pb-[4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['72:Semibold',sans-serif] leading-[20px] max-w-[355px] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Label</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="content-stretch flex gap-[4px] items-start px-[12px] py-[11px] relative size-full">
        <p className="font-['72:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-white whitespace-nowrap">Value</p>
      </div>
    </div>
  );
}

function ButtonContainer10() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[8px] shrink-0 size-[38px]" data-name="Button Container">
      <div className="relative shrink-0 size-[18px]" data-name="fiori.bar.code">
        <div className="absolute inset-[6.36%_0_6.13%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15.7518">
            <path d={svgPaths.p15b55570} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RightAccessory5() {
  return (
    <div className="content-stretch flex h-[44px] items-start justify-end pr-[4px] pt-px relative shrink-0" data-name="Right Accessory">
      <div className="content-stretch flex flex-col h-[44px] items-center justify-center min-h-[44px] py-[3px] relative shrink-0 w-[38px]" data-name="Button">
        <ButtonContainer10 />
      </div>
    </div>
  );
}

function Inner13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Inner">
      <Text13 />
      <RightAccessory5 />
    </div>
  );
}

function InputField13() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Inner13 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d97e7e] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center pt-[2px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[14px]" data-name="fiori.notification.3">
        <div className="absolute inset-[0_-0.03%_0_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0044 14">
            <path d={svgPaths.p32a79600} fill="var(--fill-0, #D97E7E)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MarginFrame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="Margin Frame">
      <Icon2 />
      <p className="flex-[1_0_0] font-['72:Regular',sans-serif] leading-[18px] min-w-px not-italic relative text-[#d97e7e] text-[13px]">Error message</p>
    </div>
  );
}

function PrimaryFrame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px pt-[4px] relative" data-name="Primary Frame">
      <MarginFrame22 />
    </div>
  );
}

function MarginFrame21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0.37)] border-b-[0.33px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pr-[16px] py-[11px] relative size-full">
          <Label13 />
          <InputField13 />
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Form Cell Semantic Message">
            <PrimaryFrame22 />
          </div>
        </div>
      </div>
    </div>
  );
}

function PrimaryFrame21() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="Primary Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0.37)] border-solid border-t-[0.33px] inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pl-[16px] relative size-full">
          <MarginFrame21 />
        </div>
      </div>
    </div>
  );
}

function TextFieldFormCellCompactTypedYes({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center left-[459px] top-[285px] w-[393px]"} data-name="Text Field Form Cell/Compact/Typed/Yes">
      <PrimaryFrame21 />
    </div>
  );
}

function Label14() {
  return (
    <div className="content-stretch flex items-start pb-[4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['72:Semibold',sans-serif] leading-[20px] max-w-[355px] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Label</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="content-stretch flex gap-[4px] items-start px-[12px] py-[11px] relative size-full">
        <p className="font-['72:Italic',sans-serif] italic leading-[22px] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.75)] whitespace-nowrap">Placeholder</p>
      </div>
    </div>
  );
}

function ButtonContainer11() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[8px] shrink-0 size-[38px]" data-name="Button Container">
      <div className="relative shrink-0 size-[18px]" data-name="fiori.bar.code">
        <div className="absolute inset-[6.36%_0_6.13%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15.7518">
            <path d={svgPaths.p15b55570} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RightAccessory6() {
  return (
    <div className="content-stretch flex h-[44px] items-start justify-end pr-[4px] pt-px relative shrink-0" data-name="Right Accessory">
      <div className="content-stretch flex flex-col h-[44px] items-center justify-center min-h-[44px] py-[3px] relative shrink-0 w-[38px]" data-name="Button">
        <ButtonContainer11 />
      </div>
    </div>
  );
}

function Inner14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Inner">
      <Text14 />
      <RightAccessory6 />
    </div>
  );
}

function InputField14() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Inner14 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(91,115,139,0.83)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function CharacterCount3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 text-right whitespace-nowrap" data-name="Character Count">
      <p className="relative shrink-0">0</p>
      <p className="relative shrink-0">/</p>
      <p className="relative shrink-0">30</p>
    </div>
  );
}

function MarginFrame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['72:Regular',sans-serif] gap-[8px] items-start leading-[18px] min-w-px not-italic relative text-[13px] text-white" data-name="Margin Frame">
      <p className="flex-[1_0_0] min-w-px relative">Helper text</p>
      <CharacterCount3 />
    </div>
  );
}

function PrimaryFrame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px opacity-50 pt-[4px] relative" data-name="Primary Frame">
      <MarginFrame24 />
    </div>
  );
}

function MarginFrame23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0.37)] border-b-[0.33px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pr-[16px] py-[11px] relative size-full">
          <Label14 />
          <InputField14 />
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Form Cell Semantic Message">
            <PrimaryFrame24 />
          </div>
        </div>
      </div>
    </div>
  );
}

function PrimaryFrame23() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="Primary Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0.37)] border-solid border-t-[0.33px] inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pl-[16px] relative size-full">
          <MarginFrame23 />
        </div>
      </div>
    </div>
  );
}

function TextFieldFormCellCompactEnabledNo({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center left-0 top-[290px] w-[393px]"} data-name="Text Field Form Cell/Compact/Enabled/No">
      <PrimaryFrame23 />
    </div>
  );
}

function Label15() {
  return (
    <div className="content-stretch flex items-start pb-[4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['72:Semibold',sans-serif] leading-[20px] max-w-[355px] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Label</p>
    </div>
  );
}

function Typing1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Typing">
      <p className="font-['72:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-white whitespace-nowrap">Value</p>
      <div className="h-[20px] relative shrink-0 w-[2px]" data-name="Cursor">
        <div className="absolute bg-[#d97e7e] bottom-0 left-0 rounded-[1px] top-0 w-[2px]" data-name="Cursor" />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="content-stretch flex gap-[4px] items-start px-[12px] py-[11px] relative size-full">
        <Typing1 />
      </div>
    </div>
  );
}

function ButtonContainer12() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-60 p-[12px] relative rounded-[8px] shrink-0 size-[38px]" data-name="Button Container">
      <div className="relative shrink-0 size-[18px]" data-name="Fill=False">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p2820bcf0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function RightAccessory7() {
  return (
    <div className="content-stretch flex h-[44px] items-start justify-end pr-[4px] pt-px relative shrink-0" data-name="Right Accessory">
      <div className="content-stretch flex flex-col h-[44px] items-center justify-center min-h-[44px] py-[3px] relative shrink-0 w-[38px]" data-name="Button">
        <ButtonContainer12 />
      </div>
    </div>
  );
}

function Inner15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Inner">
      <Text15 />
      <RightAccessory7 />
    </div>
  );
}

function InputField15() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Inner15 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d97e7e] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center pt-[2px] relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[14px]" data-name="fiori.notification.3">
        <div className="absolute inset-[0_-0.03%_0_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0044 14">
            <path d={svgPaths.p32a79600} fill="var(--fill-0, #D97E7E)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MarginFrame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="Margin Frame">
      <Icon3 />
      <p className="flex-[1_0_0] font-['72:Regular',sans-serif] leading-[18px] min-w-px not-italic relative text-[#d97e7e] text-[13px]">Error message</p>
    </div>
  );
}

function PrimaryFrame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px pt-[4px] relative" data-name="Primary Frame">
      <MarginFrame26 />
    </div>
  );
}

function MarginFrame25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0.37)] border-b-[0.33px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pr-[16px] py-[11px] relative size-full">
          <Label15 />
          <InputField15 />
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Form Cell Semantic Message">
            <PrimaryFrame26 />
          </div>
        </div>
      </div>
    </div>
  );
}

function PrimaryFrame25() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="Primary Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0.37)] border-solid border-t-[0.33px] inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pl-[16px] relative size-full">
          <MarginFrame25 />
        </div>
      </div>
    </div>
  );
}

function TextFieldFormCellCompactTypingYes({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center left-[1348px] top-[285px] w-[393px]"} data-name="Text Field Form Cell/Compact/Typing/Yes">
      <PrimaryFrame25 />
    </div>
  );
}

function InputFields() {
  return (
    <div className="absolute h-[402px] left-[-5px] top-[950px] w-[1741px]" data-name="input fields">
      <TextFieldFormCellCompactTypedNo />
      <TextFieldFormCellCompactTypingNo />
      <TextFieldFormCellCompactActiveNo />
      <TextFieldFormCellCompactActiveYes />
      <TextFieldFormCellCompactEnabledYes />
      <TextFieldFormCellCompactReadOnlyNo />
      <TextFieldFormCellCompactDisabledNo />
      <TextFieldFormCellCompactTypedYes />
      <TextFieldFormCellCompactEnabledNo />
      <TextFieldFormCellCompactTypingYes />
    </div>
  );
}

function ButtonContainer13() {
  return (
    <div className="bg-[#9ab89c] h-[48px] relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#042b48] text-[17px] text-center whitespace-nowrap">Label</p>
        </div>
      </div>
    </div>
  );
}

function ButtonPrimaryEnabledTintLabel({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center justify-center left-px min-h-[44px] py-[3px] top-0 w-[76px]"} data-name="Button/Primary/Enabled/Tint/Label">
      <ButtonContainer13 />
    </div>
  );
}

function ButtonContainer14() {
  return (
    <div className="bg-[#739476] h-[48px] relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#042b48] text-[17px] text-center whitespace-nowrap">Label</p>
        </div>
      </div>
    </div>
  );
}

function ButtonPrimaryEnabledTintLabel1({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center justify-center left-[95px] min-h-[44px] py-[3px] top-0 w-[76px]"} data-name="Button/Primary/Enabled/Tint/Label">
      <ButtonContainer14 />
    </div>
  );
}

function Spinner1() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Spinner">
      <div className="absolute flex inset-[43.18%_68.18%_43.18%_0] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="bg-[#042b48] opacity-75 rounded-[1.5px] size-full" data-name="325" />
        </div>
      </div>
      <div className="absolute flex inset-[9.82%_58.04%_58.04%_9.82%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-45 flex-none h-[hypot(70cqw,70cqh)] w-[hypot(30cqw,-30cqh)]">
          <div className="bg-[#042b48] opacity-87 rounded-[1.5px] size-full" data-name="270" />
        </div>
      </div>
      <div className="absolute bg-[#042b48] inset-[68.18%_43.18%_0_43.18%] opacity-51 rounded-[1.5px]" data-name="225" />
      <div className="absolute flex inset-[58.04%_58.04%_9.82%_9.82%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-70cqw,70cqh)] rotate-45 w-[hypot(30cqw,30cqh)]">
          <div className="bg-[#042b48] opacity-63 rounded-[1.5px] size-full" data-name="180" />
        </div>
      </div>
      <div className="absolute flex inset-[58.03%_9.82%_9.83%_58.04%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-45 flex-none h-[hypot(70cqw,70cqh)] w-[hypot(30cqw,-30cqh)]">
          <div className="bg-[#042b48] opacity-39 rounded-[1.5px] size-full" data-name="135" />
        </div>
      </div>
      <div className="absolute flex inset-[43.18%_0_43.18%_68.18%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="bg-[#042b48] opacity-27 rounded-[1.5px] size-full" data-name="90" />
        </div>
      </div>
      <div className="absolute flex inset-[9.82%_9.82%_58.04%_58.04%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-70cqw,70cqh)] rotate-45 w-[hypot(30cqw,30cqh)]">
          <div className="bg-[#042b48] opacity-15 rounded-[1.5px] size-full" data-name="45" />
        </div>
      </div>
      <div className="absolute bg-[#042b48] inset-[0_43.18%_68.18%_43.18%] rounded-[1.5px]" data-name="0" />
    </div>
  );
}

function ButtonContainer15() {
  return (
    <div className="bg-[#739476] h-[48px] relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Activity Indicator">
            <Spinner1 />
          </div>
          <p className="font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#042b48] text-[17px] text-center whitespace-nowrap">Loading...</p>
        </div>
      </div>
    </div>
  );
}

function ButtonPrimaryLoadingTintLabel({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center justify-center left-[189px] min-h-[44px] py-[3px] top-0 w-[142px]"} data-name="Button/Primary/Loading/Tint/Label">
      <ButtonContainer15 />
    </div>
  );
}

function ButtonContainer16() {
  return (
    <div className="bg-[rgba(3,88,108,0.5)] h-[48px] relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">Label</p>
        </div>
      </div>
    </div>
  );
}

function ButtonPrimaryDisabledTintLabel({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center justify-center left-[347px] min-h-[44px] py-[3px] top-0 w-[76px]"} data-name="Button/Primary/Disabled/Tint/Label">
      <ButtonContainer16 />
    </div>
  );
}

function ButtonContainer17() {
  return (
    <div className="bg-[rgba(3,88,108,0.5)] h-[48px] relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">Label</p>
        </div>
      </div>
    </div>
  );
}

function ButtonSecondaryDisabledTintLabel({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center justify-center left-[347px] min-h-[44px] py-[3px] top-[75px] w-[76px]"} data-name="Button/Secondary/Disabled/Tint/Label">
      <ButtonContainer17 />
    </div>
  );
}

function Spinner2() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Spinner">
      <div className="absolute flex inset-[43.18%_68.18%_43.18%_0] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="bg-[#9ab89c] opacity-75 rounded-[1.5px] size-full" data-name="325" />
        </div>
      </div>
      <div className="absolute flex inset-[9.82%_58.04%_58.04%_9.82%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-45 flex-none h-[hypot(70cqw,70cqh)] w-[hypot(30cqw,-30cqh)]">
          <div className="bg-[#9ab89c] opacity-87 rounded-[1.5px] size-full" data-name="270" />
        </div>
      </div>
      <div className="absolute bg-[#9ab89c] inset-[68.18%_43.18%_0_43.18%] opacity-51 rounded-[1.5px]" data-name="225" />
      <div className="absolute flex inset-[58.04%_58.04%_9.82%_9.82%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-70cqw,70cqh)] rotate-45 w-[hypot(30cqw,30cqh)]">
          <div className="bg-[#9ab89c] opacity-63 rounded-[1.5px] size-full" data-name="180" />
        </div>
      </div>
      <div className="absolute flex inset-[58.03%_9.82%_9.83%_58.04%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-45 flex-none h-[hypot(70cqw,70cqh)] w-[hypot(30cqw,-30cqh)]">
          <div className="bg-[#9ab89c] opacity-39 rounded-[1.5px] size-full" data-name="135" />
        </div>
      </div>
      <div className="absolute flex inset-[43.18%_0_43.18%_68.18%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="bg-[#9ab89c] opacity-27 rounded-[1.5px] size-full" data-name="90" />
        </div>
      </div>
      <div className="absolute flex inset-[9.82%_9.82%_58.04%_58.04%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-70cqw,70cqh)] rotate-45 w-[hypot(30cqw,30cqh)]">
          <div className="bg-[#9ab89c] opacity-15 rounded-[1.5px] size-full" data-name="45" />
        </div>
      </div>
      <div className="absolute bg-[#9ab89c] inset-[0_43.18%_68.18%_43.18%] rounded-[1.5px]" data-name="0" />
    </div>
  );
}

function ButtonContainer18() {
  return (
    <div className="bg-[rgba(115,148,118,0.2)] relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Activity Indicator">
            <Spinner2 />
          </div>
          <p className="font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#9ab89c] text-[17px] text-center whitespace-nowrap">Loading...</p>
        </div>
      </div>
    </div>
  );
}

function ButtonSecondaryLoadingTintLabel({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center justify-center left-[189px] min-h-[44px] py-[3px] top-[82px] w-[142px]"} data-name="Button/Secondary/Loading/Tint/Label">
      <ButtonContainer18 />
    </div>
  );
}

function ButtonContainer19() {
  return (
    <div className="bg-[rgba(115,148,118,0.34)] relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#9ab89c] text-[17px] text-center whitespace-nowrap">Label</p>
        </div>
      </div>
    </div>
  );
}

function ButtonSecondaryTappedTintLabel({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center justify-center left-[95px] min-h-[44px] py-[3px] top-[82px] w-[75px]"} data-name="Button/Secondary/Tapped/Tint/Label">
      <ButtonContainer19 />
    </div>
  );
}

function ButtonContainer20() {
  return (
    <div className="bg-[rgba(98,128,100,0.18)] relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#9ab89c] text-[17px] text-center whitespace-nowrap">Label</p>
        </div>
      </div>
    </div>
  );
}

function ButtonSecondaryEnabledTintLabel({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center justify-center left-px min-h-[44px] py-[3px] top-[82px] w-[75px]"} data-name="Button/Secondary/Enabled/Tint/Label">
      <ButtonContainer20 />
    </div>
  );
}

function ButtonContainer21() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['72:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#9ab89c] text-[17px] text-center whitespace-nowrap">Label</p>
        </div>
      </div>
    </div>
  );
}

function ButtonTertiaryEnabledTintLabel({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center justify-center left-0 min-h-[44px] py-[3px] top-[154px] w-[76px]"} data-name="Button/Tertiary/Enabled/Tint/Label">
      <ButtonContainer21 />
    </div>
  );
}

function ButtonContainer22() {
  return (
    <div className="bg-[rgba(115,148,118,0.34)] relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['72:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#9ab89c] text-[17px] text-center whitespace-nowrap">Label</p>
        </div>
      </div>
    </div>
  );
}

function ButtonTertiaryTappedTintLabel({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center justify-center left-[95px] min-h-[44px] py-[3px] top-[151px] w-[75px]"} data-name="Button/Tertiary/Tapped/Tint/Label">
      <ButtonContainer22 />
    </div>
  );
}

function Spinner3() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Spinner">
      <div className="absolute flex inset-[43.18%_68.18%_43.18%_0] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="bg-[#9ab89c] opacity-75 rounded-[1.5px] size-full" data-name="325" />
        </div>
      </div>
      <div className="absolute flex inset-[9.82%_58.04%_58.04%_9.82%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-45 flex-none h-[hypot(70cqw,70cqh)] w-[hypot(30cqw,-30cqh)]">
          <div className="bg-[#9ab89c] opacity-87 rounded-[1.5px] size-full" data-name="270" />
        </div>
      </div>
      <div className="absolute bg-[#9ab89c] inset-[68.18%_43.18%_0_43.18%] opacity-51 rounded-[1.5px]" data-name="225" />
      <div className="absolute flex inset-[58.04%_58.04%_9.82%_9.82%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-70cqw,70cqh)] rotate-45 w-[hypot(30cqw,30cqh)]">
          <div className="bg-[#9ab89c] opacity-63 rounded-[1.5px] size-full" data-name="180" />
        </div>
      </div>
      <div className="absolute flex inset-[58.03%_9.82%_9.83%_58.04%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-45 flex-none h-[hypot(70cqw,70cqh)] w-[hypot(30cqw,-30cqh)]">
          <div className="bg-[#9ab89c] opacity-39 rounded-[1.5px] size-full" data-name="135" />
        </div>
      </div>
      <div className="absolute flex inset-[43.18%_0_43.18%_68.18%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="bg-[#9ab89c] opacity-27 rounded-[1.5px] size-full" data-name="90" />
        </div>
      </div>
      <div className="absolute flex inset-[9.82%_9.82%_58.04%_58.04%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-70cqw,70cqh)] rotate-45 w-[hypot(30cqw,30cqh)]">
          <div className="bg-[#9ab89c] opacity-15 rounded-[1.5px] size-full" data-name="45" />
        </div>
      </div>
      <div className="absolute bg-[#9ab89c] inset-[0_43.18%_68.18%_43.18%] rounded-[1.5px]" data-name="0" />
    </div>
  );
}

function ButtonContainer23() {
  return (
    <div className="bg-[rgba(115,148,118,0.2)] relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Activity Indicator">
            <Spinner3 />
          </div>
          <p className="font-['72:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#9ab89c] text-[17px] text-center whitespace-nowrap">Loading...</p>
        </div>
      </div>
    </div>
  );
}

function ButtonTertiaryLoadingTintLabel({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center justify-center left-[189px] min-h-[44px] py-[3px] top-[151px] w-[139px]"} data-name="Button/Tertiary/Loading/Tint/Label">
      <ButtonContainer23 />
    </div>
  );
}

function ButtonContainer24() {
  return (
    <div className="bg-[rgba(3,88,108,0.5)] h-[48px] relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['72:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">Label</p>
        </div>
      </div>
    </div>
  );
}

function ButtonTertiaryDisabledTintLabel({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center justify-center left-[347px] min-h-[44px] py-[3px] top-[154px] w-[75px]"} data-name="Button/Tertiary/Disabled/Tint/Label">
      <ButtonContainer24 />
    </div>
  );
}

function ButtonContainer25() {
  return (
    <div className="bg-[rgba(3,88,108,0.5)] h-[48px] relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['72:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">Label</p>
        </div>
      </div>
    </div>
  );
}

function ButtonSecondaryDisabledNegativeLabel({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center justify-center left-[347px] min-h-[44px] py-[3px] top-[213px] w-[75px]"} data-name="Button/Secondary/Disabled/Negative/Label">
      <ButtonContainer25 />
    </div>
  );
}

function Spinner4() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Spinner">
      <div className="absolute flex inset-[43.18%_68.18%_43.18%_0] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="bg-[#d97e7e] opacity-75 rounded-[1.5px] size-full" data-name="325" />
        </div>
      </div>
      <div className="absolute flex inset-[9.82%_58.04%_58.04%_9.82%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-45 flex-none h-[hypot(70cqw,70cqh)] w-[hypot(30cqw,-30cqh)]">
          <div className="bg-[#d97e7e] opacity-87 rounded-[1.5px] size-full" data-name="270" />
        </div>
      </div>
      <div className="absolute bg-[#d97e7e] inset-[68.18%_43.18%_0_43.18%] opacity-51 rounded-[1.5px]" data-name="225" />
      <div className="absolute flex inset-[58.04%_58.04%_9.82%_9.82%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-70cqw,70cqh)] rotate-45 w-[hypot(30cqw,30cqh)]">
          <div className="bg-[#d97e7e] opacity-63 rounded-[1.5px] size-full" data-name="180" />
        </div>
      </div>
      <div className="absolute flex inset-[58.03%_9.82%_9.83%_58.04%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-45 flex-none h-[hypot(70cqw,70cqh)] w-[hypot(30cqw,-30cqh)]">
          <div className="bg-[#d97e7e] opacity-39 rounded-[1.5px] size-full" data-name="135" />
        </div>
      </div>
      <div className="absolute flex inset-[43.18%_0_43.18%_68.18%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="bg-[#d97e7e] opacity-27 rounded-[1.5px] size-full" data-name="90" />
        </div>
      </div>
      <div className="absolute flex inset-[9.82%_9.82%_58.04%_58.04%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-70cqw,70cqh)] rotate-45 w-[hypot(30cqw,30cqh)]">
          <div className="bg-[#d97e7e] opacity-15 rounded-[1.5px] size-full" data-name="45" />
        </div>
      </div>
      <div className="absolute bg-[#d97e7e] inset-[0_43.18%_68.18%_43.18%] rounded-[1.5px]" data-name="0" />
    </div>
  );
}

function ButtonContainer26() {
  return (
    <div className="bg-[rgba(217,126,126,0.2)] relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Activity Indicator">
            <Spinner4 />
          </div>
          <p className="font-['72:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#d97e7e] text-[17px] text-center whitespace-nowrap">Loading...</p>
        </div>
      </div>
    </div>
  );
}

function ButtonSecondaryLoadingNegativeLabel({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center justify-center left-[189px] min-h-[44px] py-[3px] top-[216px] w-[139px]"} data-name="Button/Secondary/Loading/Negative/Label">
      <ButtonContainer26 />
    </div>
  );
}

function ButtonContainer27() {
  return (
    <div className="bg-[rgba(217,126,126,0.19)] relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['72:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#d97e7e] text-[17px] text-center whitespace-nowrap">Label</p>
        </div>
      </div>
    </div>
  );
}

function ButtonSecondaryTappedNegativeLabel({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center justify-center left-[95px] min-h-[44px] py-[3px] top-[216px] w-[75px]"} data-name="Button/Secondary/Tapped/Negative/Label">
      <ButtonContainer27 />
    </div>
  );
}

function ButtonContainer28() {
  return (
    <div className="bg-[rgba(217,126,126,0.08)] relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['72:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#d97e7e] text-[17px] text-center whitespace-nowrap">Label</p>
        </div>
      </div>
    </div>
  );
}

function ButtonSecondaryEnabledNegativeLabel({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex flex-col items-center justify-center left-px min-h-[44px] py-[3px] top-[216px] w-[75px]"} data-name="Button/Secondary/Enabled/Negative/Label">
      <ButtonContainer28 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="absolute h-[267px] left-[11px] top-[1421px] w-[423px]" data-name="buttons">
      <ButtonPrimaryEnabledTintLabel />
      <ButtonPrimaryEnabledTintLabel1 />
      <ButtonPrimaryLoadingTintLabel />
      <ButtonPrimaryDisabledTintLabel />
      <ButtonSecondaryDisabledTintLabel />
      <ButtonSecondaryLoadingTintLabel />
      <ButtonSecondaryTappedTintLabel />
      <ButtonSecondaryEnabledTintLabel />
      <ButtonTertiaryEnabledTintLabel />
      <ButtonTertiaryTappedTintLabel />
      <ButtonTertiaryLoadingTintLabel />
      <ButtonTertiaryDisabledTintLabel />
      <ButtonSecondaryDisabledNegativeLabel />
      <ButtonSecondaryLoadingNegativeLabel />
      <ButtonSecondaryTappedNegativeLabel />
      <ButtonSecondaryEnabledNegativeLabel />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="relative size-full">
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <ColorPallet />
      <InputFields />
      <Buttons />
    </div>
  );
}