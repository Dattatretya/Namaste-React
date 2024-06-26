import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function useRestaurantmenu(){

    const [menu, setMenu] = useState ([])

    const param = useParams()

    useEffect(()=>{

        fetchMenu()
    
      },[])
    
      const fetchMenu = async () =>{
        const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4187551&lng=77.0493876&restaurantId="+ param.resID)
        const json = await data.json()
        console.log(json.data)
        setMenu(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)

}
    return menu;
}

export default useRestaurantmenu