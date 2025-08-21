import React from 'react'

const ErrorMessage = ({ type }) => {
  if (type === 'cors') {
    return (
      <div className='max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen flex items-center justify-center'>
        <div className='bg-red-50 border border-red-200 rounded-lg p-6 text-center'>
          <h2 className='text-xl font-semibold text-red-800 mb-4'>CORS Error</h2>
          <p className='text-red-600 mb-4'>Please install a CORS extension and enable it to access the site.</p>
          <p className='text-sm text-red-500'>Recommended: "CORS Unblock" or "Allow CORS" browser extension</p>
        </div>
      </div>
    )
  }

  if (type === 'network') {
    return (
      <div className='max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen flex items-center justify-center'>
        <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center'>
          <h2 className='text-xl font-semibold text-yellow-800 mb-4'>Network Error</h2>
          <p className='text-yellow-600'>Please check your internet connection and try again.</p>
        </div>
      </div>
    )
  }

  return null
}

export default ErrorMessage