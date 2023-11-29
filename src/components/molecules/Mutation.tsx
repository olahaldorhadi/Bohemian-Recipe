import { gql } from '@apollo/client'

export const UPDATE_MEAL_MUTATION = gql`
    mutation UpdateSpecificMealRating($mealId: String!, $rating: [Int]) {
        updateSpecificMealRating(mealId: $mealId, rating: $rating) {
            idMeal
            rating
        }
    }
`
