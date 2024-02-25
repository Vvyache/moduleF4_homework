import React from 'react';
import {Link} from "react-router-dom";

const Recipe = ({catId, recipe}) => {
  return (
    <Link to={`/recipes/${catId}/${recipe.slug}`}>
      <p className='menuLink'>{recipe.title}</p>
    </Link>
  );
};

export default Recipe;
