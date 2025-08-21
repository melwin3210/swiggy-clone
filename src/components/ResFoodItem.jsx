import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/slices/cartSlice'
const IMG_BASE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

const ResFoodItem = ({ category }) => {
     const dispatch = useDispatch()
    return (
        <>

            <div className='p-4 space-y-4 bg-gray-50'>
                {category?.card?.card?.itemCards?.map((item, index) => (
                    <div key={index} className='bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200'>
                        <div className='flex justify-between items-start'>
                            <div className='flex-1'>
                                <h3 className='text-lg font-medium text-gray-800 mb-2'>{item?.card?.info?.name}</h3>
                                <p className='text-green-600 font-semibold text-lg'>₹{((item?.card?.info?.price) / 100 || (item?.card?.info?.defaultPrice) / 100).toFixed(2)}</p>
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
                                        <button onClick={() => dispatch(addToCart(item))} className='absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-orange-500 hover:bg-orange-600 text-white px-1 py-1 rounded-md text-sm font-medium transition-colors duration-200'>
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
        </>
    )
}

export default ResFoodItem