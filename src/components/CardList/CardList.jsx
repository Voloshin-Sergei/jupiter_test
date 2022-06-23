import { Card } from '../Card/Card';

import styles from './CardList.module.css';

export const CardList = ({ cards, categories, activeCardHandler, activeCard, categoryHandler }) => {
  return (
    <ul className={styles.cardlist}>
      {cards.map((card) => (
        <Card
          categoryHandler={categoryHandler}
          activeCard={activeCard}
          activeCardHandler={activeCardHandler}
          key={card.id}
          card={card}
          category={categories[card.category].title}
        />
      ))}
    </ul>
  );
};
