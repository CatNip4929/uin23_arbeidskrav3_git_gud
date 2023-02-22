import filer from '../resources/filer';


export default function Main(){
    return (
          <div>
      {filer.map((item, index) => (
        <div key={index}>
          <h2>{item.category}</h2>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};