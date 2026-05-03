import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Input } from '../Input';
import { Button } from '../Button';
import { TermsModal } from '../TermsModal';

export function WelcomeScreen() {
  const location = useLocation();
  const [name, setName] = useState('');
  const [email] = useState((location.state as { email?: string })?.email || '');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'terms' | 'privacy'>('terms');
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/loading');
  };

  const openTerms = () => {
    setModalType('terms');
    setModalOpen(true);
  };

  const openPrivacy = () => {
    setModalType('privacy');
    setModalOpen(true);
  };

  return (
    <div className="bg-[#042b48] min-h-screen w-full flex flex-col">
      <div className="pt-8 pb-4">
        <h1 className="text-white text-center text-[34px] font-['SF_Pro:Bold',sans-serif] leading-[41px]">
          Welcome Rider
        </h1>
      </div>

      <div className="flex-1 flex flex-col justify-between px-4 pb-8">
        <div className="space-y-6 mt-12">
          <div>
            <label className="text-[rgba(255,255,255,0.8)] text-[13px] px-4 font-['SF_Compact_Text:Regular',sans-serif]">
              What's your name?
            </label>
            <Input
              placeholder="enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-[rgba(255,255,255,0.8)] text-[13px] px-4 font-['SF_Compact_Text:Regular',sans-serif]">
              What's your email?
            </label>
            <Input
              type="email"
              placeholder="jane.doe@abc.com"
              value={email}
              readOnly
            />
          </div>

          <p className="text-[rgba(255,255,255,0.8)] text-center text-[15px] leading-[20px] px-4 font-['SF_Compact_Text:Medium',sans-serif]">
            you don't need a password to create an account. To login next time we'll send you a special link
          </p>
        </div>

        <div className="space-y-4 mt-8">
          <div className="px-4">
            <Button onClick={handleCreateAccount}>Create Account</Button>
          </div>

          <p className="text-[rgba(255,255,255,0.5)] text-center text-[12px] font-['SF_Compact_Text:Medium',sans-serif]">
            <span>By continuing you agree to our </span>
            <button onClick={openTerms} className="text-white underline">
              terms
            </button>
            <span> and </span>
            <button onClick={openPrivacy} className="text-white underline">
              privacy policy
            </button>
          </p>
        </div>
      </div>

      <div className="h-[34px]" />

      <TermsModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />
    </div>
  );
}
