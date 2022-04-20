import React from "react";
import Header from './header';
import car  from "../assets/DesignImages/car-g2d7b1eca2_1280.png"
import "../styles/Psignin.css"
import {BiLock} from 'react-icons/bi';
import Contact from "./Navigation/Footer";
import {Link} from "react-router-dom";

// const invalid = {
//     name:"Invaid username",
//     password:"Invalid password"
// }
export default function Signin(){
    return(
            <div>
                <Header/>
                <div className="container2">
                    <div className="row">
                        <div id="k" className="col-4">
                            <h3 >Sign In</h3>
                            <form>
                            <label>EMAIL ADDRESS</label>
                            <input type="email" id="ipb" placeholder="Enter your registered email Id" required/>
                            <label>PASSWORD</label>
                            <Link to="/components/Psignup"><p id="para">Haven't registered? Sign Up Now</p></Link>
                            <input type="password" id="ipb" placeholder="Enter password" required/>
                            <p id="para">Forgot Password?</p>
                            <label><input type="checkbox"/>{' '}Remember me on this browser</label>
                            <button id="bt"><BiLock/>{' '}Secure Sign In</button>
                            </form>
                        </div>
                        <div className="col-7">
                            <img id="cp" src={car} alt="car" width="500" height="300"/>
                            <div className="cartxt">
                                <h2 id="w">Kenyc. Ukanyds. Qjneduc</h2><br/>
                                <p>amet dictum sit amet justo donec enim diam vulpu ut pharetra sit amet aliquam id dia</p>
                                <p>amet dictum sit amet justo donec enim diam vulpu ut pharetra sit amet aliquam id dia</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Contact/>
            </div>
    )
}
