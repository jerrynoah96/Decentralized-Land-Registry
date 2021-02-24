import React from 'react';
import logo from '../images/darklogo.svg';

import '../App.css';

const UploadDoc =(props)=> {

    const displayHome = (e)=> {
    
        props.displayLoader(e);
        setTimeout(() => {
          props.displayHome(e);
         }, 3000)
      }

    return(
        <div className="upload-doc">
            <div className="brand">
                <img src={logo} className="logo" alt="logo"/>
            </div>
            
            <button className="home-btn"
            onClick={displayHome}> Home</button>


            <div className="uploadPage-content">
                <h2> Welcome</h2>
                <h2>Please upload proof of ownership</h2>

                <div className="uploadDoc-box">
                    <span>Attach Here</span>

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1J9WIKjkDvSojTBOgJGqMKMAQ4YSZOxUxQ&usqp=CAU" alt="upload"/>

                </div>

            </div>

        </div>
    )

}
export default UploadDoc;