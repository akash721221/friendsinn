import React, { useState } from 'react';
import { X, Download, Eye, Calendar, Users, MessageSquare, Star } from 'lucide-react';
import { RoomBooking, PartyHallInquiry, Testimonial } from '../types';

interface AdminDashboardProps {
  onClose: () => void;
  bookings: RoomBooking[];
  inquiries: PartyHallInquiry[];
  testimonials: Testimonial[];
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  onClose, 
  bookings, 
  inquiries, 
  testimonials 
}) => {
  const [activeTab, setActiveTab] = useState<'bookings' | 'inquiries' | 'reviews'>('bookings');

  const exportData = (data: any[], filename: string) => {
    const csv = convertToCSV(data);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const convertToCSV = (data: any[]) => {
    if (data.length === 0) return '';
    
    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(','),
      ...data.map(row => 
        headers.map(header => 
          typeof row[header] === 'string' && row[header].includes(',') 
            ? `"${row[header]}"` 
            : row[header]
        ).join(',')
      )
    ].join('\n');
    
    return csvContent;
  };

  const getStatusBadge = (status: string) => {
    const statusColors = {
      pending: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
      contacted: 'bg-blue-100 text-blue-800',
      booked: 'bg-green-100 text-green-800',
      declined: 'bg-red-100 text-red-800'
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800'}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2"
          >
            <X size={24} />
          </button>
        </div>

        {/* Stats */}
        <div className="p-6 border-b border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center">
                <Calendar className="text-blue-600 mr-3" size={24} />
                <div>
                  <p className="text-sm text-blue-600">Room Bookings</p>
                  <p className="text-2xl font-bold text-blue-800">{bookings.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center">
                <Users className="text-green-600 mr-3" size={24} />
                <div>
                  <p className="text-sm text-green-600">Party Hall Inquiries</p>
                  <p className="text-2xl font-bold text-green-800">{inquiries.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="flex items-center">
                <MessageSquare className="text-amber-600 mr-3" size={24} />
                <div>
                  <p className="text-sm text-amber-600">Customer Reviews</p>
                  <p className="text-2xl font-bold text-amber-800">{testimonials.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-6 py-3 font-medium ${
              activeTab === 'bookings'
                ? 'text-amber-600 border-b-2 border-amber-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Room Bookings
          </button>
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-6 py-3 font-medium ${
              activeTab === 'inquiries'
                ? 'text-amber-600 border-b-2 border-amber-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Party Hall Inquiries
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-6 py-3 font-medium ${
              activeTab === 'reviews'
                ? 'text-amber-600 border-b-2 border-amber-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Customer Reviews
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          {activeTab === 'bookings' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Room Bookings</h3>
                <button
                  onClick={() => exportData(bookings, 'room-bookings.csv')}
                  className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors flex items-center space-x-2"
                >
                  <Download size={16} />
                  <span>Export CSV</span>
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left">Guest Name</th>
                      <th className="px-3 py-2 text-left">Room</th>
                      <th className="px-3 py-2 text-left">Check-in</th>
                      <th className="px-3 py-2 text-left">Check-out</th>
                      <th className="px-3 py-2 text-left">Guests</th>
                      <th className="px-3 py-2 text-left">Status</th>
                      <th className="px-3 py-2 text-left">Contact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50">
                        <td className="px-3 py-2 font-medium">{booking.guestName}</td>
                        <td className="px-3 py-2">{booking.roomName}</td>
                        <td className="px-3 py-2">{new Date(booking.checkIn).toLocaleDateString()}</td>
                        <td className="px-3 py-2">{new Date(booking.checkOut).toLocaleDateString()}</td>
                        <td className="px-3 py-2">{booking.guests}</td>
                        <td className="px-3 py-2">{getStatusBadge(booking.status)}</td>
                        <td className="px-3 py-2">
                          <div className="text-xs">
                            <div>{booking.email}</div>
                            <div>{booking.phone}</div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'inquiries' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Party Hall Inquiries</h3>
                <button
                  onClick={() => exportData(inquiries, 'party-hall-inquiries.csv')}
                  className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors flex items-center space-x-2"
                >
                  <Download size={16} />
                  <span>Export CSV</span>
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left">Contact Person</th>
                      <th className="px-3 py-2 text-left">Event Type</th>
                      <th className="px-3 py-2 text-left">Event Date</th>
                      <th className="px-3 py-2 text-left">Guests</th>
                      <th className="px-3 py-2 text-left">Status</th>
                      <th className="px-3 py-2 text-left">Contact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {inquiries.map((inquiry) => (
                      <tr key={inquiry.id} className="hover:bg-gray-50">
                        <td className="px-3 py-2 font-medium">{inquiry.guestName}</td>
                        <td className="px-3 py-2">{inquiry.eventType}</td>
                        <td className="px-3 py-2">{new Date(inquiry.eventDate).toLocaleDateString()}</td>
                        <td className="px-3 py-2">{inquiry.guestCount}</td>
                        <td className="px-3 py-2">{getStatusBadge(inquiry.status)}</td>
                        <td className="px-3 py-2">
                          <div className="text-xs">
                            <div>{inquiry.email}</div>
                            <div>{inquiry.phone}</div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Customer Reviews</h3>
                <button
                  onClick={() => exportData(testimonials, 'customer-reviews.csv')}
                  className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors flex items-center space-x-2"
                >
                  <Download size={16} />
                  <span>Export CSV</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                          {testimonial.customerName.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{testimonial.customerName}</h4>
                          <div className="flex items-center space-x-1">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(testimonial.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-700">{testimonial.review}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;