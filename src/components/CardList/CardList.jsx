import { useState } from 'react';

import { Card } from '../Card/Card';

import styles from './CardList.module.css';

export const CardList = ({ cards, categories }) => {
  const [active, setActive] = useState(null);

  const activeHandler = (id) => {
    if (id === active) {
      setActive(null);
      return;
    }
    setActive(id);
  };

  return (
    <ul className={styles.cardlist}>
      {cards.map((card) => (
        <Card
          active={active}
          activeHandler={activeHandler}
          key={card.id}
          card={card}
          category={categories[card.category].title}
        />
      ))}
    </ul>
  );
};
