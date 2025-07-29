import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Visit Us & Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of the city with easy access to major attractions and transportation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-amber-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      123 Hospitality Street<br />
                      City Center, State 560001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-amber-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 9876543210</p>
                    <p className="text-gray-600">+91 9876543211</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-amber-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@friendsinn.com</p>
                    <p className="text-gray-600">bookings@friendsinn.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-amber-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Front Desk Hours</h4>
                    <p className="text-gray-600">24/7 Available</p>
                    <p className="text-gray-600 text-sm">Check-in: 2:00 PM | Check-out: 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Nearby Attractions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• City Mall - 2 minutes walk</li>
                <li>• Metro Station - 5 minutes walk</li>
                <li>• Business District - 10 minutes drive</li>
                <li>• Airport - 30 minutes drive</li>
                <li>• Tourist Attractions - 15 minutes drive</li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Find Us on Map</h3>
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1234567890123!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Friends INN Location"
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <MapPin className="text-amber-600 mx-auto" size={32} />
                  <p className="text-sm font-semibold text-center mt-2">Friends INN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;