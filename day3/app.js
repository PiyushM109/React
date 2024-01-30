import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "React basics");
const Header = ()=>{
  return(
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src="https://img.freepik.com/free-vector/lovely-pizza-delivery-man-scooter_23-2147681935.jpg?w=740&t=st=1706608416~exp=1706609016~hmac=7d1b5d61ac2721ee6117b052e1258e7287213387d13f4dd9f6bb5559b6afb0cb" />
      </div>
      <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
      </div>
    </div>
  )
}

const Restaurantcard = ()=>{
  return (
    <div className="res-card">
      <h3>Meghana Foods</h3>
    </div>
  )
}

const Body = ()=>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <Restaurantcard />
      </div>
    </div>
  )
}

const AppLayout = () =>{
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
