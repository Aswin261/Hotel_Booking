import React from "react";
import "./home.css";
function Home() {
  return (
    <div id="home">
      <h1 style={{ textAlign: "center" }}>
        <span style={{ color: "orangered" }}>HAPPY</span> STAYS
      </h1>
      <h3 style={{ textAlign: "center", color: "white" }} id="motto">
        Book Hotels & Dine at your ease
      </h3>
      <div id="card-head" style={{ color: "white" }}>
        <h4>Top Destinations for Australia Trip</h4>
        <p>Find hotels in some of the most popular cities in Australia</p>
      </div>

      <div className="grid" style={{ marginLeft: "40px" }}>
        <div class="card" style={{ width: "16rem" }}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/square250/682540.webp?k=fc3655b3d7c5c4fd712aa84739e16d04fe7c68e7c1133fa4f6a7511d21fc50d7&o="
            alt=""
            className="src"
          />
          <p class="card-text">
            <strong>Sydney</strong>
            <br />
            Sight seeing,harbors,restaurants
            <br />
            <strong>267 Hotels</strong>
          </p>
        </div>

        <div class="card" style={{ width: "16rem" }}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/square250/967878.webp?k=22107f2f51dfaf7d2e874ea098ceadbc310b46d6a139da5df519ec65846eac94&o="
            alt=""
            className="src"
          />
          <p class="card-text">
            <strong>Melbourne</strong>
            <br />
            Shopping,restaurants,foods
            <br />
            <strong>153 Hotels</strong>
          </p>
        </div>

        <div class="card" style={{ width: "16rem" }}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/square250/971402.webp?k=bfd7d97e02de7446cadf896691218fd4c8e114d2e09c9e3dbc666d467c9b43ea&o="
            alt=""
            className="src"
          />
          <p class="card-text">
            <strong>Gold Coast</strong>
            <br />
            Breaches, Relaxation, Theme Parks
            <br />
            <strong>45 Hotels</strong>
          </p>
        </div>

        <div class="card" style={{ width: "16rem" }}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/square250/971535.webp?k=fabf56c222741e2db4c7bd85db6bf0610d7617d25ee392c1483dd81691196408&o="
            alt=""
            className="src"
          />
          <p class="card-text">
            <strong>Brisbane</strong>
            <br />
            Restaurants, Shopping, City Walks
            <br />
            <strong>93 Hotels</strong>
          </p>
        </div>
      </div>
      <br />
      <div style={{ color: "white", marginLeft: "25px" }}>
        <h4>Hotels in the most popular regions in Australia</h4>
        <p>Discover Australia by exploring its top regions</p>
      </div>
      <div className="grid" style={{ marginLeft: "40px" }}>
        <div class="card" style={{ width: "16rem" }}>
          <img
            src="https://cf.bstatic.com/xdata/images/region/square250/59497.webp?k=6941c14f1d67ecb84ffaa783d90b54db8c86346f49861c6596276d574c7e3377&o="
            alt=""
            className="src"
          />
          <p class="card-text">
            <strong>Philip Island</strong>
            <br />
            237 Hotels
          </p>
        </div>

        <div class="card" style={{ width: "16rem" }}>
          <img
            src="https://cf.bstatic.com/xdata/images/region/square250/70624.webp?k=66c3e274db62911e408ad60a95a394423ddff9a834624284be93c94986bdb65a&o="
            alt=""
            className="src"
          />
          <p class="card-text">
            <strong>Port Stephens</strong>
            <br />
            1356 Hotels
          </p>
        </div>

        <div class="card" style={{ width: "16rem" }}>
          <img
            src="https://cf.bstatic.com/xdata/images/region/square250/59113.webp?k=78a095209a5ff5a57023149f157f42a795a36bc5a5f9f158075d9e9c3f2957bb&o="
            alt=""
            className="src"
          />
          <p class="card-text">
            <strong>Jervis Bay</strong>
            <br />
            378 Hotels
          </p>
        </div>

        <div class="card" style={{ width: "16rem" }}>
          <img
            src="https://cf.bstatic.com/xdata/images/region/square250/68090.webp?k=a87824d5c979b83f8b4f85e675c2004f5b16bbf3a5702f70ceefdfd7fd0593c9&o="
            alt=""
            className="src"
          />
          <p class="card-text">
            <strong>Sunshine Coast</strong>
            <br />
            1726 Hotels
          </p>
        </div>
      </div>
      <footer>
        copyright &copy; 2023 Happy Stays Private Limited All rights reserved
      </footer>
    </div>
  );
}

export default Home;
