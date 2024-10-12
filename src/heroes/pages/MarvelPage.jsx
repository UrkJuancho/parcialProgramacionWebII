import React, { useEffect, useState } from 'react';
import { fetchHeroes } from '../../api';
import '../styles/MarvelPage.css'

export const MarvelPage = () => {
  const [marvelHeroes, setMarvelHeroes] = useState([]);

  useEffect(() => {
    const loadMarvelHeroes = async () => {
      const heroes = await fetchHeroes('marvel');
      setMarvelHeroes(heroes);
    };
    loadMarvelHeroes();
  }, []);

  return (
    <div className='marvel-container'>
      <ul>
        {marvelHeroes.length > 0 ? (
          marvelHeroes.map((hero) => (
            <li key={hero._id}>
              <h3>{hero.hero}</h3>
              <img className='imgHero' src={hero.image} alt="" />
              <p>{hero.description}</p>
            </li>
          ))
        ) : (
          <p>No hay heroes de Marvel Comics</p>
        )}
      </ul>
    </div>
  );
};
