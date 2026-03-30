import React from 'react';
import { LayoutGrid, ChevronDown } from 'lucide-react';

export const SortFilterBar: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
      {/* Left side: Title */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-1 h-5 bg-[#8B5CF6] rounded shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
        <h2 className="text-lg font-black tracking-tighter uppercase italic text-white">
          Featured Boxes
        </h2>
      </div>
      


      {/* Center: Tabs (Group Button) */}
      <div className="flex justify-center flex-1">
        <div className="flex bg-[#1A1A20] p-1 rounded-md border border-white/5">
          {['Featured', 'New Boxes', 'Top Boxes'].map((tab, i) => (
            <button 
              key={tab} 
              className={`px-6 py-2 rounded-md text-[11px] font-bold transition-all uppercase tracking-wider ${
                i === 0 ? 'bg-[#8B5CF6] text-white shadow-lg shadow-indigo-500/20' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      {/* Right side: Sort by */}
      <div className="flex items-center justify-end gap-3 shrink-0">
        <div className="flex items-center gap-2 bg-[#1A1A20] px-5 py-2.5 rounded-md border border-white/5 text-[11px] font-medium text-gray-500 cursor-pointer hover:bg-white/[0.03] transition-colors uppercase tracking-wider">
          Sort by: <span className="text-white font-bold">Price</span>
          <ChevronDown className="w-4 h-4 text-gray-500 ml-1" />
        </div>
      </div>
    </div>
  );
};
