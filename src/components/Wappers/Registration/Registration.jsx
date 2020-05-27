import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputFormik from '../../InputFormik/InputFormik';
import Popup from '../../Popup/Popup';
// import styles from './Registration.scss';

const Registration = () => (
  <Popup>
    <Formik
      initialValues={{ email: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('e-mail не валиден')
          .required('Вы не введи e-mail'),
      })}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <InputFormik formikProps={{ ...formik.getFieldProps('email'), name: 'email' }} />
        </form>
      )}
    </Formik>
  </Popup>
);

export default Registration;
