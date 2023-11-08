import React from 'react'

const RecipeIngredientBox: React.FC = () => {
    const ingredients: string[] = []

    return (
        <div className="w-56 mx-auto p-4 border border-orange-400 rounded-lg md:mr-8 lg:mr-8 md:w-48">
            <h2 className="text-lg font-semibold mb-4">Ingredients</h2>
            <ul>
                <li>4 slices of onion</li>
                <li>6 freedom of speech</li>
                <li>1 impeachment</li>
                <li>33 liberty bells</li>
                <li>salt</li>
                {ingredients.map((ingredient, index) => (
                    <li key={index} className="mb-2">
                        {ingredient} {/* Placeholder for ingredient */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RecipeIngredientBox
