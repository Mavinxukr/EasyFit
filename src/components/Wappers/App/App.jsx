import React from 'react';
import Header from '../../Header/Header';
import Sidebar from '../../Sidebar/Sidebar';
import Lead from '../../Lead/Lead';
import styles from './App.scss';

function App() {
  return (
    <>
      <Header />
      <main className={styles.flex}>
        <Sidebar />
        <Lead />
      </main>
    </>
  );
}

export default App;
