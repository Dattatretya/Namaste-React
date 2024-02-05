import React, { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link, useNavigate } from "react-router-dom"



const URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.433391&lng=77.0562363&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"



const Body = () => {

    const navigate = useNavigate()
    


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

  


    if (filtered.length === 0) { return  <Shimmer/> }
    

    return (
        <>

<div className="flex">
            <input type="text" className="border-[1px] border-gray-200 rounded-sm m-2" 
            value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button type="submit" className="bg-slate-400 m-2 p-1 rounded-lg"
            onClick={()=>{
            const filteredRes = listOfRes.filter((item)=>item.info.name.toLowerCase().includes(searchText.toLowerCase())
            )
            setFiltered(filteredRes)
            }}
            >
                Search
            </button>

        </div>


    <div className="flex flex-wrap">
        
        {filtered.map((item) =>
           ( 
           <div key={item.info.id} className="w-[200px] m-2.5 bg-gray-300 p-1 hover:border-[1px] border-black hover:bg-slate-200">
           <Link to={"/restaurants/"+item.info.id}>
            <img
            className="w-25 h-25" 
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`}></img>
            <h4>{item.info.name}</h4>
            <p>Avg rating: {item.info.avgRating}</p>
            <p>{item.info.costForTwo}</p>
            <p style={{"margin":"2px"}}>{item.info.cuisines.join(", ")}</p>
            </Link>

           </div>
           )
        )}
        </div>
        </>
    
    )
        }

    export default Body



