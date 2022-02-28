import React, { useState } from 'react';
import NavBar from './components/NavBar';
import BlackNav from './components/BlackNav';
import CreatePage from './CreatePage';
import FindPage from './FindPage';
import HomePage from './HomePage';
import './CSS/App.css'
import './CSS/HomePage.css'
import './CSS/CreatePage.css'
import './CSS/FindPage.css'



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//Switch has been replace with Routes in react-router-dom v6
//Also, react-router-dom v6 requires your Routes to be surrounded by <Routes>, instead of just needing
//<Router> like before.

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <BlackNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/find" element={<FindPage />} />
        </Routes>
      </div>
    </Router>
  );
  } 
