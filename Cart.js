import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemsComponent from './RestaurantMenuCompo/ItemsComponent'
import { clearCart } from './redux/cartSlice'



const Cart = () => {


    const cartItems = useSelector((store) => store.cart.items)

    console.log(cartItems)

    const dispatch = useDispatch()

    const handleClick = () =>{
      dispatch(clearCart())
    }

  return (
    <div className='text-center m-4 p-4 '>
        <button className='bg-black text-white p-1 rounded-md' onClick={handleClick}>Clear Cart</button>

        {cartItems.length === 0 ? ("    add items") :(

        <ItemsComponent data={cartItems} />

        )}
    </div>
  )
}

export default Cart