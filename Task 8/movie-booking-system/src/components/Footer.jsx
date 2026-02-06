import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-16">
            <div className="container mx-auto section-padding py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-2">CineBook</h3>
                        <p className="text-gray-400 text-sm">
                            Your premier destination for movie bookings
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-white transition">Movies</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-white transition">Theaters</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-white transition">About</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="text-gray-400 hover:text-white transition">Help Center</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-white transition">FAQs</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-white transition">Contact Us</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-white transition">Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-white transition">Terms of Service</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-white transition">Cancellation</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8">
                    <p className="text-center text-gray-400 text-sm">&copy; {new Date().getFullYear()} CineBook. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;