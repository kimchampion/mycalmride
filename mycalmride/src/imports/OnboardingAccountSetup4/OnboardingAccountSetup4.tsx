import svgPaths from "./svg-ocf3bwrrcw";

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
        Ride Strategies
      </p>
      <div className="absolute content-stretch flex items-center justify-end pr-[16px] py-[11px] right-0 top-0" data-name="Trailing">
        <div className="content-stretch flex items-start relative shrink-0" data-name="⮑ Button 1">
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[#7dc4ff] text-[17px] text-right tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Save
          </p>
        </div>
      </div>
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

function PrimaryContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic overflow-clip relative" data-name="Primary Content">
      <p className="font-['72:Bold',sans-serif] leading-[25px] min-w-full relative shrink-0 text-[20px] text-white w-[min-content]">What helps you feel more in control?</p>
      <p className="font-['72:Regular',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[17px] text-[rgba(255,255,255,0.8)] w-[min-content]">Select all that apply. You can change these anytime.</p>
    </div>
  );
}

function PrimaryContent() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Primary Content">
      <PrimaryContent1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <PrimaryContent />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <Content />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-center min-w-[28px] relative shrink-0" data-name="Label">
      <p className="font-['72:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#b8ddba] text-[16px] whitespace-nowrap">Guided Breathing</p>
    </div>
  );
}

function LabelContent() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name="Label Content">
      <div className="relative shrink-0 size-[16px]" data-name="fiori.accept">
        <div className="absolute inset-[18.18%_8.17%_19.42%_9.09%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2388 9.98429">
            <path d={svgPaths.p3d84cb00} fill="var(--fill-0, #B8DDBA)" id="Vector" />
          </svg>
        </div>
      </div>
      <Label />
    </div>
  );
}

function VisibleArea() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-w-px relative rounded-[16px]" data-name="Visible Area">
      <div aria-hidden="true" className="absolute border border-[#b8ddba] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5.5px] relative size-full">
          <LabelContent />
        </div>
      </div>
    </div>
  );
}

function Option() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px py-[6px] relative" data-name="Option 1">
      <VisibleArea />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-center min-w-[28px] relative shrink-0" data-name="Label">
      <p className="font-['72:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#b8ddba] text-[16px] whitespace-nowrap">Music</p>
    </div>
  );
}

function LabelContent1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name="Label Content">
      <div className="relative shrink-0 size-[16px]" data-name="fiori.accept">
        <div className="absolute inset-[18.18%_8.17%_19.42%_9.09%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2388 9.98429">
            <path d={svgPaths.p3d84cb00} fill="var(--fill-0, #B8DDBA)" id="Vector" />
          </svg>
        </div>
      </div>
      <Label1 />
    </div>
  );
}

function VisibleArea1() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-w-px relative rounded-[16px]" data-name="Visible Area">
      <div aria-hidden="true" className="absolute border border-[#b8ddba] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5.5px] relative size-full">
          <LabelContent1 />
        </div>
      </div>
    </div>
  );
}

function Option1() {
  return (
    <div className="content-stretch flex items-center py-[6px] relative shrink-0 w-[70px]" data-name="Option 3">
      <VisibleArea1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[28px] relative shrink-0" data-name="Label">
      <p className="font-['72:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#b8ddba] text-[16px] whitespace-nowrap">Reassurance</p>
    </div>
  );
}

function VisibleArea2() {
  return (
    <div className="bg-[rgba(115,148,118,0.15)] flex-[1_0_0] h-[44px] min-w-px relative rounded-[16px]" data-name="Visible Area">
      <div aria-hidden="true" className="absolute border-[#b8ddba] border-[0.33px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[19px] py-[5.5px] relative size-full">
          <Label2 />
        </div>
      </div>
    </div>
  );
}

function Option2() {
  return (
    <div className="content-stretch flex items-center py-[6px] relative shrink-0 w-[112px]" data-name="Option 4">
      <VisibleArea2 />
    </div>
  );
}

