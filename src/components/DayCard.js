import { useRouter } from 'next/router';
import React from 'react';
import styles from '@/styles/ResultsPage.module.css';
import { formatDate } from '@/pages/utils';

export default function DayCard({ icon, dayNumber }) {
  const today = new Date();
  today.setDate(today.getDate() + dayNumber);
  const router = useRouter();

  function handleClick() {
    router.push(`/DetailedForecast?dayNumber=${dayNumber}`);
  }

  return (
    <div onClick={handleClick} className={styles.result}>
      <img src={`https://openweathermap.org/img/wn/${icon}.png`} />
      <h4 data-testid="day">{formatDate(today)}</h4>
    </div>
  );
}
