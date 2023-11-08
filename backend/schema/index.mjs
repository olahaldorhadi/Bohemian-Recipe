import { gql } from 'apollo-server-express'
import Meal from '../models/MealModel.js'

export const typeDefs = gql`
    # Defines how a query should be called (with categories and areas as input parameters) and that it returns a list of meals
    type Query {
        meals(categories: [String], areas: [String], offset: Int, limit: Int): [Meal]
    }
    type Query {
        mealTitles: [String]
    }
    type Query {
        spesificMeal(mealName: String!): Meal
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
        strTags: String
        strYoutube: String
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
    }
`

const PAGE_SIZE = 12; // Set the page size to 12

export const resolvers = {
    Query: {
        // Resolver for the "meals" query field
        meals: async (_, { categories, areas, offset = 0, limit = PAGE_SIZE }) => {
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
            const calculatedOffset = offset * limit;

            // Execute the query against the MongoDB database
            try {
                const meals = await Meal.find(query).skip(calculatedOffset).limit(limit);
                return meals;
            } catch (error) {
                console.error('Error fetching meals:', error);
                throw new Error('Error fetching meals');
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
        spesificMeal: async (_, { mealName }) => {
            try {
                const meal = await Meal.findOne({ strMeal: mealName })
                return meal
            } catch (error) {
                console.error('Error fetching meal titles:', error)
                throw new Error('Error fetching meal titles')
            }
        },
    },
}

export default typeDefs
