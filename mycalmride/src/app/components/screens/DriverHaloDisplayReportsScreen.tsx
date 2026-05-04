import { useState } from 'react';
import { useNavigate } from 'react-router';
import svgPaths from '../../../imports/DriverHaloDisplayReports/svg-dmk5nnt6nq';
import haloImage from '../../../imports/halo_transparent_animated.png';

export function DriverHaloDisplayReportsScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'navigation' | 'reports'>('reports');
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleEndSession = () => {
    navigate('/overview');
  };

  const handleNavigationTab = () => {
    navigate('/halo-display');
  };

  return (
    <div className="bg-[#042b48] relative min-h-screen w-full overflow-hidden flex justify-center">
      <div className="w-full max-w-[393px]">
      {/* Tabs */}
      <div className="absolute left-0 top-[59.03px] w-full flex flex-col items-start z-20">
        <div className="flex h-[60px] items-start w-full">
          {/* Navigation Tab */}
          <button
            onClick={handleNavigationTab}
            className="flex-1 flex flex-col h-full items-center justify-end min-w-0 overflow-hidden"
          >
            <div className="flex-1 min-h-0 w-full">
              <div className="flex flex-col items-center justify-center overflow-clip rounded-inherit size-full">
                <div className="flex flex-col items-center justify-center px-4 py-[14px] w-full">
                  <div className="flex items-center justify-center gap-1">
                    <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] text-[14px] text-center text-white tracking-[0.1px] whitespace-nowrap">
                      Navigation
                    </p>
                  </div>
                  <div className="h-[2px] w-full" />
                </div>
              </div>
            </div>
          </button>

          {/* Reports Tab */}
          <button
            onClick={() => setActiveTab('reports')}
            className="flex-1 flex flex-col h-full items-center justify-end min-w-0 overflow-hidden"
          >
            <div className="flex-1 min-h-0 w-full">
              <div className="flex flex-col items-center justify-center overflow-clip rounded-inherit size-full">
                <div className="flex flex-col items-center justify-center px-4 py-[14px] relative w-full">
                  <div className="flex items-center justify-center gap-1">
                    <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] text-[14px] text-center text-white tracking-[0.1px] whitespace-nowrap">
                      Reports
                    </p>
                  </div>
                  <div className="absolute bg-[#7dc4ff] bottom-0 h-[2px] left-0 right-0" />
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Divider */}
        <div className="flex flex-col items-start justify-center w-full">
          <div className="h-0 w-full relative">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 1">
                <line stroke="#CAC4D0" strokeOpacity="0.25" x2="393" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>


      {/* Halo Image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[80vw] h-[80vw] min-w-[500px] min-h-[500px] max-w-[600px] max-h-[600px] sm:w-[70vw] sm:h-[70vw] md:w-[60vw] md:h-[60vw] lg:w-[50vw] lg:h-[50vw]">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-[#7dc4ff] border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <img
            src={haloImage}
            alt="Halo Effect"
            onLoad={() => setImageLoaded(true)}
            className={`absolute inset-0 w-full h-full object-contain animate-pulse-slow transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>

      {/* Bridge coming up text */}
      <p className="absolute left-1/2 -translate-x-1/2 font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] text-[20px] text-center text-white top-[171.23px] w-full max-w-[385.351px] px-4">
        Bridge coming up
      </p>

      {/* Bridge Image */}
      <div className="absolute h-[156.935px] left-1/2 -translate-x-1/2 top-[345.03px] w-[255.893px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 255.893 156.935">
          <g>
            <path d={svgPaths.p4987f00} fill="#7DC4FF" fillOpacity="0.3" />
            <g>
              <path d={svgPaths.p1e4a8170} fill="white" />
              <g>
                <path d={svgPaths.p1d4c6500} fill="white" />
                <path d={svgPaths.p1754d000} fill="white" />
              </g>
            </g>
          </g>
        </svg>
      </div>

      {/* End Session Button */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[624px] w-full max-w-[360px] px-4 flex flex-col items-center justify-center min-h-[44px] py-[3px]">
        <button
          onClick={handleEndSession}
          className="bg-[#9ab89c] h-[48px] rounded-[16px] w-full"
        >
          <div className="flex flex-row items-center justify-center size-full">
            <div className="flex gap-2 items-center justify-center px-4 py-2">
              <p className="font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] text-[#042b48] text-[17px] text-center whitespace-nowrap">
                End Session
              </p>
            </div>
          </div>
        </button>
      </div>
      </div>
    </div>
  );
}