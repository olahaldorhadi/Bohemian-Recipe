import React, { useState } from 'react'
import Header from './components/molecules/Header'
import DinnerPicture from './components/molecules/FeatureSection'
import Footer from './components/molecules/Footer'
import RecipeCard from './components/molecules/RecipeCard'
import ModalRecipe from './components/molecules/Modal/ModalRecipe'

const App: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false)

    const handleRecipeCardClick = () => {
        setModalVisible(true)
    }

    const handleCloseModal = () => {
        setModalVisible(false)
    }

    const recipeDetails = {
        imgSrc: 'https://www.themealdb.com/images//media/meals/ypxvwv1505333929.jpg',
        imgAlt: 'Crock Pot Chicken Baked Tacos',
        title: 'Crock Pot Chicken Baked Tacos',
        category: 'Chicken',
        steps: 'Cook the chicken with spices until tender.',
    }

    return (
        <div className="flex flex-col h-screen justify-between">
            <div>
                <Header />
                <DinnerPicture />
                <RecipeCard
                    onClick={handleRecipeCardClick}
                    {...recipeDetails}
                />
                {modalVisible && (
                    <ModalRecipe
                        recipe={recipeDetails}
                        onClose={handleCloseModal}
                    />
                )}
                <Footer />
            </div>
        </div>
    )
}

export default App
