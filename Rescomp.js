import React, {useState, useEffect} from 'react'

const Rescomp = () => {

    const URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.433391&lng=77.0562363&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

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

    if (listOfRes.length===0){
        return <h1>Loading...</h1>
    }

  return (
    <div>
        {listOfRes.map((item)=>{
            <h1>{item.info.id}</h1>
        })}
    </div>
  )
}

export default Rescomp