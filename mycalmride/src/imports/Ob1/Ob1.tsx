import svgPaths from "./svg-68f43clsm2";

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

function Logo() {
  return (
    <div className="-translate-x-1/2 absolute h-[182.495px] left-[calc(50%-0.05px)] top-[309px] w-[328.901px]" data-name="logo">
      <div className="absolute inset-[-0.16%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 329.195 182.788">
          <g id="logo">
            <path d={svgPaths.p3ddbe400} fill="var(--fill-0, #739476)" fillOpacity="0.3" id="Vector 13" stroke="var(--stroke-0, #9AB89C)" strokeWidth="0.590173" />
            <path d={svgPaths.p1a4e5b00} fill="var(--fill-0, #9AB89C)" id="Vector 9 (Stroke)" />
            <g id="RIDE">
              <path d={svgPaths.p3be08600} fill="var(--fill-0, #739476)" fillOpacity="0.65" id="Vector" />
              <path d={svgPaths.p21496500} fill="var(--fill-0, #739476)" fillOpacity="0.65" id="Vector_2" />
              <path d={svgPaths.p20fd0800} fill="var(--fill-0, #739476)" fillOpacity="0.65" id="Vector_3" />
              <path d={svgPaths.p1fe1700} fill="var(--fill-0, #739476)" fillOpacity="0.65" id="Vector_4" />
            </g>
            <g id="Calm">
              <path d={svgPaths.p6697f00} fill="var(--fill-0, #9AB89C)" id="Vector_5" />
              <path d={svgPaths.pb1b8330} fill="var(--fill-0, #9AB89C)" id="Vector_6" />
              <path d={svgPaths.p45ee280} fill="var(--fill-0, #9AB89C)" id="Vector_7" />
              <path d={svgPaths.p1394300} fill="var(--fill-0, #9AB89C)" id="Vector_8" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Ob() {
  return (
    <div className="bg-[#042b48] relative size-full" data-name="ob1">
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
      <Logo />
    </div>
  );
}