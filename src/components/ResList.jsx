import React, { useEffect, useState } from 'react'
import ResCard from './ResCard'

const ResList = () => {
    const [restaurants, setRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [isTopRated, setIsTopRated] = useState(false)
    const [searchInput, setSearchInput] = useState("")
    
    useEffect(() => {
        getRestaurantData()
    }, [])
    
    const getRestaurantData = async () => {
        try {
            const response = await fetch("https://pastebin.com/raw/0QcdEDBL")
            const json = await response.json()
            const restaurantList = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
            setRestaurants(restaurantList)
            setFilteredRestaurants(restaurantList)
        } catch (error) {
            console.error("Failed to fetch restaurant data:", error)
        }
    }
    
    const applyFilters = () => {
        let filtered = restaurants
        
        if (searchInput) {
            filtered = filtered.filter(restaurant => 
                restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
            )
        }
        
        if (isTopRated) {
            filtered = filtered.filter(restaurant => restaurant.info.avgRating > 4.5)
        }
        
        setFilteredRestaurants(filtered)
    }
    
    useEffect(() => {
        applyFilters()
    }, [isTopRated, restaurants])
    
    const handleSearch = () => {
        applyFilters()
    }
    
    const handleClear = () => {
        setSearchInput("")
        setIsTopRated(false)
        setFilteredRestaurants(restaurants)
    }
    return (
        <>
            <div className='mb-4 p-4'>
                <input 
                    className='border border-gray-300 px-2 py-1 rounded' 
                    type="text" 
                    placeholder="Search restaurants..."
                    value={searchInput} 
                    onChange={(e) => setSearchInput(e.target.value)} 
                />
                <button 
                    className='bg-blue-500 text-white px-4 py-1 rounded ml-2 hover:bg-blue-600' 
                    onClick={handleSearch}
                >
                    Search
                </button>
                <button 
                    className='bg-gray-500 text-white px-4 py-1 rounded ml-2 hover:bg-gray-600' 
                    onClick={handleClear}
                >
                    Clear
                </button>
                <div className='inline-flex items-center ml-4'>
                    <input 
                        id="topRated" 
                        type="checkbox" 
                        checked={isTopRated} 
                        onChange={(e) => setIsTopRated(e.target.checked)} 
                        className='mr-2'
                    />
                    <label htmlFor="topRated">Top Rated (4.5+)</label>
                </div>
            </div>
            <div className='flex flex-wrap justify-center'>
                {filteredRestaurants.map((restaurant, index) => (
                    <ResCard key={restaurant.info.id || index} resInfo={restaurant} />
                ))}
            </div>
        </>
    )
}

export default ResList