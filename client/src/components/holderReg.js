import React from 'react';
import logo from '../images/darklogo.svg';


import '../App.css';

const LandOwnerReg =(props)=> {

    const displayHome = (e)=> {
    
        props.displayLoader(e);
        setTimeout(() => {
          props.displayHome(e);
         }, 3000)
      }

    return(
        <div className="land-owner-reg">

            <div className="brand">
                <img src={logo} className="logo" alt="logo"/>
            </div>
            
            <button className="home-btn"
            onClick={displayHome}> Home</button>

            <h3>Land Owner Registration Form</h3>
            <form className="owner-reg-form">
            
                <div className="input-box">
                    <label htmlFor="owner-name">Full Name</label>
                    <input type="text" id="owner-name" placeholder="FirstName LastName"/>

                </div>

                <div className="input-box">
                    <label htmlFor="tax-pin">Tax Pin</label>
                    <input type="text" id="tax-pin" placeholder="Tax pin"/>

                </div>

                <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="johnDoe@email.com"/>

                </div>

                <div className="input-box">
                    <label htmlFor="id_no">Identity Number</label>
                    <input type="number" id="id_no" placeholder="Identity Number"/>

                </div>

                <div className="input-box">
                    <label htmlFor="contact">Contact Number</label>
                    <input type="number" id="contact" placeholder="+(254) 000 000"/>

                </div>

                <button>Submit</button>

            </form>

        </div>
    )

}
export default LandOwnerReg;