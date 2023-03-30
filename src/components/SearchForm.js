import React, { useContext, useState } from 'react';
import Link from 'next/link';
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
    try {
      const resp = await getWeather(city);
      setForecast(resp.list);
      setCityName(city);
      router.push('/ResultsPage');
    } catch (err) {
      return err;
    }
  };

  return (
    <>
      <div className={style.input}>
        <input aria-label="city-input" onChange={handleChange} city={city} />
      </div>
      <div className={style.searchButton}>
        <a onClick={() => handleClick(city)}>Find City</a>
      </div>
    </>
  );
}
