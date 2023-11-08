export type Recipe = {
    //Not sure if this will be used
    key: number // Such as 52930
    name: string // Such as "Pate Chinois"
    strCategory: string // Such as "Beef"
    area: string // Such as "Canadian"
    instructions: string // Such as "In a large pot of salted water, cook the potatoes until they are very tender. Drain."
    image: string // URL such as https://www.themealdb.com/images/media/meals/yyrrxr1511816289.jpg
    thumbnail: string // URL such as https://www.themealdb.com/images/media/meals/ytttsv1511798734.jpg/preview
    //Thumbnail does not always exist, should always have a backup.
    tags: string //Such as "MainMeal,Alcoholic". Should be treated separately
    url: string //URL such as "https://www.youtube.com/watch?v=QRFqnLkEv3I"
    ingredients: string[] //Such as ["Potatoes", "Butter"]
    ingredientMeasures: string[] //Such as ["4 cups", "60ml", "\u00bd cup", ""] !!
}

export type RecipeProps = {
    recipes: Recipe[]
}
