import { Fragment, useState } from "react";
import { restaurantListOne } from "../utils/data";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  }
// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantListOne);

  // Function to update the restaurant list based on the rating.
  const filterRestaurantList = () => {  
    const filteredRestaurant = restaurants.filter(
        (res) => res.data.avgRating > 4.1
      );
      setRestaurants(filteredRestaurant);
  }
    return(
        <Fragment>
            <div className="search-container">
               <input
                type="text"
                className="search-input"
                placeholder="Search a restaurant you want..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                ></input>
                  <button
                    className="search-btn"
                    onClick={() => {
                        // filter the data
                        if(searchText){
                          const data = filterData(searchText, restaurants);
                          console.log(data);
                          // update the state of restaurants list
                          setRestaurants(data);
                        }else{
                          setRestaurants(restaurantListOne)
                        }
                    }}
                    >
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
            <div className="restaurant-list">
            {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
            </div>
        </Fragment>
    )

}

export default Body