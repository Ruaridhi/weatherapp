import React from 'react';
import styles from '@/styles/SearchPage.module.css';
import NavBar from '@/components/NavBar';
import SearchForm from '@/components/SearchForm';

export default function SearchPage() {
  return (
    <>
      <div className={styles.container}>
        <NavBar />
        <h2 className={styles.inputHeader}>Enter a City</h2>
        <SearchForm />
      </div>
    </>
  );
}
