
import React from 'react';
import logo from '../images/darklogo.svg';


import '../App.css';

const OwnersProfiles =(props)=> {

    const landOwners = props.landOwners;
    const landOwner = landOwners.map(owner => {
      return (
        
            <div className="owner-details" key={owner.key}>
                <div>
                  <p>Name: </p> <span> {owner.name}</span>
                </div>

                <div>
                  <p>Tax Pin: </p> <span> {owner.tax_pin}</span>
                </div>

                <div>
                  <p>Email: </p> <span> {owner.email}</span>
                </div>

                <div>
                  <p>Id Number: </p> <span>{owner.id_no}</span>
                </div>

                <div>
                  <p>Wal Add: </p> <span>
                  {owner._address.slice(0,6).concat('...').concat(owner._address.slice(12,18)) }</span>
                </div>


            </div>
      )
    })


    const displayHome = (e)=> {
    
        props.displayLoader(e);
        setTimeout(() => {
          props.displayHome(e);
         }, 3000)
      }

    return(
        <div className="owners-profiles-page">
            <div className="brand">
                <img src={logo} className="logo" alt="logo"/>
            </div>
            
            <button className="home-btn"
            onClick={displayHome}> Home</button>

            <h2 className="section-header">Land Owners List</h2>


            <div className="owners-list">

              {landOwner}

            </div>

        </div>
    )

}
export default OwnersProfiles;