import React from 'react';
import { Swords } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { BattleCard } from '../ui/BattleCard';
import { Battle } from '../../data/mockData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface LatestBattlesProps {
  battles: Battle[];
}

export const LatestBattles: React.FC<LatestBattlesProps> = ({ battles }) => {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-1 h-5 bg-[#39FF88] rounded shadow-[0_0_8px_rgba(57,255,136,0.5)]" />
          <h2 className="text-lg font-black flex items-center gap-2 tracking-tighter uppercase italic">
            Latest battles
          </h2>
        </div>
        <button className="bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md border border-white/5 text-[9px] font-black uppercase tracking-widest text-gray-400 transition-all">
          View All
        </button>
      </div>

      {/* Battles Container */}
      <div className="space-y-3">
        {/* Mobile Swiper for Battles */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={1.1}
            pagination={{ clickable: true }}
            className="pb-8"
          >
            {battles.map(battle => (
              <SwiperSlide key={battle.id}>
                <BattleCard battle={battle} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid for Battles */}
        <div className="hidden md:grid grid-cols-1 gap-3">
          {battles.map(battle => (
            <BattleCard key={battle.id} battle={battle} />
          ))}
        </div>
      </div>
    </section>
  );
};
