import svgPaths from "./svg-zskdu63fvz";

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

function Dot() {
  return (
    <div className="relative rounded-[50px] shrink-0 size-[8px]" data-name="Dot 1">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[50px]">
        <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0 rounded-[50px]" />
        <div className="absolute bg-[rgba(94,94,94,0.18)] inset-0 mix-blend-color-dodge rounded-[50px]" />
      </div>
    </div>
  );
}

function Dot1() {
  return (
    <div className="relative rounded-[50px] shrink-0 size-[8px]" data-name="Dot 2">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[50px]">
        <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0 rounded-[50px]" />
        <div className="absolute bg-[rgba(94,94,94,0.18)] inset-0 mix-blend-color-dodge rounded-[50px]" />
      </div>
    </div>
  );
}

function SelectedDog() {
  return <div className="absolute bg-white left-0 rounded-[50px] size-[8px] top-0" data-name="Selected Dog" />;
}

function SelectedTrack() {
  return (
    <div className="h-[8px] relative rounded-[50px] shrink-0 w-[16px]" data-name="Selected Track">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[50px]">
        <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0 rounded-[50px]" />
        <div className="absolute bg-[rgba(94,94,94,0.18)] inset-0 mix-blend-color-dodge rounded-[50px]" />
      </div>
      <SelectedDog />
    </div>
  );
}

function Dot2() {
  return (
    <div className="relative rounded-[50px] shrink-0 size-[8px]" data-name="Dot 4">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[50px]">
        <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0 rounded-[50px]" />
        <div className="absolute bg-[rgba(94,94,94,0.18)] inset-0 mix-blend-color-dodge rounded-[50px]" />
      </div>
    </div>
  );
}

function AppTitle() {
  return <div className="content-stretch flex flex-col h-[34px] items-center shrink-0 w-full" data-name="App Title" />;
}

function IllustratedMessageIllustration() {
  return <div className="content-stretch flex h-[160px] items-start shrink-0 w-[166px]" data-name="IllustratedMessage/Illustration" />;
}

function MessageText() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[119px] items-center leading-[0] not-italic relative shrink-0 text-[17px] text-center w-full" data-name="Message Text">
      <div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] h-[22px] justify-center min-w-full relative shrink-0 text-white w-[min-content]">
        <p className="leading-[22px]">Navigation</p>
      </div>
      <div className="font-['72:Regular',sans-serif] h-[108.362px] relative shrink-0 text-[#e6edf3] w-[278.609px] whitespace-pre-wrap">
        <p className="leading-[22px] mb-0">{`Allow location access so we can show what’s ahead on your route and provide calming support `}</p>
        <p className="leading-[22px]">when needed.</p>
      </div>
    </div>
  );
}

function MessageAndCta() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[116px] items-center justify-center relative shrink-0 w-full" data-name="Message and CTA">
      <MessageText />
    </div>
  );
}

function IllustratedMessage() {
  return (
    <div className="h-[287px] relative shrink-0 w-full" data-name="Illustrated Message">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] relative size-full">
          <IllustratedMessageIllustration />
          <MessageAndCta />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col h-[441px] items-center mb-[-44px] relative shrink-0 w-full" data-name="Main Content">
      <AppTitle />
      <IllustratedMessage />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="bg-[#9ab89c] h-[48px] relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#042b48] text-[17px] text-center whitespace-nowrap">Allow Location Access</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['72:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#b8ddba] text-[17px] text-center whitespace-nowrap">Skip for Now</p>
        </div>
      </div>
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex flex-col h-[99px] items-center justify-center mb-[-44px] relative shrink-0 w-full" data-name="Controls">
      <div className="content-stretch flex flex-col items-center justify-center min-h-[44px] py-[3px] relative shrink-0 w-[333px]" data-name="Button">
        <ButtonContainer />
      </div>
      <div className="content-stretch flex flex-col items-center justify-center min-h-[44px] py-[3px] relative shrink-0 w-full" data-name="Button">
        <ButtonContainer1 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center left-1/2 pb-[44px] top-[calc(50%-53px)] w-[329px]" data-name="Content">
      <MainContent />
      <Controls />
    </div>
  );
}

export default function OnboardingLocationAccess() {
  return (
    <div className="bg-[#042b48] relative size-full" data-name="onboarding-location access">
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
      <div className="absolute content-stretch flex gap-[12px] items-start left-[164px] py-[10px] top-[788.56px]" data-name="Page Control">
        <Dot />
        <Dot1 />
        <SelectedTrack />
        <Dot2 />
      </div>
      <Content />
    </div>
  );
}