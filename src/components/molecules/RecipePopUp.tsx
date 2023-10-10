import React, { FC } from 'react'

interface RecipeProps {
    title: string
    ingredients: string[]
    steps: string[]
}

const Recipe: FC<RecipeProps> = ({ title, ingredients, steps }) => {
    return (
        <div className="max-w-sm mx-auto bg-black rounded shadow-lg overflow-hidden">
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{title}</h2>
                <div className="mb-4">
                    <h3 className="text-gray-700 font-semibold mb-2">
                        Ingredients:
                    </h3>
                    <ul className="list-disc pl-4">
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-gray-700 font-semibold mb-2">Steps:</h3>
                    <ol className="list-decimal pl-6">
                        {steps.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Recipe
