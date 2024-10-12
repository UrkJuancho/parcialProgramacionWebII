// src/SearchPage.js
import React, { useEffect, useState } from 'react';
import { fetchHeroes } from '../../api';
import '../styles/SearchPage.css';

export const SearchPage = () => {
  const [heroes, setHeroes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadHeroes = async () => {
      try {
        const allHeroes = await fetchHeroes();
        console.log(allHeroes);
        setHeroes(allHeroes);
      } catch (error) {
        console.error(error);
      }
    };
    loadHeroes();
  }, []);

  const filteredHeroes = heroes.filter(hero => {
    const heroName = hero.hero ? hero.hero.toLowerCase() : '';
    const companyName = hero.company ? hero.company.toLowerCase() : '';

    return (
      heroName.includes(searchTerm.toLowerCase()) || 
      companyName.includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className='search-container'>
      <input 
        type="text" 
        placeholder="Busca a tu heroe por su nombre o compañia de comics" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <ul>
        {filteredHeroes.length > 0 ? (
          filteredHeroes.map((hero) => (
            <li key={hero._id}>
              <h3>{hero.hero}</h3>
              <img className='imgHero' src={hero.image} alt="" />
              <p>{hero.description}</p>
            </li>
          ))
        ) : (
          <p>NO se encontro al heroes.</p>
        )}
      </ul>
    </div>
  );
};