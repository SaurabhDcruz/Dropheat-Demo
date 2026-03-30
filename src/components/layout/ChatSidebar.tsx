import React from 'react';
import { MessageSquare, X, Smile, Send, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage } from '../../data/mockData';

interface ChatSidebarProps {
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
  chatMessages: ChatMessage[];
}

export const ChatSidebar: React.FC<ChatSidebarProps> = ({ isChatOpen, setIsChatOpen, chatMessages }) => {
  return (
    <>
      {/* --- Mobile Chat Overlay --- */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 z-[200] bg-[#111114] flex flex-col lg:hidden"
          >
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-[#111114]">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-gray-400" />
                <span className="text-[13px] font-bold text-white tracking-tight">Chat</span>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-md border border-white/5 ml-2">
                  <div className="w-2 h-2 bg-[#39FF88] rounded-md shadow-[0_0_8px_rgba(57,255,136,0.6)]" />
                  <span className="text-[11px] font-bold text-white tracking-wide">12, 490</span>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-md border border-white/10">
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-[#111114]">
              {chatMessages.map(msg => (
                <div key={msg.id} className="flex gap-3">
                  <img src={msg.avatar} alt={msg.user} className="w-9 h-9 rounded-md shrink-0 object-cover border border-white/5" referrerPolicy="no-referrer" />
                  <div className="flex flex-col gap-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[12px] font-bold text-gray-400">{msg.user}</span>
                      <span className="text-[11px] text-gray-600 font-medium">{msg.time}</span>
                    </div>
                    <div className="text-[12px] text-gray-200 leading-relaxed bg-[#1A1A20] p-3 rounded-md border border-white/5">
                      {msg.message}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-white/5 bg-[#111114]">
              <div className="flex bg-[#1A1A20] rounded-xl overflow-hidden border border-white/5 focus-within:border-white/10 transition-colors">
                <div className="relative flex-1">
                  <input 
                    type="text" 
                    placeholder="Enter your message" 
                    className="w-full bg-transparent py-4 px-5 text-[13px] text-white focus:outline-none pr-12 placeholder:text-gray-500 font-medium"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/5 rounded-full cursor-pointer hover:bg-white/10 transition-colors">
                    <Smile className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <button className="bg-[#7C3AED] w-[60px] flex items-center justify-center hover:bg-[#6D28D9] transition-all group shrink-0">
                  <Send className="w-5 h-5 text-white fill-white group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Right Sidebar (Chat) --- */}
      <aside className="hidden lg:flex flex-col w-80 border-l border-white/5 bg-[#111114] sticky top-0 h-screen z-50">
        <div className="p-4 border-b border-white/5 flex items-center justify-between bg-[#111114]">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-gray-400" />
            <span className="text-[13px] font-bold text-white tracking-tight">Chat</span>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-md border border-white/5 ml-2">
               <div className="w-2 h-2 bg-[#39FF88] rounded-md shadow-[0_0_8px_rgba(57,255,136,0.6)]" />
               <span className="text-[11px] font-bold text-white tracking-wide">12, 490</span>
            </div>
          </div>
          <button className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-md border border-white/10 hover:bg-white/10 transition-colors group">
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-6 hide-scrollbar bg-[#111114]">
          {chatMessages.map(msg => (
            <div key={msg.id} className="flex gap-3 group">
              <img src={msg.avatar} alt={msg.user} className="w-9 h-9 rounded-md shrink-0 object-cover border border-white/5" referrerPolicy="no-referrer" />
              <div className="flex flex-col gap-1.5 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-bold text-gray-400 group-hover:text-white transition-colors cursor-pointer">{msg.user}</span>
                  <span className="text-[11px] text-gray-600 font-medium">{msg.time}</span>
                </div>
                <div className="text-[12px] text-gray-200 leading-relaxed bg-[#1A1A20] p-3 rounded-md border border-white/5 hover:border-white/10 transition-colors">
                  {msg.message}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-white/5 bg-[#111114]">
          <div className="flex bg-[#1A1A20] rounded-xl overflow-hidden border border-white/5 focus-within:border-white/10 transition-colors">
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Enter your message" 
                className="w-full bg-transparent py-4 px-5 text-[13px] text-white focus:outline-none pr-12 placeholder:text-gray-500 font-medium"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/5 rounded-full cursor-pointer hover:bg-white/10 transition-colors">
                <Smile className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <button className="bg-[#7C3AED] w-[60px] flex items-center justify-center hover:bg-[#6D28D9] transition-all group shrink-0">
              <Send className="w-5 h-5 text-white fill-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
