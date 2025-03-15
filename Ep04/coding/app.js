// ## Namaste React Course by Akshay Saini
// Chapter 04 - Talk is Cheap, show me the code

import React from "react";
import ReactDOM from "react-dom/client"
import foodFireLogo from "../../public/images/foodFireLogo.png";
import {restaurantListOne} from './data'
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Restaurant, Star Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
// Title component for display logo
const Title = () => (
    <a href="/">
        <img className="logo" src={foodFireLogo} alt="Food Fire Logo" />
    </a>
);
const Header = () => {
    return (
    <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>
                    <i className="fa-solid fa-cart-shopping"></i>
                </li>
            </ul>
        </div>
    </div>
    )
}
// Restaurant card component: Image, name, cuisine
const RestaurantCard =({  
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,})=>{
 return(
    <div className="res-card">

            <h2>{name}</h2>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{area}</h4>
                <span>
                    <h4>
                    <i className="fa-solid fa-star"></i>
                    {avgRating}
                    </h4>
                    <h4>{lastMileTravelString}</h4>
                    <h4>{costForTwoString}</h4>
                </span>
    </div>
 )
}
const Body =()=>{
 return (
    <div className="body">
        <div className="search">
        <input placeholder="search" />
        </div>
    <div className="res-container">
        {restaurantListOne.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
        })}
        </div>
    </div>

  )
}


// Footer component for footer section
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <span>❤️</span>
        <i class="fa-solid fa-copyright"></i>
        <a href="https://www.linkedin.com/in/piyush-s-587886111/" target="_blank">
       Piyush Sharma
      </a>
        {year}
        <strong>
          Food<span>Fire</span>
        </strong>
      </div>
    );
  };
// AppLayout component to show: Header, Body, Footer

const AppLayout = () => {
    return (
        <>
<div className="app">
<Header/>
<Body/>
</div>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);