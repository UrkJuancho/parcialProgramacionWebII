import React, { useEffect, useState } from 'react';
import { fetchHeroes } from '../../api';
import '../styles/DcPage.css'

export const DcPage = () => {
  const [dcHeroes, setDcHeroes] = useState([]);

  useEffect(() => {
    const loadDCHeroes = async () => {
      const heroes = await fetchHeroes('dc');
      setDcHeroes(heroes);
    };
    loadDCHeroes();
  }, []);

  return (
    <div className='dc-container'>
      <ul>
        {dcHeroes.length > 0 ? (
          dcHeroes.map((hero) => (
            <li key={hero._id}>
              <h3>{hero.hero}</h3>
              <img className='imgHero' src={hero.image} alt="" />
              <p>{hero.description}</p>
            </li>
          ))
        ) : (
          <p>No hay heroes disponibles de DC Comics.</p>
        )}
      </ul>
    </div>
  );
};
