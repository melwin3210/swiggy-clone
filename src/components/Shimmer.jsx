import React from 'react'

const Shimmer = () => {
  return (
    <div className='max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen'>
      <div className='h-8 bg-gray-300 rounded-lg mb-8 mx-auto w-64 animate-pulse'></div>
      <div className='space-y-4'>
        {[...Array(5)].map((_, i) => (
          <div key={i} className='bg-white rounded-lg shadow-md overflow-hidden'>
            <div className='p-4 bg-gray-300 animate-pulse'>
              <div className='h-6 bg-gray-400 rounded w-48'></div>
            </div>
            <div className='p-4 space-y-4 bg-gray-50'>
              {[...Array(3)].map((_, index) => (
                <div key={index} className='bg-white p-4 rounded-lg shadow-sm border border-gray-200'>
                  <div className='flex justify-between items-start'>
                    <div className='flex-1 space-y-2'>
                      <div className='h-5 bg-gray-300 rounded w-3/4 animate-pulse'></div>
                      <div className='h-4 bg-gray-300 rounded w-20 animate-pulse'></div>
                      <div className='h-3 bg-gray-300 rounded w-full animate-pulse'></div>
                      <div className='h-3 bg-gray-300 rounded w-2/3 animate-pulse'></div>
                    </div>
                    <div className='ml-4 h-10 w-16 bg-gray-300 rounded-lg animate-pulse'></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shimmer