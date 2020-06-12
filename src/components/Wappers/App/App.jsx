import React, { useState } from 'react';
// import Registration from '../Popups/Registration/Registration';
import SingUp from '../Popups/SingUp/SingUp';
import Login from '../Popups/Login/Login';
import Notification from '../../Notification/Notification';
// import styles from './App.scss';

const App = () => {
  const [status, setStatus] = useState('entry');
  const [submit, setSubmit] = useState(null);

  return (
    <>
      <Notification />
      {
        status === 'entry' && (
          <Login setSubmit={setSubmit} />
          // <Login setSubmit={setSubmit} />
        ) || (status === 'registration'
        || status === 'registerViaFacebook'
        || status === 'registerViaGoogle') && (
          <SingUp email={submit && submit.email} status={status} setStatus={setStatus} />
        )
      }
    </>
  );
};

export default App;
