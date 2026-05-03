import { useNavigate } from 'react-router';
import { useRef, useEffect, useState } from 'react';
import haloImage from '../../../imports/halo_transparent_animated.png';
import navElement1Enabled from '../../../imports/nav-element_1_enabled.png';
import navElement2Enabled from '../../../imports/nav-element_2_enabled.png';
import navElement2Active from '../../../imports/nav-element_2_active.png';
import navElement3Enabled from '../../../imports/nav-element_3_enabled.png';
import navElement4Enabled from '../../../imports/nav-element_4_enabled.png';
import navElement5Enabled from '../../../imports/nav-element_5_enabled.png';
import navElement6Enabled from '../../../imports/nav-element_6_enabled.png';
import navElement7Enabled from '../../../imports/nav-element_7_enabled.png';
import navElement8Enabled from '../../../imports/nav-element_8_enabled.png';
import navElement9Enabled from '../../../imports/nav-element_9_enabled.png';
import navElement10Enabled from '../../../imports/nav-element_10_enabled.png';

const navElements = [
  { id: 1, enabledImage: navElement1Enabled, activeImage: navElement1Enabled },
  { id: 2, enabledImage: navElement2Enabled, activeImage: navElement2Active },
  { id: 3, enabledImage: navElement3Enabled, activeImage: navElement3Enabled },
  { id: 4, enabledImage: navElement4Enabled, activeImage: navElement4Enabled },
  { id: 5, enabledImage: navElement5Enabled, activeImage: navElement5Enabled },
  { id: 6, enabledImage: navElement6Enabled, activeImage: navElement6Enabled },
  { id: 7, enabledImage: navElement7Enabled, activeImage: navElement7Enabled },
  { id: 8, enabledImage: navElement8Enabled, activeImage: navElement8Enabled },
  { id: 9, enabledImage: navElement9Enabled, activeImage: navElement9Enabled },
  { id: 10, enabledImage: navElement10Enabled, activeImage: navElement10Enabled },
  { id: 11, enabledImage: navElement1Enabled, activeImage: navElement1Enabled },
];

export function HaloDisplayScreen() {
  const navigate = useNavigate();
  const activeIndex = 1; // nav-element 2 is active (index 1)
  const scrollRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Scroll active element to center on mount
    if (scrollRef.current) {
      const activeElement = scrollRef.current.children[activeIndex] as HTMLElement;
      if (activeElement) {
        activeElement.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="bg-[#042b48] min-h-screen w-full flex flex-col relative">
      {/* Tabs */}
      <div className="absolute left-0 top-[59.03px] w-full flex flex-col items-start z-20">
        <div className="flex h-[60px] items-start w-full">
          {/* Navigation Tab */}
          <button className="flex-1 flex flex-col h-full items-center justify-end min-w-0 overflow-hidden">
            <div className="flex-1 min-h-0 w-full">
              <div className="flex flex-col items-center justify-center overflow-clip rounded-inherit size-full">
                <div className="flex flex-col items-center justify-center px-4 py-[14px] relative w-full">
                  <div className="flex items-center justify-center gap-1">
                    <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] text-[14px] text-center text-white tracking-[0.1px] whitespace-nowrap">
                      Navigation
                    </p>
                  </div>
                  <div className="absolute bg-[#7dc4ff] bottom-0 h-[2px] left-0 right-0" />
                </div>
              </div>
            </div>
          </button>

          {/* Reports Tab */}
          <button
            onClick={() => navigate('/halo-display/reports')}
            className="flex-1 flex flex-col h-full items-center justify-end min-w-0 overflow-hidden"
          >
            <div className="flex-1 min-h-0 w-full">
              <div className="flex flex-col items-center justify-center overflow-clip rounded-inherit size-full">
                <div className="flex flex-col items-center justify-center px-4 py-[14px] w-full">
                  <div className="flex items-center justify-center gap-1">
                    <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] text-[14px] text-center text-white tracking-[0.1px] whitespace-nowrap">
                      Reports
                    </p>
                  </div>
                  <div className="h-[2px] w-full" />
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

      {/* Navigation Overlay */}
      <div className="flex-1 flex flex-col items-center justify-center w-full z-10 relative">

      <p className="absolute left-1/2 -translate-x-1/2 font-['SF_Compact_Text:Semibold',sans-serif] leading-[22px] text-[20px] text-center text-white top-[171.23px] w-[385.351px]">
        Demo Mode
      </p>
      

        <div
          ref={scrollRef}
          className="flex flex-col items-center gap-8 overflow-y-auto max-h-[450px] py-12 px-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {navElements.map((element, index) => {
            const isActive = index === activeIndex;
            const imageToUse = isActive ? element.activeImage : element.enabledImage;
            return (
              <div
                key={element.id}
                className={`transition-all duration-300 ${
                  isActive ? 'scale-100' : 'scale-75 opacity-50'
                }`}
                style={{
                  filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.8))'
                }}
              >
                <img
                  src={imageToUse}
                  alt={`Nav element ${element.id}`}
                  className="h-auto"
                  style={{ width: isActive ? '280px' : '200px' }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* End Session Button */}
      <div className="absolute left-[17px] top-[724px] w-[360px] flex flex-col items-center justify-center min-h-[44px] py-[3px] z-20">
        <button
          onClick={() => navigate('/overview')}
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
  );
}