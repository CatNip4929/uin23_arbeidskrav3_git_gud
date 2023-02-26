import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import filer from "./Resources/filer";
import Resouces from "./components/Resouces";

export default function App() {
  return (
    <Router>
      <nav>
        {filer.map((item, index) => (
          <Link key={index} to={item.category}>
            {item.category}
          </Link>
        ))}
      </nav>
      <Routes>
        {filer.map((item, index) => (
          <Route
            key={index}
            path={item.category}
            element={<Resouces category={item.category} />}
          />
        ))}
      </Routes>
    </Router>
  );
}
