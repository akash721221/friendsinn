import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RoomCard from './components/RoomCard';
import PartyHallSection from './components/PartyHallSection';
import TestimonialsSection from './components/TestimonialsSection';
import GallerySection from './components/GallerySection';
import FacilitiesSection from './components/FacilitiesSection';
import LocationSection from './components/LocationSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import Toast from './components/Toast';
import { rooms } from './data/mockData';
import { RoomBooking, PartyHallInquiry, Testimonial } from './types';

function App() {
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);
  const [bookings, setBookings] = useState<RoomBooking[]>([]);
  const [inquiries, setInquiries] = useState<PartyHallInquiry[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleAdminLogin = () => {
    // In a real app, this would have proper authentication
    const password = prompt('Enter admin password:');
    if (password === 'admin123') {
      setShowAdminDashboard(true);
    } else if (password !== null) {
      setToast({
        message: 'Invalid password. Please try again.',
        type: 'error'
      });
    }
  };

  const handleRoomBooking = (bookingData: any) => {
    const newBooking: RoomBooking = {
      id: Date.now().toString(),
      ...bookingData
    };
    setBookings(prev => [newBooking, ...prev]);
    setToast({
      message: 'Room booking submitted successfully! We will contact you soon to confirm.',
      type: 'success'
    });
  };

  const handlePartyHallInquiry = (inquiryData: any) => {
    const newInquiry: PartyHallInquiry = {
      id: Date.now().toString(),
      ...inquiryData
    };
    setInquiries(prev => [newInquiry, ...prev]);
    setToast({
      message: 'Party hall inquiry sent successfully! We will contact you within 24 hours.',
      type: 'success'
    });
  };

  const handleNewTestimonial = (testimonialData: any) => {
    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      ...testimonialData,
      date: new Date().toISOString().split('T')[0]
    };
    setTestimonials(prev => [newTestimonial, ...prev]);
    setToast({
      message: 'Thank you for your review! It has been added to our testimonials.',
      type: 'success'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header onAdminLogin={handleAdminLogin} />

      {/* Hero Section */}
      <Hero />

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Comfortable Rooms & Suites</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our selection of well-appointed rooms, each designed for comfort and equipped with modern amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onBooking={handleRoomBooking}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Party Hall Section */}
      <PartyHallSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Facilities Section */}
      <FacilitiesSection />

      {/* Location Section */}
      <LocationSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />

      {/* Admin Dashboard Modal */}
      {showAdminDashboard && (
        <AdminDashboard
          onClose={() => setShowAdminDashboard(false)}
          bookings={bookings}
          inquiries={inquiries}
          testimonials={testimonials}
        />
      )}

      {/* Toast Notifications */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default App;