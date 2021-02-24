import React from 'react';
import logo from '../images/darklogo.svg';

import '../App.css';

const UploadDoc2 =(props)=> {

    return(
        <div className="upload-doc">
            <div className="brand">
                <img src={logo} className="logo" alt="logo"/>
            </div>
            
            <button className="home-btn"
            onClick={props.displayHome}> Home</button>


            <div className="uploadPage-content uploadPage-content2">
                <h2> Welcome</h2>
                <h2>Please upload proof of ownership</h2>

                <div className="input-box">
                    <label for="doc-name">Name</label>
                    <input id="doc-name" placeholder="Name"/>
                </div>

                <div className="input-box">
                    <label for="doc-name">Email Address</label>
                    <input id="doc-name"placeholder="Email Address"/>
                </div>

                <div className="uploadDoc-box">
                    <span>Attach Here</span>

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1J9WIKjkDvSojTBOgJGqMKMAQ4YSZOxUxQ&usqp=CAU" alt="upload"/>

                </div>

                <button>Submit Documents</button>

            </div>

        </div>
    )

}
export default UploadDoc2;