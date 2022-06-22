import styles from './Card.module.css';

export const Card = ({ card, category, activeHandler, active }) => {
  return (
    <li
      onClick={() => activeHandler(card.id)}
      className={`${styles.card} ${active === card.id ? styles.active : ''}`}>
      <img
        className={styles.card__img}
        src={process.env.PUBLIC_URL + `/assets/${card.img}`}
        alt={card.title}
      />
      <span className={styles.card__label}>{category}</span>
      <h2 className={styles.card__title}>{card.title}</h2>
    </li>
  );
};
