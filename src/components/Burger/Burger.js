import React from 'react';

import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = props => {

// This creates an array of the keys (str) of the ingredients object.
  let transformedIngredients = Object.keys(props.ingredients)
// For every ingredient, an array is created with as many undefined values as the value of the key in the object.
    .map(igKey => [...Array(props.ingredients[igKey])]
// For every undefined value, an array is created with a BurgerIngredient inside. The type is passed in the form of the key that was extracted from the original object.
    .map((_, i) => <BurgerIngredient key={igKey + i} type={igKey}/>))
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please Start Adding Ingredients!</p>
    }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type='bread-top'/>
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom'/>
    </div>
  )
}

export default burger;
