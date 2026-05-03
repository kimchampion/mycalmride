interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  loading?: boolean;
  disabled?: boolean;
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  loading = false,
  disabled = false
}: ButtonProps) {
  const baseStyles = "h-[48px] rounded-[16px] w-full flex items-center justify-center px-[16px] py-[8px] font-['SF_Compact_Text:Semibold',sans-serif] text-[17px] leading-[22px] transition-opacity";

  const variantStyles = {
    primary: disabled
      ? 'bg-[#56807F] text-[#042b48] opacity-50'
      : 'bg-[#9ab89c] text-[#042b48]',
    secondary: disabled
      ? 'bg-[#7CA6B0] text-white opacity-50'
      : 'bg-[#7CA6B0] text-white',
    tertiary: disabled
      ? 'bg-[#709D9A] text-white opacity-50'
      : 'bg-[#709D9A] text-white'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading...
        </div>
      ) : children}
    </button>
  );
}
