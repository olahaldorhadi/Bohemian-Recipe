import React from 'react'

type RecipeCardProps = {
    imgSrc: string
    imgAlt: string
    title: string
    category: string
    onClick?: () => void // Add onClick prop to the props type
    rating: [number]
}

function calculateAverage(ratings: [number]) {
    let sum = 0
    for (let i = 0; i < ratings.length; i++) {
        sum += ratings[i]
    }
    return sum / ratings.length
}

const RecipeCard: React.FC<RecipeCardProps> = ({
    imgSrc,
    imgAlt,
    title,
    category,
    onClick,
    rating,
}) => {
    return (
        <div
            className="w-full h-96 rounded-xl border-8 border-black bg-zinc-900 border-color-orange"
            onClick={onClick}
            style={{ cursor: 'pointer' }}
        >
            <img
                src={imgSrc}
                alt={imgAlt}
                className="rounded-t-md w-full h-1/2 object-cover"
            />

            <div className="p-4 text-white">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <hr className="my-2" />
                <p className="mt-auto">{category}</p>
                <p className="mt-auto">
                    ★ {calculateAverage(rating).toFixed(2)} / 5
                </p>
            </div>
        </div>
    )
}

export default RecipeCard
