import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import styles from './InputFormik.scss';

const InputFormik = ({ formikProps, classNameWrapper }) => (
  <div className={cx(styles.wrapper, classNameWrapper)}>
    {formikProps.label && (
      <label
        htmlFor={formikProps.name}
        className={styles.label}
      >
        {formikProps.label}
      </label>
    )}
    <Input formikProps={formikProps} />
    {formikProps.touched[formikProps.name] && formikProps.errors[formikProps.name] && (
      <p className={styles.errorText}>{formikProps.errors[formikProps.name]}</p>
    )}
  </div>
);

InputFormik.propTypes = {
  formikProps: PropTypes.shape({
    touched: PropTypes.string,
    errors: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
  }),
  classNameWrapper: PropTypes.string,
};

export default InputFormik;
