import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import svgPaths from '../../../imports/LoadingScreen/svg-vmbxcbc0sh';

export function LoadingScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/overview');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-[#042b48] relative min-h-screen w-full overflow-hidden">
      {/* Status Bar */}
      <div className="absolute left-0 top-0 w-full px-4">
        <div className="flex flex-col h-[54px] items-start pt-[21px]">
          <div className="flex items-center justify-between w-full">
            <div className="flex-1">

            </div>
            <div className="h-[10px] w-[124px]" />
            <div className="flex-1 flex items-center justify-end gap-[7px]">
              <div className="h-[12.226px] w-[19.2px]">

              </div>
              <div className="h-[12.328px] w-[17.142px]">

              </div>
              <div className="h-[13px] w-[27.328px]">

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading Spinner */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-[8px]">
        <div className="relative size-[22px] animate-spin">
          <div className="absolute bg-[#9ab89c] inset-[0_43.18%_68.18%_43.18%] rounded-[1.5px]" />
          <div className="absolute bg-[#9ab89c] opacity-15 inset-[9.82%_58.04%_58.04%_9.82%] rounded-[1.5px] rotate-45" />
          <div className="absolute bg-[#9ab89c] opacity-27 inset-[43.18%_0_43.18%_68.18%] rounded-[1.5px]" />
          <div className="absolute bg-[#9ab89c] opacity-39 inset-[58.03%_9.82%_9.83%_58.04%] rounded-[1.5px] -rotate-45" />
          <div className="absolute bg-[#9ab89c] opacity-51 inset-[68.18%_43.18%_0_43.18%] rounded-[1.5px]" />
          <div className="absolute bg-[#9ab89c] opacity-63 inset-[58.04%_58.04%_9.82%_9.82%] rounded-[1.5px] rotate-45" />
          <div className="absolute bg-[#9ab89c] opacity-75 inset-[43.18%_68.18%_43.18%_0] rounded-[1.5px]" />
          <div className="absolute bg-[#9ab89c] opacity-87 inset-[9.82%_58.04%_58.04%_9.82%] rounded-[1.5px] -rotate-45" />
        </div>
        <p className="font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] text-[#9ab89c] text-[17px]">
          Loading
        </p>
      </div>

      {/* Home Indicator */}
      <div className="absolute left-0 bottom-0 w-full flex items-end justify-center pb-[7.86px]">
        {/* <!div className="bg-white h-[4.913px] rounded-[100px] w-[141.48px]" /> *}
      </div>
    </div>
  );
}
