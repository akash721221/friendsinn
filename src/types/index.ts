export interface Room {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
  description: string;
  amenities: string[];
  maxGuests: number;
}

export interface RoomBooking {
  id: string;
  roomId: string;
  roomName: string;
  guestName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  specialRequests: string;
  bookingDate: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface PartyHallInquiry {
  id: string;
  guestName: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: number;
  eventType: string;
  specialRequirements: string;
  inquiryDate: string;
  status: 'pending' | 'contacted' | 'booked' | 'declined';
}

export interface Testimonial {
  id: string;
  customerName: string;
  rating: number;
  review: string;
  date: string;
  avatar?: string;
}

export interface NewTestimonial {
  customerName: string;
  rating: number;
  review: string;
}

export interface Facility {
  icon: string;
  name: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}