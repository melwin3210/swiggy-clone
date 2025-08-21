import React from 'react'
import ResFoodItem from './ResFoodItem'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector(store=>store.cart.cart)
  return (
    <div className='max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen'>
    {cart.map((category, index)=>{
        return (<ResFoodItem item={category} index={index} />)
    })}
    </div>
    

  )
}

export default Cart