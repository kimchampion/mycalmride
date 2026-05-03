import svgPaths from "./svg-drg30qs7ax";
import imgProfileAiGen1 from "./0db9e04cc38a322d4fce0394e13a6bfdeab30e61.png";
import imgMap from "./de94035dfcb1b8cb567e3334c78bb1846d95cadf.png";

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] items-start max-h-[72px] min-w-px relative" data-name="content">
      <div className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[0] min-w-full overflow-hidden relative shrink-0 text-[0px] text-ellipsis text-white w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[25px] mb-0 text-[17px]">Current Traffic Conditions</p>
        <p className="leading-[25px] text-[15px]">Hayward, CA</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center relative rounded-[8px] shrink-0" data-name="Tag Row">
        <div className="content-stretch flex flex-col h-[22px] items-center justify-center px-[4px] py-[2px] relative rounded-[8px] shrink-0" data-name="_Tag Row/Tag">
          <div aria-hidden="true" className="absolute border-[#9ab89c] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <p className="font-['72:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#9ab89c] text-[13px] text-center whitespace-nowrap">Moderate</p>
        </div>
      </div>
    </div>
  );
}

function LeftContent() {
  return (
    <div className="content-stretch flex items-start pb-[8px] pl-[8px] relative shrink-0 w-[238px]" data-name="left content">
      <Content1 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Title">
      <p className="font-['72:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#042b48] text-[17px] text-center w-full">Begin</p>
    </div>
  );
}

function TextRows() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0 w-full" data-name="Text Rows">
      <Title />
    </div>
  );
}

function PrimaryFrame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Primary Frame">
      <TextRows />
    </div>
  );
}

function ContentFrame() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Content Frame">
      <PrimaryFrame1 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-name="Main Content">
      <ContentFrame />
    </div>
  );
}

function PrimaryContent() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Primary Content">
      <MainContent />
    </div>
  );
}

function PrimaryFrame() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Primary Frame">
      <PrimaryContent />
    </div>
  );
}

function CardContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card Content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-[8px] relative size-full">
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Card_Object Table View Cell">
            <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px relative" data-name="Object Table View Cell">
              <PrimaryFrame />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BeginButton() {
  return (
    <div className="bg-[#9ab89c] relative rounded-[16px] shrink-0 w-[83px]" data-name="begin button">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <CardContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[#9ab89c] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.13),0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex gap-[24px] h-[80px] items-start relative shrink-0 w-full" data-name="cell">
      <LeftContent />
      <BeginButton />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[13px] items-end left-[24px] top-[474.03px] w-[345px]" data-name="content">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[24px] text-white w-full">Are you ready to go?</p>
      <Cell />
    </div>
  );
}

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

function ImageUser() {
  return (
    <div className="bg-white overflow-clip relative rounded-[100px] shrink-0 size-[30px]" data-name="_Image User">
      <div className="absolute left-[-4.65px] size-[38.025px] top-[-2.62px]" data-name="profile-ai gen 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProfileAiGen1} />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex items-start relative rounded-[100px] shrink-0 size-[30px]" data-name="Avatar">
      <ImageUser />
    </div>
  );
}

function RightAccessory() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center justify-end pr-[16px] right-0 top-0" data-name="Right Accessory">
      <Avatar />
    </div>
  );
}

function TitleAndControls() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Title and Controls">
      <p className="absolute bottom-1/4 font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] left-[37.79%] right-[36.76%] text-[17px] text-center text-white top-1/4 tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        May 6, 2026
      </p>
      <RightAccessory />
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

function NavBar() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[393px]" data-name="nav bar">
      <div className="content-stretch flex flex-col h-[54px] items-start pt-[21px] relative shrink-0 w-[402px]" data-name="Status Bar - iPhone">
        <Frame />
      </div>
      <Contents />
    </div>
  );
}

function EmeraldGlenPark() {
  return (
    <div className="absolute font-['SF_Pro_Text:Semibold',sans-serif] h-[22.846px] leading-[normal] left-[262.75px] not-italic text-[#b8ddba] text-[10px] top-[134.74px] w-[48px] whitespace-nowrap" data-name="Emerald Glen Park">
      <p className="absolute left-[5.18px] top-0">Emerald</p>
      <p className="absolute left-0 top-[10.85px]">Glen Park</p>
    </div>
  );
}

