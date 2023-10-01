import React from 'react'
import './RecipeCard.css'

type RecipeCardProps = {
    imgSrc: string
    imgAlt: string
    title: string
}

const RecipeCard: React.FC<RecipeCardProps> = ({ imgSrc, imgAlt, title }) => {
    return (
        <div>
            <p>Hei</p>
            {imgSrc}
            {imgAlt}
            {title}
        </div>
    )
}

export default RecipeCard
