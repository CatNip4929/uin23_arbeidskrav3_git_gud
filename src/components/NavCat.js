import { NavLink } from 'react-router-dom';

export default function NavCat(catNav) {
    return (
      <nav className='nav'>
      {catNav.filer ? catNav.filer.map((item, index) => (
          <NavLink key={index} to={item.category} activeClassName="active">
            {item.category}
          </NavLink>
        )) : null}
      </nav>
    );
  }

//NavLink for å definere navigasjonslinker
//Sjekker om catNav.filer eksisterer og inneholder verdier, hvis den gjør det vil map funksjonen kjøre og rendre componenter for hver item. Finnes det ikke verdier så vil null rendres istedenfor, her blir ? brukt for å unngå evt error.
//activeclassname brukes for å definere den aktive CSS-klassen, så når en Navlink er trykket på så vil knappen kjøre active
//item.category brukes for å printe ut tekst i nav
//https://reactrouter.com/en/main/components/nav-link
//https://medium.com/how-to-react/add-an-active-classname-to-the-link-using-react-router-b7c350473916
//https://medium.com/geekculture/stop-using-for-conditional-rendering-in-react-a0f7b96200f8
//Bruk av ? hentet fra Webtrick LMS