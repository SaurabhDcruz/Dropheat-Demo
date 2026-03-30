import React from 'react';
import { Home, Box, Swords, Crown, Users, Gift, Megaphone, Mail, HelpCircle, FileText, Twitter, Instagram, Youtube, Music2 } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Box, label: 'Boxes' },
    { icon: Swords, label: 'Battles' },
    { icon: Crown, label: 'VIP Members' },
    { icon: Users, label: 'Affiliates' },
  ];

  const bottomItems = [
    { icon: Megaphone, label: 'Announcements' },
    { icon: Mail, label: 'Support' },
    { icon: HelpCircle, label: 'FAQ' },
    { icon: FileText, label: 'Terms' },
  ];

  return (
    <aside className="hidden xl:flex flex-col w-20 bg-[#0D0E12] border-r border-white/5 h-screen sticky top-0 z-[999] overflow-visible">
      {/* Fixed Top Section */}
      <div className="flex flex-col items-center py-6 shrink-0">
        <button className="relative group mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] rounded-md flex items-center justify-center text-white shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform">
            <Gift className="w-8 h-8" />
          </div>
          <div className="absolute -bottom-1 -right-2 bg-[#00FF00] text-[#000] text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-tighter -rotate-12 shadow-lg">
            Free
          </div>
        </button>
      </div>

      {/* Scrollable Section */}
      <div className="flex flex-col items-start gap-4 flex-1 overflow-y-auto hide-scrollbar w-[300px] pointer-events-none pl-[12px]">
        <div className="flex flex-col gap-3">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`w-14 h-14 rounded-md flex items-center justify-center transition-all group relative pointer-events-auto ${
                item.active 
                  ? 'bg-[#1A1B1E] text-white shadow-xl border border-white/5' 
                  : 'text-gray-500 hover:text-white hover:bg-[#1A1B1E]'
              }`}
            >
              <item.icon className={`w-6 h-6 ${item.active ? 'text-white' : 'text-gray-600 group-hover:text-white'}`} />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 bg-[#1A1B1E] border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-[9999] shadow-2xl">
                {item.label}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3 pb-4">
          {bottomItems.map((item) => (
            <button
              key={item.label}
              className="w-14 h-14 rounded-md flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#1A1B1E] transition-all group relative pointer-events-auto"
            >
              <item.icon className="w-6 h-6" />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 bg-[#1A1B1E] border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-[9999] shadow-2xl">
                {item.label}
              </div>
            </button>
          ))}

          {/* Social Section */}
          <div className="w-14 bg-[#1A1B1E] rounded-md flex flex-col items-center py-4 gap-6 border border-white/5 pointer-events-auto">
            <button className="text-gray-600 hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </button>
            <button className="text-gray-600 hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </button>
            <button className="text-gray-600 hover:text-white transition-colors">
              <Music2 className="w-4 h-4" /> {/* TikTok Placeholder */}
            </button>
            <button className="text-gray-600 hover:text-white transition-colors">
              <Youtube className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
