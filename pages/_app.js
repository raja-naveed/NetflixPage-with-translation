import i18n from '@/i18n';
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const selectedLanguage = localStorage.getItem('selectedLanguage');

    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage);
    }
  }, []);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
