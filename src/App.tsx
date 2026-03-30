/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Sidebar } from './components/layout/Sidebar';
import { ChatSidebar } from './components/layout/ChatSidebar';
import { LiveDropsBar } from './components/sections/LiveDropsBar';
import { Hero } from './components/sections/Hero';
import { FeaturedBoxes } from './components/sections/FeaturedBoxes';
import { LatestBattles } from './components/sections/LatestBattles';
import { FreshDeliveries } from './components/sections/FreshDeliveries';
import { Container } from './components/common/Container';
import { productCards, battles, deliveries, liveDrops, chatMessages } from './data/mockData';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = scrollRef.current ? scrollRef.current.scrollTop : window.scrollY;
      setScrolled(scrollY > 20);
    };

    const scrollTarget = scrollRef.current || window;
    scrollTarget.addEventListener('scroll', handleScroll);
    return () => scrollTarget.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-screen flex bg-bg text-white selection:bg-accent selection:text-white overflow-hidden">
      
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 h-screen">
        <Header 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          setIsChatOpen={setIsChatOpen} 
          scrolled={scrolled} 
        />

        <LiveDropsBar liveDrops={liveDrops} />

        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto overflow-x-hidden hide-scrollbar"
        >
          <main className="w-full py-8">
            <Container className="space-y-12">
              <Hero />
              <FeaturedBoxes products={productCards} />
              <LatestBattles battles={battles} />
              <FreshDeliveries deliveries={deliveries} />
            </Container>
          </main>

          <Footer />
        </div>
      </div>

      <ChatSidebar 
        isChatOpen={isChatOpen} 
        setIsChatOpen={setIsChatOpen} 
        chatMessages={chatMessages} 
      />

    </div>
  );
}
