import React from 'react';
import { Star } from 'lucide-react';
import { Delivery } from '../../data/mockData';

export const DeliveryCard: React.FC<{ delivery: Delivery }> = ({ delivery }) => (
  <div className="bg-[#1A1A20] rounded-xl p-5 flex flex-col gap-4 border border-white/5 group hover:bg-white/[0.02] transition-all duration-300">
    {/* Header */}
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-3">
        <img 
          src={delivery.avatar} 
          alt={delivery.user} 
          className="w-10 h-10 rounded-md object-cover border border-white/10" 
          referrerPolicy="no-referrer" 
        />
        <div>
          <h4 className="font-bold text-[13px] text-white leading-tight">{delivery.user}</h4>
          <p className="text-[11px] text-gray-500 font-medium">{delivery.handle}</p>
        </div>
      </div>
      <span className="text-[11px] text-gray-500 font-medium">{delivery.time}</span>
    </div>

    {/* Content */}
    <div className="space-y-2">
      <h3 className="text-[14px] font-bold text-white leading-snug">
        {delivery.review}
      </h3>
      <p className="text-[12px] text-gray-400 leading-relaxed line-clamp-2">
        {delivery.quote}
      </p>
    </div>

    {/* Images */}
    <div className="grid grid-cols-3 gap-2">
      {delivery.items.slice(0, 3).map((item, index) => (
        <div key={index} className="aspect-square rounded-md overflow-hidden bg-white/[0.02] border border-white/5">
          <img 
            src={item} 
            alt="delivery item" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
      ))}
    </div>

    {/* Rating */}
    <div className="flex items-center gap-1 justify-center pt-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-[#39FF88] text-[#39FF88]" />
      ))}
    </div>
  </div>
);

