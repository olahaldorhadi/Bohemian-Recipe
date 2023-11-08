import { gql } from 'apollo-server-express'
import Meal from '../models/MealModel.js'

export const typeDefs = gql`
    # Defines different queries
    type Query {
        meals(
            categories: [String]
            areas: [String]
            offset: Int
            limit: Int
            sortField: String
        ): [Meal]
    }
    type Query {
        mealTitles: [String]
    }
    type Query {
        specificMeal(mealName: String!): Meal
    }
    type Query {
        specificMealRating(mealId: String!): [Int]
    }
    type Mutation {
        updateSpecificMealRating(mealId: String!, rating: [Int]): Meal
    }

    # Defines what a meal includes
    type Meal {
        idMeal: String
        strMeal: String
        strDrinkAlternate: String
        strCategory: String
        strArea: String
        strInstructions: String
        strMealThumb: String
        strIngredient1: String
        strIngredient2: String
        strIngredient3: String
        strIngredient4: String
        strIngredient5: String
        strIngredient6: String
        strIngredient7: String
        strIngredient8: String
        strIngredient9: String
        strIngredient10: String
        strIngredient11: String
        strIngredient12: String
        strIngredient13: String
        strIngredient14: String
        strIngredient15: String
        strIngredient16: String
        strIngredient17: String
        strIngredient18: String
        strIngredient19: String
        strIngredient20: String
        strMeasure1: String
        strMeasure2: String
        strMeasure3: String
        strMeasure4: String
        strMeasure5: String
        strMeasure6: String
        strMeasure7: String
        strMeasure8: String
        strMeasure9: String
        strMeasure10: String
        strMeasure11: String
        strMeasure12: String
        strMeasure13: String
        strMeasure14: String
        strMeasure15: String
        strMeasure16: String
        strMeasure17: String
        strMeasure18: String
        strMeasure19: String
        strMeasure20: String
        strSource: String
        strImageSource: String
        strCreativeCommonsConfirmed: String
        dateModified: String
        rating: [Int]
    }
`

const PAGE_SIZE = 12 // Set the page size to 12

export const resolvers = {
    Mutation: {
        updateSpecificMealRating: async (_, { mealId, rating }) => {
            try {
                const meal = await Meal.findOne({ idMeal: mealId })
                meal.rating = rating
                const updatedMeal = await meal.save()
                return updatedMeal
            } catch (Error) {
                throw new Error('Error finding meal with id', Error)
            }
        },
    },
    Query: {
        // Resolver for the "meals" query field
        meals: async (
            _,
            {
                categories,
                areas,
                offset = 0,
                limit = PAGE_SIZE,
                sortField = 'strMeal',
            }
        ) => {
            // Initialize the query object to build a MongoDB query
            let query = {}

            // If there is a parameter categories and it is bigger than 0, a property strCategory is created in query.
            // strCategory is set to be objects that matches with categories.
            if (categories && categories.length > 0) {
                query.strCategory = { $in: categories }
            }

            // If there is a parameter areas and it is bigger than 0, a property strArea is created in query.
            // strArea is set to be objects that matches with areas.
            if (areas && areas.length > 0) {
                query.strArea = { $in: areas }
            }

            // Calculate the actual offset based on the provided page number
            const calculatedOffset = offset * limit

            const sort = {}
            sort[sortField] = 1

            // Execute the query against the MongoDB database
            try {
                const meals = await Meal.find(query)
                    .sort(sort)
                    .skip(calculatedOffset)
                    .limit(limit)
                return meals
            } catch (error) {
                console.error('Error fetching meals:', error)
                throw new Error('Error fetching meals')
            }
        },
        mealTitles: async () => {
            try {
                const meals = await Meal.find({}).select('strMeal -_id') // Select only the meal titles, exclude MongoDB's _id field
                return meals.map((meal) => meal.strMeal) // Extract the titles
            } catch (error) {
                console.error('Error fetching meal titles:', error)
                throw new Error('Error fetching meal titles')
            }
        },
        specificMeal: async (_, { mealName }) => {
            try {
                const meal = await Meal.findOne({ strMeal: mealName })
                return meal
            } catch (error) {
                console.error('Error fetching meal titles:', error)
                throw new Error('Error fetching meal titles')
            }
        },
        specificMealRating: async (_, { mealId }) => {
            try {
                const meal = await Meal.findOne({ idMeal: mealId })
                if (!meal) {
                    throw new Error('Meal not found')
                }
                return meal.rating
            } catch (error) {
                throw new Error(`Error fetching meal with ID: ${mealId}`)
            }
        },
    },
}

export default typeDefs
