import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__wrapper}>
          <img width="138.83" src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo" />
          <nav className={styles.navigation}>
            <ul className={styles.navigation__list}>
              <li className={styles.list__item}>
                <a className={styles.item__link} href="/">
                  About
                </a>
              </li>
              <li className={styles.list__item}>
                <a className={styles.item__link} href="/">
                  Services
                </a>
              </li>
              <li className={styles.list__item}>
                <a className={styles.item__link} href="/">
                  Pricing
                </a>
              </li>
              <li className={styles.list__item}>
                <a className={styles.item__link} href="/">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <button className={styles.header__contact}>contact</button>
        </div>
        <h1 className={styles.header__title}>Portfolio</h1>
        <p className={styles.header__description}>
          Agency provides a full service range including technical skills, design, business
          understanding.
        </p>
      </div>
    </header>
  );
};
