import React, { useState } from 'react';
import { Users, Calendar, Star, Phone, Mail } from 'lucide-react';
import PartyHallModal from './PartyHallModal';

const PartyHallSection: React.FC = () => {
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  const handleInquiry = (inquiryData: any) => {
    // In a real app, this would send data to backend
    console.log('Party Hall Inquiry:', inquiryData);
    // Show success message
    alert('Thank you for your inquiry! We will contact you within 24 hours to discuss your event requirements.');
  };

  return (
    <>
      <section id="party-hall" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Celebrate in Style</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Host unforgettable events in our spacious party hall, perfect for weddings, birthdays, 
              corporate events, and special celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images Gallery */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Party Hall Main View"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                />
                <img
                  src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Party Hall Setup"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                />
              </div>
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Event Celebration"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Hall Features & Amenities</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Users className="text-amber-600" size={20} />
                    <span className="text-gray-700">Capacity: 150 guests</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-amber-600" size={20} />
                    <span className="text-gray-700">All-day availability</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="text-amber-600" size={20} />
                    <span className="text-gray-700">Premium sound system</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="text-amber-600" size={20} />
                    <span className="text-gray-700">LED lighting setup</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="text-lg font-semibold text-gray-800">Additional Services:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Professional event planning assistance</li>
                    <li>• Catering services coordination</li>
                    <li>• Decoration setup support</li>
                    <li>• Audio-visual equipment</li>
                    <li>• Ample parking space</li>
                    <li>• Dedicated event coordinator</li>
                  </ul>
                </div>

                <button
                  onClick={() => setShowInquiryModal(true)}
                  className="w-full bg-amber-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  Contact Us to Book Party Hall
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showInquiryModal && (
        <PartyHallModal
          onClose={() => setShowInquiryModal(false)}
          onInquiry={handleInquiry}
        />
      )}
    </>
  );
};

export default PartyHallSection;