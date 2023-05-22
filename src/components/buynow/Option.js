import React, { useEffect, useState,useContext } from 'react'
import { Logincontext } from '../Context/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({deletedata,get}) => {
  const { account, setAccount } = useContext(Logincontext);
  var token = localStorage.getItem("ecommerce");
  const removedata = async (req,res) => {
    try {
        const res = await fetch(`https://shopgenie-backend.onrender.com/remove/${deletedata}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "ecommerce":token
            },
            credentials: "include"
        });

        const data = await res.json();
        console.log(data+"it comes");
        console.log('here'+res.status);
        if (res.status === 400 || !data) {
            console.log("error aai remove time pr");
        } else {
            setAccount(data);
            get();
            console.log('Item Removed');
            toast.success("Item remove from cart 😃!", {
                position: "top-center"
            });
        }
    } catch (error) {
        console.log(error);
    }

}
  return (
    <div className="add_remove_select" >
    <select>
        <option value="1">1</option>
        
    </select>
    <p style={{ cursor: "pointer", fontSize: "25px" }}onClick={()=>removedata(deletedata)}>Delete</p>
    {/* <p className="forremovemedia">Save Or Later</p><span>|</span>
    <p className="forremovemedia">See More like this</p> */}
    <ToastContainer/>
</div>
  )
}

export default Option;