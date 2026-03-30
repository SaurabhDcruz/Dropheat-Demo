import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const Hero: React.FC = () => {
  return (
    <section className="grid lg:grid-cols-4 gap-3 h-auto lg:h-[417px]">
      {/* Main Hero Section with Slider */}
      <div className="lg:col-span-3 relative overflow-hidden rounded-2xl bg-[linear-gradient(270deg,#9747FF_-1.39%,#232325_78.26%)] border border-white/5 min-h-[320px] lg:h-full group shadow-2xl">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="h-full"
        >
          {/* Slide 1: Sign Up */}
          <SwiperSlide>
            <div className="relative h-full p-6 md:p-10 flex flex-col justify-center">
              {/* Globe Pattern */}
              <div className="absolute left-0 bottom-0 w-full h-full opacity-20 pointer-events-none z-0">
                <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -left-10 -bottom-10 w-[110%] h-[110%]">
                  <circle cx="400" cy="400" r="399.5" stroke="white" strokeOpacity="0.3" />
                  <ellipse cx="400" cy="400" rx="399.5" ry="150" stroke="white" strokeOpacity="0.2" />
                  <ellipse cx="400" cy="400" rx="150" ry="399.5" stroke="white" strokeOpacity="0.2" />
                </svg>
              </div>

              <div className="relative z-10 max-w-md flex flex-col h-full justify-start pt-10">
                <h1 className="font-display font-bold text-[44px] leading-[48px] tracking-[-0.02em] text-white">
                  Sign Up today <br />
                  and claim your <br />
                  FREE box
                </h1>
                <div className="mt-4">
                  <p className="text-white/60 font-body-alt font-medium text-[14px] leading-[20px] tracking-[-0.02em] max-w-[320px]">
                    Unlock YOUR Free Box Today! Each box is a treasure trove of excitement waiting to be discovered. Don't miss out – dive into the unknown with us!
                  </p>
                </div>
                <div className="mt-[35px]">
                  <button className="w-[119px] h-[47px] flex items-center justify-center gap-2 rounded-md bg-[linear-gradient(180deg,#7848FF_0%,#6254FF_100%)] text-white font-display font-bold text-[12px] uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/20">
                    Claim now
                  </button>
                </div>
              </div>

              {/* Hero Image */}
              <div className="absolute right-0 bottom-0 w-[50%] h-full pointer-events-none z-0">
                <div className="relative w-full h-full flex items-end justify-end">
                  <div className="relative w-full h-[90%]">
                    <img 
                      src="../src/assets/hero2.png" 
                      alt="Luxury Items" 
                      className="absolute w-full right-10 bottom-0  h-auto object-contain z-10"
                      referrerPolicy="no-referrer"
                    />
                    <img 
                      src="../src/assets/hero1.png" 
                      alt="Branded Box" 
                      className="absolute  drop-shadow-2xl right-0 bottom-3 w-full h-full object-contain object-right-bottom z-20"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute right-[15%] bottom-[20%] bg-[#00FF88] text-black text-[10px] font-black px-3 py-1 rounded-md rotate-12 shadow-lg z-30 uppercase">
                      Free
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Referral Section */}
      <div className="lg:col-span-1 relative overflow-hidden rounded-2xl bg-[#1A1A20] border border-white/5 p-6 flex flex-col group min-h-[320px] lg:h-full shadow-2xl">
        {/* Layered Gradient Background */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#9747FF_0%,#232325_65.35%)] opacity-50"></div>
        
        <div className="relative z-10 space-y-3">
          <div className="relative inline-block">
            <h2 className="font-display font-bold text-[28px] leading-[30px] tracking-[-0.02em] text-white ">
              Earn up to 10% on deposits from <br /> your friends
            </h2>
            <div className="absolute right-[110px] top-12 bg-[#FF00FF] text-white text-[10px] font-black px-1 py-1 rounded-md shadow-lg rotate-12 transform border border-white/10">
              5%
            </div>
          </div>
          <p className="text-white/40 font-body-alt font-medium text-[14px] leading-[20px] tracking-[-0.02em] max-w-[180px]">
            Give your friends a 5% bonus added to all their cash deposits
          </p>
        </div>

        <div className="relative flex-1 mt-4">
          <div className="relative w-full h-full">
            <img 
              src="../src/assets/hero3.png" 
              alt="Referral" 
              className="w-full absolute -bottom-[24px] h-full object-contain drop-shadow-2xl z-0 scale-110 origin-bottom" 
              referrerPolicy="no-referrer" 
            />
            
            <div className="absolute left-[18px] bottom-[20px] z-20">
              <button className="w-[144px] h-[47px] flex items-center justify-center gap-2 rounded-md bg-[#39FF88] hover:bg-[#00E67A] text-black font-display font-bold text-[12px] uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#39FF88]/20">
                Refer a friend
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
