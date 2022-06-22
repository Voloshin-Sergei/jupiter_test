import data from '../../data';
import { Categories } from '../Categories/Categories';
import { CardList } from '../CardList/CardList';

import styles from './Main.module.css';

export const Main = () => {
  return (
    <main className={styles.main}>
      <Categories categories={data.categories} />
      <CardList categories={data.categories} cards={data.cards} />
      <button className={styles.main__btn}>load more</button>
    </main>
  );
};
