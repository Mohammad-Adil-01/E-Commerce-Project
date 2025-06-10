import "../assets/Navigation.css";
import icon1 from "../image/heart.png";
import icon2 from "../image/grocery-store.png";
import icon3 from "../image/shopping-bag.png";
import searchicon from "../image/search-interface-symbol.png";
import logo from "../image/trolley.png";
import location from "../image/pin.png";
import dept from "../image/window-of-four-rounded-squares.png";
import arrow from "../image/down-arrow.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Location from "../assets/Location";
export default function Navigation() {
    const [city, setCity] = useState("");

    useEffect(() => {
      if (Location && Location.length > 0 && Location[0].cities.length > 0) {
        setCity(Location[0].cities[0]);
      }
    },[]);
  return (
    <>
      <header className="header-1">
        <h1>
          <img src={logo} alt="Freash CART logo" className="logo" />
          Fresh Cart
        </h1>
        <nav className="nav-1">
          <div className="search">
            <input
              type="search"
              name="search"
              placeholder="Search for products"
            />
            <img src={searchicon} alt="Search Icon" />
          </div>
          <button className="location-button">
            <img src={location} alt="Location Icon" className="location-icon" />
            {city}
          </button>
          <div className="icon">
            <img src={icon1} alt="WhishList" />
            <img src={icon2} alt="Grocery" />
            <img src={icon3} alt="Shopping" />
          </div>
        </nav>
      </header>
      <header className="header-2">
        <button className="dept-button">
            <img src={dept} alt="All-Department" />
            All Department
        </button>
        <nav className="nav-2">
            <ul>
                <li>
                  <Link to="/shope">
                    Shope
                    <img src={arrow} alt="arrow" className="arrow-logo"/>
                  </Link>
                </li>
                <li><Link to="/store">Stores<img src={arrow} alt="arrow" className="arrow-logo"/></Link></li>
                <li><Link to="/menu">Mega Menu<img src={arrow} alt="arrow" className="arrow-logo"/></Link></li>
                <li><a href="/">Page's<img src={arrow} alt="arrow" className="arrow-logo"/></a></li>
                <li><a href="/">Account<img src={arrow} alt="arrow" className="arrow-logo"/></a></li>
                <li><Link to="/cart">Go to Cart<img src={arrow} alt="arrow" className="arrow-logo"/></Link></li>

            </ul>
        </nav> 
      </header>
    </>
  );
}
