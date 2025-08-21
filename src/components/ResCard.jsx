import React from 'react'
import { Link } from 'react-router-dom'

const ResCard = ({ resInfo }) => {
    const { name, cloudinaryImageId, avgRating, locality, sla: deliveryTime , id} = resInfo?.info
    return (
        <Link to={`/resDetails/${id}`} className='block'>
            <div className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full'>
                <div className='relative'>
                    <img 
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} 
                        alt={name} 
                        className='w-full h-48 object-cover'
                    />
                    <div className='absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-md text-sm font-semibold flex items-center'>
                        ⭐ {avgRating}
                    </div>
                </div>
                <div className='p-4'>
                    <h3 className='font-bold text-lg text-gray-800 mb-2 truncate'>{name}</h3>
                    <div className='flex items-center justify-between text-sm text-gray-600 mb-2'>
                        <span className='flex items-center'>
                            🕒 {deliveryTime.slaString}
                        </span>
                    </div>
                    <p className='text-gray-500 text-sm truncate'>{locality}</p>
                </div>
            </div>
        </Link>
    )
}

export default ResCard