import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { FacebookLogin } from 'react-facebook-login-component';
import GoogleLogin from 'react-google-login';
import InputFormik from '../../../InputFormik/InputFormik';
import Popup from '../../../Popup/Popup';
import Button from '../../../Button/Button';
import styles from './Registration.scss';

const Registration = ({ submit, setStatus }) => (
  <Popup classNameWrapper={styles.popupWrapper}>
    <Formik
      initialValues={{ email: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('e-mail не валиден'),
      })}
      onSubmit={(values) => {
        submit(values);
        setStatus('registration');
      }}
    >
      {(formik) => (
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <h2>Добро пожаловать</h2>
          <p className={styles.text}>Войдите или Создайте аккаунт</p>
          <div className={styles.buttons}>
            <FacebookLogin
              socialId="1083453692003561"
              language="en_US"
              scope="public_profile,email"
              responseHandler={() => setStatus('registerViaFacebook')}
              fields="id,email,name"
              version="v2.5"
              className={styles.facebookButton}
              buttonText="Facebook"
            />
            <GoogleLogin
              clientId="892807808817-0v44irg3g2b16vdbt4m7usn5g3uprhmj.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  className={styles.googleButton}
                  type="button"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Google
                </button>
              )}
              buttonText="Login"
              onSuccess={() => {
                setStatus('registerViaGoogle');
              }}
              onFailure={(response) => console.log(response)}
              cookiePolicy="single_host_origin"
            />
          </div>
          <InputFormik
            classNameWrapper={styles.inputWrapper}
            formikProps={{
              ...formik,
              name: 'email',
              viewType: 'entry',
              placeholder: 'name@company.com',
            }}
          />
          <Button
            viewType="formButton"
            active={formik.dirty && formik.isValid}
            type="submit"
            classNameWrapper={styles.buttonWrapper}
          >
            Продолжить
          </Button>
        </form>
      )}
    </Formik>
  </Popup>
);

Registration.propTypes = {
  setStatus: PropTypes.func,
  submit: PropTypes.string,
};

export default Registration;
