import { useState } from 'react';
import { useNavigate } from 'react-router';
import svgPaths from '../../../imports/OnboardingAccountSetup4/svg-ocf3bwrrcw';

const strategies = [
  { id: 'breathing', label: 'Guided Breathing', selected: true },
  { id: 'music', label: 'Music', selected: true },
  { id: 'reassurance', label: 'Reassurance', selected: false },
  { id: 'reminders', label: 'Gentle Reminders', selected: false },
  { id: 'distractions', label: 'Distractions', selected: false },
  { id: 'quiet', label: 'Quiet Mode', selected: false },
  { id: 'focus', label: 'Focus', selected: false },
  { id: 'insights', label: 'Ride Insights', selected: true },
  { id: 'grounding', label: 'Grounding Exercises', selected: false },
];

export function RideStrategiesSetupScreen() {
  const [selectedStrategies, setSelectedStrategies] = useState(
    strategies.filter(s => s.selected).map(s => s.id)
  );
  const navigate = useNavigate();

  const toggleStrategy = (id: string) => {
    setSelectedStrategies(prev =>
      prev.includes(id)
        ? prev.filter(s => s !== id)
        : [...prev, id]
    );
  };

  const handleSave = () => {
    navigate('/loading');
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
            Ride Strategies
          </p>
          <button
            onClick={handleSave}
            className="absolute right-0 top-0 flex items-center justify-end pr-4 py-[11px]"
          >
            <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] text-[#7dc4ff] text-[17px] tracking-[-0.43px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Save
            </p>
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="absolute left-0 top-[98px] w-full px-4 pt-4">
        <p className="font-['72:Bold',sans-serif] leading-[25px] text-[20px] text-white mb-1">
          What helps you feel more in control?
        </p>
        <p className="font-['72:Regular',sans-serif] leading-[22px] text-[17px] text-[rgba(255,255,255,0.8)]">
          Select all that apply. You can change these anytime.
        </p>
      </div>

      {/* Strategy Options */}
      <div className="absolute left-0 top-[203px] w-full px-4 space-y-4">
        {/* Row 1 */}
        <div className="flex gap-[4px] flex-wrap">
          {strategies.slice(0, 3).map((strategy) => {
            const isSelected = selectedStrategies.includes(strategy.id);
            return (
              <button
                key={strategy.id}
                onClick={() => toggleStrategy(strategy.id)}
                className={`h-[44px] px-4 rounded-[16px] border flex items-center gap-[2px] ${
                  isSelected
                    ? 'border-[#b8ddba] bg-transparent'
                    : 'border-[#b8ddba] border-opacity-30 bg-[rgba(115,148,118,0.15)]'
                }`}
              >
                {isSelected && (
                  <div className="size-[16px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 13.2388 9.98429">
                      <path d={svgPaths.p3d84cb00} fill="#B8DDBA" />
                    </svg>
                  </div>
                )}
                <p className="font-['72:Regular',sans-serif] leading-[21px] text-[#b8ddba] text-[16px] whitespace-nowrap">
                  {strategy.label}
                </p>
              </button>
            );
          })}
        </div>

        {/* Row 2 */}
        <div className="flex gap-[4px] flex-wrap">
          {strategies.slice(3, 6).map((strategy) => {
            const isSelected = selectedStrategies.includes(strategy.id);
            return (
              <button
                key={strategy.id}
                onClick={() => toggleStrategy(strategy.id)}
                className={`h-[44px] px-4 rounded-[16px] border flex items-center gap-[2px] ${
                  isSelected
                    ? 'border-[#b8ddba] bg-transparent'
                    : 'border-[#b8ddba] border-opacity-30 bg-[rgba(115,148,118,0.15)]'
                }`}
              >
                {isSelected && (
                  <div className="size-[16px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 13.2388 9.98429">
                      <path d={svgPaths.p3d84cb00} fill="#B8DDBA" />
                    </svg>
                  </div>
                )}
                <p className="font-['72:Regular',sans-serif] leading-[21px] text-[#b8ddba] text-[16px] whitespace-nowrap">
                  {strategy.label}
                </p>
              </button>
            );
          })}
        </div>

        {/* Row 3 */}
        <div className="flex gap-[4px] flex-wrap">
          {strategies.slice(6).map((strategy) => {
            const isSelected = selectedStrategies.includes(strategy.id);
            return (
              <button
                key={strategy.id}
                onClick={() => toggleStrategy(strategy.id)}
                className={`h-[44px] px-4 rounded-[16px] border flex items-center gap-[2px] ${
                  isSelected
                    ? 'border-[#b8ddba] bg-transparent'
                    : 'border-[#b8ddba] border-opacity-30 bg-[rgba(115,148,118,0.15)]'
                }`}
              >
                {isSelected && (
                  <div className="size-[16px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 13.2388 9.98429">
                      <path d={svgPaths.p3d84cb00} fill="#B8DDBA" />
                    </svg>
                  </div>
                )}
                <p className="font-['72:Regular',sans-serif] leading-[21px] text-[#b8ddba] text-[16px] whitespace-nowrap">
                  {strategy.label}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute left-0 bottom-0 w-full flex items-end justify-center pb-[7.86px]">
        <div className="bg-white h-[4.913px] rounded-[100px] w-[141.48px]" />
      </div>
    </div>
  );
}
