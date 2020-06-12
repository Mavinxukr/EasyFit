import React, { useState } from 'react';
import Registration from '../Popups/Registration/Registration';
import SingUp from '../Popups/SingUp/SingUp';
// import Login from '../Popups/Login/Login';
// import styles from './App.scss';

function App() {
  const [status, setStatus] = useState('entry');
  const [submit, setSubmit] = useState(null);

  return (
    <>
      {
        status === 'entry' && (
          <Registration submit={setSubmit} setStatus={setStatus} />
        ) || status === 'registration' && (
          <SingUp email={submit.email} setStatus={setStatus} />
        )
      }
    </>
  );
}

export default App;
