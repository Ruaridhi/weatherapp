import React from 'react';
import SearchForm from './SearchForm';
import style from '@/styles/NavBar.module.css';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div className={style.nav}>
      <h3>
        <a id={style.homeLink} onClick={handleClick}>City Weather</a>
      </h3>
      <SearchForm />
    </div>
  );
}
