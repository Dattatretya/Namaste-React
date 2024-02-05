import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useRestaurantmenu from './Hooks/useRestaurantMenu'

const RestaurantMenu = () => {

  // const [menu, setMenu] = useState ([])

  const menu = useRestaurantmenu()

  // const param = useParams()
  // console.log(param)

  // useEffect(()=>{

  //   fetchMenu()

  // },[])

  // const fetchMenu = async () =>{
  //   const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4187551&lng=77.0493876&restaurantId="+ param.resID)
  //   const json = await data.json()
  //   console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards)
  // //   setMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards)
  // }

  return (
    <div className='item-container'>
      {menu.map((item)=>(
        <div key={item.card.info.id} className='item-card'>
          <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+item.card.info.imageId}/>
        <h2>{item.card.info.name}</h2>
        <h4>Price: {item.card.info.price/100} </h4>
        </div>
      ))}
    </div>
  )
      }


export default RestaurantMenu