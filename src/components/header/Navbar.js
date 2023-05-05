// rafce command for creating basic structure of a component  using es7 extension.
import { React, useContext ,useEffect,useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { NavLink, useNavigate } from "react-router-dom";
import { Logincontext } from "../Context/ContextProvider";
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton, List, ListItem, MenuItem } from '@mui/material';
import Rightheader from './Rightheader';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector, useDispatch } from "react-redux";
const Navbar = () => {
  const { account, setAccount } = useContext(Logincontext);
  const history= useNavigate();
  // for left slide open or close ie rightheader.js part
  const [dropen, setDropen] = useState(false);
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
// for right side avatar part open or close.
const [open, setOpen] = useState(false);
// for text in search bar.
const [text, setText] = useState("");
const { products } = useSelector(state => state.getproductsdata);
// for list in search bar
const[liopen,setLiopen]=useState(true);
const handleClick = (event) => {
  setOpen(event.currentTarget);
}; 
const handelopen = () => {
  // console.log("te");
  setDropen(true);
}
const handleClose = () => {
  // console.log("te");

  setOpen(false)
};
const handleClosedr = () => {
  setDropen(false);
}

const logoutuser = async () => {
  const res2 = await fetch("http://localhost:8005/logout", {
      method: "GET",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
      },
      credentials: "include"
  });


  const data2 = await res2.json();
  // console.log(data2);

  if (res2.status !== 201) {
      // console.log("first login");
  } else {
      // console.log("cart add ho gya hain");
      setAccount(false);
      toast.success("user Logout 😃!", {
        position: "top-center"
    });
      history("/");
      
      
  }
};
const getText=(iteams)=>{
 setText(iteams);
 setLiopen(false);
}
useEffect(() => {
    getdetailsvaliduser();
}, []);

  // console.log("ANIL", account);
  return (
    <header>
      <nav>
        <div className="left">
        <IconButton className="hamburgur" onClick={handelopen}>
                        <MenuIcon style={{ color: "#fff" }} />
                    </IconButton>
                    <Drawer open={dropen} onClose={handleClosedr} >
                        <Rightheader  logclose={handleClosedr} userlog={logoutuser} />
                    </Drawer>
          <div className="navlogo">
            <NavLink to="/">
              <img src="../../amazon_PNG25.png" alt="" />
            </NavLink>
          </div>
          <div className="nav_searchbaar">
            <input type="text" name="" placeholder='Search your products here' onChange={(e)=>getText(e.target.value)}id="" />
            <div className="search_icon">
              <SearchIcon id="search" />
              {
                            text &&
                            <List className="extrasearch" hidden={liopen}>
                                {
                                    products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                        <ListItem>
                                            <NavLink to={`/getproductsone/${product.id}`} onClick={() => setLiopen(true)}>
                                                {product.title.longTitle}
                                            </NavLink>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        }
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            {!account && <NavLink to="/login">Sign in</NavLink>}
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
            <Avatar className="avtar2" onClick={handleClick} title={account.fname.toUpperCase()}>
              {account.fname[0].toUpperCase()}
            </Avatar>
          ) : (
            <Avatar onClick={handleClick} className="avtar" />
          )}
          <div className="menu_div">
                        <Menu
                        id="basic-menu"
                            anchorEl={open}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                              'aria-labelledby':'basic-button'
                            }}
                             >
                             {account && <MenuItem onClick={handleClose} style={{ margin: 10 }}>{account.fname}</MenuItem>}
                            {account ? <MenuItem onClick={handleClose}  style={{ margin: 10 }} > <LogoutIcon style={{ fontSize: 16, marginRight: 3 }}onClick={logoutuser} /> Logout</MenuItem> : ""}
                        </Menu>
                        </div>
                        <ToastContainer />
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
