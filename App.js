import React, { useEffect, useState } from "react"
import  ReactDOM  from "react-dom/client"
import RestaurantCard from "./RestaurantCard"
import Header from "./Header"
import Rescomp from "./Rescomp"
import Shimmer from "./Shimmer"



const URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.433391&lng=77.0562363&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"



const RestaurantContainer = () => {

    data=[
        {info:{
            name:"Datta"
        }}
    ]

    const [listOfRes, setListOfRes] = useState([])

    const fetchAPI =async () =>{
        const data = await fetch(URL)
        const resdata = await data.json()
        console.log(resdata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setListOfRes(resdata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    } 
    useEffect(()=>{
    fetchAPI()
},[])

    // if (listOfRes.length===0){
    //     return (
    //     <Shimmer/>
    //     )
    // }

    return listOfRes.length===0? <Shimmer/> : (
        <>
        <Header/>

    <div className="res-card-container">

        
        {listOfRes.map((item) =>
           ( 
           <div key={item.info.id} className="res-card">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`}></img>
            <h4>{item.info.name}</h4>
            <p>Avg rating: {item.info.avgRating}</p>
            <p>{item.info.costForTwo}</p>
            <p style={{"margin":"2px"}}>{item.info.cuisines.join(", ")}</p>

           </div>
           )
        )}
        </div>
        </>
    
    )
        }


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RestaurantContainer/>)
