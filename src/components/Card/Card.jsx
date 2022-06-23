import styles from './Card.module.css';

export const Card = ({ card, category, activeCardHandler, activeCard, categoryHandler }) => {
  const onclickLabel = (event, category) => {
    event.stopPropagation();
    categoryHandler(category);
  };

  return (
    <li
      onClick={() => activeCardHandler(card.id)}
      className={`${styles.card} ${activeCard === card.id ? styles.active : ''}`}
    >
      <img
        className={styles.card__img}
        src={process.env.PUBLIC_URL + `/assets/${card.img}`}
        alt={card.title}
      />
      <span onClick={(event) => onclickLabel(event, card.category)} className={styles.card__label}>
        {category}
      </span>
      <h2 className={styles.card__title}>{card.title}</h2>
    </li>
  );
};
