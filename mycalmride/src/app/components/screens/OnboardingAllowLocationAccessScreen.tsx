import { useState } from 'react';
import { useNavigate } from 'react-router';
import svgPaths from '../../../imports/OnboardingAllowLocationAccess/svg-bba26k0njm';

export function OnboardingAllowLocationAccessScreen() {
  const [showAlert, setShowAlert] = useState(true);
  const navigate = useNavigate();

  const handleAllow = () => {
    navigate('/onboarding/account-setup');
  };

  const handleDontAllow = () => {
    navigate('/onboarding/account-setup');
  };

  return (
    <div className="bg-[#042b48] relative min-h-screen w-full overflow-hidden">
      {/* Status Bar */}
      <div className="absolute flex flex-col h-[48.881px] items-start left-0 pt-[20.53px] top-0 w-full px-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex-1">
           
          </div>
          <div className="h-[9.776px] w-[121.224px]" />
          <div className="flex-1 flex items-center justify-end gap-[6.843px]">
            <div className="h-[11.953px] w-[18.77px]">
          
            </div>
            <div className="h-[12.052px] w-[16.758px]">
        
            </div>
            <div className="h-[12.709px] w-[26.716px]">
             
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[329px] flex flex-col items-center pb-[44px]">
        <div className="flex flex-col items-center mb-[44px]">
          {/* Illustration placeholder */}
          <div className="h-[160px] w-[166px] mb-4" />

          {/* Message */}
          <div className="flex flex-col gap-[40px] items-center text-center">
            <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[22px] text-[17px] text-white">
              Navigation
            </p>
            <p className="font-['72:Regular',sans-serif] leading-[22px] text-[17px] text-[#e6edf3] w-[278.609px]">
              Allow location access so we can show what's ahead on your route and provide calming support when needed.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-0 w-[333px]">
          <button className="bg-[#9ab89c] h-[48px] w-full rounded-[16px]">
            <p className="font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] text-[#042b48] text-[17px]">
              Allow Location Access
            </p>
          </button>
          <button
            onClick={() => navigate('/onboarding/account-setup')}
            className="h-[44px] w-full rounded-[8px]"
          >
            <p className="font-['72:Semibold',sans-serif] leading-[22px] text-[#b8ddba] text-[17px]">
              Skip for Now
            </p>
          </button>
        </div>
      </div>

      {/* Page Control - dot 3 active */}
      <div className="absolute left-[164px] top-[788.56px] flex gap-[12px] items-start py-[10px]">
        <div className="size-[8px] rounded-[50px] relative">
          <div className="absolute inset-0 bg-[rgba(255,255,255,0.07)] rounded-[50px]" />
          <div className="absolute inset-0 bg-[rgba(94,94,94,0.18)] mix-blend-color-dodge rounded-[50px]" />
        </div>
        <div className="size-[8px] rounded-[50px] relative">
          <div className="absolute inset-0 bg-[rgba(255,255,255,0.07)] rounded-[50px]" />
          <div className="absolute inset-0 bg-[rgba(94,94,94,0.18)] mix-blend-color-dodge rounded-[50px]" />
        </div>
        <div className="h-[8px] w-[16px] rounded-[50px] relative">
          <div className="absolute inset-0 bg-[rgba(255,255,255,0.07)] rounded-[50px]" />
          <div className="absolute inset-0 bg-[rgba(94,94,94,0.18)] mix-blend-color-dodge rounded-[50px]" />
          <div className="absolute bg-white left-0 rounded-[50px] size-[8px] top-0" />
        </div>
        <div className="size-[8px] rounded-[50px] relative">
          <div className="absolute inset-0 bg-[rgba(255,255,255,0.07)] rounded-[50px]" />
          <div className="absolute inset-0 bg-[rgba(94,94,94,0.18)] mix-blend-color-dodge rounded-[50px]" />
        </div>
      </div>

      {/* Alert Overlay */}
      {showAlert && (
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0 flex items-center justify-center">
          <div className="relative rounded-[14px] overflow-hidden">
            <div className="absolute inset-0 bg-[rgba(179,179,179,0.82)]" />
            <div className="absolute inset-0 backdrop-blur-[25px] bg-[#383838] mix-blend-color-dodge" />

            <div className="relative flex flex-col gap-[2px] items-center pt-[19px]">
              <div className="flex flex-col gap-[2px] items-center px-4 pb-[15px] w-[270px]">
                <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[1.335] text-[13px] text-black text-center">
                  Allow location services to improve your experience.
                </p>
                <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[1.335] text-[11px] text-black text-center">
                  You can change this anytime in Settings.
                </p>
              </div>

              <div className="flex flex-col items-center w-[270px]">
                <button
                  onClick={handleAllow}
                  className="h-[44px] w-full border-t-[0.333px] border-[rgba(84,84,86,0.34)]"
                >
                  <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] text-[#007aff] text-[17px] tracking-[-0.43px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Allow
                  </p>
                </button>
                <button
                  onClick={handleDontAllow}
                  className="h-[44px] w-full border-t-[0.333px] border-[rgba(84,84,86,0.34)]"
                >
                  <p className="font-['SF_Pro:Regular',sans-serif] leading-[22px] text-[#007aff] text-[17px] tracking-[-0.43px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Don't Allow
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Home Indicator */}
      <div className="absolute left-0 bottom-0 w-full flex items-end justify-center pb-[7.86px]">
        <div className="bg-white h-[4.913px] rounded-[100px] w-[141.48px]" />
      </div>
    </div>
  );
}
