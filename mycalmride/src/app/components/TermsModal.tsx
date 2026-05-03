interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'terms' | 'privacy';
}

export function TermsModal({ isOpen, onClose, type }: TermsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-[#042b48] w-full max-w-[393px] mx-4 rounded-[20px] overflow-hidden flex flex-col max-h-[80vh]">
        <div className="p-6 pb-4">
          <h2 className="text-white text-[22px] font-['SF_Pro:Bold',sans-serif] leading-[28px]">
            How We Use Your Data
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-6">
          <div className="space-y-4 text-white/80 text-[14px] font-['SF_Compact_Text:Regular',sans-serif] leading-[20px]">
            <p className="font-['SF_Compact_Text:Semibold',sans-serif] text-white">
              Terms of Use (between CalmRide and end user)
            </p>

            <p>
              Scroll, swipe and read the following Terms & Conditions carefully. By visiting or interacting with this display, you agree to the following:
            </p>

            <div className="space-y-3">
              <p className="font-['SF_Compact_Text:Semibold',sans-serif] text-white/90">
                DEFINITIONS
              </p>

              <div>
                <p className="font-['SF_Compact_Text:Medium',sans-serif] text-white/90">
                  1. Information and Use Only
                </p>
                <p className="text-white/70">
                  Content shown is for demonstration and informational use only. Not to be used as legal advice or instruction.
                </p>
              </div>

              <div>
                <p className="font-['SF_Compact_Text:Medium',sans-serif] text-white/90">
                  2. No Liability
                </p>
                <p className="text-white/70">
                  CalmRide assumes absolutely no responsibility for any actions taken based on the content shown.
                </p>
              </div>

              <div>
                <p className="font-['SF_Compact_Text:Medium',sans-serif] text-white/90">
                  3. User Responsibility
                </p>
                <p className="text-white/70">
                  Users are responsible for their own decisions and actions while viewing this content.
                </p>
              </div>

              <div>
                <p className="font-['SF_Compact_Text:Medium',sans-serif] text-white/90">
                  4. No Endorsement
                </p>
                <p className="text-white/70">
                  Content shown is for demonstration use only. Users should not interact with or rely on this display at the discretion of unsafe behavior.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 pt-4">
          <button
            onClick={onClose}
            className="w-full bg-[#9ab89c] text-[#042b48] h-[48px] rounded-[16px] font-['SF_Compact_Text:Semibold',sans-serif] text-[17px] leading-[22px]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
