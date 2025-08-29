import React from 'react';
import { Scissors } from 'lucide-react';
import { useBusinessInfo } from '../hooks/useBusinessInfo';

interface FooterProps {
  slug?: string;
}

const Footer = ({ slug }: FooterProps) => {
  const { businessInfo, loading } = useBusinessInfo(slug);

  return (
    <footer className="bg-[#0c0c0c] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Left Column - Address and Phone */}
          <div className="text-center md:text-left">
            <div className="text-[#B8B8B8] text-base mb-3">
              {loading ? 'Loading...' : businessInfo?.location || '127 East 59th street, 2nd Floor'}
            </div>
            <div className="text-white text-3xl font-light">
              {loading ? 'Loading...' : businessInfo?.number || '(212) 355-0660'}
            </div>
          </div>

          {/* Center Column - Schedule and CTA */}
          <div className="text-center">
            {/* Schedule */}
            <div className="mb-8">
              {loading ? (
                <div className="text-[#B8B8B8] text-base">Loading schedule...</div>
              ) : businessInfo?.schedule ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* First Column: Lunes - Jueves */}
                  <div className="space-y-2">
                    {(() => {
                      const weekdays = ['Lunes:', 'Martes:', 'Miércoles:', 'Jueves:'];
                      return weekdays.map((day, index) => {
                        const hours = businessInfo.schedule[index];
                        return (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-[#B8B8B8] text-base">{day}</span>
                            <span className="text-white text-base font-medium">
                              {hours && hours.trim() !== '' && hours.trim().toLowerCase() !== 'closed' ? hours : 'CERRADO'}
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
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-[#B8B8B8] text-base">{day}</span>
                            <span className="text-white text-base font-medium">
                              {hours && hours.trim() !== '' && hours.trim().toLowerCase() !== 'closed' ? hours : 'CERRADO'}
                            </span>
                          </div>
                        );
                      });
                    })()}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Default Schedule - First Column */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[#B8B8B8] text-base">Lunes:</span>
                      <span className="text-white text-base font-medium">10AM - 7PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#B8B8B8] text-base">Martes:</span>
                      <span className="text-white text-base font-medium">10AM - 7PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#B8B8B8] text-base">Miércoles:</span>
                      <span className="text-white text-base font-medium">10AM - 7PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#B8B8B8] text-base">Jueves:</span>
                      <span className="text-white text-base font-medium">10AM - 7PM</span>
                    </div>
                  </div>
                  
                  {/* Default Schedule - Second Column */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[#B8B8B8] text-base">Viernes:</span>
                      <span className="text-white text-base font-medium">10AM - 7PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#B8B8B8] text-base">Sábado:</span>
                      <span className="text-white text-base font-medium">10AM - 6PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#B8B8B8] text-base">Domingo:</span>
                      <span className="text-white text-base font-medium">CERRADO</span>
                    </div>
                  </div>
                </div>
              )}
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
              © 2025. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;