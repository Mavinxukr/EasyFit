import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputFormik from '../../InputFormik/InputFormik';
import Popup from '../../Popup/Popup';
import Button from '../../Button/Button';
import styles from './Login.scss';

const Login = () => (
  <Popup classNameWrapper={styles.loginPopup}>
    <h2 className={styles.loginTitle}>С возвращением</h2>
    <Formik
      initialValues={{ email: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('e-mail не валиден')
          .required('Вы не ввели e-mail'),
        password: Yup.string()
          .required('Вы не ввели пароль'),
      })}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <InputFormik
            formikProps={{
              ...formik.getFieldProps('email'),
              name: 'email',
              label: 'Ваш e-mail',
              classNameWrapper: styles.input,
            }}
          />
          <InputFormik
            formikProps={{
              ...formik.getFieldProps('password'),
              name: 'password',
              label: 'Пароль',
              classNameWrapper: styles.input,
            }}
          />
          <Button
            classNameWrapper={styles.loginSubmit}
            viewType="formButton"
            type="submit"
          >
            Войти в аккаунт
          </Button>
        </form>
      )}
    </Formik>
  </Popup>
);

export default Login;
