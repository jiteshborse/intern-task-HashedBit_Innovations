import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
            <div className="container mx-auto section-padding">
                <div className="flex items-center justify-between py-4">
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition">
                            <FaFilm className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-white">CineBook</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;