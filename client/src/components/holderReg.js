import React, { Component } from "react";
import logo from '../images/darklogo.svg';


import '../App.css';
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({host: "ipfs.infura.io", port: 5001, protocol:"https"})


class LandOwnerReg extends Component {

   

    constructor(props) {
        super(props);
        this.state={
            fullname: " ",
            taxpin: " ",
            email: " ",
            id: " ",
            contact: " ",
            buffer: null,
            fileCID: null
    
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
        this.state.fileCID,
        this.state.id,
        this.state.contact
        )
    
}

captureFile = (e)=>{
    e.preventDefault();
    console.log('file catured')
    //process file for ipfs
    //first fetch file from event
    const userFile = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(userFile);
    reader.onloadend = () => {
        this.setState({
            buffer: Buffer(reader.result)
        })
        console.log(this.state.buffer);
       
    }

}

 //https://ipfs.infura.io/ipfs/QmVbbYGaCoJa4rMgw41GkGPXQa8184ioLwcipmvb2D926f
    //push file to ipfs using file buffer
    uploadToIPFS = async (e)=> {
        e.preventDefault();
        console.log('pushing file to IPFS')
        if(this.state.buffer){
            try{
                const result = await ipfs.add(this.state.buffer)
                const fileCID = result.cid.string;
                //console.log('result', result);
                this.setState({
                    fileCID
                })

                 console.log(this.state.fileCID, 'image ipfsHash')
                
            }
            catch(e){
                console.log('error', e)
            }
        
        } else{
            alert('choose a valid file');
        }

    }

render(){
    return(
        <div className="land-owner-reg">

            <div className="brand">
                <img src={logo} className="logo" alt="logo"/>
            </div>
            
            <button className="home-btn"
            onClick={this.displayHome}> Home</button>

           
            <form className="reg-form" onSubmit={this.submitForm}>
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

                <div className="input-box">
                    <label htmlFor="ownerimage">Upload Your Picture</label>
                    <div>
                    <input type="file"
                    accept=".png, .jpg, .jpeg"
                     id="ownerimage" 
                    name="ownerimage" setValue={this.state.ownershipdoc}
                    onChange={this.captureFile}/> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1J9WIKjkDvSojTBOgJGqMKMAQ4YSZOxUxQ&usqp=CAU" alt="upload"
                    onClick={this.uploadToIPFS}/>

                    </div>


                </div>

                <button>Submit</button>

            </form>

        </div>
    )
    
}
    

}
export default LandOwnerReg;