import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { Divider } from "@mui/material";
import {   useParams } from "react-router";
import { useNavigate} from "react-router-dom";
import { Logincontext } from "../Context/ContextProvider";
import CircularProgress from '@mui/material/CircularProgress';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const Cart = () => {
    const { id } = useParams("");
    // console.log(id);
    const history =useNavigate();
    const { account, setAccount } = useContext(Logincontext); 
    const [inddata, setIndedata] = useState("");

    // console.log([inddata]);
  const buyknowfun=()=>
  {
    toast.success(" Coming Soon 😃!", {
      position: "top-center"
  });
  }
    const getinddata = async () => {
        const res = await fetch(`http://localhost:8005/getproductsone/${id}`, {
            // mode: 'no-cors',
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
            alert("no data available")
        } else {
            // console.log("ind mila hain");
            setIndedata(data);
        }
    };

    useEffect(() => {
        setTimeout(getinddata, 1000)
    }, [id]);


    const addtocart = async (id) => {
      console.log(id);
      const check = await fetch(`http://localhost:8005/addcart/${id}`, {
          method: "POST",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              inddata
          }),
          credentials: "include"
      });
      // console.log("wde");
      const data1 = await check.json();

      if (check.status !== 201) {
          alert("No data available");
      } else {
          // console.log("cart add ho gya hain");
          console.log(data1);
          alert("Data added in your cart");
          setAccount(data1);
          history("/buynow");
          console.log(account);
          
      }
  }
  return (
    <div className="cart_section" style={{backgroundColor: '#50B1C8'}}>
      {/* useeefect will call after once page is render than it is called so this is used  */}
      {inddata && Object.keys(inddata).length && (
        <div className="cart_container">
          <div className="left_cart" >
            <img src={inddata.detailUrl} alt="cart"style={{borderRadius:'19px'}} />
            <div className="cart_btn">
              <button className="cart_btn1"  onClick={() => addtocart(inddata.id)} >Add to Cart</button>
              <button className="cart_btn2" onClick={()=>buyknowfun()}>Buy Now</button>
            </div>
          </div>
          <div className="right_cart"style={{backgroundColor: '#7DCBDD',borderRadius:'15px'}}>
            <h4>{inddata.title.shortTitle}</h4>
            <h3>{inddata.title.longTitle}</h3>
            <Divider />
            <p className="mrp"style={{  fontSize:'25px'}}>MRP:₹{inddata.price.mrp}</p>
            <p style={{  fontSize:'25px'}}>
              Deal of the Day :{" "}
              <span style={{ color: "#B12704" }}>₹{inddata.price.cost}</span>
            </p>
            <p style={{  fontSize:'25px'}}>
              You save :{" "}
              <span style={{ color: "#B12704"}}>
                {" "}
                ₹{inddata.price.mrp - inddata.price.cost}(₹
                {inddata.price.discount}){" "}
              </span>
            </p>

            <div className="discount_box" style={{  fontSize:'25px'}}>
              <h5 style={{  fontSize:'25px'}}>
                Discount :{" "}
                <span style={{ color: "#111",fontSize:'25px' }}>
                  Extra ₹{inddata.price.discount}Off
                </span>{" "}
              </h5>
              <h4 style={{  fontSize:'25px'}}>
                FREE Delivery :{" "}
                <span style={{ color: "#111", fontWeight: "600" }}>
                  {months[date.getMonth()] }  {date.getDate()}-{date.getDate()+3}
                </span>{" "}
               
              </h4>
              <p style={{ color: "#111" ,fontSize:'25px'}}>
                Fastest delivery:{" "}
                <span style={{ color: "#111", fontWeight: "600" }}>
                  {" "}
                  Tomorrow 11AM
                </span>
              </p>
            </div>
            <p className="description">
              <div>
              About the Item: <br/><br/>{inddata.description}
              </div>
              <div
                style={{
                  color: "#565959",
                  fontSize: "14px",
                  fontWeight: "500",
                  letterSpacing: "0.4px",
                }}
              >
                {inddata.price.description}
              </div>
            </p>
          </div>
        </div>
      )}
       {!inddata ? <div className="circle">
                <CircularProgress />
                <h2> Loading....</h2>
            </div> : ""}
    </div>
  );
};

export default Cart;
