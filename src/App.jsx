import React, { useState, useEffect } from 'react';
import ZodiacCard from './components/ZodiacCard';
import zodiacSigns from './utils/zodiacSigns';
import { useTelegramWebApp } from './hooks/useTelegramWebApp';
import { fetchHoroscope } from './utils/api';

function App() {
  const { lang: initialLang } = useTelegramWebApp();
  const [language, setLanguage] = useState(initialLang || 'en');
  const [horoscope, setHoroscope] = useState('');
  const [selectedSign, setSelectedSign] = useState(null);

  const handleCardClick = async (sign) => {
    const data = await fetchHoroscope(sign.apiName, language);
    setHoroscope(data);
    setSelectedSign(sign);
  };

  const handleLanguageToggle = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ru' : 'en'));
  };

  useEffect(() => {
    if (selectedSign) {
      handleCardClick(selectedSign); // Обновляем описание знака при изменении языка
    }
  }, [language]);

  return (
    <div className="app">
      <button onClick={handleLanguageToggle} className='btn'>
        {language === 'en' ? 'Switch to Russian' : 'Переключить на английский'}
      </button>
      {selectedSign && (
        <div className="horoscope-detail">
          <h2>{selectedSign.name[language]}</h2> {/* Исправлено: используем `selectedSign.name[language]` */}
          <p>{horoscope}</p>

          <button className='btn' onClick={() => setSelectedSign(null)}>Назад</button>
        </div>
      )}
      <div className="zodiac-grid" >
        {zodiacSigns.map((sign) => (
          <ZodiacCard
            key={sign.name[language]} // Исправлено: используем `sign.name[language]`
            sign={sign.name} // Передаем объект `sign.name`
            period={sign.period} // Передаем объект `sign.period`
            icon={sign.icon}
            onClick={() => handleCardClick(sign)}
            language={language}
          />
        ))}
      </div>
     
    </div>
  );
}

export default App;
