import { Fragment, useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_URL ,SWIGGY_REST_API_PATH,} from "../../../../public/common/constant";
import Shimmer from "./Shimmer";

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  console.log(restaurantList)
  // Function to update the restaurant list based on the rating.
  const filterRestaurantList = () => {  
    const filteredRestaurant = restaurantList.filter(
        (res) => res.info.avgRating > 4.5
      );
      setFilteredRestaurants(filteredRestaurant);
  }
  const fetchRestrauntData=async()=>{
 
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    const response = (json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRestaurantList(response)
    setFilteredRestaurants(response)
  }
  useEffect(()=>{
   fetchRestrauntData()
  },[])
  const handleSearch = () => {
    const filtered = restaurantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
    );

    setFilteredRestaurants(filtered);
    setSearchRestaurant(""); // Clear the search input box after search
    setRestaurantName(searchRestaurant);
  };
  //conditional rending
console.log(useState())
    return restaurantList.length === 0 ? (
      <Shimmer />
    ) : (
        <Fragment>
            <div className="body">
            <div className="search-box">
              <input
                type="text"
                value={searchRestaurant}
                onChange={(e) => setSearchRestaurant(e.target.value)}
                placeholder="search a restaurant you want..."
              />
              <button className="search" onClick={handleSearch}>
                Search
              </button>
            </div>
            <div className="filter">
                <button
                className="filter-btn"
                onClick={filterRestaurantList}
                >
                Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant-container">
        {filteredRestaurants.length !== 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
          ))
        ) : (
          <h2>Sorry, we couldn't find any restaurant for "{restaurantName}"</h2>
        )}
      </div>
            </div>
        </Fragment>
    )

}

export default Body