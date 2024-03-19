import { addItems } from "../redux/cartSlice";
import { useDispatch } from "react-redux"


const ItemsComponent = ({data}) =>{

    const dispatch = useDispatch();

    const handleAddItem = (c)=>{
        dispatch(addItems(c))
    }

    return (
        <div>
            {data.map((c)=>(
                <div className="border-b-2 border-gray-400 p-2 m-2 ">
                <div key={c.card.info.id} className="flex row-auto justify-between">
                <div>
                <div>
                <span className="mx-1 font-bold">{c.card.info.name}</span>
                <span className="mx-1">- ₹{c.card.info.price ? c.card.info.price/100 : c.card.info.defaultPrice/100}</span>
                </div>
                <div className="mt-1">{c.card.info.description}
                </div>
                </div>
                <div className="w-3/12 p-4"> 
                <div className="absolute">
                <button type="submit" className="m-auto p-2 bg-white"
                onClick={()=>handleAddItem(c)}
                > Add + </button>
                </div>
                <img className="w-64 rounded-sm" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+c.card.info.imageId}/>
                
                </div>
                
                </div >
                
                </div>
            ))}
        </div>
    )
}

export default ItemsComponent