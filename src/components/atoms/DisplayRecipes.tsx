import React, { useState } from 'react'
import RecipeCard from '../molecules/RecipeCard'
import ModalRecipe from '../molecules/Modal/ModalRecipe'
// import merged_meals from '../../assets/merged_meals.json'
// import { IRecipe } from './IRecipe'
import { gql, useQuery } from '@apollo/client'

// Query accepts two optional parameters (categories and areas, both are strings)
// Query should return idMeal, strMeal, strCategory and strArea. Can be expanded to include all necessary information.
const GET_MEALS = gql`
    query GetMeals($categories: [String], $areas: [String]) {
        meals(categories: $categories, areas: $areas) {
            idMeal
            strMeal
            strCategory
            strArea
            strInstructions
            strMealThumb
            strIngredient1
            strIngredient2
            strIngredient3
            strIngredient4
            strIngredient5
            strIngredient6
            strIngredient7
            strIngredient8
            strIngredient9
            strIngredient10
            strIngredient11
            strIngredient12
            strIngredient13
            strIngredient14
            strIngredient15
            strIngredient16
            strIngredient17
            strIngredient18
            strIngredient19
            strIngredient20
            strMeasure1
            strMeasure2
            strMeasure3
            strMeasure4
            strMeasure5
            strMeasure6
            strMeasure7
            strMeasure8
            strMeasure9
            strMeasure10
            strMeasure11
            strMeasure12
            strMeasure13
            strMeasure14
            strMeasure15
            strMeasure16
            strMeasure17
            strMeasure18
            strMeasure19
            strMeasure20
        }
    }
`

// Defines what a meal is
interface Meal {
    idMeal: string
    strMeal: string
    strCategory: string
    strArea: string
    strMealThumb: string
}

interface DisplayRecipesProps {
    selectedCategory: string | null
    selectedAreas: string[]
}

const DisplayRecipes: React.FC<DisplayRecipesProps> = ({
    selectedCategory,
    selectedAreas,
}) => {
    const [selectedRecipe, setSelectedRecipe] = useState<Meal | null>(null)

    const handleRecipeCardClick = (meal: Meal) => {
        setSelectedRecipe(meal)
    }

    const handleCloseModal = () => {
        setSelectedRecipe(null)
    }

    // Uses the query GET_MEALS with variables defined under
    const { loading, error, data } = useQuery(GET_MEALS, {
        variables: { categories: selectedCategory, areas: selectedAreas },
    })

    if (loading) return <p>Loading meals...</p>
    if (error) return <p>Error loading meals: {error.message}</p>

    return (
        <div className="recipe-cards flex flex-wrap justify-around p-4">
            {Array.isArray(data?.meals) &&
                data?.meals.map((meal: Meal) => (
                    <div
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"
                        key={meal.idMeal}
                    >
                        <RecipeCard
                            key={meal.idMeal}
                            imgSrc={meal.strMealThumb}
                            imgAlt={meal.strMeal}
                            title={meal.strMeal}
                            category={meal.strCategory}
                            onClick={() => handleRecipeCardClick(meal)}
                        />
                    </div>
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
