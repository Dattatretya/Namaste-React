const RestaurantCard = (props) => {
    return(
        
    <div className="res-card">
        <img className="res-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.info.cloudinaryImageId}`}/>
        <h1>{props.info.name}</h1>
        <h2>{props.info.cuisines}</h2>
    </div>
)}

export default RestaurantCard