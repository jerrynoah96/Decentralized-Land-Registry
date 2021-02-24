import React from 'react';
import logo from '../images/darklogo.svg';

import '../App.css';

const PreviewProperty =(props)=> {

    const displayHome = (e)=> {
    
        props.displayLoader(e);
        setTimeout(() => {
          props.displayHome(e);
         }, 3000)
      }

    return(
        <div className="preview-property">
            <div className="brand">
                <img src={logo} className="logo" alt="logo"/>
            </div>
            
            <button className="home-btn"
            onClick={displayHome}> Home</button>

            <h2 className="section-header">Preview Property</h2>

            <div className="property-preview-details">
                <div className="landImage">
                    <label for="land-image">Property Name</label>
                    <img src="https://www.investopedia.com/thmb/ORMhEo44tHDwWBJvXtcR664DC88=/3400x1912/smart/filters:no_upscale()/getty-large-farm-landscape-56c0a6aa5f9b5829f867287c.jpg" alt="land-pix" id="land-image"/>
                </div>
                <div className="land-details">
                    <span> City, Town</span>
                    <div className="land-description">
                        <p> 20 acres of land on the northern side of Uganda,
                            and a river by the side
                        </p>
                    </div>

                </div>
            </div>

            <div className="preview-btns">
                <button>Edit</button>

                <button>Submit</button>
                
            </div>

            
        </div>
    )

}
export default PreviewProperty;