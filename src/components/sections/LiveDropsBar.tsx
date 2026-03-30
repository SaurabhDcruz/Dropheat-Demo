import React from 'react';
import { LiveDrop } from '../../data/mockData';

interface LiveDropsBarProps {
  liveDrops: LiveDrop[];
}

export const LiveDropsBar: React.FC<LiveDropsBarProps> = ({ liveDrops }) => {
  return (
    <div className="bg-[#0B0B0B] border-b border-white/5 overflow-hidden whitespace-nowrap py-4 relative z-40">
      <div className="max-w-[1400px] mx-auto px-4 flex items-center gap-6">
        {/* Live Drops Label */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-5 h-5 rounded-full bg-[#39FF88]/10 flex items-center justify-center">
            <div className="w-2 h-2 bg-[#39FF88] rounded-full shadow-[0_0_8px_#39FF88]" />
          </div>
          <span className="text-[14px] font-bold text-white/90 tracking-tight">Live drops</span>
        </div>
        
        <div className="relative flex-1 overflow-hidden">
          <div className="animate-marquee flex gap-3">
            {[...liveDrops, ...liveDrops, ...liveDrops].map((drop, i) => {
              const [whole, decimal] = drop.price.toFixed(2).split('.');
              return (
                <div 
                  key={`${drop.id}-${i}`} 
                  className="relative w-[169px] h-[75px] shrink-0 group cursor-pointer"
                >
                  {/* Dynamic Gradient Border Container */}
                  <div 
                    className="absolute inset-0 rounded-[8px] p-[1px]"
                    style={{ 
                      background: `linear-gradient(90deg, ${drop.color} -2.07%, transparent 68.17%)` 
                    }}
                  >
                    {/* Inner Content */}
                    <div className="w-full h-full bg-[#111114] rounded-[7px] flex items-center p-2 gap-3 overflow-hidden">
                      {/* Left Side: Prize Image with Background */}
                      <div 
                        className="w-[52px] h-full rounded-[6px] flex items-center justify-center shrink-0 relative overflow-hidden"
                        style={{ backgroundColor: `${drop.color}15` }}
                      >
                        {/* Background Glow */}
                        <div 
                          className="absolute inset-0 opacity-20 blur-md"
                          style={{ backgroundColor: drop.color }}
                        />
                        <img 
                          src={drop.icon} 
                          alt="Drop" 
                          className="w-[85%] h-[85%] object-contain relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" 
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Right Side: Info */}
                      <div className="flex flex-col justify-center min-w-0">
                        <div className="flex items-baseline gap-0.5">
                          <span className="text-[15px] font-bold text-white tracking-tight">${whole}</span>
                          <span className="text-[11px] font-bold text-white/40">.{decimal}</span>
                        </div>
                        <div className="flex items-center gap-1.5 mt-1">
                          <div className="w-4 h-4 rounded-sm overflow-hidden shrink-0">
                            <img 
                              src={`https://i.pravatar.cc/100?u=${drop.user}`} 
                              alt="User" 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <span className="text-[11px] text-white/30 font-medium truncate max-w-[75px]">{drop.user}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Fade Edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
