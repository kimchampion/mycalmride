import svgPaths from "./svg-mhen7v0w7p";

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

function Logo() {
  return (
    <div className="-translate-x-1/2 absolute h-[110.973px] left-[calc(50%-24.5px)] top-[143px] w-[200px]" data-name="logo">
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
    <div className="bg-[#042b48] relative size-full" data-name="onboarding-account setup 2">
      <div className="absolute content-stretch flex flex-col h-[48.881px] items-start left-0 pt-[20.53px] top-0 w-[393px]" data-name="Status Bar - iPhone">
        <Frame />
      </div>
      <div className="absolute content-stretch flex flex-col items-center left-0 top-[328.97px] w-[393px]" data-name="Text Field Form Cell">
        <PrimaryFrame />
      </div>
      <div className="absolute content-stretch flex flex-col items-center justify-center left-[17px] min-h-[44px] py-[3px] top-[433px] w-[360px]" data-name="Button">
        <ButtonContainer />
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
      <Logo />
    </div>
  );
}