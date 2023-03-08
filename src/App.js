import filer from './Resources/filer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import NavCat from './components/NavCat';
import RoutesMap from './components/RoutesMap';

export default function App() {
  return (
  <Router>
    <Header />
    <NavCat filer={filer} />
    <RoutesMap filer={filer} />
  </Router>
  );
}

//Tatt i bruk react-router-dom for nettlesers routing og navigasjon