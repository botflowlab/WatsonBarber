import React from 'react';
import { Scissors } from 'lucide-react';

const Footer = () => {
  const businessInfo = {
    location: '2Q7P+8GW, Av. 6 De las Provincias, Provincia de Alajuela, Alajuela, Costa Rica',
    number: '+506 8484 2060',
    schedule: [
      '9:00 AM - 6:00 PM', // Monday
      '9:00 AM - 7:00 PM', // Tuesday
      '9:00 AM - 7:00 PM', // Wednesday
      '9:00 AM - 7:00 PM', // Thursday
      '9:00 AM - 7:00 PM', // Friday
      '10:30 AM - 2:30 PM', // Saturday
      'CERRADO'            // Sunday
    ]
  };

  return (
    <footer className="bg-[#0c0c0c] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Left Column - Address and Phone */}
          <div className="text-center md:text-left">
            <div className="text-[#B8B8B8] text-base mb-3">
              Watson Barber, Provincia de San José, San José, 10903
            </div>
            <div className="text-white text-3xl font-light">
              +506 8680 0468
            </div>
          </div>

          {/* Center Column - Schedule and CTA */}
          <div className="text-center">
            {/* Schedule */}
            <div className="mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* First Column: Lunes - Jueves */}
                <div className="space-y-2">
                  {(() => {
                    const weekdays = ['Lunes:', 'Martes:', 'Miércoles:', 'Jueves:'];
                    return weekdays.map((day, index) => {
                      const hours = businessInfo.schedule[index];
                      return (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="text-[#B8B8B8]">{day}</span>
                          <span className="text-white font-light whitespace-nowrap">
                            {hours}
                          </span>
                        </div>
                      );
                    });
                  })()}
                </div>
                
                {/* Second Column: Viernes - Domingo */}
                <div className="space-y-2">
                  {(() => {
                    const weekend = ['Viernes:', 'Sábado:', 'Domingo:'];
                    return weekend.map((day, index) => {
                      const hours = businessInfo.schedule[index + 4]; // Start from index 4 (Friday)
                      return (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="text-[#B8B8B8]">{day}</span>
                          <span className="text-white font-light whitespace-nowrap">
                            {hours}
                          </span>
                        </div>
                      );
                    });
                  })()}
                </div>
              </div>
            </div>

            {/* Schedule Appointment Button */}
            <div>
              <div className="text-[#BEA185] text-base font-medium tracking-wider uppercase border-b border-[#BEA185] pb-2 cursor-pointer hover:text-white hover:border-white transition-colors">
                RESERVÁ TU ESPACIO
              </div>
            </div>
          </div>

          {/* Right Column - Logo and Copyright */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end mb-6">
              <div className="w-12 h-12 bg-[#BEA185] rounded-full flex items-center justify-center">
                <Scissors className="h-6 w-6 text-black" />
              </div>
            </div>
            <div className="text-[#B8B8B8] text-sm">
              © 2025 Watson Barber. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;