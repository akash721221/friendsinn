import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mockData';
import { Testimonial, NewTestimonial } from '../types';
import ReviewModal from './ReviewModal';

const TestimonialsSection: React.FC = () => {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [currentTestimonials, setCurrentTestimonials] = useState<Testimonial[]>(testimonials);

  const handleNewReview = (reviewData: NewTestimonial) => {
    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      ...reviewData,
      date: new Date().toISOString().split('T')[0]
    };
    
    setCurrentTestimonials(prev => [newTestimonial, ...prev]);
    console.log('New review added:', newTestimonial);
    alert('Thank you for your review! It has been added to our testimonials.');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <>
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Reviews from Our Happy Customers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Don't just take our word for it. Here's what our guests have to say about their experience at Friends INN.
            </p>
            <button
              onClick={() => setShowReviewModal(true)}
              className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Leave a Review
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                    {getInitials(testimonial.customerName)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.customerName}</h4>
                    <div className="flex items-center mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 text-amber-200" size={24} />
                  <p className="text-gray-700 italic leading-relaxed pl-6">
                    {testimonial.review}
                  </p>
                </div>
                
                <div className="mt-4 text-sm text-gray-500">
                  {new Date(testimonial.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showReviewModal && (
        <ReviewModal
          onClose={() => setShowReviewModal(false)}
          onReview={handleNewReview}
        />
      )}
    </>
  );
};

export default TestimonialsSection;