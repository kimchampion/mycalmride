import svgPaths from "./svg-qat7okk9ic";

function Time() {
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

function DynamicIslandSpacer() {
  return <div className="h-[10px] shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery() {
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

function Levels() {
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

function Label() {
  return (
    <div className="content-stretch flex items-start pb-[4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['SF_Compact_Text:Medium',sans-serif] leading-[20px] max-w-[355px] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">What’s your name?</p>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="content-stretch flex gap-[4px] items-start px-[12px] py-[11px] relative size-full">
        <p className="font-['72:Italic',sans-serif] italic leading-[22px] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">enter your full name</p>
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

function Label1() {
  return (
    <div className="content-stretch flex items-start pb-[4px] relative shrink-0 w-full" data-name="Label">
      <p className="font-['72:Semibold',sans-serif] leading-[20px] max-w-[355px] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">What’s your email address?</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="content-stretch flex gap-[4px] items-start px-[12px] py-[11px] relative size-full">
        <p className="font-['72:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">jane.doe@abc.com</p>
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
    <div className="bg-[rgba(3,88,108,0.5)] content-stretch flex flex-col items-center overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <Inner1 />
    </div>
  );
}

function MarginFrame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="Margin Frame">
      <p className="flex-[1_0_0] font-['72:Regular',sans-serif] leading-[18px] min-w-px not-italic relative text-[13px] text-[rgba(255,255,255,0.5)]">Read-only field</p>
    </div>
  );
}

function PrimaryFrame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px pt-[4px] relative" data-name="Primary Frame">
      <MarginFrame2 />
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
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Form Cell Semantic Message">
            <PrimaryFrame2 />
          </div>
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

function MarginFrame3() {
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

function ButtonContainer() {
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

export default function OnboardingAccountSetup() {
  return (
    <div className="bg-[#042b48] relative size-full" data-name="onboarding-account setup 3">
      <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[393px]" data-name="Navigation Bar - iPhone (Compact Size Class)">
        <div className="content-stretch flex flex-col h-[54px] items-start pt-[21px] relative shrink-0 w-[402px]" data-name="Status Bar - iPhone">
          <Frame />
        </div>
        <Contents />
      </div>
      <div className="absolute h-[33.405px] left-0 top-[819px] w-[393px]" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[7.86px] flex h-[4.913px] items-center justify-center left-1/2 w-[141.48px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-white h-[4.913px] rounded-[100px] w-[141.48px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-center left-0 top-[154px] w-[393px]" data-name="Text Field Form Cell">
        <PrimaryFrame />
      </div>
      <div className="absolute content-stretch flex flex-col items-center left-0 top-[244px] w-[393px]" data-name="Text Field Form Cell">
        <PrimaryFrame1 />
      </div>
        <div className="absolute content-stretch flex flex-col items-center left-0 top-[244px] w-[393px]" data-name="Text Field Form Cell">
        <PrimaryFrame1 />
      </div>
      <p className="-translate-x-1/2 absolute font-['SF_Compact_Text:Regular',sans-serif] h-[60px] leading-[20px] left-[calc(50%-5px)] not-italic text-[15px] text-[rgba(255,255,255,0.8)] text-center top-[366px] w-[335px]">{`you don’t need a password to create an account. To login next time we’ll send you a special link `}</p>
      <div className="absolute content-stretch flex flex-col items-center left-0 top-[154px] w-[393px]" data-name="Text Field Form Cell">
        <PrimaryFrame3 />
      </div>
      <p className="-translate-x-1/2 absolute font-['SF_Compact_Text:Regular',sans-serif] h-[60px] leading-[20px] left-[calc(50%-5px)] not-italic text-[15px] text-[rgba(255,255,255,0.8)] text-center top-[366px] w-[335px]">{`you don’t need a password to create an account. To login next time we’ll send you a special link `}</p>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] min-h-[44px] py-[3px] top-[513px] w-[360px]" data-name="Button">
        <ButtonContainer />
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