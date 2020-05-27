import React from 'react';
import cx from 'classnames';
import Input from '../Input/Input';
import styles from './InputFormik.scss';

const InputFormik = ({ formikProps, classNameWrapper }) => (
  <div className={cx(styles.wrapper, classNameWrapper)}>
    <Input {...formikProps} />
    {formikProps.touched && formikProps.errors && (
      <div>{formikProps.errors}</div>
    )}
  </div>
);

InputFormik.propTypes = {
  formikProps: PropTypes.shape({
    touched: PropTypes.string,
    errors: PropTypes.string,
  }),
  classNameWrapper: PropTypes.string,
};
