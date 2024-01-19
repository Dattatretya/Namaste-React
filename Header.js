import React, { useState } from 'react'

const Header = () => {

  const [btnState, setBtnState] = useState ("Login")

  const handleState = () => {
    if (btnState==="Login"){
      setBtnState("Logout")
    }
    else{
      setBtnState("Login")
    }
  }


  return (
    <div className='header-container'>
      <img style={{"width":"60px", "height":"60px"}} src='https://cdn.vectorstock.com/i/1000x1000/20/76/food-store-logo-template-vector-40192076.webp'/>
      
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>

      <button className='loginbtn' onClick={handleState}>{btnState}</button>
    </div>
  )
}

export default Header