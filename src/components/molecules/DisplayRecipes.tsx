import React, { useState } from 'react'
import RecipeCard from './RecipeCard'
import ModalRecipe from '../atoms/ModalRecipe'
import { gql, useQuery } from '@apollo/client'

// Query accepts two optional parameters (categories and areas, both are strings)
// Query should return idMeal, strMeal, strCategory and strArea. Can be expanded to include all necessary information.
const GET_MEALS = gql`
    query GetMeals(
        $categories: [String]
        $areas: [String]
        $offset: Int!
        $sortField: String
    ) {
        meals(
            categories: $categories
            areas: $areas
            offset: $offset
            sortField: $sortField
        ) {
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

// Defines props
interface DisplayRecipesProps {
    selectedCategory: string | null
    selectedAreas: string[]
    sortOption: string
}

// All pages should have 12 cards
const PAGE_SIZE = 12

const DisplayRecipes: React.FC<DisplayRecipesProps> = ({
    selectedCategory,
    selectedAreas,
    sortOption,
}) => {
    const [selectedRecipe, setSelectedRecipe] = useState<Meal | null>(null)
    const [currentPage, setCurrentPage] = useState(0)

    // Does a database call, fetchMore lets you fetch more at a later time
    const { loading, error, data, fetchMore } = useQuery(GET_MEALS, {
        variables: {
            categories: selectedCategory ? [selectedCategory] : [],
            areas: selectedAreas,
            offset: currentPage,
            sortField: sortOption,
        },
        notifyOnNetworkStatusChange: true, // To update 'loading' on refetching
    })

    console.log('Sortoption: ' + sortOption)

    const handleRecipeCardClick = (meal: Meal) => {
        setSelectedRecipe(meal)
    }

    const handleCloseModal = () => {
        setSelectedRecipe(null)
    }

    // Uses fetchMore to do a database call for the cards on the previous page (last 12 in the database)
    const pageBack = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
            fetchMore({
                variables: {
                    offset: (currentPage - 1) * PAGE_SIZE,
                },
            })
        }
    }

    // Uses fetchMore to do a database call for the cards on the next page (next 12 in the database)
    const pageForward = () => {
        if (data && data.meals.length === PAGE_SIZE) {
            setCurrentPage(currentPage + 1)
            fetchMore({
                variables: {
                    offset: (currentPage + 1) * PAGE_SIZE,
                },
            })
        }
    }

    if (loading) return <p>Loading meals...</p>
    if (error) return <p>Error loading meals: {error.message}</p>

    return (
        <div className="recipe-cards flex flex-wrap justify-around p-4 rounded-full">
            {Array.isArray(data?.meals) &&
                data?.meals.map((meal: Meal) => (
                    <div
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 "
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
            <div className="w-full flex justify-center items-center color-orange-600">
                <button
                    className="bg-orange-400"
                    disabled={currentPage === 0}
                    onClick={pageBack}
                >
                    ⬅
                </button>
                <output className="mx-6">{currentPage + 1}</output>
                <button
                    className="bg-orange-400"
                    disabled={data && data.meals.length < PAGE_SIZE}
                    onClick={pageForward}
                >
                    ➡
                </button>
            </div>
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
