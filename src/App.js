import React from "react";
import "./App.css";
import Nav from "./Nav";
import Grafiek from "./Grafiek";
import Nederland from "./Nederland";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nederland' element={<Nederland />} />
          <Route path='/nederland/:cities' element={<Nederland />} />
          <Route path='/grafiek' element={<Grafiek />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className='inhoud'>
    <h2>Home</h2>
  </div>
);

export default App;
