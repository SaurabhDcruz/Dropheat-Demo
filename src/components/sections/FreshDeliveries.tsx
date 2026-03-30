import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { DeliveryCard } from '../ui/DeliveryCard';
import { Delivery } from '../../data/mockData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface FreshDeliveriesProps {
  deliveries: Delivery[];
}

export const FreshDeliveries: React.FC<FreshDeliveriesProps> = ({ deliveries }) => {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-1 h-5 bg-[#8B5CF6] rounded shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
          <h2 className="text-lg font-black flex items-center gap-2 tracking-tighter uppercase italic">
            Fresh Deliveries
          </h2>
        </div>
        <button className="bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md border border-white/5 text-[9px] font-black uppercase tracking-widest text-gray-400 transition-all">
          View All
        </button>
      </div>

      {/* Mobile Swiper for Deliveries */}
      <div className="md:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1.1}
          pagination={{ clickable: true }}
          className="pb-10"
        >
          {deliveries.map(delivery => (
            <SwiperSlide key={delivery.id}>
              <DeliveryCard delivery={delivery} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid for Deliveries */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {deliveries.map(delivery => (
          <DeliveryCard key={delivery.id} delivery={delivery} />
        ))}
      </div>
    </section>
  );
};
