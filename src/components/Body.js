import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {

  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    const restList = json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    console.log(restList);
    setRestaurantList(restList);
    setFilteredRestaurantList(restList);
  }
  const handleButtonClick = () => {
    const filteredList = restaurantList.filter((res) => res.info.avgRating > 4)
    setFilteredRestaurantList(filteredList)
    console.log(filteredList);
  }

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>You are offline. Please check your internet connection</h1>
  if(!restaurantList.length) return <Shimmer />

  const handleSearchButtonClick = () => {
    const filteredList = restaurantList.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredRestaurantList(filteredList);
  
  }
  return (
    <div className="body">
      <div className="filter-container">
        <div className="filter">
          <button className="filter-btn" onClick={handleButtonClick}>
            Top Restaurants
          </button>
        </div>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              handleSearchButtonClick();
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurantList.map((resCard) => (
          <RestaurantCard key={resCard.info.id} resData={resCard} />
        ))}
      </div>
    </div>
  );
};

export default Body;