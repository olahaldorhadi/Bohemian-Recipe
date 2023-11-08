// Set rating locally for a given meal
export const setLocalRating = (mealId: string, rating: number) => {
    localStorage.setItem(mealId, rating.toString()) // Setting in localStorage
}

// Get own rating from a meal
export const getLocalRating = (mealId: string) => {
    const rating = localStorage.getItem(mealId)
    return rating ? parseInt(rating, 10) : 0 // Parse the rating back into a number
}
