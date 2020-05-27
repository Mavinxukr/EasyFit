import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import styles from './InputFormik.scss';

const InputFormik = ({ formikProps, classNameWrapper }) => {
  console.log(formikProps);

  return (
    <div className={cx(styles.wrapper, classNameWrapper)}>
      {formikProps.label && (
        <label
          className={styles.label}
          htmlFor={formikProps.name}
        >
          {formikProps.label}
        </label>
      )}
      <Input formikProps={formikProps} />
      {formikProps.touched && formikProps.errors && (
        <div>{formikProps.errors}</div>
      )}
    </div>
  );
};

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
