import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { FaUser, FaEnvelope, FaPhone, FaChair } from 'react-icons/fa';

const BookingForm = () => {
    const navigate = useNavigate();
    const { bookingData, setUserDetails, generateBookingId } = useBooking();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        seats: 1
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        // Check if user has movie data, if not redirect
        if (!bookingData.movie) {
            const timer = setTimeout(() => {
                navigate('/');
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [bookingData.movie, navigate]);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }

        if (formData.seats < 1 || formData.seats > 10) {
            newErrors.seats = 'Please select between 1 and 10 seats';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);

            setTimeout(() => {
                setUserDetails(formData);
                generateBookingId();
                setIsSubmitting(false);
                navigate('/confirmation');
            }, 1000);
        } else {
            setErrors(validationErrors);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    if (!bookingData.movie) {
        return null;
    }


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
            <div className="container mx-auto section-padding max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Complete Your Booking</h1>
                    <p className="text-gray-600">Enter your details to secure your tickets</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="card p-8">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900">Your Details</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        <FaUser className="inline mr-2 text-blue-600" />
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                                        placeholder="Enter your full name"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        <FaEnvelope className="inline mr-2 text-blue-600" />
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                                        placeholder="Enter your email"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        <FaPhone className="inline mr-2 text-blue-600" />
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                                        placeholder="Enter your 10-digit phone number"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        <FaChair className="inline mr-2 text-blue-600" />
                                        Number of Seats
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <button
                                            type="button"
                                            onClick={() => setFormData(prev => ({ ...prev, seats: Math.max(1, prev.seats - 1) }))}
                                            className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-blue-600 hover:text-white text-xl font-bold transition flex items-center justify-center"
                                        >
                                            −
                                        </button>
                                        <span className="text-3xl font-bold w-12 text-center text-blue-600">{formData.seats}</span>
                                        <button
                                            type="button"
                                            onClick={() => setFormData(prev => ({ ...prev, seats: Math.min(10, prev.seats + 1) }))}
                                            className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-blue-600 hover:text-white text-xl font-bold transition flex items-center justify-center"
                                        >
                                            +
                                        </button>
                                    </div>
                                    {errors.seats && <p className="text-red-500 text-sm mt-1">{errors.seats}</p>}
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full btn-primary py-3 text-lg font-semibold flex items-center justify-center"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                                                Processing...
                                            </>
                                        ) : (
                                            'Confirm Booking'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div>
                        <div className="card p-6 sticky top-24">
                            <h3 className="text-xl font-bold mb-6 text-gray-900">Booking Summary</h3>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={bookingData.movie.poster}
                                        alt={bookingData.movie.title}
                                        className="w-20 h-28 object-cover rounded-lg shadow-md"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `https://via.placeholder.com/80x112/dbeafe/0369a1?text=${encodeURIComponent(bookingData.movie.title)}`;
                                        }}
                                    />
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-900">{bookingData.movie.title}</h4>
                                        <p className="text-gray-600 text-sm">{bookingData.movie.language}</p>
                                        <p className="text-blue-600 font-semibold text-sm">{bookingData.selectedTime}</p>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 pt-4 space-y-3">
                                    <div className="flex justify-between text-gray-700">
                                        <span>Seats</span>
                                        <span className="font-semibold">{formData.seats} × ₹250</span>
                                    </div>
                                    <div className="flex justify-between text-gray-700">
                                        <span>Convenience Fee</span>
                                        <span className="font-semibold">₹30</span>
                                    </div>
                                    <div className="flex justify-between text-gray-700">
                                        <span>Tax</span>
                                        <span className="font-semibold">₹45</span>
                                    </div>
                                    <div className="border-t border-gray-200 pt-3">
                                        <div className="flex justify-between text-lg font-bold text-blue-600">
                                            <span>Total Amount</span>
                                            <span>₹{(formData.seats * 250) + 75}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <p className="text-sm text-blue-800">
                                    <strong>Note:</strong> Confirm you agree with the booking terms
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;