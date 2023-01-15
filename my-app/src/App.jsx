import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


//components
import NavBar from './components/navBar/navBar';
import HomePage from './pages/homePage/homePage';
import SearchPage from './pages/searchPage/searchPage';

export default function App() {

  return (
    <Router>
      <NavBar />
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/search" element={<SearchPage />} />

        <Route path="/saved" element={<SearchPage />} />

      </Routes>

    </Router>
  );
}
  