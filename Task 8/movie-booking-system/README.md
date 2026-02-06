# Movie Booking System

A modern, responsive web application for browsing movies and booking tickets online.

## 📋 Description

The Movie Booking System is a frontend application that allows users to:
- Browse a catalog of movies with detailed information
- View movie ratings, cast, director, and show timings
- Book tickets for their favorite movies
- Complete the booking process with confirmation details

This application showcases the use of modern React patterns including Context API for state management and responsive design with Tailwind CSS.

## ✨ Features

- **Movie Catalog**: Browse popular movies with compelling visuals and detailed information
- **Movie Details**: View comprehensive information including cast, director, genre, duration, and rating
- **Show Timings**: See available show times for each movie
- **Booking System**: Intuitive booking form to reserve tickets
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **State Management**: Uses Context API for managing booking state across the application
- **Modern UI**: Built with Tailwind CSS for a clean and professional interface

## 🛠️ Tech Stack

- **React**: UI library for building interactive components
- **Vite**: Next-generation build tool for faster development
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Context API**: State management solution
- **JSON**: Movie data storage

## 📁 Project Structure

```
movie-booking-system/
├── public/
│   └── posters/          # Movie poster images
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── MovieCard.jsx
│   ├── context/          # Context API setup
│   │   └── BookingContext.jsx
│   ├── data/             # Static data files
│   │   └── movies.json
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── BookingForm.jsx
│   │   └── Confirmation.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd movie-booking-system
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build the project for production:
```bash
npm run build
```

## 📦 Dependencies

Main dependencies used in this project:
- react
- react-dom
- tailwindcss
- postcss
- autoprefixer
- vite

## 💻 Usage

1. **Home Page**: View the collection of available movies
2. **Movie Details**: Click on a movie card to view detailed information
3. **Book Tickets**: Click the "Book Tickets" button to navigate to the booking form
4. **Complete Booking**: Fill in the booking form with your details
5. **Confirmation**: Receive a confirmation message with booking details

## 📝 Movie Data

Movies are stored in [src/data/movies.json](src/data/movies.json) with the following information:
- Title and language
- Poster image
- Description
- Duration, genre, and rating
- Director and cast
- Available show times

## 🎨 Styling

The application uses:
- **Tailwind CSS** for utility-first styling
- **Custom CSS** in component files for additional customization
- **Responsive design** patterns for mobile-first approach

## 📄 License

This project is created as part of an internship task.
