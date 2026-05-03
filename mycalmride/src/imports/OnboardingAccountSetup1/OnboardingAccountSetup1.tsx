import svgPaths from "./svg-amt9yxq6dw";

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

function Logo() {
  return (
    <div className="-translate-x-1/2 absolute h-[110.973px] left-[calc(50%-6.5px)] top-[231px] w-[200px]" data-name="logo">
      <div className="absolute inset-[-0.16%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200.179 111.151">
          <g id="logo">
            <path d={svgPaths.p343dfac0} fill="var(--fill-0, #739476)" fillOpacity="0.3" id="Vector 13" stroke="var(--stroke-0, #9AB89C)" strokeWidth="0.358876" />
            <path d={svgPaths.p198f3a00} fill="var(--fill-0, #9AB89C)" id="Vector 9 (Stroke)" />
            <g id="RIDE">
              <path d={svgPaths.p4fa9d00} fill="var(--fill-0, #739476)" fillOpacity="0.65" id="Vector" />
              <path d={svgPaths.peaf9a00} fill="var(--fill-0, #739476)" fillOpacity="0.65" id="Vector_2" />
              <path d={svgPaths.p3e9d3c00} fill="var(--fill-0, #739476)" fillOpacity="0.65" id="Vector_3" />
              <path d={svgPaths.p34627b30} fill="var(--fill-0, #739476)" fillOpacity="0.65" id="Vector_4" />
            </g>
            <g id="Calm">
              <path d={svgPaths.p23affa00} fill="var(--fill-0, #9AB89C)" id="Vector_5" />
              <path d={svgPaths.p2bbfad00} fill="var(--fill-0, #9AB89C)" id="Vector_6" />
              <path d={svgPaths.p27027380} fill="var(--fill-0, #9AB89C)" id="Vector_7" />
              <path d={svgPaths.p203f06f2} fill="var(--fill-0, #9AB89C)" id="Vector_8" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function OnboardingAccountSetup() {
  return (
    <div className="bg-[#042b48] relative size-full" data-name="onboarding-account setup 1">
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
      <div className="absolute content-stretch flex flex-col items-center left-0 top-[417px] w-[393px]" data-name="Text Field Form Cell">
        <PrimaryFrame />
      </div>
      <div className="absolute content-stretch flex flex-col items-center justify-center left-[17px] min-h-[44px] py-[3px] top-[523px] w-[360px]" data-name="Button">
        <ButtonContainer />
      </div>
      <Logo />
    </div>
  );
}