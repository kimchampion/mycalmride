import { useNavigate } from 'react-router';
import { ChevronLeft, Heart } from 'lucide-react';

export function HealthInsightsScreen() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/overview', { state: { openProfile: true } });
  };

  return (
    <div className="bg-[#042b48] min-h-screen w-full flex flex-col p-4">
      <div className="flex items-center justify-between pt-8 mb-8">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-[#7DC4FF] text-[17px] font-['SF_Pro:Semibold',sans-serif]"
        >
          <ChevronLeft size={24} />
          <span>Back</span>
        </button>
        <h1 className="text-white text-[17px] font-['SF_Pro:Semibold',sans-serif]">
          Health Insights
        </h1>
        <div className="w-[50px]" />
      </div>

      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-[#D97E7E] rounded-[20px] flex items-center justify-center">
          <Heart className="text-white" size={40} fill="white" />
        </div>
      </div>

      <h2 className="text-white text-[22px] font-['SF_Pro:Bold',sans-serif] mb-4">
        One thing before we get started
      </h2>

      <div className="space-y-4 text-white/80 text-[15px] font-['SF_Compact_Text:Regular',sans-serif] leading-[21px]">
        <p>
          Health Insights uses your Apple Health data to highlight trends in activity, sleep, and vital signs, and to provide personalized summaries.
        </p>

        <div className="space-y-3 mt-6">
          <h3 className="text-white font-['SF_Compact_Text:Semibold',sans-serif] text-[17px]">
            What you'll see
          </h3>
          <p>
            Highlights of your daily and weekly activity.
          </p>
          <p>
            Trends in sleep and wellness metrics for you to view and understand meaningful changes.
          </p>
        </div>

        <div className="space-y-3 mt-6">
          <h3 className="text-white font-['SF_Compact_Text:Semibold',sans-serif] text-[17px]">
            Your data, protected
          </h3>
          <p>
            Your health data is encrypted and stays on your device unless you choose to share it in the Cloud.
          </p>
          <p>
            Health Insights is for informational purposes only and is not a substitute for professional medical advice.
          </p>
        </div>
      </div>

      <div className="flex gap-4 mt-auto mb-8">
        <button className="flex-1 bg-transparent border border-white/30 text-white/60 py-3 rounded-[12px] font-['SF_Compact_Text:Semibold',sans-serif] text-[17px]">
          Don't Allow
        </button>
        <button className="flex-1 bg-[#7CA6B0] text-white py-3 rounded-[12px] font-['SF_Compact_Text:Semibold',sans-serif] text-[17px]">
          Allow
        </button>
      </div>

      {/*<div className="w-[134px] h-[5px] bg-white rounded-full mx-auto" /> */}
    </div>
  );
}
