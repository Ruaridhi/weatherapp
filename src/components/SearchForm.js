import React, { useContext, useState } from 'react';
import { getWeather } from '../pages/utils';
import AppContext from './AppContext';
import { useRouter } from 'next/router';
import style from '@/styles/SearchForm.module.css';

export default function SearchForm() {
  const [city, setCity] = useState();
  const { setForecast } = useContext(AppContext);
  const { setCityName } = useContext(AppContext);
  const router = useRouter();

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleClick = async (city) => {
    const capitalisedCity = city.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

    try {
      const resp = await getWeather(city);
        setForecast(resp.list);
      setCityName(capitalisedCity);
      router.push('/ResultsPage');
    } catch (err) {
      return err;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleClick(event.target.value);
    }
  };

  return (
    <>
      <div className={style.input}>
        <input
          aria-label="city-input"
          onChange={handleChange}
          city={city}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className={style.searchButton}>
        <a onClick={() => handleClick(city)}>Find City</a>
      </div>
    </>
  );
}
