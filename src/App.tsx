import React from 'react'
import Header from './components/molecules/Header'
import DinnerPicture from './components/molecules/FeatureSection'
import Footer from './components/molecules/Footer'
import HelloWorld from './HelloWorld'
import FilterSection from './components/molecules/FilterSection'

const App: React.FC = () => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <div>
                <Header />
                <DinnerPicture />
                <HelloWorld />
                <FilterSection />
                <Footer />
            </div>
        </div>
    )
}

export default App
