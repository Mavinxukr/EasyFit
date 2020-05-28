import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import OkIcon from '../../../public/svg/Path325.svg';
import styles from './Input.scss';

const Input = ({
  formikProps: {
    type,
    values,
    handleChange,
    classNameWrapper,
    viewType,
    handleBlur,
    id,
    name,
    placeholder,
    touched,
    errors,
  },
}) => {
  const [status, setStatus] = useState('noActive');

  const classNameForInput = cx(classNameWrapper, {
    [styles.entryInput]: viewType === 'entry',
    [styles.entryInputNoActive]: viewType === 'entry' && status === 'noActive',
    [styles.entryInputActive]: viewType === 'entry' && status === 'active',
  });

  return (
    <div className={styles.inputWrapper}>
      {viewType === 'entry'
      && (status === 'noActive' || !(touched[name] && errors[name]))
      && (
        <OkIcon className={styles.icon} />
      )}
      {viewType === 'entry' && (touched[name] && errors[name]) && (
        <span className={styles.errorLine} />
      )}
      <input
        type={type}
        value={values[name]}
        onFocus={() => setStatus('active')}
        onChange={(e) => handleChange(e)}
        onBlur={handleBlur}
        className={classNameForInput}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  formikProps: PropTypes.shape({
    type: PropTypes.string,
    viewType: PropTypes.string,
    classNameWrapper: PropTypes.string,
    handleChange: PropTypes.func,
    handleBlur: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    touched: PropTypes.object,
    errors: PropTypes.object,
    values: PropTypes.object,
  }),
};

export default Input;
