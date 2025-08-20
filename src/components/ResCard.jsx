import React from 'react'

const ResCard = ({ resInfo }) => {
    const { name, cloudinaryImageId, avgRating, locality, sla: deliveryTime } = resInfo?.info
    return (
        <div className='border-2 border-amber-500 h-80 w-60 m-2'>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="" className='w-full h-1/2' />
            <div className='mx-2'>
                <h1 className='font-bold'>{name}</h1>
                <div><span>{avgRating} </span><span>{deliveryTime.slaString}</span></div>
                <h1>{locality}</h1>
            </div>
        </div>
    )
}

export default ResCard