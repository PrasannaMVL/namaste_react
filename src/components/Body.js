import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";
  
const Body = () => {

  const [restaurantList, setRestaurantList] = useState(resList);

  const handleButtonClick = () => {
    const filteredList = restaurantList.filter((res) => res.info.avgRating > 4)
    setRestaurantList(filteredList)
    console.log(filteredList);
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick ={handleButtonClick}>Top Restaurants</button>
      </div>
      <div className="res-container">
        {restaurantList.map((resCard) => (
          <RestaurantCard
            key={resCard.info.id}
            resData={resCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;