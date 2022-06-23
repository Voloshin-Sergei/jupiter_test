import { useState, useEffect } from 'react';

import data from '../../data';

import { Categories } from '../Categories/Categories';
import { CardList } from '../CardList/CardList';

import styles from './Main.module.css';

export const Main = () => {
  const [dataCard, setDataCard] = useState([]);
  const [cardsCount, setCardsCount] = useState(9);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setDataCard(data.cards);
  }, []);

  useEffect(() => {
    const deleteCard = (event) => {
      if (event.key === 'Delete' && activeCard) {
        setDataCard(dataCard.filter((card) => card.id !== activeCard));
      }
      return;
    };

    document.addEventListener('keydown', deleteCard);

    return () => {
      document.removeEventListener('keydown', deleteCard);
    };
  }, [activeCard, dataCard]);

  const countHandler = () => {
    setCardsCount(cardsCount + 9);
  };

  const categoryHandler = (index) => {
    setCardsCount(9);
    setActiveCategory(index);
  };

  const activeCardHandler = (id) => {
    if (id === activeCard) {
      setActiveCard(null);
      return;
    }
    setActiveCard(id);
  };

  return (
    <main className={styles.main}>
      <Categories
        categoryHandler={categoryHandler}
        activeCategory={activeCategory}
        categories={data.categories}
      />
      <CardList
        activeCardHandler={activeCardHandler}
        activeCard={activeCard}
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
