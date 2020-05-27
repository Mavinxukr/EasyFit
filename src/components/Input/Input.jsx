import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './Input.scss';

const Input = ({
  formikProps: {
    type,
    value,
    onChange,
    classNameWrapper,
    viewType,
    onBlur,
    id,
    name,
  },
}) => {
  const [status, setStatus] = useState('noActive');

  const classNameForInput = cx(classNameWrapper, {
    [styles.entryInput]: viewType === 'entry',
    [styles.entryInputNoActive]: viewType === 'entry' && status === 'noActive',
    [styles.entryInputActive]: viewType === 'entry' && status === 'active',
    [styles.entryInputCorrect]: viewType === 'entry' && status === 'correct',
    [styles.entryInputError]: viewType === 'entry' && status === 'error',
  });

  return (
    <input
      type={type}
      value={value}
      onFocus={() => setStatus('active')}
      onChange={onChange}
      onBlur={onBlur}
      className={classNameForInput}
      id={id}
      name={name}
    />
  );
};

Input.propTypes = {
  formikProps: PropTypes.shape({
    type: PropTypes.string,
    value: PropTypes.string,
    viewType: PropTypes.string,
    classNameWrapper: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default Input;
