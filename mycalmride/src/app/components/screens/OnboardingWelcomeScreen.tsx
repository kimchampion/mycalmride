import { useNavigate } from "react-router";
import svgPaths from "../../../imports/OnboardingWelcome/svg-i9vthu32pr";

export function OnboardingWelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#042b48] relative min-h-screen w-full overflow-hidden">
      {/* Status Bar */}

      {/* Content */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[329px] flex flex-col items-center pb-[44px]">
        <div className="flex flex-col items-center mb-[44px]">
          {/* Illustration placeholder */}
          <div className="h-[160px] w-[166px] mb-4" />

          {/* Message */}
          <div className="flex flex-col gap-[40px] items-center text-center">
            <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[22px] text-[17px] text-white">
              Welcome to Your Calm Space
            </p>
            <p className="font-['72:Regular',sans-serif] leading-[22px] text-[17px] text-[#e6edf3] w-[297px]">
              Calm Ride helps passengers feel more prepared and
              supported during stressful ride moments.
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/onboarding/app-info")}
          className="bg-[#9ab89c] h-[48px] w-[333px] rounded-[16px]"
        >
          <p className="font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] text-[#042b48] text-[17px]">
            Next
          </p>
        </button>
      </div>

      {/* Page Control */}
      <div className="absolute left-[164px] top-[788.56px] flex gap-[12px] items-start py-[10px]">
        <div className="h-[8px] w-[16px] rounded-[50px] relative">
          <div className="absolute inset-0 bg-[rgba(255,255,255,0.07)] rounded-[50px]" />
          <div className="absolute inset-0 bg-[rgba(94,94,94,0.18)] mix-blend-color-dodge rounded-[50px]" />
          <div className="absolute bg-white left-0 rounded-[50px] size-[8px] top-0" />
        </div>
        <div className="size-[8px] rounded-[50px] relative">
          <div className="absolute inset-0 bg-[rgba(255,255,255,0.07)] rounded-[50px]" />
          <div className="absolute inset-0 bg-[rgba(94,94,94,0.18)] mix-blend-color-dodge rounded-[50px]" />
        </div>
        <div className="size-[8px] rounded-[50px] relative">
          <div className="absolute inset-0 bg-[rgba(255,255,255,0.07)] rounded-[50px]" />
          <div className="absolute inset-0 bg-[rgba(94,94,94,0.18)] mix-blend-color-dodge rounded-[50px]" />
        </div>
        <div className="size-[8px] rounded-[50px] relative">
          <div className="absolute inset-0 bg-[rgba(255,255,255,0.07)] rounded-[50px]" />
          <div className="absolute inset-0 bg-[rgba(94,94,94,0.18)] mix-blend-color-dodge rounded-[50px]" />
        </div>
      </div>
    </div>
  );
}