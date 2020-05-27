import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Popup.scss';

const Popup = ({ children, classNameWrapper }) => (
  <>
    <div className={styles.backgroundPopup} />
    <div className={cx(styles.Popup, classNameWrapper)}>
      {children}
    </div>
  </>
);

Popup.propTypes = {
  children: PropTypes.node,
  classNameWrapper: PropTypes.string,
  showCloseBtn: PropTypes.bool,
};

export default Popup;
