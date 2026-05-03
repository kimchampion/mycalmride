import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import svgPaths from '../../../imports/Ob1/svg-68f43clsm2';

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding/welcome');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-[#042b48] relative min-h-screen w-full overflow-hidden">
      {/* Status Bar */}
      

      {/* Logo */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[309px] h-[182.495px] w-[328.901px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 329.195 182.788">
          <g>
            <path d={svgPaths.p3ddbe400} fill="#739476" fillOpacity="0.3" stroke="#9AB89C" strokeWidth="0.590173" />
            <path d={svgPaths.p1a4e5b00} fill="#9AB89C" />
            <g>
              <path d={svgPaths.p3be08600} fill="#739476" fillOpacity="0.65" />
              <path d={svgPaths.p21496500} fill="#739476" fillOpacity="0.65" />
              <path d={svgPaths.p20fd0800} fill="#739476" fillOpacity="0.65" />
              <path d={svgPaths.p1fe1700} fill="#739476" fillOpacity="0.65" />
            </g>
            <g>
              <path d={svgPaths.p6697f00} fill="#9AB89C" />
              <path d={svgPaths.pb1b8330} fill="#9AB89C" />
              <path d={svgPaths.p45ee280} fill="#9AB89C" />
              <path d={svgPaths.p1394300} fill="#9AB89C" />
            </g>
          </g>
        </svg>
      </div>

      {/* Home Indicator */}
      <div className="absolute h-[33.405px] left-0 bottom-0 w-full flex items-end justify-center pb-[7.86px]">
        <div className="bg-white h-[4.913px] rounded-[100px] w-[141.48px]" />
      </div>
    </div>
  );
}
