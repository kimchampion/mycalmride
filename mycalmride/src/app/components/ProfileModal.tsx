import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ChevronRight } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const navigate = useNavigate();
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
      // Small delay to ensure the DOM is ready before animating
      setTimeout(() => {
        setIsAnimating(true);
      }, 10);
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setIsClosing(true);
    setTimeout(() => {
      setShouldRender(false);
      onClose();
      setIsClosing(false);
    }, 300);
  };

  const handleNavigate = (path: string) => {
    // Navigate immediately and close modal without animation
    setShouldRender(false);
    onClose();
    navigate(path, { state: { fromProfile: true } });
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      <div
        className={`absolute bottom-0 left-0 right-0 bg-[#042b48] rounded-t-[20px] transition-transform duration-300 ease-out ${
          isAnimating ? 'translate-y-0' : 'translate-y-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={handleClose}
              className="text-[#7DC4FF] text-[17px] font-['SF_Pro:Semibold',sans-serif]"
            >
              Close
            </button>
            <h2 className="text-white text-[17px] font-['SF_Pro:Semibold',sans-serif]">
              Profile
            </h2>
            <div className="w-[50px]" />
          </div>

          <div className="flex flex-col items-center mb-8">
            <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#7CA6B0] to-[#9ab89c] mb-4" />
            <h3 className="text-white text-[28px] font-['SF_Pro:Bold',sans-serif]">Demo            </h3>
            <p className="text-white/60 text-[17px] font-['SF_Compact_Text:Regular',sans-serif]">Dublin, CA</p>
          </div>

          <div className="space-y-0 mb-8">
            <button
              onClick={() => handleNavigate('/account')}
              className="w-full flex items-center justify-between py-4 border-b border-white/10"
            >
              <span className="text-white text-[17px] font-['SF_Compact_Text:Regular',sans-serif]">
                Account
              </span>
              <ChevronRight className="text-white/40" size={20} />
            </button>

            <button
              onClick={() => handleNavigate('/ride-strategies')}
              className="w-full flex items-center justify-between py-4 border-b border-white/10"
            >
              <span className="text-white text-[17px] font-['SF_Compact_Text:Regular',sans-serif]">
                Ride Strategies
              </span>
              <div className="flex items-center gap-2">
                <span className="text-white/40 text-[17px] font-['SF_Compact_Text:Regular',sans-serif]">
                  (3)
                </span>
                <ChevronRight className="text-white/40" size={20} />
              </div>
            </button>

            <button
              onClick={() => handleNavigate('/health-insights')}
              className="w-full flex items-center justify-between py-4 border-b border-white/10"
            >
              <span className="text-white text-[17px] font-['SF_Compact_Text:Regular',sans-serif]">
                Health Insights
              </span>
              <ChevronRight className="text-white/40" size={20} />
            </button>

            <button
              onClick={() => handleNavigate('/ride-log')}
              className="w-full flex items-center justify-between py-4 border-b border-white/10"
            >
              <span className="text-white text-[17px] font-['SF_Compact_Text:Regular',sans-serif]">
                Ride Log
              </span>
              <ChevronRight className="text-white/40" size={20} />
            </button>
          </div>

          <button
            onClick={() => handleNavigate('/')}
            className="w-full text-[#D97E7E] text-[17px] font-['SF_Compact_Text:Semibold',sans-serif] py-4"
          >
            Sign Out
          </button>

          <p className="text-white/40 text-center text-[13px] font-['SF_Compact_Text:Regular',sans-serif] mt-8">
            Signing out may lead to loss of unsynced data.
          </p>

          <p className="text-white/40 text-center text-[11px] font-['SF_Compact_Text:Regular',sans-serif] mt-12 mb-4">
            Calm Ride, version 1, All rights reserved
          </p>

          <div className="w-[134px] h-[5px] bg-white rounded-full mx-auto mt-4" />
        </div>
      </div>
    </div>
  );
}
