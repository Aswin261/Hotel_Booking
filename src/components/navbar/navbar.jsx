import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav class="navbar navbar-light bg-secondary py-1 ml-0">
      <div class="navbar ml-0 py-0">
        <span class="navbar-brand py-0">
          <strong style={{ color: "white" }}>
            <span style={{ color: "orangered" }}>Happy</span> Stays
          </strong>
        </span>
        <Link to="/home">
          <button class="btn mr-0 py-md-0 ">Home</button>
        </Link>
        <div className="dropdown">
          <button
            className="btn mr-2 py-md-0 dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Database
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/hotelinfo">
              <button class="btn mr-0 py-md-0 ">Hotel Info</button>
            </Link>
            <Link to="/restaurantinfo">
              <button class="btn mr-0 py-md-0 ">Restaurant Info</button>
            </Link>
          </div>
        </div>
        <div className="dropdown">
          <button
            className="btn mr-2 py-md-0 dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Api
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/report">
              <button class="btn mr-0 py-md-0 ">Report</button>
            </Link>
          </div>
        </div>
      </div>
      <Link to="/home">
        <button class="btn mr-0 py-md-0 mr-0">Logout</button>
      </Link>
    </nav>
  );
}

export default Navigation;
