import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import svgPaths from '../../../imports/OnboardingAccountSetup3/svg-qat7okk9ic';

export function OnboardingNameSetupScreen() {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || 'jane.doe@abc.com';

  const handleCreateAccount = () => {
    if (name.trim()) {
      navigate('/onboarding/account-setup-4');
    }
  };

  return (
    <div className="bg-[#042b48] relative min-h-screen w-full overflow-hidden">
      {/* Status Bar */}
      <div className="absolute left-0 top-0 w-full px-4">
        <div className="flex flex-col h-[54px] items-start pt-[21px]">
          <div className="flex items-center justify-between w-full">
            <div className="flex-1">
              <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] text-[17px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                9:41
              </p>
            </div>
            <div className="h-[10px] w-[124px]" />
            <div className="flex-1 flex items-center justify-end gap-[7px]">
              <div className="h-[12.226px] w-[19.2px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
                  <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="white" fillRule="evenodd" />
                </svg>
              </div>
              <div className="h-[12.328px] w-[17.142px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
                  <path clipRule="evenodd" d={svgPaths.p18b35300} fill="white" fillRule="evenodd" />
                </svg>
              </div>
              <div className="h-[13px] w-[27.328px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
                  <g>
                    <rect height="12" opacity="0.35" rx="3.8" stroke="white" width="24" x="0.5" y="0.5" />
                    <path d={svgPaths.p3bbd9700} fill="white" opacity="0.4" />
                    <rect fill="white" height="9" rx="2.5" width="21" x="2" y="2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Nav Bar Title */}
        <div className="h-[44px] relative w-full">
          <p className="absolute bottom-1/4 font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] left-1/2 -translate-x-1/2 text-[17px] text-center text-white top-1/4 tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Welcome Rider
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="absolute left-0 top-[154px] w-full px-4">
        <div className="flex flex-col items-center pr-4 py-[11px]">
          <p className="font-['SF_Compact_Text:Medium',sans-serif] leading-[20px] text-[15px] text-[rgba(255,255,255,0.8)] pb-1 w-full">
            What's your name?
          </p>
          <div className="relative rounded-[10px] border-[0.5px] border-[rgba(148,190,189,0.83)] w-full">
            <input
              type="text"
              placeholder="enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCreateAccount()}
              className="w-full bg-transparent px-[12px] py-[11px] font-['72:Italic',sans-serif] italic leading-[22px] text-[17px] text-white placeholder:text-[rgba(255,255,255,0.5)] outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col items-center pr-4 py-[11px] mt-6">
          <p className="font-['72:Semibold',sans-serif] leading-[20px] text-[15px] text-[rgba(255,255,255,0.8)] pb-1 w-full">
            What's your email address?
          </p>
          <div className="bg-[rgba(3,88,108,0.5)] rounded-[10px] w-full px-[12px] py-[11px]">
            <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[22px] text-[17px] text-[rgba(255,255,255,0.5)]">
              {email}
            </p>
          </div>
          <p className="font-['SF_Compact_Text:Regular',sans-serif] leading-[18px] text-[13px] text-[rgba(255,255,255,0.5)] pt-1 w-full">
            Read-only field
          </p>
        </div>
      </div>

      {/* Info Text */}
      <p className="absolute left-1/2 -translate-x-1/2 font-['SF_Compact_Text:Regular',sans-serif] leading-[20px] text-[13px] text-[rgba(255,255,255,0.8)] top-[380px] w-[335px]">
        you don't need a password to create an account. To login next time we'll send you a special link
      </p>

      {/* Button */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[513px] w-[360px]">
        <button
          onClick={handleCreateAccount}
          disabled={!name.trim()}
          className="bg-[#9ab89c] h-[48px] w-full rounded-[16px] disabled:opacity-50"
        >
          <p className="font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] text-[#042b48] text-[17px]">
            Create Account
          </p>
        </button>
      </div>

      {/* Terms */}
      <p className="absolute left-1/2 -translate-x-1/2 font-['SF_Compact_Text:Medium',sans-serif] leading-[normal] text-[12px] text-[rgba(255,255,255,0.5)] top-[582px] w-[335px] text-center">
        By continuing you agree to our <span className="text-white underline">terms</span> and <span className="text-white underline">privacy policy</span>
      </p>
    </div>
  );
}