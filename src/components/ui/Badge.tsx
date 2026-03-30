import React from 'react';

export const Badge: React.FC<{ children: React.ReactNode, type: string }> = ({ children, type }) => {
  const badgeStyles: Record<string, { gradient: string, textColor: string, shadow: string }> = {
    New: {
      gradient: 'bg-[linear-gradient(90deg,#39FF88_0%,#00E67A_100%)]',
      textColor: 'text-black',
      shadow: 'shadow-[#39FF88]/20'
    },
    Hot: {
      gradient: 'bg-[linear-gradient(90deg,#FF793F_0%,#FB3529_100%)]',
      textColor: 'text-white',
      shadow: 'shadow-[#FF793F]/20'
    },
    Popular: {
      gradient: 'bg-[linear-gradient(90deg,#4884FF_0%,#295AFB_100%)]',
      textColor: 'text-white',
      shadow: 'shadow-[#4884FF]/20'
    }
  };

  const style = badgeStyles[type] || badgeStyles.New;

  return (
    <span className={`h-[28px] px-3 rounded-[8px] ${style.gradient} ${style.textColor} flex items-center justify-center text-[11px] font-bold shadow-sm ${style.shadow}`}>
      {children}
    </span>
  );
};

export default Badge;
