import data from '../../data';
import { Categories } from '../Categories/Categories';
import { CardList } from '../CardList/CardList';

import styles from './Main.module.css';

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <Categories categories={data.categories} />
        <CardList cards={data.cards} />
      </div>
    </main>
  );
};
