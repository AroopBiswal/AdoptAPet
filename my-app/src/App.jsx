import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


//components
import Header from './components/header/header';

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
      <Routes>

        <Route path="/" element={<Header />} />

      </Routes>


    </Router>
  );
}
  