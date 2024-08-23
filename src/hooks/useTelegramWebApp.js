import { useEffect, useState } from 'react';

export const useTelegramWebApp = () => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    // Проверяем, определен ли window.Telegram
    if (typeof window.Telegram !== 'undefined' && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      setLang(tg.initDataUnsafe.user?.language_code === 'ru' ? 'ru' : 'en');
    } else {
      console.warn('Telegram WebApp SDK не загружен.');
    }
  }, []);

  return { lang };
};
