import React from 'react';

const HoroscopeDetail = ({ description, onBack }) => (
  <div className="horoscope-detail">
    <p>{description}</p>
    <button onClick={onBack}>Назад</button>
  </div>
);

export default HoroscopeDetail;
