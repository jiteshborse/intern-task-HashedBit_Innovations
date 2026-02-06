import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaClock } from 'react-icons/fa';

const MovieCard = ({ movie }) => {
    return (
        <div className="card group overflow-hidden">
            {/* Movie Poster */}
            <div className="relative overflow-hidden bg-gray-200 aspect-[2/3]">
                <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://via.placeholder.com/300x450/dbeafe/0369a1?text=${encodeURIComponent(movie.title)}`;
                    }}
                />
                
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-yellow-400 text-gray-900 px-2.5 py-1.5 rounded-lg text-sm font-bold shadow-md">
                    <FaStar className="text-xs" />
                    {movie.rating}
                </div>
                
                {/* Language Badge */}
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-2.5 py-1.5 rounded-lg text-xs font-semibold shadow-md">
                    {movie.language}
                </div>
            </div>

            {/* Movie Info */}
            <div className="p-4">
                <h3 className="text-gray-900 text-lg font-bold mb-2 line-clamp-1 group-hover:text-blue-600 transition">
                    {movie.title}
                </h3>
                
                <div className="flex items-center gap-3 text-gray-600 text-sm mb-3">
                    <div className="flex items-center gap-1">
                        <FaClock className="text-xs text-blue-600" />
                        <span>{movie.duration}</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <span className="line-clamp-1">{movie.genre.slice(0, 2).join(', ')}</span>
                </div>

                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {movie.description}
                </p>

                <Link
                    to={`/movie/${movie.id}`}
                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                    Book Now
                </Link>
            </div>
        </div>
    );
};

export default MovieCard;