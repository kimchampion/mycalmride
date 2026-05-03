import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export function DriverInitializationScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/halo-display');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-[#042b48] min-h-screen w-full flex flex-col items-center justify-center">
      <div className="flex-1 flex items-center justify-center">
        <svg className="animate-spin h-12 w-12 text-[#9ab89c]" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      </div>

      <div className="mb-12">
        <button
          onClick={() => navigate(-1)}
          className="px-8 py-3 border-2 border-[#7CA6B0] rounded-full text-[#7CA6B0] font-['SF_Compact_Text:Semibold',sans-serif] text-[17px]"
        >
          Cancel
        </button>
      </div>

      <div className="absolute bottom-8 left-0 right-0">
        <div className="w-[134px] h-[5px] bg-white rounded-full mx-auto" />
      </div>
    </div>
  );
}
