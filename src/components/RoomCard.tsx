import React, { useState } from 'react';
import { Room } from '../types';
import { Users, Star } from 'lucide-react';
import BookingModal from './BookingModal';

interface RoomCardProps {
  room: Room;
  onBooking: (bookingData: any) => void;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, onBooking }) => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-64 overflow-hidden">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            ₹{room.price}/night
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">{room.name}</h3>
            <div className="flex items-center text-gray-600">
              <Users size={16} className="mr-1" />
              <span className="text-sm">Max {room.maxGuests}</span>
            </div>
          </div>

          <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Amenities:</h4>
            <div className="flex flex-wrap gap-2">
              {room.amenities.slice(0, 3).map((amenity, index) => (
                <span
                  key={index}
                  className="bg-amber-50 text-amber-700 px-2 py-1 rounded-md text-xs"
                >
                  {amenity}
                </span>
              ))}
              {room.amenities.length > 3 && (
                <span className="text-amber-600 text-xs">+{room.amenities.length - 3} more</span>
              )}
            </div>
          </div>

          <button
            onClick={() => setShowBookingModal(true)}
            className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            Book Room
          </button>
        </div>
      </div>

      {showBookingModal && (
        <BookingModal
          room={room}
          onClose={() => setShowBookingModal(false)}
          onBooking={onBooking}
        />
      )}
    </>
  );
};

export default RoomCard;