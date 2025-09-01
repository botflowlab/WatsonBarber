import React, { useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const businessInfo = {
    name: 'Steven Tabach',
    location: 'Watson Barber, Provincia de San José, San José, 10903',
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

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  // WhatsApp phone number
  const whatsappNumber = '50686800468';

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `¡Hola! Me gustaría agendar una cita en ${businessInfo.name}

*Información de contacto:*
Nombre: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}

*Mensaje:*
${formData.message}

¡Gracias!`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  // Google Maps embed URL
  const mapEmbedUrl = "https://www.google.com/maps/embed/v1/place?key=AIzaSyA7KW8Lw_2WXIMj8Vsbe6HSf6EW58WXu7Y&q=2Q7P%2B8GW%2C%20Av.%206%20De%20las%20Provincias%2C%20Provincia%20de%20Alajuela%2C%20Alajuela%2C%20Costa%20Rica";

  return (
    <section id="contact" className="py-20 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-8">
            <div className="text-white text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tight leading-none mb-2">
              VISITA
            </div>
            <div className="text-[#F6CAA4] text-4xl sm:text-5xl lg:text-6xl font-light italic font-serif leading-none">
              NUESTRO LOCAL
            </div>
          </h2>
          <p className="text-[#B8B8B8] text-lg leading-relaxed max-w-3xl mx-auto">
            Te esperamos en nuestro espacio diseñado para brindarte la mejor experiencia
          </p>
        </div>
        
        {/* Large Google Map */}
        <div className="mb-16">
          <div className="w-full h-96 lg:h-[500px] rounded-lg overflow-hidden border border-[#BEA185]">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Business Location"
            ></iframe>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-[#F6CAA4] mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Ubicación</h3>
                <p className="text-[#B8B8B8]">
                  {businessInfo.location}
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-[#F6CAA4] mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Teléfono</h3>
                <p className="text-[#B8B8B8]">
                  {businessInfo.number}
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-[#F6CAA4] mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Horarios</h3>
                <div className="text-[#B8B8B8] space-y-1">
                  {(() => {
                    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
                    return days.map((day, index) => {
                      const hours = businessInfo.schedule[index];
                      return (
                        <p key={index}>
                          {day}: {hours}
                        </p>
                      );
                    });
                  })()}
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <button className="bg-[#BEA185] text-black px-8 py-4 font-bold tracking-wider uppercase hover:bg-[#D4B896] transition-colors w-full sm:w-auto">
                RESERVÁ TU ESPACIO
              </button>
            </div>
          </div>
          
          <div className="bg-black/50 backdrop-blur-sm border border-[#BEA185] rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Envíanos un Mensaje</h3>
            <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#F6CAA4] mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-[#333] rounded-lg text-white focus:ring-2 focus:ring-[#BEA185] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#F6CAA4] mb-2">
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-[#333] rounded-lg text-white focus:ring-2 focus:ring-[#BEA185] focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#F6CAA4] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-black/50 border border-[#333] rounded-lg text-white focus:ring-2 focus:ring-[#BEA185] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#F6CAA4] mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-black/50 border border-[#333] rounded-lg text-white focus:ring-2 focus:ring-[#BEA185] focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#BEA185] text-black py-3 font-bold tracking-wider uppercase hover:bg-[#D4B896] transition-colors"
              >
                ENVIAR POR WHATSAPP
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;