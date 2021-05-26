import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal'
import logo from '../images/darklogo.svg';

import '../App.css';
import { toast } from 'react-toastify';

toast.configure();
class CEO extends Component  {

    constructor(props) {
        super(props);
        this.state={
            fullname: " ",
            title: " ",
            email: " ",
            id: " ",
            address: " ",
            show: false,
            progressText: "processing request",
            loaderShow: false
    
        }
    
        this.handleInput = this.handleInput.bind(this);
        
    }

    

 handleClose = () => {
     this.setState({
         show: false
     })
 }
 handleShow = () => {
     this.setState({
         show: true
     })
 }
 handleInput=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }

  submitForm =  async(e)=> {
    e.preventDefault();
    
    try{
        this.setState({
            loaderShow: true
        })
        this.setState({
            progressText: " Registering Validator"
        })
            await this.props.regValidators(this.state.fullname,
                this.state.title,
                this.state.email,
                this.state.id,
                this.state.address
                )
                this.setState({
                    progressText: "done...."
                })
                this.setState({
                    loaderShow: false
                })
        
            
                toast.success('Validator successfully enlisted', {
                    autoClose: false
                });
    

    }

    catch(err){
        this.setState({
            progressText: "something is not right...."
        })
        this.setState({
            loaderShow: false
        })
        toast.error(err);
    }
    


    
    
}

    displayBuyLand = (e)=> {
    
        this.props.displayLoader(e);
        setTimeout(() => {
          this.props.displayBuyLand(e);
         }, 3000)
      }



     displayHome = (e)=> {
    
        this.props.displayLoader(e);
        setTimeout(() => {
         this.props.displayHome(e);
         }, 3000)
      }


      displayRegisterLand = (e)=> {
    
        this.props.displayLoader(e);
        setTimeout(() => {
          this.props.displayRegisterLand(e);
         }, 3000)
      }



render(){
    return(
        <div className="ceo-board">
            <div className="brand">
                <img src={logo} className="logo" alt="logo"/>
            </div>

            <button className="home-btn"
            onClick={this.displayHome}> Home</button>


            { this.state.loaderShow ? <div className="progress-loader">
            <span>{this.state.progressText}</span>
            <img src="https://cdn.dribbble.com/users/2077073/screenshots/6005120/loadin_gif.gif" alt="loader"/>
            </div>: null }

            <div className="home-content ceo-title">
                <h2 className="brand-name "> Welcome, CEO</h2>
                <span className="brand-description">Check Lists of validators and confirm them</span>
            <div className="nav-boxes-container">

            <div className="nav-boxes ceo-nav-boxes navbox0">
                    <div className="nav-box" onClick={this.handleShow} >
                        <h3>Register Validator</h3>

                        <p>More details: Register validators, thier details can be found on the "validators details" box. </p>

                    </div>

                    <div className="nav-box">
                    <h3>Land Owners Profiles</h3>

                        <p>More details: See a list of land owners and thier contact details </p>

                    </div>
                </div>
                </div>
            </div>


        <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Register Validators</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form className="reg-form" onSubmit={this.submitForm}>    
                <div className="input-box">
                    <label htmlFor="owner-name">Full Name</label>
                    <input type="text" id="owner-name" placeholder="FirstName LastName" 
                    name="fullname" value={this.state.fullname}
                    onChange={this.handleInput}/>

                </div>

                <div className="input-box">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" placeholder="Title" 
                    name="title" value={this.state.title}
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
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" placeholder="0x00...." 
                    name="address" value={this.state.address}
                    onChange={this.handleInput}/>

                </div>

                <button onClick={this.submitForm}>Submit</button>

            </form>
            </Modal.Body>
            
      </Modal>


        </div>
    )

}
    


}

export default CEO;