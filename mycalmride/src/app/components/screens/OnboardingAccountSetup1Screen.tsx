import { useState } from 'react';
import { useNavigate } from 'react-router';
import svgPaths from '../../../imports/OnboardingAccountSetup1/svg-amt9yxq6dw';

export function OnboardingAccountSetup1Screen() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email.trim() && email.includes('@')) {
      navigate('/onboarding/account-setup-3', { state: { email } });
    }
  };

  return (
    <div className="bg-[#042b48] relative min-h-screen w-full overflow-hidden">
      {/* Status Bar */}
      

      {/* Logo */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[231px] h-[110.973px] w-[200px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200.179 111.151">
          <g>
            <path d={svgPaths.p343dfac0} fill="#739476" fillOpacity="0.3" stroke="#9AB89C" strokeWidth="0.358876" />
            <path d={svgPaths.p198f3a00} fill="#9AB89C" />
            <g>
              <path d={svgPaths.p4fa9d00} fill="#739476" fillOpacity="0.65" />
              <path d={svgPaths.peaf9a00} fill="#739476" fillOpacity="0.65" />
              <path d={svgPaths.p3e9d3c00} fill="#739476" fillOpacity="0.65" />
              <path d={svgPaths.p34627b30} fill="#739476" fillOpacity="0.65" />
            </g>
            <g>
              <path d={svgPaths.p23affa00} fill="#9AB89C" />
              <path d={svgPaths.p2bbfad00} fill="#9AB89C" />
              <path d={svgPaths.p27027380} fill="#9AB89C" />
              <path d={svgPaths.p203f06f2} fill="#9AB89C" />
            </g>
          </g>
        </svg>
      </div>

      {/* Form */}
      <div className="absolute left-0 top-[417px] w-full px-4">
        <div className="flex flex-col items-center">
          <div className="w-full pr-4 py-[11px]">
            <p className="font-['SF_Compact_Text:Medium',sans-serif] leading-[20px] text-[15px] text-[rgba(255,255,255,0.8)] pb-1">
              Enter your email to login or sign up
            </p>
            <div className="relative rounded-[10px] border-[0.5px] border-[rgba(148,190,189,0.83)]">
              <input
                type="email"
                placeholder="email@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                className="w-full bg-transparent px-[12px] py-[11px] font-['72:Italic',sans-serif] italic leading-[22px] text-[17px] text-white placeholder:text-[rgba(255,255,255,0.5)] outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="absolute left-[17px] top-[523px] w-[360px]">
        <button
          onClick={handleSubmit}
          disabled={!email.trim() || !email.includes('@')}
          className="bg-[#9ab89c] h-[48px] w-full rounded-[16px] disabled:opacity-50"
        >
          <p className="font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] text-[#042b48] text-[17px]">
            Let's Go
          </p>
        </button>
      </div>
    </div>
  );
}