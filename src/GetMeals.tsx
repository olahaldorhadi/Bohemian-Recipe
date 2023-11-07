import React from 'react'
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
        }
    }
`

// Defines what a meal is
interface Meal {
    idMeal: string
    strMeal: string
    strCategory: string
    strArea: string
}

function MealsList() {
    // Uses the query GET_MEALS with variables defined under
    const { loading, error, data } = useQuery(GET_MEALS, {
        variables: { categories: ['Dessert'], areas: ['British', 'American'] },
    })

    if (loading) return <p>Loading meals...</p>
    if (error) return <p>Error loading meals: {error.message}</p>

    // Displays information about meals
    return (
        <div>
            {data?.meals.map((meal: Meal) => (
                <div key={meal.idMeal}>
                    <h2>{meal.strMeal}</h2>
                    <p>Category: {meal.strCategory}</p>
                    <p>Area: {meal.strArea}</p>
                </div>
            ))}
        </div>
    )
}

export default MealsList
