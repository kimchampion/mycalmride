import svgPaths from "./svg-vmbxcbc0sh";

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
        ​
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

function ButtonContainer() {
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

export default function LoadingScreen() {
  return (
    <div className="bg-[#042b48] relative size-full" data-name="loading screen">
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
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] min-h-[44px] py-[3px] top-[calc(50%-48px)] w-[360px]" data-name="Button">
        <ButtonContainer />
      </div>
    </div>
  );
}