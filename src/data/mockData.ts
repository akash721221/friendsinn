import { Room, RoomBooking, PartyHallInquiry, Testimonial, Facility, FAQ } from '../types';

export const rooms: Room[] = [
  {
    id: '1',
    name: 'Deluxe Single Room',
    type: 'Single',
    price: 2500,
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Comfortable single room with modern amenities, perfect for solo travelers or business guests.',
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'TV', 'Room Service', 'Complimentary Breakfast'],
    maxGuests: 1
  },
  {
    id: '2',
    name: 'Premium Double Room',
    type: 'Double',
    price: 4000,
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Spacious double room with elegant furnishing and premium amenities for couples or friends.',
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'TV', 'Mini Bar', 'Room Service', 'Complimentary Breakfast'],
    maxGuests: 2
  },
  {
    id: '3',
    name: 'Family Suite',
    type: 'Suite',
    price: 6500,
    image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Large family suite with separate living area, perfect for families or groups of friends.',
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'TV', 'Mini Bar', 'Room Service', 'Complimentary Breakfast', 'Living Area'],
    maxGuests: 4
  },
  {
    id: '4',
    name: 'Executive Room',
    type: 'Executive',
    price: 5500,
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Executive room with work desk and premium amenities, ideal for business travelers.',
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'TV', 'Work Desk', 'Mini Bar', 'Room Service', 'Complimentary Breakfast'],
    maxGuests: 2
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    customerName: 'Priya Sharma',
    rating: 5,
    review: 'Amazing experience at Friends INN! The rooms were clean, staff was friendly, and the location is perfect. Highly recommended for families.',
    date: '2024-01-15'
  },
  {
    id: '2',
    customerName: 'Rajesh Kumar',
    rating: 5,
    review: 'Booked the party hall for my daughter\'s birthday. The arrangements were fantastic and the team helped with everything. Great value for money!',
    date: '2024-01-10'
  },
  {
    id: '3',
    customerName: 'Anita Patel',
    rating: 4,
    review: 'Comfortable stay with excellent breakfast. The room was well-maintained and the service was prompt. Will definitely visit again.',
    date: '2024-01-08'
  },
  {
    id: '4',
    customerName: 'Vikram Singh',
    rating: 5,
    review: 'Perfect venue for corporate events. The party hall is spacious and well-equipped. Professional service from start to finish.',
    date: '2024-01-05'
  }
];

export const facilities: Facility[] = [
  { icon: 'Wifi', name: 'Free Wi-Fi', description: 'High-speed internet throughout the property' },
  { icon: 'Car', name: 'Free Parking', description: 'Complimentary parking for all guests' },
  { icon: 'Coffee', name: 'Complimentary Breakfast', description: 'Delicious breakfast included with your stay' },
  { icon: 'Clock', name: '24/7 Front Desk', description: 'Round-the-clock assistance and support' },
  { icon: 'Snowflake', name: 'Air Conditioning', description: 'Climate control in all rooms and common areas' },
  { icon: 'Tv', name: 'Cable TV', description: 'Entertainment with multiple channels' },
  { icon: 'Users', name: 'Party Hall', description: 'Spacious venue for events and celebrations' },
  { icon: 'Shield', name: 'Security', description: '24/7 security for peace of mind' }
];

export const faqs: FAQ[] = [
  {
    question: 'What is the check-in and check-out time?',
    answer: 'Check-in time is 2:00 PM and check-out time is 12:00 PM. Early check-in and late check-out may be available upon request and subject to availability.'
  },
  {
    question: 'Do you provide complimentary breakfast?',
    answer: 'Yes, we provide complimentary breakfast for all our room guests. Breakfast is served from 7:00 AM to 10:00 AM in our dining area.'
  },
  {
    question: 'Is parking available?',
    answer: 'Yes, we provide free parking for all our guests. Our parking area is secure and monitored 24/7.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Room bookings can be cancelled up to 24 hours before check-in without any charges. For party hall bookings, please contact us at least 48 hours in advance.'
  },
  {
    question: 'Can I book the party hall for private events?',
    answer: 'Yes, our party hall is available for private events including birthdays, anniversaries, corporate meetings, and other celebrations. Please contact us for availability and pricing.'
  },
  {
    question: 'Do you allow pets?',
    answer: 'We have a pet-friendly policy. Please inform us in advance if you are traveling with pets so we can make appropriate arrangements.'
  }
];