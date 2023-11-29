import { Schema as _Schema, model } from 'mongoose'

const Schema = _Schema

// Mongoose schema definition
const MealSchema = new Schema({
    idMeal: { type: String, required: true },
    strMeal: { type: String, required: true },
    strCategory: { type: String, required: true },
    strArea: { type: String, required: true },
    strInstructions: { type: String, required: true },
    strMealThumb: { type: String, required: true },
    strIngredient1: String,
    strIngredient2: String,
    strIngredient3: String,
    strIngredient4: String,
    strIngredient5: String,
    strIngredient6: String,
    strIngredient7: String,
    strIngredient8: String,
    strIngredient9: String,
    strIngredient10: String,
    strIngredient11: String,
    strIngredient12: String,
    strIngredient13: String,
    strIngredient14: String,
    strIngredient15: String,
    strIngredient16: String,
    strIngredient17: String,
    strIngredient18: String,
    strIngredient19: String,
    strIngredient20: String,
    strMeasure1: String,
    strMeasure2: String,
    strMeasure3: String,
    strMeasure4: String,
    strMeasure5: String,
    strMeasure6: String,
    strMeasure7: String,
    strMeasure8: String,
    strMeasure9: String,
    strMeasure10: String,
    strMeasure11: String,
    strMeasure12: String,
    strMeasure13: String,
    strMeasure14: String,
    strMeasure15: String,
    strMeasure16: String,
    strMeasure17: String,
    strMeasure18: String,
    strMeasure19: String,
    strMeasure20: String,
    strSource: String,
    strImageSource: String,
    strCreativeCommonsConfirmed: String,
    dateModified: Date,
    rating: [Number],
})

// Create Mongoose model
const Meal = model('Meal', MealSchema)

export default Meal
