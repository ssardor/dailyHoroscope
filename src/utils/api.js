// utils/api.js

import axios from 'axios';

export const fetchHoroscope = async (sign, language) => {
  try {
    const response = await axios.post('https://poker247tech.ru/get_horoscope/', {
      sign: sign,
      language: language === 'ru' ? 'original' : 'translated',
      period: 'today',
    });
    console.log(response.data.horoscope
    );
    
    return response.data.horoscope;
  } catch (error) {
    console.error('Error fetching horoscope:', error);
    return { description: 'Failed to fetch horoscope' };
  }
};
