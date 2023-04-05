import React, { useState } from 'react'
import { Divider } from '@mui/material';
import "./Sign_up.css";
import { NavLink } from 'react-router-dom' 
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
  return (
    <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./blacklogoamazon.png" alt="signupimg" />
                </div>
                <div className="sign_form">
                    <form >
                        <h1>Create account</h1>
                        <div className="form_data">
                            <label htmlFor="name">Your name</label>
                            <input type="text" name="fname"
                                id="name" onChange={adddata}
                                value={udata.fname}/>
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">email</label>
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
                        <button type="submit" className="signin_btn">Continue</button>
                        <Divider />
                        <div className="signin_info">
                            <p>Already have an account?</p>
                            <NavLink to="/login">Sign in</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </section>
  )
}

export default Sign_up