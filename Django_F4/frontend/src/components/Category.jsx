import React from 'react';
import {Link} from "react-router-dom";

const Category = ({name, id}) => {
  return (
    <Link to={`/recipes/${id}`}>
      <p className='menuLink'>{name}</p>
    </Link>
  );
};

export default Category;
