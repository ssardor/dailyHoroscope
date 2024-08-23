// components/ZodiacCard.jsx

import React from 'react';

const ZodiacCard = ({ sign, period, icon, onClick, language }) => {
  return (
    <div className="zodiac-card" onClick={onClick}>
      <img className='icon' src={icon} alt={`${sign[language]} icon`} />
      <h3>{sign[language]}</h3> {/* Обновлено: используем `sign[language]` для имени */}
      <p>{period[language]}</p> {/* Обновлено: используем `period[language]` для периода */}
    </div>
  );
};

export default ZodiacCard;
