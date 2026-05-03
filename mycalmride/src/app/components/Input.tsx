interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  readOnly?: boolean;
}

export function Input({ placeholder, value, onChange, error, type = 'text', readOnly = false }: InputProps) {
  return (
    <div className="w-full px-[16px]">
      <div className="flex flex-col w-full">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          className={`
            w-full px-4 py-3 bg-transparent border-b
            ${error ? 'border-[#D97E7E]' : 'border-[#7CA6B0]'}
            text-white placeholder:text-[rgba(255,255,255,0.5)]
            font-['SF_Compact_Text:Regular',sans-serif] text-[17px]
            focus:outline-none focus:border-[#9ab89c]
            transition-colors
            ${readOnly ? 'opacity-70 cursor-not-allowed' : ''}
          `}
        />
        {error && (
          <p className="text-[#D97E7E] text-[12px] mt-1 font-['SF_Compact_Text:Regular',sans-serif]">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
