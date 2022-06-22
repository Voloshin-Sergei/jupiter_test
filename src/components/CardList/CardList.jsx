import { Card } from '../Card/Card';

import styles from './CardList.module.css';

export const CardList = ({ cards, categories }) => {
  return (
    <ul className={styles.cardlist}>
      {cards.map((card) => (
        <Card key={card.id} card={card} category={categories[card.category].title} />
      ))}
    </ul>
  );
};
