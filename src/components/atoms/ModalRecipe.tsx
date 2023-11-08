import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Modal } from './Modal'
import Rating from '../molecules/Rating'
import RecipeIngredientBox from '../molecules/IngredientBox'

type RecipeCardProps = {
    strMealThumb: string
    imgAlt: string
    strMeal: string
    category: string
    strInstructions: string
}

type ModalRecipeProps = {
    selectedRecipe: RecipeCardProps
    onClose: () => void
}

const ModalRecipe: React.FC<ModalRecipeProps> = ({
    selectedRecipe,
    onClose,
}) => {
    const modalRoot = document.getElementById('modal-root')

    const { strMealThumb, imgAlt, strMeal, category, strInstructions } =
        selectedRecipe

    const [rating, setRating] = useState<number>(0)

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])
    return ReactDOM.createPortal(
        <div className="modal">
        <Modal onClickOut={onClose}>
            <div className="flex justify-end mb-4">
                <button className="bg-orange-400" onClick={onClose}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <div className="flex">
                <div className="mx-auto max-w-fit">
                    <div className="flex justify-center h-64 md:h-80 lg:h-96">
                        <img
                            src={strMealThumb}
                            alt={imgAlt}
                            className="w-2/3 h-full object-contain rounded mb-4 "
                        />
                    </div>
                    <p className="text-lg mb-4">{category}</p>
                    <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-2 text-center">
                        {strMeal}{' '}
                    </h2>
                    <hr className="border-t-2 border-orange-400 mt-8 w-full" />
                    <div className="flex flex-col md:flex-row ml-4 mr-8">
                        <div className="mt-8">
                            <RecipeIngredientBox />
                        </div>
                        <div className="mt-8">
                            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-2">
                                Steps
                            </h2>
                            <ol className="text-lg mb-4 sm:text-m md:text-l lg:text-xl">
                                {strInstructions
                                    .split('\n')
                                    .map((step, index) => (
                                        <p className="mb-4" key={index}>
                                            {step}
                                        </p>
                                    ))}
                            </ol>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col items-center pb-8">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                            Leave your rating
                        </h2>
                        <Rating
                            count={5}
                            value={rating}
                            edit={true}
                            onChange={(value) => setRating(value)}
                        />
                        <span className="text-lg">{rating}/5 stars</span>
                    </div>
                </div>
            </div>
        </Modal>
    </div>,
    modalRoot  
    )
}

export default ModalRecipe
