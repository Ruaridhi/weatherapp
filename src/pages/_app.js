import AppContext from '@/components/AppContext';
import '@/styles/globals.css';
import { createContext, useContext, useState } from 'react';

export default function App({ Component, pageProps }) {
  const [forecast, setForecast] = useState();
  const [cityName, setCityName] = useState();

  return (
    <AppContext.Provider
      value={{ forecast, setForecast, cityName, setCityName }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
