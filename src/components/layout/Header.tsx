import React from 'react';
import { Zap, X, ChevronRight, Menu, ChevronDown, Globe, MessageSquare, Home, Box, Swords, Crown, Users, MoreVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  setIsChatOpen: (open: boolean) => void;
  scrolled: boolean;
}

const navLinks = [
  { name: 'Home', icon: Home },
  { name: 'Boxes', icon: Box },
  { name: 'Battles', icon: Swords },
  { name: 'VIP Members', icon: Crown },
  { name: 'Affiliates', icon: Users },
];

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen, setIsChatOpen, scrolled }) => {
  return (
    <>
      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-[200] bg-bg/95 backdrop-blur-2xl flex flex-col p-8 lg:hidden"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 accent-gradient rounded-md flex items-center justify-center shadow-lg shadow-accent/20">
                  <Zap className="w-6 h-6 fill-white text-white" />
                </div>
                <span className="text-xl font-black tracking-tighter uppercase italic">Dropheat</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-white/5 rounded-md border border-white/10">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-8">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href="#" 
                  className="text-2xl font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors flex items-center justify-between group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center gap-4">
                    <link.icon className="w-6 h-6" />
                    {link.name}
                  </div>
                  <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                </a>
              ))}
            </nav>

            <div className="mt-auto space-y-4">
               <button className="w-full bg-white/5 border border-white/10 text-white font-black py-4 rounded-md uppercase tracking-widest text-sm">
                  Login
               </button>
               <button className="w-full accent-gradient text-white font-black py-4 rounded-md uppercase tracking-widest text-sm shadow-xl shadow-accent/20">
                  Authorization
               </button>
               <div className="flex gap-4">
                  <div className="flex-1 flex items-center justify-center gap-2 bg-white/5 py-3 rounded-md border border-white/5">
                    <img src="https://flagcdn.com/w20/us.png" alt="US" className="w-4 h-3 rounded-sm" />
                    <span className="text-xs font-bold">EN</span>
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-2 bg-white/5 py-3 rounded-md border border-white/5">
                    <Globe className="w-4 h-4 text-gray-500" />
                    <span className="text-xs font-bold">USD</span>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className={`relative z-100 transition-all duration-300 ${scrolled ? 'bg-bg/90 backdrop-blur-xl py-2 border-b border-white/5' : 'bg-bg py-2.5'}`}>
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div onClick={() => {}} className="text-lg font-black cursor-pointer tracking-tighter flex items-center gap-2 group">
              <div className="w-7 h-7 accent-gradient rounded-md flex items-center justify-center shadow-lg shadow-accent/20 group-hover:rotate-12 transition-transform">
                 <Zap className="w-4 h-4 fill-white text-white" />
              </div>
              <span className="text-gradient hidden sm:block">DROPHEAT</span>
            </div>
            
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map(link => (
                <div key={link.name} className="flex cursor-pointer items-center gap-2 text-[10px] font-bold text-gray-400 hover:text-white transition-all relative group uppercase tracking-widest">
                  <link.icon className="w-3.5 h-3.5" />
                  {link.name}
                  {link.name === 'Home' && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full" />}
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 px-2 sm:px-2.5 py-1.5 rounded-md border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
              <img src="https://flagcdn.com/w20/us.png" alt="US" className="w-4 h-3 object-cover rounded-sm" />
              <span className="text-[10px] font-bold uppercase">EN</span>
              <ChevronDown className="w-3 h-3 text-gray-500" />
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-white/5 px-2.5 py-1.5 rounded-md border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
              <Globe className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-[10px] font-bold uppercase">USD</span>
              <ChevronDown className="w-3 h-3 text-gray-500" />
            </div>
            <button className="accent-gradient hover:opacity-90 text-white font-black px-3 sm:px-5 py-2 rounded-md transition-all active:scale-95 text-[10px] uppercase tracking-widest shadow-xl shadow-accent/20">
              Authorization
            </button>
            <button className="p-1.5 bg-white/5 rounded-md border border-white/5 lg:hidden block hover:bg-white/10 transition-colors" onClick={() => setIsChatOpen(true)}>
              <MessageSquare className="w-4 h-4 text-gray-400" />
            </button>
            <button className="lg:hidden p-1.5 bg-white/5 rounded-md border border-white/5 hover:bg-white/10 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-4 h-4" /> : <MoreVertical className="w-4 h-4 text-gray-400" />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
