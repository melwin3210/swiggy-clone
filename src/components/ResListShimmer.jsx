import React from 'react'

const ResListShimmer = () => {
  return (
    <>
      <div className='mb-4 p-4'>
        <div className='flex items-center space-x-2'>
          <div className='h-8 w-48 bg-gray-300 rounded animate-pulse'></div>
          <div className='h-8 w-16 bg-gray-300 rounded animate-pulse'></div>
          <div className='h-8 w-16 bg-gray-300 rounded animate-pulse'></div>
          <div className='h-4 w-32 bg-gray-300 rounded animate-pulse'></div>
        </div>
      </div>
      <div className='flex flex-wrap justify-center'>
        {[...Array(12)].map((_, i) => (
          <div key={i} className='w-64 h-80 bg-white rounded-lg shadow-md m-4 p-4'>
            <div className='h-40 bg-gray-300 rounded-lg mb-4 animate-pulse'></div>
            <div className='h-6 bg-gray-300 rounded mb-2 animate-pulse'></div>
            <div className='h-4 bg-gray-300 rounded w-3/4 mb-2 animate-pulse'></div>
            <div className='h-4 bg-gray-300 rounded w-1/2 animate-pulse'></div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ResListShimmer