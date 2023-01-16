import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";



//compnents, pages, and scripts
import NavBar from './components/navBar/navBar';
import HomePage from './pages/homePage/homePage';
import SearchPage from './pages/searchPage/searchPage';
import { getBearerToken, search } from './scripts/apiCalls';

export default function App() {

  const[bearerSet, setBearerSet] = useState(false);
  const[bearerToken, setBearerToken] = useState("");

  const fetchBearerToken = async () => { 
    const bearer = await getBearerToken();
    setBearerToken(bearer);
    console.log("Bearer token fetched");
    console.log(bearer);
    setBearerToken(bearer);
    
  }

  useEffect(() => {
    const bearer = localStorage.getItem("bearer");
    if (!bearerSet) {
      fetchBearerToken();
      setBearerSet(true);
    }
    
 });
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
  