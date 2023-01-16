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
    console.log(bearer);
    setBearerToken(bearer);
    localStorage.setItem("BearerToken", bearer);
    console.log("Bearer token set in local storage");
    // console.log("Bearer token fetched");
    // console.log(bearer);
  }

  useEffect(() => {
    if (!bearerSet) {
      fetchBearerToken();
      
      console.log(localStorage.getItem("BearerToken"));
      setBearerSet(true);
    }
    
 });

  return (
    <Router>
      <NavBar />
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/search" element={<SearchPage BearerToken = {bearerToken} />} />

        <Route path="/saved" element={<SearchPage />} />

      </Routes>

    </Router>
  );
}
  