import React from 'react';
import { Scissors } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0c0c0c' }}>
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
          
          {/* Left Column - Logo and Navigation */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full">
            {/* Logo */}
            <div className="text-center lg:text-left mb-12 lg:mb-0">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="relative">
                  <Scissors className="h-12 w-12 text-[#BEA185]" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 border border-[#BEA185] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-amber-100 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="text-white text-lg font-light tracking-[0.15em] uppercase">
                Watson Barber
              </div>
              <div className="text-[#BEA185] text-xs tracking-[0.2em] uppercase font-light mt-1">
                Costa Rica
              </div>
            </div>

            {/* Services Menu */}
            <div className="hidden lg:block">
              <h3 className="text-[#FDF2E8] text-sm font-medium tracking-[0.1em] uppercase mb-6 border-b border-gray-700 pb-2">
                Servicios
              </h3>
              <nav className="space-y-3">
                <div className="text-[#F3C7A1] text-sm tracking-wide uppercase font-light hover:text-white transition-colors cursor-pointer">
                  Corte de cabello
                </div>
                <div className="text-[#F3C7A1] text-sm tracking-wide uppercase font-light hover:text-white transition-colors cursor-pointer">
                  Estilizado de barba
                </div>
                <div className="text-[#F3C7A1] text-sm tracking-wide uppercase font-light hover:text-white transition-colors cursor-pointer">
                  Corte y barba
                </div>
                <div className="text-[#F3C7A1] text-sm tracking-wide uppercase font-light hover:text-white transition-colors cursor-pointer">
                  Perfilado de cejas
                </div>
              </nav>
            </div>
          </div>

          {/* Center Column - Main Heading */}
          <div className="lg:col-span-6 text-center">
            <div className="relative">
              {/* Business Name */}
              <div className="">
                <h2 className="text-[#BEA185] text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.15em] uppercase">
                  Steven Tabach
                </h2>
              </div>
              
              <h1 className="text-[#FDF2E8] font-extralight leading-none mb-4">
                <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight uppercase">
                  CUIDADO
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#F6CAA4] tracking-wide italic font-serif font-extralight -mt-2">
                  para HOMBRES
                </div>
              </h1>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-start">
            {/* Schedule Button */}
            <div className="mb-8">
              <button className="group relative overflow-hidden">
                <div className="border border-[#BEA185] rounded-full p-6 hover:bg-[#BEA185] transition-all duration-300 group-hover:scale-105">
                  <div className="text-center">
                    <div className="text-white group-hover:text-black text-xs tracking-[0.15em] uppercase font-medium mb-1">
                      Reservar
                    </div>
                    <div className="text-white group-hover:text-black text-xs tracking-[0.15em] uppercase font-medium">
                      un espacio
                    </div>
                  </div>
                </div>
              </button>
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:block">
              <div className="w-16 h-16 border border-[#BEA185] rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border border-[#BEA185] rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#BEA185] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-amber-200 to-transparent"></div>
        <div className="w-2 h-2 bg-amber-200 rounded-full mx-auto mt-2 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;