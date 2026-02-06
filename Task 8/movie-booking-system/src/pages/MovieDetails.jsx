import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaClock, FaLanguage, FaCalendarAlt, FaChair, FaUsers } from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';
import moviesData from '../data/movies.json';

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { setMovie, setSelectedTime } = useBooking();
    const [movie, setMovieData] = useState(null);
    const [selectedShowTime, setSelectedShowTime] = useState(null);
    const [loading, setLoading] = useState(true);
    const hasSetMovie = useRef(false);

    useEffect(() => {
        if (!hasSetMovie.current) {
            const foundMovie = moviesData.find(m => m.id === parseInt(id));
            if (foundMovie) {
                hasSetMovie.current = true;
                setMovieData(foundMovie);
                setMovie(foundMovie);
                setLoading(false);
            } else {
                navigate('/');
            }
        }
    }, [id, navigate, setMovie]);

    if (loading || !movie) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="flex flex-col items-center space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-blue-600"></div>
                    <p className="text-gray-600 font-medium">Loading movie details...</p>
                </div>
            </div>
        );
    }

    const handleBookSeat = () => {
        if (selectedShowTime) {
            // Set both movie and selected time, then navigate
            setSelectedTime(selectedShowTime);
            console.log('Book seat clicked, selected time:', selectedShowTime);
            
            // Use a longer delay to ensure state updates
            setTimeout(() => {
                navigate('/booking');
            }, 500);
        } else {
            alert('Please select a show time');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div
                className="h-96 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${movie.poster})` }}
            >
                <div className="absolute inset-0 flex items-end">
                    <div className="container mx-auto section-padding w-full pb-8">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl font-bold text-white mb-4">{movie.title}</h1>
                            <div className="flex items-center space-x-6 flex-wrap gap-4">
                                <div className="flex items-center space-x-2 bg-yellow-400 text-gray-900 px-3 py-1 rounded-lg font-semibold">
                                    <FaStar className="text-sm" />
                                    <span>{movie.rating}/10</span>
                                </div>
                                <div className="flex items-center space-x-2 text-white/90">
                                    <FaClock />
                                    <span>{movie.duration}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-white/90">
                                    <FaLanguage />
                                    <span>{movie.language}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto section-padding py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        {/* Synopsis */}
                        <div className="card p-8 mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Synopsis</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">{movie.description}</p>
                        </div>

                        {/* Show Times */}
                        <div className="card p-8">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900">Select Show Time</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {movie.showTimes.map((time, index) => (
                                    <button
                                        key={index}
                                        className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                                            selectedShowTime === time
                                                ? 'bg-blue-600 text-white shadow-lg'
                                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                        }`}
                                        onClick={() => setSelectedShowTime(time)}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div>
                        <div className="card p-6 sticky top-24">
                            <div className="mb-6">
                                <div className="rounded-lg shadow-lg overflow-hidden aspect-[2/3] bg-gray-200 max-h-72">
                                    <img
                                        src={movie.poster}
                                        alt={movie.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `https://via.placeholder.com/300x450/dbeafe/0369a1?text=${encodeURIComponent(movie.title)}`;
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-5 mb-6">
                                <div>
                                    <p className="text-sm text-gray-600 font-medium mb-1">Release Date</p>
                                    <p className="text-gray-900 font-semibold">{movie.releaseDate}</p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-600 font-medium mb-1">Director</p>
                                    <p className="text-gray-900 font-semibold">{movie.director}</p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-600 font-medium mb-2">Genres</p>
                                    <div className="flex flex-wrap gap-2">
                                        {movie.genre.map((g, index) => (
                                            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                                                {g}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-600 font-medium mb-1">Cast</p>
                                    <p className="text-gray-700 text-sm">{movie.cast.join(', ')}</p>
                                </div>
                            </div>

                            <button
                                onClick={handleBookSeat}
                                className="w-full btn-primary py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={!selectedShowTime}
                            >
                                {selectedShowTime ? `Book Seats for ${selectedShowTime}` : 'Select a Show Time'}
                            </button>

                            <div className="mt-6 pt-6 border-t border-gray-200 space-y-2 text-center text-sm text-gray-600">
                                <p className="text-blue-600 font-semibold">✓ 100% Secure Booking</p>
                                <p className="text-gray-700">Easy seat selection</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;