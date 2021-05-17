import React, {Component} from 'react';
import logo from '../images/darklogo.svg';


import '../App.css';

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({host: "ipfs.infura.io", port: 5001, protocol:"https"})

class RegLand extends Component {


    constructor(props) {
        super(props);
        this.state={
            landtitle: " ",
            location: " ",
            holdername: " ",
            lr_no: " ",
            ownershipdoc: " ",
            holder_id: " ",
            buffer: null,
            fileCID: null,
            landImgbuffer: null,
            landImgCID: null,
            landImg: " "
    
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
    this.props.landRegistration(this.state.landtitle,
        this.state.location,
        this.state.holdername,
        this.state.lr_no,
        this.state.fileCID,
        this.state.landImgCID,
        this.state.holder_id)
    
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


captureImg = (e)=>{
    e.preventDefault();
    console.log('file catured')
    //process file for ipfs
    //first fetch file from event
    const userFile = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(userFile);
    reader.onloadend = () => {
        this.setState({
            landImgbuffer: Buffer(reader.result)
        })
        console.log(this.state.landImgbuffer);
       
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

                 console.log(this.state.fileCID, 'ipfsHash')
                
            }
            catch(e){
                console.log('error', e)
            }
        
        } else{
            alert('choose a valid file');
        }

    }

    uploadImgToIPFS = async (e)=> {
        e.preventDefault();
        console.log('pushing file to IPFS')
        if(this.state.buffer){
            try{
                const result = await ipfs.add(this.state.landImgbuffer)
                const landImgCID = result.cid.string;
                //console.log('result', result);
                this.setState({
                    landImgCID
                })

                 console.log(this.state.landImgCID, 'landImg Hash')
                
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
                    onChange={this.captureFile}/> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1J9WIKjkDvSojTBOgJGqMKMAQ4YSZOxUxQ&usqp=CAU" alt="upload"
                    onClick={this.uploadToIPFS}/>

                    </div>


                </div>

                <div className="input-box">
                    <label htmlFor="property-img">Property Image</label>
                    <div>
                    <input type="file" id="property-img" 
                    name="property-img" setValue={this.state.landImg}
                    onChange={this.captureImg}/> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1J9WIKjkDvSojTBOgJGqMKMAQ4YSZOxUxQ&usqp=CAU" alt="upload"
                    onClick={this.uploadImgToIPFS}/>

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