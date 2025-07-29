import React from 'react';
import * as LucideIcons from 'lucide-react';
import { facilities } from '../data/mockData';

const FacilitiesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent size={32} className="text-amber-600" /> : null;
  };

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Premium Facilities & Amenities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide all the modern amenities and services to ensure your stay is comfortable and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl hover:bg-amber-50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {getIcon(facility.icon)}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{facility.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;