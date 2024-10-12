import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/HeroPage.css';

export const HeroPage = () => {
  const [heroes, setHeroes] = useState([]);

  const fetchHeroes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/heroes');
      console.log(response.data);
      setHeroes(response.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  return (
    <div className="main-content">
      <ul>
        {heroes.length > 0 ? (
          heroes.map((hero) => (
            <li key={hero._id}>
              <h3>{hero.hero}</h3>
              <img className='imgHero' src={hero.image} alt="" />
              <p>{hero.description}</p>
            </li>
          ))
        ) : (
          <p>NO contamos con heroes de comics.</p>
        )}
      </ul>
    </div>
  );
};
