import React, { useState } from 'react'
import { Divider } from '@mui/material';
import "./Sign_up.css";
import { NavLink } from 'react-router-dom' 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Sign_up = () => {
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: ""
});
    
const adddata = (e) => {
  const { name, value } = e.target;

  setUdata((pre) => {
      return {
          ...pre,
          [name]: value
      }
  })
};
const senddata = async (e) => {
    // It prevents reloading page on clicking
    e.preventDefault();

    const { fname, email, mobile, password, cpassword } = udata;
    try {
        const res = await fetch("http://localhost:8005/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname, email, mobile, password, cpassword
            })
        });

        const data = await res.json();
        // console.log(data);

        if (res.status === 422 || !data) {
            toast.error("Invalid Details 👎!", {
                position: "top-center"
            });
        } else {
            setUdata({
                ...udata, fname: "", email: "",
                mobile: "", password: "", cpassword: ""
            });
            toast.success("Registration Successfully done 😃!", {
                position: "top-center"
            });
        }
    } catch (error) {
        console.log("front end ka catch error hai" + error.message);
    }
}

  return (
    <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./blacklogoamazon.png" alt="signupimg" />
                </div>
                <div className="sign_form">
                    <form method='POST'>
                        <h1>Create account</h1>
                        <div className="form_data">
                            <label htmlFor="name">Your name</label>
                            <input type="text" name="fname"
                                id="name" onChange={adddata}
                                value={udata.fname}/>
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                                id="email" onChange={adddata}
                                value={udata.email}/>
                        </div>
                        <div className="form_data">
                            <label htmlFor="mobile">Mobile number</label>
                            <input type="number" name="mobile"
                                id="mobile"onChange={adddata}
                                value={udata.mobile} />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                id="password"onChange={adddata}
                                value={udata.password} placeholder="At least 6 characters" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="passwordg">Password again</label>
                            <input type="password" name="cpassword"
                                id="passwordg"onChange={adddata}
                                value={udata.cpassword} />
                        </div>
                        <button type="submit" className="signin_btn"onClick={senddata}>Continue</button>
                        <Divider />
                        <div className="signin_info">
                            <p style={{fontSize:'24px'}}>Already have an account?</p>
                           
                        </div>
                        <NavLink to="/login" style={{fontSize:'24px'}}>Sign in</NavLink>
                    </form>
                </div>
            </div>
        </section>
  )
}

export default Sign_up