import React, { useState } from 'react'
import RecipeCard from '../molecules/RecipeCard'
import ModalRecipe from '../molecules/Modal/ModalRecipe'
import merged_meals from '../../assets/merged_meals.json'
import { IRecipe } from './IRecipe'

const DisplayRecipes: React.FC = () => {
    const [selectedRecipe, setSelectedRecipe] = useState<IRecipe | null>(null)

    const handleRecipeCardClick = (recipe: IRecipe) => {
        setSelectedRecipe(recipe)
    }

    const handleCloseModal = () => {
        setSelectedRecipe(null)
    }

    return (
        <div className="recipe-cards flex flex-wrap">
            {Array.isArray(merged_meals.meals) &&
                merged_meals.meals.map((recipe: IRecipe) => (
                    <RecipeCard
                        key={recipe.idMeal}
                        imgSrc={recipe.strMealThumb}
                        imgAlt={recipe.strMeal}
                        title={recipe.strMeal}
                        category={recipe.strCategory}
                        onClick={() => handleRecipeCardClick(recipe)}
                    />
                ))}
            {selectedRecipe && (
                <ModalRecipe
                    selectedRecipe={selectedRecipe}
                    onClose={handleCloseModal}
                    imgSrc={selectedRecipe.strMealThumb}
                />
            )}
        </div>
    )
}

export default DisplayRecipes
