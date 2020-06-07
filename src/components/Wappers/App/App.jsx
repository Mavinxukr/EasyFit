import React from 'react';
import Header from '../../Header/Header';
import Sidebar from '../../Sidebar/Sidebar';
import Lead from '../../Lead/Lead';
import styles from './App.scss';

function App() {
  return (
    <div>
      <Header />
      <main className={styles.flex}>
        <Sidebar />
        <Lead />
      </main>
    </div>
  );
}

export default App;
