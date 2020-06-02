import React from 'react';
import IconLogo from '../../../public/svg/EF.svg';
import IconDumbbell from '../../../public/svg/fdsfs.svg';
import IconVideo from '../../../public/svg/film.svg';
import Button from '../Button/Button';
import styles from './Header.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.leftBlock}>
      <a href="/">
        <IconLogo />
        <span className={styles.logoText}>Тренер</span>
      </a>
      <div className={styles.headerBlockInfo}>
        <IconDumbbell className={styles.icon} />
        <p>У тебя есть 1 бесплатный: Групповой Live</p>
        <Button classNameWrapper={styles.headerBtn} type="button">
          Провести
        </Button>
      </div>
    </div>
    <div className={styles.rightBlock}>
      <Button classNameWrapper={styles.btn} type="button">Подписка</Button>
      <Button classNameWrapper={styles.btn} type="button">Отправить отзыв</Button>
      <p className={styles.horizontalLine} />
      <Button classNameWrapper={styles.darkBtn}>
        <IconVideo className={styles.icon} />
        Групповой live
      </Button>
    </div>
  </header>
);

export default Header;
