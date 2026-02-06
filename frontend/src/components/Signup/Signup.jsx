import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <>
            <div className="container">
                <div className="app-title"><p>Bugminator</p></div>

                <div className="login-wrapper">
                    <form className="login-form">
                        <h1 className="heading">Signup</h1>
                        <div className="username">
                            <input type="text" name="username" id="username" placeholder="Enter username" />        
                        </div>
                        <div className="password">
                            <input type="email" name="email" id="email" placeholder="Enter Email" />
                        </div>
                        <div className="password">
                            <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Enter Phone Number" /> 
                        </div>
                        <div className="password">
                            <input type="text" name="city" id="city" placeholder="Enter city" /> 
                        </div>
                        <div className="password">
                            <input type="text" name="state" id="state" placeholder="Enter state" />
                         </div>
                        <div className="password">
                            <input type="text" name="country" id="country" placeholder="Enter country" /> 
                        </div>
                         <div className="password">
                            <input type="number" name="pincode" id="pincode" placeholder="Enter pincode" /> 
                        </div>
                          <div className="password">
                            <input type="password" name="password" id="password" placeholder="Enter Passoword" />        
                        </div>
                        <div className="password">
                            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Enter confirm Passoword" />   
                        </div>
                        <div className="register">
                            <Link to="/">Already have account?Login</Link>
                        </div>
                        <div className="submit-btn">
                            <button type="button">Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Signup
