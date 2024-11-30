// `src/components/BurgerStack.jsx`
import React from 'react';

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul>
      {stack.length === 0 ? (
        <p>No Ingredients</p>
      ) : (
        stack.map((ingredient, index) => (
          <li key={index} style={{ color: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => removeFromBurger(index)}>X</button>
          </li>
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
