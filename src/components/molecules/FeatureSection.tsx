import React from 'react'
import Food from '../../assets/food.jpg'
import Search from '../molecules/SearchBar'

const DinnerPicture: React.FC = () => {
    return (
        <div className="relative w-full h-60 md:h-92 lg:h-108">
            <img
                src={Food}
                alt="Lovely Dinner"
                className="w-full h-full object-cover"
                style={{ zIndex: -1 }}
            />
            <div className="absolute inset-0 bg-orange-500 opacity-30"></div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xs sm:max-w-md">
                <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
                    What would you like to eat?
                </h1>
                <Search />
            </div>
        </div>
    )
}

export default DinnerPicture
