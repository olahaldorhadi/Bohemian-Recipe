import { render, screen } from '@testing-library/react';
import {  expect, it } from 'vitest';
import RecipeCard from '../molecules/RecipeCard';

it('renders cards without error, with correct category, and correct title is displayed on card', async () => {
    render(
        <RecipeCard
            mealId="52971"
            strMealThumb="https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg"
            title="Kafteji"
            strCategory="Vegetarian"
            rating={[5, 5, 2]}
            tabIndex={0}
        />
    );

    const recipeCard = screen.getByTestId('cypress-recipe-card-Vegetarian');
    const kafejiCard = screen.getByText('Kafteji');
    expect(recipeCard).toBeTruthy();
    expect(kafejiCard)
    expect(document.body).toMatchSnapshot()
})