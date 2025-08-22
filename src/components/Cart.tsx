import React from 'react'
import ResFoodItem from './ResFoodItem'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../store/slices/cartSlice'

const Cart = () => {
    const cart = useSelector(store=>store.cart.cart)
    const dispatch = useDispatch()
  if (cart.length === 0) {
    return (
      <div className='max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Cart is Empty</h2>
        <p className='text-gray-600 mb-6'>Go and order food</p>
        <a href='/' className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200'>
          Order Food
        </a>
      </div>
    )
  }

  return (
    <>
    <div className='max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen'>
    {cart.map((category, index)=>{
        return (<ResFoodItem item={category} index={index} />)
    })}
    </div>
    <button 
        onClick={() => dispatch(clearCart())}
        className='bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 mx-auto block mt-4'
    >
        Clear Cart
    </button>
    </>
  )
}

export default Cart