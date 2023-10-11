import React from 'react'
import Header from './components/molecules/Header'
import DinnerPicture from './components/molecules/FeatureSection'
import Footer from './components/molecules/Footer'
import DisplayRecipes from './components/atoms/DisplayRecipes'

const App: React.FC = () => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <div>
                <Header />
                <DinnerPicture />
                <DisplayRecipes />
                <Footer />
            </div>
        </div>
    )
}

export default App
