import React, { useEffect, useState,useContext } from 'react'
import { NavLink } from 'react-router-dom'
import "./Buynow.css"
import { Logincontext } from "../Context/ContextProvider";

const Empty = () => {
    const { account, setAccount } = useContext(Logincontext); 
    return (
        <>
        {account ? <div className="buynow_section">
            <div className="buynow_container">
                <div className="empty_buy" style={{ padding: "40px 40px" }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xpOr8GbZhxyLr0uD8mEn9L6lsHT-jHq2Kg&usqp=CAU" alt="cart img" />
                    <div className="emptydata">
                        <h1>Your Amazon Basket is empty</h1>
                        <p>See recommendations</p>
                    </div>
                    <NavLink className="empty_btn" to="/">Add Your Items</NavLink>
                </div>
            </div>
        </div>:
        <div className="buynow_section">
        <div className="buynow_container">
            <div className="empty_buy" style={{ padding: "40px 40px" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xpOr8GbZhxyLr0uD8mEn9L6lsHT-jHq2Kg&usqp=CAU" alt="cart img" />
                <div className="emptydata">
                    <h1>Log in first </h1>
                    <p>See recommendations</p>
                </div>
                <NavLink className="empty_btn" to="/">Add Your Iteams</NavLink>
            </div>
        </div>
    </div>
    }
    </>
    )
}

export default Empty