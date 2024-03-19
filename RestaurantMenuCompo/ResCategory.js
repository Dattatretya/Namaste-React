import { useState } from "react"
import ItemsComponent from "./ItemsComponent"

const ResCategory = ({data, showItems, setShowIndex}) =>{
    
    // const [showItems, setShowItems] = useState(false)

    const handleClick = () =>{
        setShowIndex()
    }

    return (
        <div>
        <div className='text-center bg-slate-300 shadow-lg m-2 p-2 '>
          <div className='flex justify-between' onClick={handleClick}>
            <span className='font-bold text-gray-700'>{data.title}({data.itemCards.length})</span>
        <span>⬇</span> 
        </div>
        </div>
        {showItems && <ItemsComponent data={data.itemCards} />}
        </div>
    )
}
export default ResCategory