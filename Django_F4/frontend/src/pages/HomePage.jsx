import React from 'react';
import { useGetCategoriesQuery } from "../redux/recipes.api";
import Category from "../components/Category";

const HomePage = () => {
    const { data: categories, error, isLoading } = useGetCategoriesQuery();

    if (isLoading) {
        return (
            <div className="container">
                <h1 className="mainTitle">Загрузка...</h1>
            </div>
        );
    }

    return (
        <div className="container">
            <h1 className="mainTitle">Книга рецептов</h1>
            <div className="mainPageLinks">
                {error ? (
                    <p>Произошла ошибка при загрузке данных</p>
                ) : (
                    categories.map(({ id, name }) => (
                        <Category key={id} name={name} id={id} />
                    ))
                )}
            </div>
        </div>
    );
};

export default HomePage;