function RightAccessory() {
  return (
    <div className="col-1 content-stretch flex gap-[4px] items-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Right Accessory">
      <Option />
      <Option1 />
      <Option2 />
    </div>
  );
}

function Cell() {
  return (
    <div className="col-1 gap-x-[4px] gap-y-[4px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] justify-self-stretch pt-[11px] relative row-1 self-start shrink-0" data-name="Cell">
      <RightAccessory />
    </div>
  );
}

function MarginFrame() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Margin Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[9px] pr-[16px] relative size-full">
          <Cell />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0)] border-b-[0.33px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PrimaryFrame() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] left-px pl-[16px] top-[203px] w-[392px]" data-name="Primary Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0)] border-solid border-t-[0.33px] inset-0 pointer-events-none" />
      <MarginFrame />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[28px] relative shrink-0" data-name="Label">
      <p className="font-['72:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#b8ddba] text-[16px] whitespace-nowrap">Gentle Reminders</p>
    </div>
  );
}

function VisibleArea3() {
  return (
    <div className="bg-[rgba(115,148,118,0.15)] flex-[1_0_0] h-[44px] min-w-px relative rounded-[16px]" data-name="Visible Area">
      <div aria-hidden="true" className="absolute border-[#b8ddba] border-[0.33px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[19px] py-[5.5px] relative size-full">
          <Label3 />
        </div>
      </div>
    </div>
  );
}

function Option3() {
  return (
    <div className="content-stretch flex items-center py-[6px] relative shrink-0 w-[139px]" data-name="Option 4">
      <VisibleArea3 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[28px] relative shrink-0" data-name="Label">
      <p className="font-['72:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#b8ddba] text-[16px] whitespace-nowrap">Distractions</p>
    </div>
  );
}

function VisibleArea4() {
  return (
    <div className="bg-[rgba(115,148,118,0.15)] flex-[1_0_0] h-[44px] min-w-px relative rounded-[16px]" data-name="Visible Area">
      <div aria-hidden="true" className="absolute border-[#b8ddba] border-[0.33px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[19px] py-[5.5px] relative size-full">
          <Label4 />
        </div>
      </div>
    </div>
  );
}

function Option4() {
  return (
    <div className="content-stretch flex items-center py-[6px] relative shrink-0 w-[99px]" data-name="Option 5">
      <VisibleArea4 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[28px] relative shrink-0" data-name="Label">
      <p className="font-['72:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#b8ddba] text-[16px] whitespace-nowrap">Quiet Mode</p>
    </div>
  );
}

function VisibleArea5() {
  return (
    <div className="bg-[rgba(115,148,118,0.15)] flex-[1_0_0] h-[44px] min-w-px relative rounded-[16px]" data-name="Visible Area">
      <div aria-hidden="true" className="absolute border-[#b8ddba] border-[0.33px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[19px] py-[5.5px] relative size-full">
          <Label5 />
        </div>
      </div>
    </div>
  );
}

function Option5() {
  return (
    <div className="content-stretch flex items-center py-[6px] relative shrink-0 w-[114px]" data-name="Option 6">
      <VisibleArea5 />
    </div>
  );
}

function RightAccessory1() {
  return (
    <div className="col-1 content-stretch flex gap-[4px] items-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Right Accessory">
      <Option3 />
      <Option4 />
      <Option5 />
    </div>
  );
}

function Cell1() {
  return (
    <div className="col-1 gap-x-[4px] gap-y-[4px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] justify-self-stretch pt-[11px] relative row-1 self-start shrink-0" data-name="Cell">
      <RightAccessory1 />
    </div>
  );
}

function MarginFrame1() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Margin Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[9px] pr-[16px] relative size-full">
          <Cell1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0)] border-b-[0.33px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PrimaryFrame1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] left-px pl-[16px] top-[279px] w-[392px]" data-name="Primary Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0)] border-solid border-t-[0.33px] inset-0 pointer-events-none" />
      <MarginFrame1 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[28px] relative shrink-0" data-name="Label">
      <p className="font-['72:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#b8ddba] text-[16px] whitespace-nowrap">Focus</p>
    </div>
  );
}

