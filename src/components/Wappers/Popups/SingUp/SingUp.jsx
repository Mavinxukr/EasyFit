import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputFormik from '../../../InputFormik/InputFormik';
import Popup from '../../../Popup/Popup';
import Button from '../../../Button/Button';
import IconArrowBack from '../../../../../public/svg/BackArrow.svg';
import styles from './SingUp.scss';

const SingUp = () => (
  <Popup classNameWrapper={styles.singUpPopup}>
    <Button classNameWrapper={styles.bntBack} type="button">
      <IconArrowBack />
    </Button>
    <h2 className={styles.singUpTitle}>Заполните поля</h2>
    <Formik
      initialValues={{ email: '', name: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('e-mail не валиден')
          .required('Вы не ввели e-mail'),
        name: Yup.string()
          .required('Вы не ввели пароль'),
        password: Yup.string()
          .required('Вы не ввели пароль'),
      })}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <form className={styles.singUpForm} onSubmit={formik.handleSubmit}>
          <InputFormik
            classNameWrapper={styles.formikWrapper}
            formikProps={{
              ...formik,
              name: 'email',
              label: 'Ваш e-mail',
              viewType: 'entry',
              classNameWrapper: styles.inputWrapper,
            }}
          />
          <InputFormik
            classNameWrapper={styles.formikWrapper}
            formikProps={{
              ...formik,
              name: 'name',
              label: 'Имя и Фамилия',
              viewType: 'entry',
              placeholder: 'Ethan Pierce',
              classNameWrapper: styles.inputWrapper,
            }}
          />
          <InputFormik
            classNameWrapper={styles.formikWrapper}
            formikProps={{
              ...formik,
              name: 'password',
              label: 'Создайте пароль',
              viewType: 'entry',
              placeholder: '*****',
              classNameWrapper: styles.inputWrapper,
            }}
          />
          <Button
            classNameWrapper={styles.singUpSubmit}
            viewType="formButton"
            type="submit"
            disabled={formik.dirty && formik.isValid}
          >
            Войти в аккаунт
          </Button>
        </form>
      )}
    </Formik>
  </Popup>
);

export default SingUp;
