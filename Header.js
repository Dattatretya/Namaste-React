import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useOnlineStatus from './Hooks/useOnlineStatus'
import { useSelector } from 'react-redux'

const Header = () => {

  const navigate = useNavigate()
  const [btnState, setBtnState] = useState ("Login")
  const onlineStatus = useOnlineStatus()

  const handleState = () => {
    navigate("/login")
    if (btnState==="Login"){
      setBtnState("Logout")
    }
    else{
      setBtnState("Login")
    }
  }

  const cartItems = useSelector((store)=> store.cart.items)

  console.log(cartItems)


  return (
    <div className="flex justify-between items-center shadow-lg border-2 border-black m-1 p-2 bg-orange-200 sm:bg-slate-300 rounded-xl">
      <img className='w-16 h-16 rounded-sm' src='https://cdn.vectorstock.com/i/1000x1000/20/76/food-store-logo-template-vector-40192076.webp'/>
      
      <ul className='flex items-center'>
      <li className='m-4 p-4'>Status: {onlineStatus ? "💚" : "❌"}</li>
      <li className='m-2 hover:bg-slate-600 p-2 hover:rounded-sm'><Link to='/'>Home</Link></li>
      <li className='m-2 hover:bg-slate-600 p-2 hover:rounded-sm'><Link to='/about'>About</Link></li>
      <li className='m-2 hover:bg-slate-600 p-2 hover:rounded-sm'> <Link to='/contact'>Contact</Link></li>
      <li className='m-2 hover:bg-slate-600 p-2 hover:rounded-sm'> <Link to='/grocery'>Grocery</Link></li>

        <li className='m-2 p-2 font-bold text-2xl'><Link to="/cart">Cart ({cartItems.length} items) </Link></li>
      
      </ul>

      <button className='border-1 bg-slate-300 m-0.5 hover:bg-slate-600 p-2 hover:rounded-sm ' onClick={handleState}>{btnState}</button>
    </div>
  )
}

export default Header