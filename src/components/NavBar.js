import React from 'react';
import SearchForm from './SearchForm';
import style from '@/styles/NavBar.module.css';

export default function NavBar() {
  return (
    <div className={style.nav}>
      <SearchForm />
    </div>
  );
}
