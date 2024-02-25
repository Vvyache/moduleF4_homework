import React from 'react';
import { useNavigate } from "react-router-dom";

const Button = ({ text }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
      <button className='btnGoBack' onClick={goBack}>
        {text="Назад"}
      </button>
  );
};

export default Button;
