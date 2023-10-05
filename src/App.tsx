// App.jsx
import React from 'react'
import Header from './components/molecules/Header'
import DinnerPicture from './components/molecules/FeatureSection'
import Footer from './components/molecules/Footer'
import RecipeCard from './components/molecules/RecipeCard'

const App: React.FC = () => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <div>
                <Header />
                <DinnerPicture />
                <RecipeCard
                    imgSrc={
                        'https://www.themealdb.com/images//media/meals/ypxvwv1505333929.jpg'
                    }
                    imgAlt={'Crock Pot Chicken Baked Tacos'}
                    title={'Crock Pot Chicken Baked Tacos'}
                    category={'Chicken'}
                />
                <Footer />
            </div>
        </div>
    )
}

export default App
