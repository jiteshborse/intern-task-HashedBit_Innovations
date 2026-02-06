import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { FaCheckCircle, FaTicketAlt, FaCalendarAlt, FaChair, FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

const Confirmation = () => {
    const navigate = useNavigate();
    const { bookingData, resetBooking } = useBooking();

    useEffect(() => {
        if (!bookingData.bookingId || !bookingData.movie || !bookingData.userDetails) {
            navigate('/');
        }
    }, [bookingData, navigate]);

    const handleNewBooking = () => {
        resetBooking();
        navigate('/');
    };

    if (!bookingData.bookingId || !bookingData.movie || !bookingData.userDetails) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
            <div className="container mx-auto section-padding max-w-2xl">
                {/* Success Header */}
                <div className="text-center mb-8 animate-subtle-slide">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
                        <FaCheckCircle className="h-16 w-16 text-green-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
                    <p className="text-gray-600 text-lg">Your tickets have been successfully booked</p>
                </div>

                {/* Main Card */}
                <div className="card p-8 mb-8">
                    {/* Booking ID */}
                    <div className="text-center mb-8 pb-8 border-b border-gray-200">
                        <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-lg mb-4 font-mono text-lg font-bold">
                            <FaTicketAlt />
                            <span>Booking ID: {bookingData.bookingId}</span>
                        </div>
                        <p className="text-gray-600 text-sm mt-2">Save this ID for your reference</p>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Movie Details */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Movie Details</h3>

                            <div className="flex items-start space-x-4">
                                <img
                                    src={bookingData.movie.poster}
                                    alt={bookingData.movie.title}
                                    className="w-24 h-32 object-cover rounded-lg shadow-md"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://via.placeholder.com/96x128/dbeafe/0369a1?text=${encodeURIComponent(bookingData.movie.title)}`;
                                    }}
                                />
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg text-gray-900">{bookingData.movie.title}</h4>
                                    <p className="text-gray-600 text-sm mb-3">{bookingData.movie.language}</p>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center space-x-2 text-gray-700">
                                            <FaCalendarAlt className="text-blue-600" />
                                            <span>Show Time: <strong>{bookingData.selectedTime}</strong></span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-gray-700">
                                            <FaChair className="text-blue-600" />
                                            <span>Duration: <strong>{bookingData.movie.duration}</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Personal Details */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Booking Information</h3>

                            <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                                <div className="flex items-start space-x-3">
                                    <FaUser className="text-blue-600 mt-1" />
                                    <div>
                                        <p className="text-xs text-gray-600 font-medium">Name</p>
                                        <p className="font-semibold text-gray-900">{bookingData.userDetails.name}</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <FaEnvelope className="text-blue-600 mt-1" />
                                    <div>
                                        <p className="text-xs text-gray-600 font-medium">Email</p>
                                        <p className="font-semibold text-gray-900 break-all">{bookingData.userDetails.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <FaPhone className="text-blue-600 mt-1" />
                                    <div>
                                        <p className="text-xs text-gray-600 font-medium">Phone</p>
                                        <p className="font-semibold text-gray-900">{bookingData.userDetails.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Important Information */}
                    <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 mb-6">
                        <h4 className="font-bold text-lg text-gray-900 mb-3">Important Information</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start space-x-2">
                                <span className="text-blue-600 font-bold">•</span>
                                <span>Please arrive at the theater 30 minutes before showtime</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-blue-600 font-bold">•</span>
                                <span>Carry a valid ID proof matching the booking name</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-blue-600 font-bold">•</span>
                                <span>Show this booking confirmation at the ticket counter</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-blue-600 font-bold">•</span>
                                <span>Tickets are non-refundable and non-transferable</span>
                            </li>
                        </ul>
                    </div>

                    {/* Email Confirmation */}
                    <div className="text-center mb-6">
                        <p className="text-gray-600">
                            A confirmation email with your ticket details has been sent to <strong>{bookingData.userDetails.email}</strong>
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <button
                        onClick={handleNewBooking}
                        className="btn-primary px-8 py-3 font-semibold"
                    >
                        Book Another Movie
                    </button>
                    <Link
                        to="/"
                        className="btn-secondary px-8 py-3 font-semibold text-center"
                    >
                        Back to Home
                    </Link>
                </div>

                {/* Support */}
                <div className="text-center text-gray-600">
                    <p>Need help? Contact our support</p>
                    <p className="font-semibold text-gray-900">1800-123-4567 or support@cinebook.com</p>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;