function VisibleArea6() {
  return (
    <div className="bg-[rgba(115,148,118,0.15)] flex-[1_0_0] h-[44px] min-w-px relative rounded-[16px]" data-name="Visible Area">
      <div aria-hidden="true" className="absolute border-[#b8ddba] border-[0.33px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[19px] py-[5.5px] relative size-full">
          <Label6 />
        </div>
      </div>
    </div>
  );
}

function Option6() {
  return (
    <div className="content-stretch flex items-center py-[6px] relative shrink-0 w-[64px]" data-name="Option 3">
      <VisibleArea6 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-center min-w-[28px] relative shrink-0" data-name="Label">
      <p className="font-['72:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#b8ddba] text-[16px] whitespace-nowrap">Ride Insights</p>
    </div>
  );
}

function LabelContent2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name="Label Content">
      <div className="relative shrink-0 size-[16px]" data-name="fiori.accept">
        <div className="absolute inset-[18.18%_8.17%_19.42%_9.09%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2388 9.98429">
            <path d={svgPaths.p3d84cb00} fill="var(--fill-0, #B8DDBA)" id="Vector" />
          </svg>
        </div>
      </div>
      <Label7 />
    </div>
  );
}

function VisibleArea7() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-w-px relative rounded-[16px]" data-name="Visible Area">
      <div aria-hidden="true" className="absolute border border-[#b8ddba] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5.5px] relative size-full">
          <LabelContent2 />
        </div>
      </div>
    </div>
  );
}

function Option7() {
  return (
    <div className="content-stretch flex items-center py-[6px] relative shrink-0 w-[119px]" data-name="Option 4">
      <VisibleArea7 />
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[28px] relative shrink-0" data-name="Label">
      <p className="font-['72:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#b8ddba] text-[16px] whitespace-nowrap">Grounding Exercises</p>
    </div>
  );
}

function VisibleArea8() {
  return (
    <div className="bg-[rgba(115,148,118,0.15)] flex-[1_0_0] h-[44px] min-w-px relative rounded-[16px]" data-name="Visible Area">
      <div aria-hidden="true" className="absolute border-[#b8ddba] border-[0.33px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[19px] py-[5.5px] relative size-full">
          <Label8 />
        </div>
      </div>
    </div>
  );
}

function Option8() {
  return (
    <div className="content-stretch flex items-center py-[6px] relative shrink-0 w-[171px]" data-name="Option 5">
      <VisibleArea8 />
    </div>
  );
}

function RightAccessory2() {
  return (
    <div className="col-1 content-stretch flex gap-[4px] items-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Right Accessory">
      <Option6 />
      <Option7 />
      <Option8 />
    </div>
  );
}

function Cell2() {
  return (
    <div className="col-1 gap-x-[4px] gap-y-[4px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] justify-self-stretch pt-[11px] relative row-1 self-start shrink-0" data-name="Cell">
      <RightAccessory2 />
    </div>
  );
}

function MarginFrame2() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Margin Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pb-[9px] pr-[16px] relative size-full">
          <Cell2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0)] border-b-[0.33px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PrimaryFrame2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] left-0 pl-[16px] top-[355px] w-[392px]" data-name="Primary Frame">
      <div aria-hidden="true" className="absolute border-[rgba(188,212,235,0)] border-solid border-t-[0.33px] inset-0 pointer-events-none" />
      <MarginFrame2 />
    </div>
  );
}

export default function OnboardingAccountSetup() {
  return (
    <div className="bg-[#042b48] relative size-full" data-name="onboarding-account setup 4">
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
      <div className="absolute left-0 top-[98px] w-[393px]" data-name="Object Header">
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip py-[8px] relative rounded-[inherit] size-full">
          <Header />
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(91,115,139,0.37)] border-b-[0.33px] border-solid inset-0 pointer-events-none" />
      </div>
      <PrimaryFrame />
      <PrimaryFrame1 />
      <PrimaryFrame2 />
    </div>
  );
}