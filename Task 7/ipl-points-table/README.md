# IPL Points Table

An interactive web application that displays the Indian Premier League (IPL) 2022 cricket points table with live data fetching and automatic sorting by Net Run Rate (NRR).

## Overview

This application fetches real-time IPL 2022 points table data and presents it in an organized, sorted view. Teams are automatically ranked by their Net Run Rate, providing users with an up-to-date standings overview of the tournament.

## Features

- **Real-time Data Fetching**: Pulls the latest IPL 2022 points table from a JSON API
- **Automatic Sorting**: Teams are sorted by Net Run Rate (NRR) in ascending order
- **Loading States**: User-friendly loading spinner while fetching data
- **Error Handling**: Graceful error messages if data loading fails
- **Responsive UI**: Clean and intuitive interface built with React

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: CSS
- **Data Source**: JSON Server API

## Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Development Mode
Start the development server with hot module replacement (HMR):
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

## Project Structure

```
src/
├── App.jsx       - Main application component
├── App.css       - Application styling
└── main.jsx      - React DOM entry point
```

## Data Source

The application fetches IPL 2022 data from:
```
https://my-json-server.typicode.com/FreSauce/json-ipl/data
```