function Dougherty() {
  return (
    <div className="absolute h-[45.786px] left-[221.13px] top-[140.93px] w-[49.692px]" data-name="Dougherty">
      <div className="absolute flex h-[9.304px] items-center justify-center left-0 top-0 w-[12.903px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[72.55deg] skew-x-[-1.52deg]">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[11.4px] leading-[normal] not-italic relative text-[8px] text-white w-[6.472px]">D</p>
        </div>
      </div>
      <div className="absolute flex h-[11.707px] items-center justify-center left-[36.74px] top-[33.04px] w-[7.369px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[3.04deg] skew-x-[-1.52deg]">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[11.4px] leading-[normal] not-italic relative text-[8px] text-white w-[6.472px]">R</p>
        </div>
      </div>
      <div className="absolute flex h-[11.934px] items-center justify-center left-[42.57px] top-[33.85px] w-[7.123px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-4.91deg] skew-x-[-1.52deg]">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[11.4px] leading-[normal] not-italic relative text-[8px] text-white w-[6.472px]">d</p>
        </div>
      </div>
      <div className="absolute flex h-[8.411px] items-center justify-center left-[2.96px] top-[5.88px] w-[12.613px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[71.6deg] skew-x-[-1.62deg]">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[11.395px] leading-[normal] not-italic relative text-[8px] text-white w-[5.396px]">o</p>
        </div>
      </div>
      <div className="absolute flex h-[10.04px] items-center justify-center left-[5.18px] top-[9.78px] w-[12.761px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[58.8deg] skew-x-[-2.76deg]">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[11.306px] leading-[normal] not-italic relative text-[8px] text-white w-[5.443px]">u</p>
        </div>
      </div>
      <div className="absolute flex h-[10.971px] items-center justify-center left-[8.09px] top-[14.58px] w-[13.325px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[58.8deg] skew-x-[-2.76deg]">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[11.306px] leading-[normal] not-italic relative text-[8px] text-white w-[6.532px]">g</p>
        </div>
      </div>
      <div className="absolute flex h-[10.68px] items-center justify-center left-[10.44px] top-[19.42px] w-[12.368px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[50.36deg] skew-x-[-3.26deg]">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[11.223px] leading-[normal] not-italic relative text-[8px] text-white w-[5.223px]">h</p>
        </div>
      </div>
      <div className="absolute flex h-[10.962px] items-center justify-center left-[14.24px] top-[23.2px] w-[12.194px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[47.04deg] skew-x-[-3.38deg]">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[11.187px] leading-[normal] not-italic relative text-[8px] text-white w-[5.241px]">e</p>
        </div>
      </div>
      <div className="absolute flex h-[11.439px] items-center justify-center left-[18.26px] top-[26.56px] w-[11.716px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[40.27deg] skew-x-[-3.5deg]">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[11.121px] leading-[normal] not-italic relative text-[8px] text-white w-[5.273px]">r</p>
        </div>
      </div>
      <div className="absolute flex h-[11.37px] items-center justify-center left-[21.18px] top-[29.4px] w-[11.799px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[41.32deg] skew-x-[-3.5deg]">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[11.121px] leading-[normal] not-italic relative text-[8px] text-white w-[5.273px]">t</p>
        </div>
      </div>
      <div className="absolute flex h-[11.873px] items-center justify-center left-[26.66px] top-[30.35px] w-[9.062px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[18.06deg] skew-x-[-3.22deg]">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[10.963px] leading-[normal] not-italic relative text-[8px] text-white w-[5.347px]">y</p>
        </div>
      </div>
    </div>
  );
}

function Map() {
  return (
    <div className="absolute h-[348px] left-0 top-[112.03px] w-[393px]" data-name="map">
      <div className="absolute h-[347.843px] left-[-63px] top-0 w-[521.765px]" data-name="map">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-60 pointer-events-none size-full" src={imgMap} />
      </div>
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[22px] left-[137.89px] not-italic text-[14px] text-[rgba(255,255,255,0.8)] top-[162.99px] whitespace-nowrap">Dublin</p>
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[22px] left-[192.36px] not-italic text-[13px] text-[rgba(255,255,255,0.8)] top-[247.84px] whitespace-nowrap">Pleasanton</p>
      <EmeraldGlenPark />
      <Dougherty />
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[139.21px] not-italic text-[10px] text-[rgba(255,255,255,0.8)] top-[193.61px] whitespace-nowrap">Dublin Blvd</p>
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[239.09px] not-italic text-[10px] text-[rgba(255,255,255,0.8)] top-[92px] tracking-[0.9px] whitespace-nowrap">Tassajara</p>
    </div>
  );
}

function WelcomeOverlay() {
  return (
    <div className="absolute h-[86.737px] leading-[0] left-[35.68px] not-italic text-white top-[106.46px] w-[289.348px]" data-name="welcome-overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center left-0 text-[44px] top-[60.24px] tracking-[-1.76px] w-[288.995px]">
        <p className="leading-[normal]">Dublin, CA</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center left-[0.35px] text-[27px] top-[16px] tracking-[-1.08px] w-[288.995px]">
        <p className="leading-[normal]">Hey there Kim!</p>
      </div>
    </div>
  );
}

export default function Overview() {
  return (
    <div className="bg-[#042b48] relative size-full" data-name="overview">
      <div className="absolute h-[33.405px] left-0 top-[819px] w-[393px]" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[7.86px] flex h-[4.913px] items-center justify-center left-1/2 w-[141.48px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-white h-[4.913px] rounded-[100px] w-[141.48px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <Content />
      <NavBar />
      <Map />
      <WelcomeOverlay />
    </div>
  );
}