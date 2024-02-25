import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import { useGetCategoriesQuery } from '../redux/recipes.api';

const Header = () => {
    const { data: categories, error, isLoading } = useGetCategoriesQuery();

    if (isLoading) return <h1>Загрузка...</h1>;

    if (error) {
        console.error('Произошла ошибка при загрузке данных:', error);
        return <h1>Произошла ошибка при загрузке данных</h1>;
    }

    return (
        <header>
            <Link to="/">
                <h3 className="nav--logo_text">Книга рецептов</h3>
            </Link>
            <div className="navLinks">
                {categories && categories.length > 0 ? (
                    <>
                        {categories.map(({ id, name, slug }) => (
                            <Category key={id} name={name} slug={slug} id={id} />
                        ))}
                    </>
                ) : (
                    <p>Нет доступных категорий</p>
                )}
            </div>
        </header>
    );
};

export default Header;
