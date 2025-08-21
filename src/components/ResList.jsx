import React, { useEffect, useState } from 'react'
import ResCard from './ResCard'
import ResListShimmer from './ResListShimmer'
import ErrorMessage from './ErrorMessage'

const ResList = () => {
    const [restaurants, setRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [isTopRated, setIsTopRated] = useState(false)
    const [searchInput, setSearchInput] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        getRestaurantData()
    }, [])
    
    const getRestaurantData = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.94060&lng=76.26530&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const json = await response.json()
            const restaurantList = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
            setRestaurants(restaurantList)
            setFilteredRestaurants(restaurantList)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            if (error.message.includes('CORS') || error.name === 'TypeError') {
                setError('cors')
            } else {
                setError('network')
            }
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
    if (loading) {
        return <ResListShimmer />
    }

    if (error) {
        return <ErrorMessage type={error} />
    }

    return (
        <div className='max-w-7xl mx-auto px-4 py-6'>
            <div className='bg-white rounded-lg shadow-sm p-6 mb-8'>
                <h2 className='text-2xl font-bold text-gray-800 mb-6'>Find Your Favorite Restaurant</h2>
                <div className='flex flex-col md:flex-row gap-4 items-start md:items-center'>
                    <div className='flex-1 flex gap-3'>
                        <input 
                            className='flex-1 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent' 
                            type="text" 
                            placeholder="Search restaurants..."
                            value={searchInput} 
                            onChange={(e) => setSearchInput(e.target.value)} 
                        />
                        <button 
                            className='bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium' 
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <button 
                            className='bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium' 
                            onClick={handleClear}
                        >
                            Clear
                        </button>
                        <div className='flex items-center bg-gray-50 px-4 py-3 rounded-lg'>
                            <input 
                                id="topRated" 
                                type="checkbox" 
                                checked={isTopRated} 
                                onChange={(e) => setIsTopRated(e.target.checked)} 
                                className='mr-3 w-4 h-4 text-orange-500 focus:ring-orange-500'
                            />
                            <label htmlFor="topRated" className='text-gray-700 font-medium cursor-pointer'>Top Rated (4.5+)</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {filteredRestaurants.map((restaurant, index) => (
                    <ResCard key={restaurant.info.id || index} resInfo={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default ResList