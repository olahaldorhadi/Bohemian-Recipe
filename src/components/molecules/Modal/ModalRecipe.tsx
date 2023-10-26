import React, { useEffect } from 'react'
import { Modal } from './Modal'

type RecipeCardProps = {
    strMealThumb: string
    imgAlt: string
    title: string
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
    const { strMealThumb, imgAlt, title, category, strInstructions } =
        selectedRecipe

useEffect(() => {

            document.body.style.overflow = 'hidden';
        
            return () => {
              document.body.style.overflow = 'auto';
            };
          }, []);

    return (
        <Modal onClickOut={onClose}>
            <div className="p-4 mx-auto max-w-sm">
                <img
                    src={strMealThumb}
                    alt={imgAlt}
                    className="w-full h-60 object-cover mb-4 rounded-t-lg"
                />
                <p className="text-lg mb-4">{category}</p>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-center">
                    {title}{' '}
                </h2>
                <ol className="list-decimal pl-5 text-lg mb-4 sm:text-m md:text-l lg:text-1xl">
                    {strInstructions.split('\n').map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
                <div className="flex justify-center">
                    <button
                        className="bg-orange-500 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalRecipe
