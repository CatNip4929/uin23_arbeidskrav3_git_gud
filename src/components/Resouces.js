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
