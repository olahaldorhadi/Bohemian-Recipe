import React from 'react'
import Food from '../../assets/food.jpg'
import Search from '../molecules/SearchBar'

const DinnerPicture: React.FC = () => {
    return (
        <div className="relative w-full h-24 sm:h-80 md:h-96">
            <img
                src={Food}
                alt="Lovely Dinner"
                className="w-full h-full object-cover"
                style={{ zIndex: -1 }}
            />
            <div className="absolute inset-0 bg-orange-500 opacity-30"></div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xs sm:max-w-md">
                <Search />
            </div>
        </div>
    )
}

export default DinnerPicture
