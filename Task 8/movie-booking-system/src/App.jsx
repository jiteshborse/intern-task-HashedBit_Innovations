import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import BookingForm from './pages/BookingForm';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <BookingProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/booking" element={<BookingForm />} />
              <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;