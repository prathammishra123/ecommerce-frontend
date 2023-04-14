// rafce command for creating basic structure of a component  using es7 extension.
import { React, useContext ,useEffect} from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import { Logincontext } from "../Context/ContextProvider";
const Navbar = () => {
  const { account, setAccount } = useContext(Logincontext);
  const getdetailsvaliduser = async () => {
    const res = await fetch("http://localhost:8005/validuser", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include"
    });

    const data = await res.json();
    // console.log(data);

    if (res.status !== 201) {
        // console.log("first login");
    } else {
        // console.log("cart add ho gya hain");
        setAccount(data);
    }
}

useEffect(() => {
    getdetailsvaliduser();
}, []);

  // console.log("ANIL", account);
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <NavLink to="/">
              <img src="../../amazon_PNG25.png" alt="" />
            </NavLink>
          </div>
          <div className="nav_searchbaar">
            <input type="text" nam="" id="" />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <NavLink to="/login">Sign in</NavLink>
          </div>
          <div className="cart_btn">
            {account ? (
              <NavLink to="/buynow">
                <Badge badgeContent={account.carts.length} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <Badge badgeContent={0} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            )}
            <p>Cart</p>
          </div>

          {account ? (
            <Avatar className="avtar2" title={account.fname.toUpperCase()}>
              {account.fname[0].toUpperCase()}
            </Avatar>
          ) : (
            <Avatar className="avtar" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
