import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { ProfileModal } from '../ProfileModal';
import svgPaths from '../../../imports/Overview-1/svg-drg30qs7ax';
import imgProfileAiGen1 from 'figma:asset/0db9e04cc38a322d4fce0394e13a6bfdeab30e61.png';
import imgMap from 'figma:asset/de94035dfcb1b8cb567e3334c78bb1846d95cadf.png';

export function OverviewScreen() {
  const location = useLocation();
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.openProfile) {
      setShowProfile(true);
    }
  }, [location.state]);

  const getCurrentDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  };

  const handleBegin = () => {
    navigate('/destination');
  };

  return (
    <>
      <div className="bg-[#042b48] relative min-h-screen w-full overflow-hidden flex justify-center">
        <div className="w-full max-w-[393px]">
        {/* Status Bar */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-[393px] z-30">
          <div className="flex flex-col h-[54px] items-start pt-[21px] px-4">
            <div className="flex items-center justify-between w-full">
              <div className="flex-1">
                
              </div>
              <div className="h-[10px] w-[124px]" />
              
            </div>
          </div>

          {/* Nav Bar Title */}
          <div className="h-[44px] relative w-full">
            <p className="absolute bottom-1/4 font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] left-1/2 -translate-x-1/2 text-[17px] text-center text-white top-1/4 tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {getCurrentDate()}
            </p>
            <button
              onClick={() => setShowProfile(true)}
              className="absolute flex h-[44px] items-center justify-end pr-[16px] right-0 top-0"
            >
              <div className="bg-white overflow-clip relative rounded-[100px] size-[30px]">
                <div className="absolute left-[-4.65px] size-[38.025px] top-[-2.62px]">
                  <img alt="Profile" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProfileAiGen1} />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Welcome Overlay */}
        <div className="absolute h-[86.737px] leading-[0] left-1/2 -translate-x-1/2 text-white top-[106.46px] w-full max-w-[289.348px] px-4 z-20">
          <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center left-0 text-[27px] top-[16px] tracking-[-1.08px] w-full px-4">
            <p className="leading-[normal]">Hey there!</p>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center left-0 text-[44px] top-[60.24px] tracking-[-1.76px] w-full px-4">
            <p className="leading-[normal] text-[#ffffff80]">Dublin, CA</p>
          </div>
        </div>

        {/* Map */}
        <div className="absolute h-[348px] left-1/2 -translate-x-1/2 top-[112.03px] w-full max-w-[393px] z-10">
          <div className="absolute h-[347.843px] left-[-63px] top-0 w-[521.765px]">
            <img alt="Map" className="absolute inset-0 max-w-none object-cover opacity-60 pointer-events-none size-full" src={imgMap} />
          </div>
          <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[22px] left-[137.89px] text-[14px] text-[rgba(255,255,255,0.8)] top-[162.99px] whitespace-nowrap">Dublin</p>
          <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[22px] left-[192.36px] text-[13px] text-[rgba(255,255,255,0.8)] top-[247.84px] whitespace-nowrap">Pleasanton</p>

          {/* Emerald Glen Park */}
          <div className="absolute font-['SF_Pro_Text:Semibold',sans-serif] h-[22.846px] leading-[normal] left-[262.75px] text-[#b8ddba] text-[10px] top-[134.74px] w-[48px] whitespace-nowrap">
            <p className="absolute left-[5.18px] top-0">Emerald</p>
            <p className="absolute left-0 top-[10.85px]">Glen Park</p>
          </div>

          {/* Dougherty - curved text */}
          <div className="absolute h-[45.786px] left-[221.13px] top-[140.93px] w-[49.692px]">
            <div className="absolute flex h-[9.304px] items-center justify-center left-0 top-0 w-[12.903px]">
              <div className="flex-none rotate-[72.55deg] skew-x-[-1.52deg]">
                <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[11.4px] leading-[normal] text-[8px] text-white w-[6.472px]">D</p>
              </div>
            </div>
            <div className="absolute flex h-[8.411px] items-center justify-center left-[2.96px] top-[5.88px] w-[12.613px]">
              <div className="flex-none rotate-[71.6deg] skew-x-[-1.62deg]">
                <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[11.395px] leading-[normal] text-[8px] text-white w-[5.396px]">o</p>
              </div>
            </div>
            <div className="absolute flex h-[10.04px] items-center justify-center left-[5.18px] top-[9.78px] w-[12.761px]">
              <div className="flex-none rotate-[58.8deg] skew-x-[-2.76deg]">
                <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[11.306px] leading-[normal] text-[8px] text-white w-[5.443px]">u</p>
              </div>
            </div>
            <div className="absolute flex h-[10.971px] items-center justify-center left-[8.09px] top-[14.58px] w-[13.325px]">
              <div className="flex-none rotate-[58.8deg] skew-x-[-2.76deg]">
                <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[11.306px] leading-[normal] text-[8px] text-white w-[6.532px]">g</p>
              </div>
            </div>
            <div className="absolute flex h-[10.68px] items-center justify-center left-[10.44px] top-[19.42px] w-[12.368px]">
              <div className="flex-none rotate-[50.36deg] skew-x-[-3.26deg]">
                <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[11.223px] leading-[normal] text-[8px] text-white w-[5.223px]">h</p>
              </div>
            </div>
            <div className="absolute flex h-[10.962px] items-center justify-center left-[14.24px] top-[23.2px] w-[12.194px]">
              <div className="flex-none rotate-[47.04deg] skew-x-[-3.38deg]">
                <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[11.187px] leading-[normal] text-[8px] text-white w-[5.241px]">e</p>
              </div>
            </div>
            <div className="absolute flex h-[11.439px] items-center justify-center left-[18.26px] top-[26.56px] w-[11.716px]">
              <div className="flex-none rotate-[40.27deg] skew-x-[-3.5deg]">
                <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[11.121px] leading-[normal] text-[8px] text-white w-[5.273px]">r</p>
              </div>
            </div>
            <div className="absolute flex h-[11.37px] items-center justify-center left-[21.18px] top-[29.4px] w-[11.799px]">
              <div className="flex-none rotate-[41.32deg] skew-x-[-3.5deg]">
                <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[11.121px] leading-[normal] text-[8px] text-white w-[5.273px]">t</p>
              </div>
            </div>
            <div className="absolute flex h-[11.873px] items-center justify-center left-[26.66px] top-[30.35px] w-[9.062px]">
              <div className="flex-none rotate-[18.06deg] skew-x-[-3.22deg]">
                <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[10.963px] leading-[normal] text-[8px] text-white w-[5.347px]">y</p>
              </div>
            </div>
            <div className="absolute flex h-[11.707px] items-center justify-center left-[36.74px] top-[33.04px] w-[7.369px]">
              <div className="flex-none rotate-[3.04deg] skew-x-[-1.52deg]">
                <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[11.4px] leading-[normal] text-[8px] text-white w-[6.472px]">R</p>
              </div>
            </div>
            <div className="absolute flex h-[11.934px] items-center justify-center left-[42.57px] top-[33.85px] w-[7.123px]">
              <div className="flex-none rotate-[-4.91deg] skew-x-[-1.52deg]">
                <p className="font-['SF_Pro_Text:Semibold',sans-serif] h-[11.4px] leading-[normal] text-[8px] text-white w-[6.472px]">d</p>
              </div>
            </div>
          </div>

          <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[139.21px] text-[10px] text-[rgba(255,255,255,0.8)] top-[193.61px] whitespace-nowrap">Dublin Blvd</p>
          <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[239.09px] text-[10px] text-[rgba(255,255,255,0.8)] top-[92px] tracking-[0.9px] whitespace-nowrap">Tassajara</p>
        </div>

        {/* Content - "Are you ready to go?" */}
        <div className="absolute flex flex-col gap-[13px] items-end left-1/2 -translate-x-1/2 top-[474.03px] w-full max-w-[345px] px-4 z-20">
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[22px] text-[24px] text-white w-full">Are you ready to go?</p>

          {/* Cell with traffic conditions and begin button */}
          <div className="flex gap-[24px] h-[80px] items-start w-full">
            {/* Left Content */}
            <div className="flex items-start pb-[8px] pl-[8px] w-[238px]">
              <div className="flex flex-col gap-[7px] items-start max-h-[72px]">
                <div className="font-['SF_Pro:Medium',sans-serif] font-[510] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[25px] text-[17px]">Current Traffic Conditions</p>
                  <p className="leading-[25px] text-[15px]">Dublin, CA</p>
                </div>
                <div className="flex gap-[8px] items-center rounded-[8px]">
                  <div className="flex flex-col h-[22px] items-center justify-center px-[4px] py-[2px] relative rounded-[8px]">
                    <div className="absolute border-[#9ab89c] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <p className="font-['72:Regular',sans-serif] leading-[18px] text-[#9ab89c] text-[13px] text-center whitespace-nowrap">Moderate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Begin Button */}
            <button
              onClick={handleBegin}
              className="bg-[#9ab89c] relative rounded-[16px] w-[83px] border border-[#9ab89c] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.13),0px_2px_8px_0px_rgba(0,0,0,0.04)]"
            >
              <div className="flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                <div className="w-full">
                  <div className="flex flex-col items-center size-full">
                    <div className="flex flex-col items-center px-[16px] py-[8px] size-full">
                      <div className="flex items-start w-full">
                        <div className="flex flex-col items-start justify-center w-full">
                          <p className="font-['72:Semibold',sans-serif] leading-[22px] text-[#042b48] text-[17px] text-center w-full">Begin</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
        </div>
      </div>

      <ProfileModal isOpen={showProfile} onClose={() => setShowProfile(false)} />
    </>
  );
}