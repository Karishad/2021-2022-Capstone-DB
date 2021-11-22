import React, { useState } from 'react';
import NavBar from './components/NavBar';
import CreatePage from './CreatePage';
import FindPage from './FindPage';
import HomePage from './HomePage';

import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Switch has been replace with Routes in react-router-dom v6
//Also, react-router-dom v6 requires your Routes to be surrounded by <Routes>, instead of just needing
//<Router> like before.

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/find" element={<FindPage />} />
        </Routes>
      </div>

     
    </Router>
  );
  } 
