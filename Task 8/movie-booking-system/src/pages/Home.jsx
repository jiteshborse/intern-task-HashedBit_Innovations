import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import moviesData from '../data/movies.json';
import { FaSearch } from 'react-icons/fa';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [languageFilter, setLanguageFilter] = useState('all');
    const [genreFilter, setGenreFilter] = useState('all');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setMovies(moviesData);
            setFilteredMovies(moviesData);
            setLoading(false);
        }, 500);
    }, []);

    useEffect(() => {
        let filtered = movies;

        if (searchTerm) {
            filtered = filtered.filter(movie =>
                movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                movie.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (languageFilter !== 'all') {
            filtered = filtered.filter(movie => movie.language === languageFilter);
        }

        if (genreFilter !== 'all') {
            filtered = filtered.filter(movie => movie.genre.includes(genreFilter));
        }

        setFilteredMovies(filtered);
    }, [searchTerm, languageFilter, genreFilter, movies]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="flex flex-col items-center space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-blue-600"></div>
                    <p className="text-gray-600 font-medium">Loading movies...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
                <div className="container mx-auto section-padding">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-subtle-slide">
                            Discover & Book Movies
                        </h1>
                        <p className="text-lg text-blue-100 mb-8 animate-subtle-slide" style={{ animationDelay: '0.1s' }}>
                            Stream your favorite films with just a few clicks
                        </p>
                        
                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto mb-6">
                            <div className="relative group animate-subtle-slide" style={{ animationDelay: '0.2s' }}>
                                <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-xl group-focus-within:blur-2xl transition-all duration-300"></div>
                                <div className="relative flex items-center bg-white rounded-lg px-4 py-3 shadow-lg">
                                    <FaSearch className="text-blue-600 mr-3" />
                                    <input
                                        type="text"
                                        placeholder="Search movies, genres, or actors..."
                                        className="w-full bg-transparent focus:outline-none text-gray-900 placeholder-gray-500"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="flex flex-wrap justify-center gap-3 animate-subtle-slide" style={{ animationDelay: '0.3s' }}>
                            <select
                                className="px-4 py-2.5 bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium"
                                value={languageFilter}
                                onChange={(e) => setLanguageFilter(e.target.value)}
                            >
                                <option value="all">All Languages</option>
                                <option value="Hindi">Hindi</option>
                                <option value="English">English</option>
                            </select>

                            <select
                                className="px-4 py-2.5 bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium"
                                value={genreFilter}
                                onChange={(e) => setGenreFilter(e.target.value)}
                            >
                                <option value="all">All Genres</option>
                                <option value="Action">Action</option>
                                <option value="Drama">Drama</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                                <option value="Thriller">Thriller</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto section-padding py-12">
                {/* Movies Count */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Now Showing 
                        <span className="text-blue-600 ml-2">({filteredMovies.length})</span>
                    </h2>
                </div>

                {/* Movies Grid */}
                {filteredMovies.length === 0 ? (
                    <div className="text-center py-24">
                        <div className="text-6xl mb-6">🎬</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No movies found</h3>
                        <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredMovies.map((movie, index) => (
                            <div key={movie.id} className="animate-subtle-slide" style={{ animationDelay: `${index * 50}ms` }}>
                                <MovieCard movie={movie} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;