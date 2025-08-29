import React from 'react';

const BusinessNameClosing = () => {
  return (
    <section className="py-32 bg-[#0c0c0c] text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#BEA185] rounded-full opacity-10"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#BEA185] rounded-full opacity-20"></div>
          
          {/* Business Name */}
          <div className="relative z-10">
            <h1 className="text-[#BEA185] text-3xl sm:text-4xl lg:text-5xl xl:text-9xl font-extralight tracking-[0.1em] uppercase leading-none">
              Watson Barber
            </h1>
            
            {/* Subtitle */}
            <div className="mt-8">
              <div className="text-white text-xl sm:text-2xl lg:text-3xl font-light tracking-[0.15em] uppercase opacity-80">
                Costa Rica
              </div>
            </div>
            
            {/* Decorative line */}
            <div className="mt-12 flex items-center justify-center">
              <div className="w-24 h-px bg-[#BEA185]"></div>
              <div className="mx-6 w-3 h-3 border border-[#BEA185] rounded-full"></div>
              <div className="w-24 h-px bg-[#BEA185]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessNameClosing;