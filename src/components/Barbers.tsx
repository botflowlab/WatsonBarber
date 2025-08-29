import React from 'react';
import { Star, Instagram, Facebook } from 'lucide-react';

const barbers = [
  {
    name: 'Marcus Johnson',
    specialty: 'Classic Cuts & Beard Styling',
    experience: '8 years',
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 4.9,
    description: 'Master of traditional barbering techniques with a modern twist'
  },
  {
    name: 'David Rodriguez',
    specialty: 'Modern Styles & Fades',
    experience: '6 years',
    image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 4.8,
    description: 'Expert in contemporary cuts and precision fade techniques'
  },
  {
    name: 'Alex Thompson',
    specialty: 'Creative Styling',
    experience: '5 years',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 4.9,
    description: 'Innovative stylist specializing in unique and artistic cuts'
  }
];

const Barbers = () => {
  return (
    <section id="barbers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Barbers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Skilled professionals dedicated to delivering exceptional grooming experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {barbers.map((barber, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={barber.image} 
                  alt={barber.name}
                  className="w-full h-80 object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{barber.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{barber.rating}</span>
                  </div>
                </div>
                
                <p className="text-yellow-600 font-medium mb-1">{barber.specialty}</p>
                <p className="text-sm text-gray-600 mb-3">{barber.experience} experience</p>
                <p className="text-gray-700 mb-4">{barber.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <Instagram className="h-5 w-5 text-gray-600 hover:text-yellow-600 cursor-pointer transition-colors" />
                    <Facebook className="h-5 w-5 text-gray-600 hover:text-yellow-600 cursor-pointer transition-colors" />
                  </div>
                  <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-300 transition-colors">
                    Book with {barber.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Barbers;