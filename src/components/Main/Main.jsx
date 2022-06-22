import { useState, useEffect } from 'react';

import data from '../../data';

import { Categories } from '../Categories/Categories';
import { CardList } from '../CardList/CardList';

import styles from './Main.module.css';

export const Main = () => {
  const [dataCard, setDataCard] = useState([]);
  const [cardsCount, setCardsCount] = useState(9);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    setDataCard(data.cards);
  }, []);

  const countHandler = () => {
    setCardsCount(cardsCount + 9);
  };

  const categoryHandler = (index) => {
    if (index === 0) {
      setCardsCount(9);
    }
    setActiveCategory(index);
  };

  return (
    <main className={styles.main}>
      <Categories
        categoryHandler={categoryHandler}
        activeCategory={activeCategory}
        categories={data.categories}
      />
      <CardList
        categories={data.categories}
        cards={dataCard
          .filter((card) => {
            if (activeCategory === 0) {
              return dataCard;
            } else return card.category === activeCategory;
          })
          .slice(0, cardsCount)}
      />
      <button onClick={countHandler} className={styles.main__btn}>
        load more
      </button>
    </main>
  );
};
