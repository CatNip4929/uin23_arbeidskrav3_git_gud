import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import filer from './Resources/filer';
import Resouces from './components/Resouces';
import Header from './components/Header';

// Endra Link til NavLink for å kunne bruke activeclassname funksjonen til å style de forskjellige aktive categorier.
// Endret import browserrouter, endret Link til NavLink.
// https://reactrouter.com/en/main/components/nav-link


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
