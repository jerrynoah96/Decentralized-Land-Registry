import React, { Component } from "react";
import logo from '../images/darklogo.svg';


import '../App.css';

class LandOwnerReg extends Component {

   

    constructor(props) {
        super(props);
        this.state={
            fullname: " ",
            taxpin: " ",
            email: " ",
            id: " ",
            contact: " "
    
        }
    
        this.handleInput = this.handleInput.bind(this);
    }

 displayHome = (e)=> {
    
        this.props.displayLoader(e);
        setTimeout(() => {
          this.props.displayHome(e);
         }, 3000)
      }

  handleInput(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

submitForm = (e)=> {
    e.preventDefault();
    this.props.LandHolderRegistration(this.state.fullname,
        this.state.taxpin,
        this.state.email,
        this.state.id,
        this.state.contact)
    
}

render(){
    return(
        <div className="land-owner-reg">

            <div className="brand">
                <img src={logo} className="logo" alt="logo"/>
            </div>
            
            <button className="home-btn"
            onClick={this.displayHome}> Home</button>

           
            <form className="owner-reg-form" onSubmit={this.submitForm}>
            <h3>Land Owner Registration Form</h3>
            
                <div className="input-box">
                    <label htmlFor="owner-name">Full Name</label>
                    <input type="text" id="owner-name" placeholder="FirstName LastName" 
                    name="fullname" value={this.state.fullname}
                    onChange={this.handleInput}/>

                </div>

                <div className="input-box">
                    <label htmlFor="tax-pin">Tax Pin</label>
                    <input type="text" id="tax-pin" placeholder="Tax pin" 
                    name="taxpin" value={this.state.taxpin}
                    onChange={this.handleInput}/>

                </div>

                <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="johnDoe@email.com"
                     name="email" value={this.state.email}
                     onChange={this.handleInput}/>

                </div>

                <div className="input-box">
                    <label htmlFor="id_no">Identity Number</label>
                    <input type="number" id="id_no" placeholder="Identity Number" 
                    name="id" value={this.state.id}
                    onChange={this.handleInput}/>

                </div>

                <div className="input-box">
                    <label htmlFor="contact">Contact Number</label>
                    <input type="number" id="contact" placeholder="+(254) 000 000" 
                    name="contact" value={this.state.contact}
                    onChange={this.handleInput}/>

                </div>

                <button>Submit</button>

            </form>

        </div>
    )
    
}
    

}
export default LandOwnerReg;