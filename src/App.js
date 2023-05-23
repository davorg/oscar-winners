import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import LoginPage from './LoginPage';
import MovieList from './MovieList';
import UserProfile from './UserProfile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" component={LoginPage} />
        <Route path="/movies" component={MovieList} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/" component={LoginPage} />
      </Routes>
    </Router>
  );
}

export default App;
