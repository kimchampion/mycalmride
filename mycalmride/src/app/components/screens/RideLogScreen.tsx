import { useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';

export function RideLogScreen() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/overview', { state: { openProfile: true } });
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
          Ride Log
        </h1>
        <div className="w-[50px]" />
      </div>

      <div className="flex-1 flex items-center justify-center px-6">
        <p className="text-white/60 text-center text-[17px] font-['SF_Compact_Text:Regular',sans-serif]">
          Your ride history will appear here
        </p>
      </div>

      <div className="absolute bottom-8 left-0 right-0">
        <div className="w-[134px] h-[5px] bg-white rounded-full mx-auto" />
      </div>
    </div>
  );
}
