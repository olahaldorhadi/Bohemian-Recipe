import React from 'react'

type RecipeCardProps = {
    imgSrc: string
    imgAlt: string
    title: string
    category: string
}

const RecipeCard: React.FC<RecipeCardProps> = ({ imgSrc, imgAlt, title, category }) => {
    return (
        <div className='w-1/5 h-96 rounded-md border-2 border-slate-200 bg-zinc-900'>
            <img src={imgSrc} alt={imgAlt} className='rounded-t-md w-full h-1/2 object-cover' />  
            <h2 className='text-2xl m-2'>{title}</h2>
            <p className='mx-2'>{category}</p>
        </div>
    )
}

export default RecipeCard
