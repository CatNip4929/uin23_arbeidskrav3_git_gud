import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import filer from './resources/filer';
import Resouces from './components/Resouces';
import Header from './components/Header';

export default function App() {
  return (
    
    <Router>
      <Header />
      <nav className='nav'>
        {filer.map((item, index) => (
          <NavLink key={index} to={item.category} activeclassname="active">
            {item.category}
          </NavLink>
        ))}
      </nav>
      <article className='article'>
      <Routes>
        {filer.map((item, index) => (
          <Route key={index} path={item.category} element={<Resouces category={item.category} />} />
        ))}
      </Routes>
      </article>
    </Router>
  );
}
