import React, { useState, useEffect } from 'react'
import useRestaurantmenu from './Hooks/useRestaurantMenu'
import ResCategory from './RestaurantMenuCompo/ResCategory'


const RestaurantMenu = () => {

  const [showIndex, setShowIndex] = useState (null)

  const menu = useRestaurantmenu()

  const filtered = menu.filter((c)=>
    c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )




  // Test
  useEffect(()=>{

    fetchMenu()

  },[])


  const fetchMenu = async () =>{
    const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4187551&lng=77.0493876&restaurantId=289291")
    const json = await data.json()
    // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.CARDS)
  }
 //

  

  return (
    <div className='item-container'>
      <div className="font-bold text-lg m-6 p-2 uppercase shadow-lg ">{menu[(menu.length)-1]?.card?.card?.name}</div>
      {filtered.map((item, index)=>(
        <div key={item.card.card.title} className='item-card'>
          <ResCategory 
          data={item.card.card}
          showItems={index===showIndex && true}
          setShowIndex={()=>setShowIndex(index)}
          />
          
          </div>
      
      ))}
    </div>
    
  )
      }


export default RestaurantMenu