import filer from '../Resources/filer';

export default function ResourcesComponent({ category }) {
  const item = filer.find((item) => item.category === category);

  return (
    <div>
      <h2>{item.category}</h2>
      <p>{item.text}</p>
      <ul>
        {item.sources.map((source, index) => (
          <li key={index}>
            <a href={source.url}>{source.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

//Const item brukes til å kjøre funksjonen find som søker igjennom filer. Her skal den finne objektet som har matchene category verdi
//Så rendres det ut de ulike Resourcesene fra filer.js, der maping blir kjørt i sources for å få ut begge verdiene
//https://medium.com/@ariefbadal21/learn-reactjs-with-me-array-find-dbbdeafe4633