import React from 'react';
import logo from '../images/darklogo.svg';

import '../App.css';

const SellLand =(props)=> {

    const displayHome = (e)=> {
    
        props.displayLoader(e);
        setTimeout(() => {
          props.displayHome(e);
         }, 3000)
      }

    return(
        <div className="sell-land">
            <div className="brand">
                <img src={logo} className="logo" alt="logo"/>
            </div>
            
            <button className="home-btn"
            onClick={displayHome}> Home</button>

            <h2 className="section-header">Sell Land</h2>


            <div className="sell-requirements">
                <div className="property-info">
                    <div className="p-name">
                        <span>Property Name</span>
                        <input type="text" />
                    </div>

                    <div className="p-address">
                        <span>Address</span>
                        <input type="text" />

                    </div>

                    <div className="p-description">
                        <span>Description</span>
                        <textarea placeholder="give a short description of the property"
                        rows="8" cols="40"/>

                    </div>
                </div>

                <div className="upload-docs-forSale">
                    <div className="uploadDoc-box">
                        <span>Upload Photo</span>

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1J9WIKjkDvSojTBOgJGqMKMAQ4YSZOxUxQ&usqp=CAU" alt="upload"/>

                    </div>

                    <button>Preview</button>
                    <button>Submit</button>


                </div>

            <div className="filters-on-sell">
                <span>Please choose what applies to <br/> this property</span>
                <div className="filter-options">
                    <span> <input type="checkbox"/> For Lease </span>
                    <span> <input type="checkbox"/> For More than 200 acres </span>
                    <span> <input type="checkbox"/> Near by resourse #1 </span>
                    <span> <input type="checkbox"/> Near by resourse #2 </span>
                    <span> <input type="checkbox"/> Near by resourse #3 </span>
                   

                </div>

            </div>
            </div>

        </div>
    )

}
export default SellLand;