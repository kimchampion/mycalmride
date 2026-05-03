import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';

export function DestinationScreen() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');

  const handleStartRide = () => {
    if (destination.trim()) {
      navigate('/driver-initialization');
    }
  };

  return (
    <div className="bg-[#042b48] min-h-screen w-full flex flex-col">
      <div className="flex items-center justify-between p-4 pt-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#7DC4FF] text-[17px] font-['SF_Pro:Semibold',sans-serif]"
        >
          <ChevronLeft size={24} />
          <span>Back</span>
        </button>
        <h1 className="text-white text-[17px] font-['SF_Pro:Semibold',sans-serif]">
          Where are you going?
        </h1>
        <div className="w-[50px]" />
      </div>

      <div className="flex-1 flex flex-col items-center px-6 pt-4">
        <p className="text-white/80 text-[20px] font-['SF_Compact_Text:Regular',sans-serif] mb-4 text-left">
          We'll provide insights about the ride ahead
        </p>
        <p className="text-white/80 text-center text-[15px] font-['SF_Compact_Text:Regular',sans-serif] mb-12">
         Enter your destination to get started 
        </p>

        <div className="w-full mb-8">
          <label className="text-white text-[17px] font-['SF_Compact_Text:Semibold',sans-serif] mb-3 block">
            Destination
          </label>
          <input
            type="text"
            placeholder="123 Main Street, City, State"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full bg-transparent border-2 border-[#7CA6B0] rounded-[16px] px-6 py-4 text-white placeholder:text-white/30 font-['SF_Compact_Text:Regular',sans-serif] text-[17px] focus:outline-none focus:border-[#9ab89c]"
          />
        </div>

        <button
          onClick={handleStartRide}
          disabled={!destination.trim()}
          className={`w-full py-4 rounded-[16px] font-['SF_Compact_Text:Semibold',sans-serif] text-[20px] transition-opacity ${
            destination.trim()
              ? 'bg-[#9ab89c] text-[#042b48]'
              : 'bg-[#56807F] text-[#042b48] opacity-50'
          }`}
        >
          Start Ride
        </button>
      </div>

      <div className="absolute bottom-8 left-0 right-0">
       {/* <div className="w-[134px] h-[5px] bg-white rounded-full mx-auto" /> */}
  
      </div>
    </div>
  );
}
