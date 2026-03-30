import React from 'react';
import { Product } from '../../data/mockData';
import { Badge } from './Badge';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [whole, decimal] = product.price.toFixed(2).split('.');

  return (
    <div className="bg-[#111114] rounded-[24px] p-5 flex flex-col gap-4 border border-white/5 group transition-all duration-300 hover:bg-[#16161a]">
      {/* Image Area */}
      <div className="relative aspect-square rounded-[20px] overflow-hidden flex items-center justify-center bg-[#16161E]">
        {/* Subtle Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
          {product.badges.map(badge => (
            <Badge key={badge} type={badge}>{badge}</Badge>
          ))}
        </div>
        
        <img 
          src={product.image} 
          alt={product.brand} 
          className="w-[90%] h-[90%] object-contain group-hover:scale-110 transition-transform duration-500 relative z-0"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Info Area */}
      <div className="space-y-3">
        <h3 className="font-bold text-[20px] text-white leading-tight tracking-tight">{product.brand}</h3>
        
        {/* Category Tags */}
        <div className="flex flex-wrap gap-2">
          {product.category.split(', ').map(cat => (
            <span key={cat} className="px-3 py-1.5 bg-white/[0.03] border border-white/5 rounded-lg text-[12px] font-bold text-gray-400">
              {cat}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1 pt-1">
          <span className="text-[24px] font-bold text-white tracking-tight">${whole}</span>
          <span className="text-[16px] font-bold text-white/30">.{decimal}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-auto">
        <button className="flex-1 bg-[#6366f1] hover:bg-[#4f46e5] text-white font-bold py-3.5 rounded-md transition-all text-[14px] shadow-lg shadow-indigo-500/20 active:scale-95">
          Open case
        </button>
        <button className="px-5 bg-[#232328] hover:bg-[#2a2a30] text-white font-bold py-3.5 rounded-md transition-all text-[14px] active:scale-95">
          Info
        </button>
      </div>
    </div>
  );
};

