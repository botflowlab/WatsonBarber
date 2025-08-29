import React from 'react';

const StunningServices = () => {
  return (
    <section className="relative min-h-screen py-20" style={{ backgroundColor: '#0c0c0c' }}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title */}
        <div className="text-center mb-20">
          <h2 className="mb-8">
            <div className="text-white text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tight leading-none mb-2">
              NUESTROS
            </div>
            <div className="text-[#F6CAA4] text-4xl sm:text-5xl lg:text-6xl font-light italic font-serif leading-none">
              SERVICIOS
            </div>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Column - Description and First Service */}
          <div className="space-y-16">
            {/* Description */}
            <div className="text-center lg:text-left">
              <p className="text-[#B8B8B8] text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                Nuestros servicios premium están diseñados para realzar la apariencia de un caballero. La barbería y el cuidado masculino son nuestra especialidad: desde cortes de cabello personalizados hasta el cuidado impecable de la barba.
              </p>
            </div>

            {/* First Service - Corte de Cabello */}
            <div className="relative">
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] relative">
                  {/* Golden border frame */}
                  <div className="absolute inset-0 border-4 border-[#BEA185] rounded-lg" style={{
                    clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                  }}></div>
                  
                  <img 
                    src="https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop"
                    alt="Corte de Cabello"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              
              <div className="text-center mt-8">
                <h3 className="text-white text-2xl font-bold font-serif italic tracking-wider uppercase">
                  CORTE DE CABELLO
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column - Two Services */}
          <div className="space-y-16">
            
            {/* Second Service - Corte de Barba */}
            <div className="relative">
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] relative">
                  {/* Golden border frame */}
                  <div className="absolute inset-0 border-4 border-[#BEA185] rounded-lg" style={{
                    clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                  }}></div>
                  
                  <img 
                    src="/beardproduct.jpeg"
                    alt="Corte de Barba"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              
              <div className="text-center mt-8">
                <h3 className="text-white text-2xl font-bold font-serif italic tracking-wider uppercase">
                  CORTE DE BARBA
                </h3>
              </div>
            </div>

            {/* Third Service - Servicio Especial */}
            <div className="relative">
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] relative">
                  {/* Golden border frame */}
                  <div className="absolute inset-0 border-4 border-[#BEA185] rounded-lg" style={{
                    clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                  }}></div>
                  
                  <img 
                    src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop"
                    alt="Servicio Especial"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              
              <div className="text-center mt-8">
                <h3 className="text-white text-2xl font-bold font-serif italic tracking-wider uppercase">
                  SERVICIO ESPECIAL
                </h3>
              </div>
            </div>
          </div>
        </div>

         {/* See All Services Button */}
          <div className="text-center lg:text-center">
            <button className="bg-[#BEA185] text-black px-8 py-3 font-bold tracking-wider uppercase hover:bg-[#D4B896] transition-colors mb-10">
              RESERVAR →
            </button>
          </div>

        {/* Pricing Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-700">
          <div className="text-center">
            <div className="text-[#BEA185] text-4xl md:text-5xl font-bold mb-4">₡8 000</div>
            <div className="text-white text-sm font-bold tracking-wider uppercase mb-2">CORTE BÁSICO</div>
          </div>
          
          <div className="text-center">
            <div className="text-[#BEA185] text-4xl md:text-5xl font-bold mb-4">₡10 000</div>
            <div className="text-white text-sm font-bold tracking-wider uppercase mb-2">CORTE PREMIUM</div>
          </div>
          
          <div className="text-center">
            <div className="text-[#BEA185] text-4xl md:text-5xl font-bold mb-4">₡6 000</div>
            <div className="text-white text-sm font-bold tracking-wider uppercase mb-2">BARBA</div>
          </div>
          
          <div className="text-center">
            <div className="text-[#BEA185] text-4xl md:text-5xl font-bold mb-4">₡5 000</div>
            <div className="text-white text-sm font-bold tracking-wider uppercase mb-2">Perfilado de cejas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StunningServices;