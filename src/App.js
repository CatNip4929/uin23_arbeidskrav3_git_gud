import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import filer from './resources/filer';
import Resouces from './components/Resouces';
import Header from './components/Header';

export default function App() {
  return (
    
    <Router>
      <Header />
      <nav className='nav'>
        {filer.map((item, index) => (
          <Link key={index} to={item.category}>
            {item.category}
          </Link>
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
