import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


//components
import HomePage from './pages/homePage/homePage';
import NavBar from './components/navBar/navBar';

// export default class App extends React.Component {
//   render() {
//     return (
//       <Header />
//     );
//   }
// }

export default function App() {

  return (
    <Router>
      <NavBar />
      <Routes>

        <Route path="/" element={<HomePage />} />

      </Routes>


    </Router>
  );
}
  