import React from 'react';
import Header from '../../Header/Header';
import Sidebar from '../../Sidebar/Sidebar';
import Finance from '../../Finance/Finance';
// import SingUp from '../Popups/SingUp/SingUp';
// import Login from '../Popups/Login/Login';
// import Registration from '../Popups/Registration/Registration';
// import ResetPassword from '../Popups/ResetPassword/ResetPassword';
import styles from './App.scss';

function App() {
  return (
    <div>
      <Header />
      <main className={styles.flex}>
        <Sidebar />
        <Finance />
      </main>
    </div>
  );
}

export default App;
