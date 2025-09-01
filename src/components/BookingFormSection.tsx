import React, { useState } from 'react';
import { ChevronDown, ArrowLeft } from 'lucide-react';

interface BookingFormSectionProps {
  slug?: string;
}

const BookingFormSection = ({ slug }: BookingFormSectionProps) => {
  const [selectedServices, setSelectedServices] = useState<{[key: string]: string[]}>({});
  const [subtotal, setSubtotal] = useState(0);
  const [currentStep, setCurrentStep] = useState<'services' | 'barber' | 'datetime'>('services');
  const [selectedBarber, setSelectedBarber] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const serviceCategories = [
    {
      id: 'cabello',
      title: 'Servicios para el Cabello',
      services: [
        { name: 'Corte Básico', price: 8000 },
        { name: 'Corte Premium', price: 10000 },
        { name: 'Corte + Lavado', price: 12000 },
        { name: 'Estilizado', price: 6000 }
      ]
    },
    {
      id: 'barba',
      title: 'Servicios para la Barba',
      services: [
        { name: 'Recorte de Barba', price: 6000 },
        { name: 'Afeitado Clásico', price: 8000 },
        { name: 'Perfilado', price: 5000 },
        { name: 'Tratamiento de Barba', price: 7000 }
      ]
    },
    {
      id: 'bebida',
      title: 'Escoja su bebida de cortesía',
      services: [
        { name: 'Café', price: 0 },
        { name: 'Agua', price: 0 },
        { name: 'Cerveza', price: 0 },
        { name: 'Soda', price: 0 }
      ]
    },
    {
      id: 'tratamientos',
      title: 'Tratamientos Capilares y Faciales',
      services: [
        { name: 'Mascarilla Capilar', price: 15000 },
        { name: 'Tratamiento Anticaspa', price: 12000 },
        { name: 'Limpieza Facial', price: 18000 },
        { name: 'Hidratación Profunda', price: 20000 }
      ]
    },
    {
      id: 'alisados',
      title: 'Alisados y Coloración',
      services: [
        { name: 'Alisado Brasileño', price: 35000 },
        { name: 'Coloración Completa', price: 25000 },
        { name: 'Mechas', price: 20000 },
        { name: 'Retoque de Raíz', price: 15000 }
      ]
    },
    {
      id: 'detalles',
      title: 'Detalles y Acabados',
      services: [
        { name: 'Perfilado de Cejas', price: 5000 },
        { name: 'Limpieza de Oídos', price: 3000 },
        { name: 'Masaje de Cuero Cabelludo', price: 8000 },
        { name: 'Aplicación de Cera', price: 4000 }
      ]
    }
  ];

  // Generate available dates (next 14 days, excluding Sundays)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let currentDate = new Date(today);
    
    while (dates.length < 14) {
      // Skip Sundays (0 = Sunday)
      if (currentDate.getDay() !== 0) {
        dates.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return dates;
  };

  // Generate available time slots
  const getAvailableTimeSlots = () => {
    const slots = [];
    const startHour = 9; // 9 AM
    const endHour = 19; // 7 PM
    
    for (let hour = startHour; hour < endHour; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
      slots.push(`${hour.toString().padStart(2, '0')}:30`);
    }
    
    return slots;
  };

  const formatDate = (date: Date) => {
    const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    
    return {
      dayName: days[date.getDay()],
      dayNumber: date.getDate(),
      month: months[date.getMonth()],
      fullDate: date.toISOString().split('T')[0]
    };
  };

  const formatTime = (time: string) => {
    const [hour, minute] = time.split(':');
    const hourNum = parseInt(hour);
    const ampm = hourNum >= 12 ? 'PM' : 'AM';
    const displayHour = hourNum > 12 ? hourNum - 12 : hourNum === 0 ? 12 : hourNum;
    return `${displayHour}:${minute} ${ampm}`;
  };

  const [expandedCategories, setExpandedCategories] = useState<{[key: string]: boolean}>({});

  const barbers = [
    {
      id: 'escoge-por-mi',
      name: 'Escoge un asistente por mi',
      description: '',
      isRecommended: true
    },
    {
      id: 'bryan-chacon',
      name: 'Bryan Chacón (Ejemplo)',
      description: 'Experiencia por más de 7 años en barbería clásica, moderna y urbana.',
      isRecommended: false
    },
    {
      id: 'jason-cordoba',
      name: 'Jason Córdoba (Ejemplo)',
      description: 'Cuenta con amplia experiencia en barbería clásica, moderna y urbana.',
      isRecommended: false
    },
    {
      id: 'randall-calvo',
      name: 'Randall Calvo (Ejemplo)',
      description: 'Experiencia por más de 12 años en barbería clásica, moderna y urbana.',
      isRecommended: false
    },
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const toggleService = (categoryId: string, serviceName: string, price: number) => {
    setSelectedServices(prev => {
      const categoryServices = prev[categoryId] || [];
      const isSelected = categoryServices.includes(serviceName);
      
      let newCategoryServices;
      if (isSelected) {
        newCategoryServices = categoryServices.filter(s => s !== serviceName);
        setSubtotal(current => current - price);
      } else {
        newCategoryServices = [...categoryServices, serviceName];
        setSubtotal(current => current + price);
      }
      
      return {
        ...prev,
        [categoryId]: newCategoryServices
      };
    });
  };

  const formatPrice = (price: number) => {
    return `₡${price.toLocaleString()}`;
  };

  const handleNextStep = () => {
    if (currentStep === 'services') {
      setCurrentStep('barber');
      // Scroll to top of form
      document.querySelector('.booking-form')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    } else if (currentStep === 'barber') {
      setCurrentStep('datetime');
      // Scroll to top of form
      document.querySelector('.booking-form')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  const handleBackToServices = () => {
    if (currentStep === 'barber') {
      setCurrentStep('services');
      // Scroll to top of form
      document.querySelector('.booking-form')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    } else if (currentStep === 'datetime') {
      setCurrentStep('barber');
      // Scroll to top of form
      document.querySelector('.booking-form')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  const selectBarber = (barberId: string) => {
    setSelectedBarber(barberId);
  };

  const selectDate = (date: string) => {
    setSelectedDate(date);
  };

  const selectTime = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <section className="py-20 bg-[#0c0c0c] relative">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="text-[#BEA185] text-lg tracking-[0.2em] uppercase font-light mb-4">
            RESERVA TU EXPERIENCIA
          </div>
          
          <h2 className="mb-8">
            <div className="text-white text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tight leading-none mb-4">
              RESERVAS
            </div>
          </h2>
        </div>

        {/* Booking Form */}
        <div className="max-w-4xl mx-auto">
          <div className="booking-form bg-[#EFEBE6] rounded-xl p-8 lg:p-12 shadow-2xl min-h-[600px]">
            
            {currentStep === 'services' && (
              <>
                {/* Form Header */}
                <div className="mb-8">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                    Reserva una cita
                  </h3>
                  <p className="text-gray-700 text-lg font-medium">
                    ¿Qué necesitas?
                  </p>
                </div>

                {/* Service Categories */}
                <div className="space-y-4 mb-8">
                  {serviceCategories.map((category) => (
                    <div key={category.id} className="border-b border-gray-300 pb-4">
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-100 rounded-lg px-4 transition-colors"
                      >
                        <span className="text-gray-800 text-lg font-medium">
                          {category.title}
                        </span>
                        <ChevronDown 
                          className={`h-5 w-5 text-gray-600 transition-transform ${
                            expandedCategories[category.id] ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {/* Expanded Services */}
                      {expandedCategories[category.id] && (
                        <div className="mt-4 pl-4 space-y-2">
                          {category.services.map((service) => {
                            const isSelected = selectedServices[category.id]?.includes(service.name) || false;
                            const serviceId = `${category.id}-${service.name.replace(/\s+/g, '-').toLowerCase()}`;
                            return (
                              <div
                                key={service.name}
                                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                              >
                                <div className="flex items-center space-x-3">
                                  <input
                                    type="checkbox"
                                    id={serviceId}
                                    checked={isSelected}
                                    onChange={() => toggleService(category.id, service.name, service.price)}
                                    className="w-4 h-4 text-[#BEA185] border-gray-300 rounded focus:ring-[#BEA185] focus:ring-2"
                                  />
                                  <label htmlFor={serviceId} className="text-gray-700 font-medium cursor-pointer">
                                    {service.name}
                                  </label>
                                </div>
                                <span className="text-gray-800 font-semibold">
                                  {service.price > 0 ? formatPrice(service.price) : 'Gratis'}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Subtotal and Next Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-300">
                  <div className="mb-4 sm:mb-0">
                    <span className="text-gray-800 text-xl font-bold">
                      Subtotal: {formatPrice(subtotal/2)}
                    </span>
                  </div>
                  
                  <button 
                    onClick={handleNextStep}
                    className="bg-[#4A3B30] text-white px-8 py-4 font-bold tracking-wider uppercase hover:bg-[#5A4B40] transition-colors rounded-lg shadow-lg"
                  >
                    SIGUIENTE PASO
                  </button>
                </div>
              </>
            )}

            {currentStep === 'barber' && (
              <>
                {/* Barber Selection Header */}
                <div className="mb-8">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                    Reserva una cita
                  </h3>
                  <p className="text-gray-700 text-lg font-medium">
                    Seleccionar asistente
                  </p>
                </div>

                {/* Barber Selection */}
                <div className="space-y-4 mb-8">
                  {barbers.map((barber) => (
                    <div key={barber.id} className="border-b border-gray-300 pb-4 last:border-b-0">
                      <label className="flex items-start space-x-4 p-4 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="barber"
                          value={barber.id}
                          checked={selectedBarber === barber.id}
                          onChange={() => selectBarber(barber.id)}
                          className="w-6 h-6 text-[#BEA185] border-gray-400 focus:ring-[#BEA185] focus:ring-2 mt-1"
                        />
                        <div className="flex-1">
                          <div className="text-gray-800 text-lg font-medium mb-1">
                            {barber.name}
                          </div>
                          {barber.description && (
                            <div className="text-gray-600 text-sm leading-relaxed">
                              {barber.description}
                            </div>
                          )}
                        </div>
                      </label>
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-300 space-y-4 sm:space-y-0">
                  <button 
                    onClick={handleBackToServices}
                    className="flex items-center space-x-2 border border-gray-400 text-gray-700 px-6 py-3 font-medium tracking-wider uppercase hover:bg-gray-100 transition-colors rounded-lg order-2 sm:order-1"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>VOLVER</span>
                  </button>
                  
                  <button 
                    onClick={handleNextStep}
                    disabled={!selectedBarber}
                    className={`px-8 py-4 font-bold tracking-wider uppercase transition-colors rounded-lg shadow-lg order-1 sm:order-2 ${
                      selectedBarber 
                        ? 'bg-[#4A3B30] text-white hover:bg-[#5A4B40]' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    SIGUIENTE
                  </button>
                </div>
              </>
            )}

            {currentStep === 'datetime' && (
              <>
                {/* Date & Time Selection Header */}
                <div className="mb-8">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                    Reserva una cita
                  </h3>
                  <p className="text-gray-700 text-lg font-medium">
                    Seleccionar fecha y hora
                  </p>
                </div>

                {/* Date Selection */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Fecha</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
                    {getAvailableDates().map((date) => {
                      const formattedDate = formatDate(date);
                      const isSelected = selectedDate === formattedDate.fullDate;
                      
                      return (
                        <button
                          key={formattedDate.fullDate}
                          onClick={() => selectDate(formattedDate.fullDate)}
                          className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                            isSelected
                              ? 'border-[#BEA185] bg-[#BEA185] text-black'
                              : 'border-gray-300 hover:border-[#BEA185] hover:bg-gray-50'
                          }`}
                        >
                          <div className="text-center">
                            <div className={`text-xs font-medium uppercase tracking-wide mb-1 ${
                              isSelected ? 'text-black' : 'text-gray-600'
                            }`}>
                              {formattedDate.dayName}
                            </div>
                            <div className={`text-2xl font-bold mb-1 ${
                              isSelected ? 'text-black' : 'text-gray-800'
                            }`}>
                              {formattedDate.dayNumber}
                            </div>
                            <div className={`text-xs uppercase ${
                              isSelected ? 'text-black' : 'text-gray-600'
                            }`}>
                              {formattedDate.month}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Selection */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Hora</h4>
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                    {getAvailableTimeSlots().map((time) => {
                      const isSelected = selectedTime === time;
                      
                      return (
                        <button
                          key={time}
                          onClick={() => selectTime(time)}
                          className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                            isSelected
                              ? 'border-[#BEA185] bg-[#BEA185] text-black'
                              : 'border-gray-300 hover:border-[#BEA185] hover:bg-gray-50'
                          }`}
                        >
                          <div className={`text-sm font-medium ${
                            isSelected ? 'text-black' : 'text-gray-800'
                          }`}>
                            {formatTime(time)}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-300 space-y-4 sm:space-y-0">
                  <button 
                    onClick={handleBackToServices}
                    className="flex items-center space-x-2 border border-gray-400 text-gray-700 px-6 py-3 font-medium tracking-wider uppercase hover:bg-gray-100 transition-colors rounded-lg order-2 sm:order-1"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>VOLVER</span>
                  </button>
                  
                  <button 
                    disabled={!selectedDate || !selectedTime}
                    className={`px-8 py-4 font-bold tracking-wider uppercase transition-colors rounded-lg shadow-lg order-1 sm:order-2 ${
                      selectedDate && selectedTime
                        ? 'bg-[#4A3B30] text-white hover:bg-[#5A4B40]' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    CONFIRMAR CITA
                  </button>
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingFormSection;