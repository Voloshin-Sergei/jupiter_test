import { useState, useRef, useEffect } from 'react';

import styles from './Categories.module.css';

export const Categories = ({ categories, activeCategory, categoryHandler }) => {
  const [showCategories, setShowCategories] = useState(false);
  const categoriesRef = useRef();

  const showHandler = () => {
    setShowCategories(!showCategories);
  };

  const onClickHandler = (index) => {
    setShowCategories(false);
    categoryHandler(index);
  };

  useEffect(() => {
    const handlerClickOutside = (event) => {
      if (!event.path.includes(categoriesRef.current)) {
        setShowCategories(false);
      }
    };

    document.body.addEventListener('click', handlerClickOutside);

    return () => {
      document.body.removeEventListener('click', handlerClickOutside);
    };
  }, []);

  return (
    <div ref={categoriesRef} className={styles.categories}>
      <div onClick={showHandler} className={styles.categories__active}>
        {categories[activeCategory].title}
        <img width="10" src={process.env.PUBLIC_URL + '/arrow.svg'} alt="arrow" />
      </div>

      <ul className={`${styles.categories__list} ${showCategories ? styles.visible : ''}`}>
        {categories.map((category, index) => (
          <li
            onClick={() => onClickHandler(index)}
            key={category.id}
            className={`${styles.list__item} ${activeCategory === index ? styles.active : ''}`}>
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
