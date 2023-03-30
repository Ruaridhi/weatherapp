import AppContext from '@/components/AppContext';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import NavBar from '@/components/NavBar';
import style from '@/styles/DetailedForecast.module.css';
import { formatDate } from './utils';

export default function DetailedForecast() {
  const router = useRouter();
  const { dayNumber } = router.query;
  const { forecast } = useContext(AppContext);
  const { cityName } = useContext(AppContext);
  const dailyForecast = forecast[dayNumber];
  const icon = dailyForecast?.weather[0]?.icon;
  const today = new Date();
  today.setDate(today.getDate() + dayNumber);

  return (
    <div className={style.detailedForecast}>
      <NavBar />
      <img src={`https://openweathermap.org/img/wn/${icon}.png`} />

      <ul className={style.listItems}>
        <li id={style.listDate}>{formatDate(today)}</li>
        <li>{cityName}</li>
        <li>{dailyForecast.weather[0].main}</li>
        <li>min temp: {dailyForecast.main.temp_min} degrees</li>
        <li>max temp: {dailyForecast.main.temp_max} degrees</li>
        <li>humidity: {dailyForecast.main.humidity}%</li>
      </ul>
    </div>
  );
}
