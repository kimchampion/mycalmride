import svgPaths from "./svg-dmk5nnt6nq";
import imgHaloTransparentAnimated1 from "./f99c873073d556ec7e6ca215225cb340ac9c5c24.png";

function ButtonContainer() {
  return (
    <div className="bg-[#9ab89c] h-[48px] relative rounded-[16px] shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#042b48] text-[17px] text-center whitespace-nowrap">End Session</p>
        </div>
      </div>
    </div>
  );
}

function TabContents() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-name="Tab Contents">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Navigation</p>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents />
          <div className="absolute bottom-0 h-[2px] left-0 right-[-0.5px]" data-name="Indicator" />
        </div>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-w-px overflow-clip relative" data-name="Tab 1">
      <StateLayer />
    </div>
  );
}

function TabContents1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px relative" data-name="Tab Contents">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Reports</p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents1 />
          <div className="absolute bg-[#7dc4ff] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
        </div>
      </div>
    </div>
  );
}

function TabGroup() {
  return (
    <div className="content-stretch flex h-[60px] items-start relative shrink-0 w-full" data-name="Tab group">
      <Tab />
      <div className="bg-[rgba(254,247,255,0)] content-stretch cursor-pointer flex flex-[1_0_0] flex-col h-full items-center justify-end min-w-px overflow-clip relative" data-name="Reports">
        <StateLayer1 />
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[59.03px] w-[393px]" data-name="Tabs">
      <TabGroup />
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
        <div className="h-0 relative shrink-0 w-full" data-name="Divider">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 1">
              <line id="Divider" stroke="var(--stroke-0, #CAC4D0)" strokeOpacity="0.25" x2="393" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BridgeImage() {
  return (
    <div className="absolute h-[156.935px] left-[69px] top-[345.03px] w-[255.893px]" data-name="bridge-image">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 255.893 156.935">
        <g id="bridge-image">
          <path d={svgPaths.p4987f00} fill="var(--fill-0, #7DC4FF)" fillOpacity="0.3" id="transp-background" />
          <g id="bridge crossing">
            <path d={svgPaths.p1e4a8170} fill="var(--fill-0, white)" id="brdige" />
            <g id="vector">
              <path d={svgPaths.p1d4c6500} fill="var(--fill-0, white)" id="Union" />
              <path d={svgPaths.p1754d000} fill="var(--fill-0, white)" id="Union_2" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function DriverHaloDisplayReports() {
  return (
    <div className="bg-[#042b48] relative size-full" data-name="driver-halo display-reports">
      <div className="absolute content-stretch flex flex-col items-center justify-center left-[17px] min-h-[44px] py-[3px] top-[724px] w-[360px]" data-name="end session">
        <ButtonContainer />
      </div>
      <div className="absolute left-[-52.45px] size-[499.932px] top-[175.52px]" data-name="halo_transparent_animated 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHaloTransparentAnimated1} />
      </div>
      <p className="-translate-x-1/2 absolute font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] left-[200.24px] not-italic text-[20px] text-center text-white top-[171.23px] w-[385.351px]">Bridge coming up</p>
      <Tabs />
      <BridgeImage />
    </div>
  );
}