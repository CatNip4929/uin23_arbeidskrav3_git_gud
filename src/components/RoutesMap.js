import { Routes, Route } from 'react-router-dom';
import Resouces from './Resouces';

export default function RoutesMap(routesNav) {
  return (
    <article className='article'>
      <Routes>
        {routesNav.filer.map((item, index) => (
          <Route key={index} path={item.category} element={<Resouces category={item.category} />} />
        ))}
      </Routes>
    </article>
  );
}

//Her sjekker man om Route komponentet matcher URLen til path attributtet. Hvis den gjør det så vil den rendre element attributtet.
//Dermed vil Resouces componentet med riktig category rendres og kommer opp på skjermen
