import { useState, useEffect } from "react"

const useResItems = () =>{


const [listOfRes, setListOfRes] = useState([])
    const [searchText, setSearchText] = useState("")
    const [filtered, setFiltered] = useState([])

    const fetchAPI =async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.433391&lng=77.0562363&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const resdata = await data.json()
        console.log(resdata.data.cards[4].card.card)
        setListOfRes(resdata.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFiltered(resdata.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    } 
    useEffect(()=>{
    fetchAPI()
},[])

return listOfRes

}

export default useResItems