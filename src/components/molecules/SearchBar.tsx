import React, { useState, useEffect } from 'react'
import Fuse, { FuseResult } from 'fuse.js'
import { gql, useQuery, useLazyQuery } from '@apollo/client'
import ModalRecipe from '../atoms/ModalRecipe'

// Define a type to use later, to avoid using "any"
type Dish = {
    title: string
}

// Defines what a meal is
interface Meal {
    idMeal: string
    strMeal: string
    strCategory: string
    strArea: string
    strMealThumb: string
}

const GET_MEAL_TITLES = gql`
    query GetMealTitles {
        mealTitles
    }
`

const GET_SPECIFIC_MEAL = gql`
    query GetSpecificMeal($mealName: String!) {
        specificMeal(mealName: $mealName) {
            idMeal
            strMeal
            strCategory
            strArea
            strInstructions
            strMealThumb
            strIngredient1
            strIngredient2
            strIngredient3
            strIngredient4
            strIngredient5
            strIngredient6
            strIngredient7
            strIngredient8
            strIngredient9
            strIngredient10
            strIngredient11
            strIngredient12
            strIngredient13
            strIngredient14
            strIngredient15
            strIngredient16
            strIngredient17
            strIngredient18
            strIngredient19
            strIngredient20
            strMeasure1
            strMeasure2
            strMeasure3
            strMeasure4
            strMeasure5
            strMeasure6
            strMeasure7
            strMeasure8
            strMeasure9
            strMeasure10
            strMeasure11
            strMeasure12
            strMeasure13
            strMeasure14
            strMeasure15
            strMeasure16
            strMeasure17
            strMeasure18
            strMeasure19
            strMeasure20
            rating
        }
    }
`

const Search: React.FC = () => {
    // Check if device is a phone
    const [isMobile, setIsMobile] = useState(window.innerWidth > 640)
    // Set query to be an empty string and define a setter
    const [query, setQuery] = useState('')
    // Set results to be the result of what is searched for, with type Dish, defined above
    const [results, setResults] = useState<FuseResult<Dish>[]>([])
    const [fuse, setFuse] = useState<Fuse<Dish>>(
        new Fuse([], { keys: ['title'] })
    )
    const [selectedRecipe, setSelectedRecipe] = useState<Meal | null>(null)

    const { loading, error, data } = useQuery(GET_MEAL_TITLES)

    useEffect(() => {
        if (data && data.mealTitles) {
            const items = data.mealTitles.map((title: string) => ({ title }))
            setFuse(
                new Fuse(items, {
                    keys: ['title'],
                    includeScore: true,
                })
            )
        }
    }, [data])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const [GetSpecificMeal, { loading: loadingSearch, error: errorSearch }] =
        useLazyQuery(GET_SPECIFIC_MEAL, {
            onCompleted: (data) => {
                // Data will be available here after the query completes
                setSelectedRecipe(data.specificMeal)
                console.log(data.specificMeal)
            },
        })

    // Function is called when searchfield changes
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setQuery(value)
        if (fuse) {
            const searchResults = fuse.search(value)
            setResults(searchResults)
        }
    }

    const handleCloseModal = () => {
        setSelectedRecipe(null)
    }

    if (loading) return <p></p>
    if (error) return <p>Error loading meals: {error.message}</p>

    if (loadingSearch) return <p>Loading...</p>
    if (errorSearch) return <p>Error: {errorSearch.message}</p>

    const handleItemClick = (mealName: string) => {
        GetSpecificMeal({ variables: { mealName } })
    }

    return (
        <div className="mt-2 items-center">
            <input
                type="text"
                name="search"
                id="search"
                value={query} // Sets its value to be query
                onChange={handleSearch} // Runs handleSearch when changed
                className="w-full sm:w-full rounded-lg border-2 py-2 text-gray-900 text-sm leading-6 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white focus:bg-white"
                placeholder={
                    isMobile
                        ? 'Search...'
                        : 'Search for your next decadent meal...'
                }
            />
            {/* Displays a list with search results */}
            <ul className="mt-1">
                {results.slice(0, 10).map((result) => (
                    <li
                        key={result.item.title}
                        className="w-full sm:w-full bg-white text-black px-2 py-1 hover:bg-orange-200"
                        onClick={() => handleItemClick(result.item.title)}
                    >
                        {result.item.title}
                    </li>
                ))}
            </ul>

            {selectedRecipe && (
                <ModalRecipe
                    selectedRecipe={selectedRecipe}
                    onClose={handleCloseModal}
                    imgSrc={selectedRecipe.strMealThumb}
                />
            )}
        </div>
    )
}
export default Search
