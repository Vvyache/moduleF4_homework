import React from 'react';
import { useParams } from "react-router-dom";
import { useGetRecipeQuery } from "../redux/recipes.api";
import Button from "../components/Button";

const RecipePage = () => {
    const { slug } = useParams();
    const { data: recipe, error, isLoading } = useGetRecipeQuery(slug);

    if (isLoading) {
        return (
            <div className="container">
                <h1 className="mainTitle">Загрузка...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container">
                <h1 className="mainTitle">Произошла ошибка при загрузке данных</h1>
            </div>
        );
    }

    return (
        <>
            <Button />
                <div className="recipeCard">
                    <h2>{recipe?.title}</h2>
                    <div className="recipeContent">
                        <h4>Рецепт:</h4>
                        <pre className='cardTextDescriptions'>{recipe?.descriptions}</pre>
                    </div>
                </div>
        </>
    );
};

export default RecipePage;
