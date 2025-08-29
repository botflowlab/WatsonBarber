import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const TeamExperts = () => {
  const businessInfo = {
    location: '2Q7P+8GW, Av. 6 De las Provincias, Provincia de Alajuela, Alajuela, Costa Rica',
    number: '+506 8680 0468',
    schedule: [
      '9:30 AM - 7:00 PM', // Monday
      '9:30 AM - 7:00 PM', // Tuesday
      '9:30 AM - 7:00 PM', // Wednesday
      '9:30 AM - 7:00 PM', // Thursday
      '9:30 AM - 7:00 PM', // Friday
      '9:30 AM - 7:00 PM', // Saturday
      'CERRADO'            // Sunday
    ]
  };

  return (
    <section className="relative min-h-screen flex items-center" style={{ backgroundColor: '#0c0c0c' }}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 items-center min-h-screen">
          
          {/* Mobile: Photo First, Desktop: Right Column */}
          <div className="relative order-1 lg:order-2 w-full">
            {/* Background Image */}
            <div className="aspect-[4/3] lg:aspect-[3/2] relative overflow-hidden burnt-paper-border">
              <img 
                src="/toolsBarbershop.jpeg"
                alt="Premium grooming tools"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20"></div>
              
              {/* Schedule Card - Desktop Overlay */}
              <div className="hidden lg:block absolute bottom-4 right-4 bg-black/90 backdrop-blur-sm border border-[#BEA185] p-4 max-w-[320px] min-w-[280px] z-50">
                {/* Schedule */}
                <div className="mb-4">
                  <div className="space-y-1">
                    {(() => {
                      const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
                      return days.map((day, index) => {
                        const hours = businessInfo.schedule[index];
                        return (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-[#B8B8B8] text-xs">{day.slice(0, 3)}:</span>
                            <span className="text-white text-xs font-medium">
                              {hours}
                            </span>
                          </div>
                        );
                      });
                    })()}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#333] my-3"></div>

                {/* Location */}
                <div className="flex items-start space-x-3 mb-3">
                  <MapPin className="h-4 w-4 text-[#F6CAA4]" />
                  <span className="text-white text-xs leading-tight">
                    {businessInfo.location}
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-[#333] my-3"></div>

                {/* Contact Info */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-[#F6CAA4]" />
                    <span className="text-white text-xs">
                      {businessInfo.number}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Content After Photo, Desktop: Left Column */}
          <div className="relative z-10 py-10 lg:py-0 text-center lg:text-left order-2 lg:order-1">
            <div className="max-w-lg">
              {/* Main Heading */}
              <h2 className="mb-8">
                <div className="text-white text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tight leading-none mb-2">
                  UN EQUIPO
                </div>
                <div className="text-[#F6CAA4] text-4xl sm:text-5xl lg:text-6xl font-light italic font-serif leading-none">
                  de EXPERTOS
                </div>
              </h2>

              {/* Description */}
              <p className="text-[#B8B8B8] text-lg leading-relaxed mb-12 max-w-md">
                Estamos dedicados a darle la mejor experiencia a cada cliente.
              </p>

              {/* Schedule Appointment Button */}
              <div className="mb-16 flex justify-center lg:justify-start">
                <button className="group relative">
                  <div className="text-white">
                    <div className="text-sm tracking-[0.15em] uppercase font-medium mb-1">
                      Reservá
                    </div>
                    <div className="text-sm tracking-[0.15em] uppercase font-medium border-b border-[#F6CAA4] pb-1 group-hover:border-white transition-colors">
                      tu espacio
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile: Schedule Card Below Content */}
          <div className="lg:hidden order-3 w-full bg-black/90 backdrop-blur-sm border border-[#BEA185] p-4 max-w-[320px] min-w-[280px] mx-auto">
              {/* Schedule */}
              <div className="mb-4">
                <div className="space-y-1">
                  {(() => {
                    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
                    return days.map((day, index) => {
                      const hours = businessInfo.schedule[index];
                      return (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-[#B8B8B8] text-xs">{day.slice(0, 3)}:</span>
                          <span className="text-white text-xs font-medium">
                            {hours}
                          </span>
                        </div>
                      );
                    });
                  })()}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#333] my-3"></div>

              {/* Location */}
              <div className="flex items-start space-x-3 mb-3">
                <MapPin className="h-4 w-4 text-[#F6CAA4]" />
                <span className="text-white text-xs leading-tight">
                  {businessInfo.location}
                </span>
              </div>

              {/* Divider */}
              <div className="border-t border-[#333] my-3"></div>

              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-[#F6CAA4]" />
                  <span className="text-white text-xs">
                    {businessInfo.number}
                  </span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamExperts;