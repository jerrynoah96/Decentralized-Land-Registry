import React, {Component} from 'react';
import logo from '../images/darklogo.svg';

import '../App.css';

class RegLand extends Component {


    constructor(props) {
        super(props);
        this.state={
            landtitle: " ",
            location: " ",
            holdername: " ",
            lr_no: " ",
            ownershipdoc: " ",
            holder_id: " "
    
        }
    
        this.handleInput = this.handleInput.bind(this);
    }

    displayHome = (e)=> {
    
        this.props.displayLoader(e);
        setTimeout(() => {
          this.props.displayHome(e);
         }, 3000)
      }
      // <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1J9WIKjkDvSojTBOgJGqMKMAQ4YSZOxUxQ&usqp=CAU" alt="upload"/>

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
        <div className="register-land">
            <div className="brand">
                <img src={logo} className="logo" alt="logo"/>
            </div>
            
            <button className="home-btn"
            onClick={this.displayHome}> Home</button>
            <h2 className="section-header">Register Your Land</h2>

            <div className="register-land-content">
                
                <form className="reg-form" onSubmit={this.submitForm}>
                    <h3>Land Registration Form</h3>
            
                <div className="input-box">
                    <label htmlFor="land-title">Title</label>
                    <input type="text" id="land-title" placeholder="Title" 
                    name="landtitle" value={this.state.landtitle}
                    onChange={this.handleInput}/>

                </div>

                <div className="input-box">
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" placeholder="location" 
                    name="location" value={this.state.location}
                    onChange={this.handleInput}/>

                </div>

                <div className="input-box">
                    <label htmlFor="holdername">Holder Name</label>
                    <input type="text" id="holdername" placeholder="holder name"
                     name="holdername" value={this.state.holdername}
                     onChange={this.handleInput}/>

                </div>

                <div className="input-box">
                    <label htmlFor="lr_no">Land Registry Number</label>
                    <input type="number" id="lr_no" placeholder="Land registry number" 
                    name="lr_no" value={this.state.id}
                    onChange={this.handleInput}/>

                </div>


                <div className="input-box">
                    <label htmlFor="holder_id">National Id Number</label>
                    <input type="number" id="holder_id" placeholder="National Id Number" 
                    name="holder_id" value={this.state.holder_id}
                    onChange={this.handleInput}/>

                </div>

                <div className="input-box">
                    <label htmlFor="ownershipdoc">Proof of ownership Doc</label>
                    <div>
                    <input type="file" id="ownershipdoc" 
                    name="ownershipdoc" setValue={this.state.ownershipdoc}
                    onChange={this.handleInput}/> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1J9WIKjkDvSojTBOgJGqMKMAQ4YSZOxUxQ&usqp=CAU" alt="upload"/>

                    </div>


                </div>

                <button>Submit</button>

            </form>

            </div>

        </div>
    )

}
    

}
export default RegLand;