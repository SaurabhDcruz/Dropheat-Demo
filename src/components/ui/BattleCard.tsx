import React from 'react';
import { Swords } from 'lucide-react';
import { Battle } from '../../data/mockData';

export const BattleCard: React.FC<{ battle: Battle }> = ({ battle }) => (
  <div className="bg-[#111114] rounded-md p-2 flex items-center gap-3 border border-white/5 group hover:bg-white/[0.02] transition-all duration-300">
    {/* Players Section */}
    <div className="bg-[#16161E] rounded-md p-1.5 flex items-center gap-4 shrink-0 border border-white/5">
      {/* Team 1 */}
      <div className="flex -space-x-3">
        <img 
          src="https://i.pravatar.cc/150?u=1" 
          alt="player" 
          className="relative z-20 w-10 h-10 rounded-md border-2 border-[#16161E] object-cover shadow-xl" 
          referrerPolicy="no-referrer" 
        />
        <img 
          src="https://i.pravatar.cc/150?u=2" 
          alt="player" 
          className="relative z-10 w-10 h-10 rounded-md border-2 border-[#16161E] object-cover shadow-xl" 
          referrerPolicy="no-referrer" 
        />
      </div>

      <div className="flex items-center justify-center">
        <Swords className="w-3.5 h-3.5 text-[#4FACFE] opacity-60" />
      </div>

      {/* Team 2 */}
      <div className="flex -space-x-3">
        <img 
          src="https://i.pravatar.cc/150?u=3" 
          alt="player" 
          className="relative z-20 w-10 h-10 rounded-md border-2 border-[#16161E] object-cover shadow-xl" 
          referrerPolicy="no-referrer" 
        />
        <img 
          src="https://i.pravatar.cc/150?u=4" 
          alt="player" 
          className="relative z-10 w-10 h-10 rounded-md border-2 border-[#16161E] object-cover shadow-xl" 
          referrerPolicy="no-referrer" 
        />
      </div>
    </div>
    
    {/* Boxes Section with Gradient Border */}
    <div className="flex-1 h-[76px] relative">
      {/* Gradient Border Container */}
      <div 
        className="absolute inset-0 rounded p-[1px]"
        style={{ 
          background: `linear-gradient(90deg, rgba(57, 255, 136, 0.4) 0%, transparent 40%, transparent 60%, rgba(57, 255, 136, 0.4) 100%)` 
        }}
      >
        <div className="w-full h-full rounded-md bg-[#0F1914] flex items-center px-4 overflow-hidden relative">
          <div className="animate-marquee flex gap-4 items-center">
            {[...battle.items, ...battle.items, ...battle.items, ...battle.items, ...battle.items, ...battle.items].map((item, i) => (
              <div key={i} className="relative w-[80px] h-[80px] shrink-0 hover:scale-110 transition-transform duration-500">
                <img 
                  src={item} 
                  alt="box" 
                  className="w-full h-full object-contain" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            ))}
          </div>
          
          {/* Fade Edge */}
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0F1914] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#0F1914] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </div>

    {/* Price & Action */}
    <div className="flex flex-col items-center gap-2 shrink-0 px-4 min-w-[130px]">
      <div className="flex items-baseline gap-1">
        <span className="text-[16px] font-bold text-white tracking-tight">${battle.price.toFixed(0)}</span>
        <span className="text-[12px] font-bold text-white/30">.00</span>
      </div>
      <button className="w-full bg-[#6366F1] hover:bg-[#4F46E5] text-white font-bold py-2 rounded-md transition-all text-[11px] uppercase tracking-wider shadow-lg shadow-indigo-500/20">
        Open case
      </button>
    </div>
  </div>
);

