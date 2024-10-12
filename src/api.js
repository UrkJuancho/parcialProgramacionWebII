import axios from 'axios';

const API_URL = 'http://localhost:3000/api/heroes';

export const fetchHeroes = async (company) => {
  try {
    const response = await axios.get(API_URL);
    const allHeroes = response.data || [];
    return company ? allHeroes.filter(hero => hero.company === company) : allHeroes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
