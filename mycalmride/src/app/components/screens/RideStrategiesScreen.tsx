import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import svgPaths from '../../../imports/OnboardingAccountSetup4/svg-ocf3bwrrcw';

export function RideStrategiesScreen() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>(['Guided Breathing', 'Music', 'Ride Insights']);

  const handleBack = () => {
    navigate('/overview', { state: { openProfile: true } });
  };

  const strategies = [
    { id: 'guided-breathing', label: 'Guided Breathing' },
    { id: 'music', label: 'Music' },
    { id: 'reassurance', label: 'Reassurance' },
    { id: 'gentle-reminders', label: 'Gentle Reminders' },
    { id: 'distractions', label: 'Distractions' },
    { id: 'quiet-mode', label: 'Quiet Mode' },
    { id: 'focus', label: 'Focus' },
    { id: 'ride-insights', label: 'Ride Insights' },
    { id: 'grounding-exercises', label: 'Grounding Exercises' },
  ];

  const toggleStrategy = (label: string) => {
    if (selected.includes(label)) {
      setSelected(selected.filter((s) => s !== label));
    } else {
      setSelected([...selected, label]);
    }
  };

  return (
    <div className="bg-[#042b48] min-h-screen w-full flex flex-col">
      <div className="flex items-center justify-between p-4 pt-12">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-[#7DC4FF] text-[17px] font-['SF_Pro:Semibold',sans-serif]"
        >
          <ChevronLeft size={24} />
          <span>Back</span>
        </button>
        <h1 className="text-white text-[17px] font-['SF_Pro:Semibold',sans-serif]">
          Ride Strategies
        </h1>
        <button className="text-[#7DC4FF] text-[17px] font-['SF_Pro:Semibold',sans-serif]">
          Save
        </button>
      </div>

      <div className="px-4 pt-4">
        <p className="font-['72:Bold',sans-serif] leading-[25px] text-[20px] text-white mb-1">
          What helps you feel more in control?
        </p>
        <p className="font-['72:Regular',sans-serif] leading-[22px] text-[17px] text-[rgba(255,255,255,0.8)]">
          Select all that apply. You can change these anytime.
        </p>
      </div>

      <div className="px-4 mt-[25px] space-y-4">
        {/* Row 1 */}
        <div className="flex gap-[4px] flex-wrap">
          {strategies.slice(0, 3).map((strategy) => {
            const isSelected = selected.includes(strategy.label);
            return (
              <button
                key={strategy.id}
                onClick={() => toggleStrategy(strategy.label)}
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
            const isSelected = selected.includes(strategy.label);
            return (
              <button
                key={strategy.id}
                onClick={() => toggleStrategy(strategy.label)}
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
            const isSelected = selected.includes(strategy.label);
            return (
              <button
                key={strategy.id}
                onClick={() => toggleStrategy(strategy.label)}
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
    </div>
  );
}