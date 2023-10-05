import React, { useState, useEffect } from 'react'

const Search = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth > 640)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className="relative mt-2 flex items-center justify-center">
            <input
                type="text"
                name="search"
                id="search"
                className="block w-full sm:w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-orange-400 text-xs sm:text-sm sm:leading-6"
                placeholder={
                    isMobile
                        ? 'Search...'
                        : 'Search for your next decadent meal...'
                }
            />
        </div>
    )
}

export default Search
