import styles from './Categories.module.css';

export const Categories = ({ categories }) => {
  return (
    <div className={styles.categories}>
      <div className={styles.categories__active}>
        Show All <img width="10" src={process.env.PUBLIC_URL + '/arrow.svg'} alt="arrow" />
      </div>
      <ul className={styles.categories__list}>
        {categories.map((category) => (
          <li key={category.id} className={`${styles.list__item}`}>
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
