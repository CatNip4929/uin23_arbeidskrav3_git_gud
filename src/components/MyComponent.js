import React, { useState } from 'react';
import filer from '../resources/filer';

export default function MyComponent() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      {filer.map((item, index) => (
        <div key={index}>
          <button onClick={() => setSelectedCategory(item.category)}>
            {item.category}
          </button>
          {selectedCategory === item.category && (
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
          )}
        </div>
      ))}
    </div>
  );
}
