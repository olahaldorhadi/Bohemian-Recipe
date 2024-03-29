import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'
import ModalRecipe from '../atoms/ModalRecipe'
import { useQuery } from '@apollo/client'
import { RecipeCardProps } from '../atoms/ModalRecipe'
import { GET_MEALS } from './Queries'

// Defines what a meal is
interface Meal {
    idMeal: string
    strMeal: string
    strCategory: string
    strArea: string
    strMealThumb: string
    strInstructions: string
    strIngredient1: string
    strIngredient2: string
    strIngredient3: string
    strIngredient4: string
    strIngredient5: string
    strIngredient6: string
    strIngredient7: string
    strIngredient8: string
    strIngredient9: string
    strIngredient10: string
    strIngredient11: string
    strIngredient12: string
    strIngredient13: string
    strIngredient14: string
    strIngredient15: string
    strIngredient16: string
    strIngredient17: string
    strIngredient18: string
    strIngredient19: string
    strIngredient20: string
    strMeasure1: string
    strMeasure2: string
    strMeasure3: string
    strMeasure4: string
    strMeasure5: string
    strMeasure6: string
    strMeasure7: string
    strMeasure8: string
    strMeasure9: string
    strMeasure10: string
    strMeasure11: string
    strMeasure12: string
    strMeasure13: string
    strMeasure14: string
    strMeasure15: string
    strMeasure16: string
    strMeasure17: string
    strMeasure18: string
    strMeasure19: string
    strMeasure20: string
    rating: [number]
}

// Defines props
interface DisplayRecipesProps {
    currentPageFilter: number
    selectedCategory: string | null
    selectedAreas: string[]
    sortOption: string
}

// All pages should have 12 cards
const PAGE_SIZE = 12

const DisplayRecipes: React.FC<DisplayRecipesProps> = ({
    currentPageFilter,
    selectedCategory,
    selectedAreas,
    sortOption,
}) => {
    const [selectedRecipe, setSelectedRecipe] =
        useState<RecipeCardProps | null>(null)
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        setCurrentPage(currentPageFilter)
    }, [currentPageFilter, selectedCategory, selectedAreas, sortOption])

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

    const handleRecipeCardClick = (meal: Meal) => {
        const recipeProps: RecipeCardProps = {
            idMeal: meal.idMeal,
            strMealThumb: meal.strMealThumb,
            strMeal: meal.strMeal,
            strCategory: meal.strCategory,
            strArea: meal.strArea,
            strInstructions: meal.strInstructions,
            strIngredient1: meal.strIngredient1,
            strIngredient2: meal.strIngredient2,
            strIngredient3: meal.strIngredient3,
            strIngredient4: meal.strIngredient4,
            strIngredient5: meal.strIngredient5,
            strIngredient6: meal.strIngredient6,
            strIngredient7: meal.strIngredient7,
            strIngredient8: meal.strIngredient8,
            strIngredient9: meal.strIngredient9,
            strIngredient10: meal.strIngredient10,
            strIngredient11: meal.strIngredient11,
            strIngredient12: meal.strIngredient12,
            strIngredient13: meal.strIngredient13,
            strIngredient14: meal.strIngredient14,
            strIngredient15: meal.strIngredient15,
            strIngredient16: meal.strIngredient16,
            strIngredient17: meal.strIngredient17,
            strIngredient18: meal.strIngredient18,
            strIngredient19: meal.strIngredient19,
            strIngredient20: meal.strIngredient20,
            strMeasure1: meal.strMeasure1,
            strMeasure2: meal.strMeasure2,
            strMeasure3: meal.strMeasure3,
            strMeasure4: meal.strMeasure4,
            strMeasure5: meal.strMeasure5,
            strMeasure6: meal.strMeasure6,
            strMeasure7: meal.strMeasure7,
            strMeasure8: meal.strMeasure8,
            strMeasure9: meal.strMeasure9,
            strMeasure10: meal.strMeasure10,
            strMeasure11: meal.strMeasure11,
            strMeasure12: meal.strMeasure12,
            strMeasure13: meal.strMeasure13,
            strMeasure14: meal.strMeasure14,
            strMeasure15: meal.strMeasure15,
            strMeasure16: meal.strMeasure16,
            strMeasure17: meal.strMeasure17,
            strMeasure18: meal.strMeasure18,
            strMeasure20: meal.strMeasure20,
            strMeasure19: meal.strMeasure19,
        }
        setSelectedRecipe(recipeProps)
    }

    const handleCloseModal = () => {
        setSelectedRecipe(null)
    }
    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLDivElement>,
        meal: Meal
    ) => {
        if (event.key === 'Enter') {
            handleRecipeCardClick(meal)
        }
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
                            mealId={meal.idMeal}
                            strMealThumb={meal.strMealThumb}
                            title={meal.strMeal}
                            strCategory={meal.strCategory}
                            onClick={() => handleRecipeCardClick(meal)}
                            rating={meal.rating}
                            onKeyDown={(event) => handleKeyDown(event, meal)}
                            tabIndex={0}
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
                    mealId={selectedRecipe.idMeal}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    )
}

export default DisplayRecipes
