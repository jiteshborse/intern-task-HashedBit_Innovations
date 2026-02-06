import React, { createContext, useContext, useState, useEffect } from 'react';

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
    const [bookingData, setBookingData] = useState({
        movie: null,
        userDetails: null,
        bookingId: null,
        selectedTime: null,
        selectedSeats: []
    });

    // Persist booking data to localStorage
    useEffect(() => {
        if (bookingData.movie) {
            localStorage.setItem('bookingData', JSON.stringify(bookingData));
        }
    }, [bookingData]);

    // Restore booking data from localStorage on mount
    useEffect(() => {
        const savedData = localStorage.getItem('bookingData');
        if (savedData) {
            try {
                setBookingData(JSON.parse(savedData));
            } catch (error) {
                console.error('Error restoring booking data:', error);
            }
        }
    }, []);

    const setMovie = (movie) => {
        setBookingData(prev => ({ ...prev, movie }));
    };

    const setUserDetails = (details) => {
        setBookingData(prev => ({ ...prev, userDetails: details }));
    };

    const setSelectedTime = (time) => {
        setBookingData(prev => ({ ...prev, selectedTime: time }));
    };

    const setSelectedSeats = (seats) => {
        setBookingData(prev => ({ ...prev, selectedSeats: seats }));
    };

    const generateBookingId = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let id = '';
        for (let i = 0; i < 8; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setBookingData(prev => ({ ...prev, bookingId: id }));
        return id;
    };

    const resetBooking = () => {
        setBookingData({
            movie: null,
            userDetails: null,
            bookingId: null,
            selectedTime: null,
            selectedSeats: []
        });
        localStorage.removeItem('bookingData');
    };

    return (
        <BookingContext.Provider value={{
            bookingData,
            setMovie,
            setUserDetails,
            setSelectedTime,
            setSelectedSeats,
            generateBookingId,
            resetBooking
        }}>
            {children}
        </BookingContext.Provider>
    );
};