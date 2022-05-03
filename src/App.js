import React from 'react';
import NavBar from './navbar/NavBar';
import BlackNav from './navbar/BlackNav';
import CreatePage from './pages/CreatePage';
import FindPage from './pages/FindPage';
import HomePage from './pages/HomePage';
import UpdatePage from './pages/UpdatePage';
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
          <Route path="/update/:id" element={<UpdatePage /> } />
        </Routes>
      </div>
    </Router>
  );
} 

