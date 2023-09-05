import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/home";
import Navigation from "./components/navbar/navbar";
import Report from "./components/api/report";
import Hotel from "./components/hotel/hotel";
import Restaurant from "./components/restaurant/restaurant";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/report" element={<Report />} />
            <Route path="/hotelinfo" element={<Hotel />} />
            <Route path="/restaurantinfo" element={<Restaurant />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
