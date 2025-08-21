import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import ErrorMessage from './ErrorMessage'

const ResPage = () => {
  const params = useParams()
  useEffect(()=>{
    fetchResInfo()
  },[])
  const [categories, setCategories] = useState([])
  const [accordionIndex, setAccordionIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const IMG_BASE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
  const fetchResInfo = () => {
    fetch(`
https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.94060&lng=76.26530&restaurantId=704922&catalog_qa=undefined&submitAction=ENTER`)
    .then((res) => res.json())
    .then((data) => {
      const cards  = data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
      const filteredCards = cards.filter((card) => (card.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
      setCategories(filteredCards)
      setLoading(false)
    })
    .catch((error) => {
      setLoading(false)
      if (error.message.includes('CORS') || error.name === 'TypeError') {
        setError('cors')
      } else {
        setError('network')
      }
    })
  }
  if (loading) {
    return <Shimmer />
  }

  if (error) {
    return <ErrorMessage type={error} />
  }

  return (
    <div className='max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen'>
      <h1 className='text-3xl font-bold text-gray-800 mb-8 text-center'>Restaurant Menu</h1>
      <div className='space-y-4'>
        {categories.map((category, i) => (
          <div key={i} className='bg-white rounded-lg shadow-md overflow-hidden'>
            <div 
              className='flex justify-between items-center p-4 bg-gradient-to-r from-orange-500 to-red-500 text-white cursor-pointer hover:from-orange-600 hover:to-red-600 transition-all duration-200'
              onClick={() => setAccordionIndex(prev => prev === i ? null : i)}
            >
              <h2 className='text-xl font-semibold'>{category?.card?.card?.title}</h2>
              <span className={`text-2xl transform transition-transform duration-200 ${i === accordionIndex ? "rotate-180" : ""}`}>
                ▼
              </span>
            </div>
            {i === accordionIndex && (
              <div className='p-4 space-y-4 bg-gray-50'>
                {category?.card?.card?.itemCards?.map((item, index) => (
                  <div key={index} className='bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200'>
                    <div className='flex justify-between items-start'>
                      <div className='flex-1'>
                        <h3 className='text-lg font-medium text-gray-800 mb-2'>{item?.card?.info?.name}</h3>
                        <p className='text-green-600 font-semibold text-lg'>₹{((item?.card?.info?.price)/100|| (item?.card?.info?.defaultPrice) / 100).toFixed(2)}</p>
                        {item?.card?.info?.description && (
                          <p className='text-gray-600 text-sm mt-2 line-clamp-2'>{item?.card?.info?.description}</p>
                        )}
                      </div>
                      <div className='ml-4'>
                        {item?.card?.info?.imageId ? (
                          <div className='relative'>
                            <img 
                            loading='lazy'
                              src={IMG_BASE_URL + item.card.info.imageId} 
                              alt={item.card.info.name}
                              className='w-24 h-24 object-cover rounded-lg'
                            />
                            <button className='absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-orange-500 hover:bg-orange-600 text-white px-1 py-1 rounded-md text-sm font-medium transition-colors duration-200'>
                              Add +
                            </button>
                          </div>
                        ) : (
                          <button className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200'>
                            Add +
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResPage