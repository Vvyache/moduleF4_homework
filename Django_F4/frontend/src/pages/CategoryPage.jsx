import React from 'react';
import { useGetRecipesByCatQuery, useGetCategoriesQuery } from "../redux/recipes.api";
import { useParams } from "react-router-dom";
import Recipe from "../components/Recipe";
import Button from "../components/Button";

const CategoryPage = () => {
    const { categoryId } = useParams();
    const { data: recipesByCat, error, isLoading } = useGetRecipesByCatQuery(categoryId);
    const { data: categories } = useGetCategoriesQuery();
    const currentCategory = categories?.find(({ id }) => id.toString() === categoryId.toString());

    if (isLoading) {
        return (
            <div className="container">
                <h1 className="mainTitle">Loading...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container">
                <h1 className="mainTitle">Error fetching data. Please try again later.</h1>
            </div>
        );
    }

    return (
        <>
            <Button />
            <div className="container">
                <h1 className="mainTitle">{currentCategory?.name}</h1>
                <div className="mainPageLinks">
                    {recipesByCat?.map((recipe) => (
                        <Recipe key={recipe.id} recipe={recipe} catId={categoryId} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default CategoryPage;
