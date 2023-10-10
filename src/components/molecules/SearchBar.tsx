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
                className="w-full sm:w-full rounded-lg border-2 py-2 text-gray-900 text-sm leading-6 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white focus:bg-white"
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
