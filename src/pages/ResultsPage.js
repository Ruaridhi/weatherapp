import React, { useContext } from 'react';
import DayCard from '../components/DayCard';
import AppContext from '../components/AppContext';
import NavBar from '@/components/NavBar';
import style from '@/styles/ResultsPage.module.css';

export default function ResultsPage() {
  const { forecast, cityName } = useContext(AppContext);
  return (
    <>
      <NavBar />
      <div data-testid="resultsPage" className={style.page}>
        <h2 className="resultsCity">{cityName}</h2>
        <div className={style.results}>
          {forecast?.map((day, dayNumber) => {
            return (
              <DayCard
                key={dayNumber}
                icon={day.weather[0].icon}
                dayNumber={dayNumber}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
