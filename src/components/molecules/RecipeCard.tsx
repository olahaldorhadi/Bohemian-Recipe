import React from 'react'
import { getLocalRating } from '../../utils/localStorageUtil'

type RecipeCardProps = {
    mealId: string
    strMealThumb: string
    title: string
    strCategory: string
    onClick?: () => void
    onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void
    rating: number[]
    tabIndex: number
}

function calculateAverage(ratings: number[]) {
    let sum = 0
    for (let i = 0; i < ratings.length; i++) {
        sum += ratings[i]
    }
    return sum / ratings.length
}

const RecipeCard: React.FC<RecipeCardProps> = ({
    mealId,
    strMealThumb,
    title,
    strCategory,
    onClick,
    onKeyDown,
    rating,
    tabIndex,
}) => {
    const currentLocalRating = getLocalRating(mealId)
    return (
        <div
            className="w-full h-96 p-0 text-left rounded-xl border-8 border-black bg-zinc-900 border-color-orange transition-none"
            onClick={onClick}
            onKeyDown={onKeyDown}
            tabIndex={tabIndex}
            style={{ cursor: 'pointer' }}
            data-testid={`cypress-recipe-card-${strCategory}`}
            title={title}
        >
            <img
                src={strMealThumb}
                className="rounded-t-md w-full h-1/2 object-cover"
            />

            <div className="p-4 text-white">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <hr className="my-2" />
                <p className="mt-auto" data-testid="cypress-recipe-category">
                    {strCategory}
                </p>
                <p className="mt-auto">
                    <span
                        className={`${
                            currentLocalRating !== 0 ? 'text-[#ffc107]' : ''
                        }`}
                    >
                        ★
                    </span>{' '}
                    {calculateAverage(rating).toFixed(2)} / 5
                </p>
            </div>
        </div>
    )
}

export default RecipeCard
