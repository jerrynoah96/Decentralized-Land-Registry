import React, {Component} from 'react';
import Carousel from 'react-elastic-carousel';
import logo from '../images/darklogo.svg';


import '../App.css';

const FindProperty =(props)=> {

    

    const displayHome = (e)=> {
    
        props.displayLoader(e);
        setTimeout(() => {
         props.displayHome(e);
         }, 3000)
      }

      const lands = props.lands;
      const landList = lands.map((land)=> {
          let propertystate;
          if(land.propertystate == "0"){
              propertystate = "awaiting verification"

          }

    return(
        <div className="registered-property">
                                <div className="text-details">
                                    <p>Holder Name: <span>{land.holder_name}</span></p>
                                    <p>property Name: <span>{land.name}</span></p>
                                    <p>Location: <span>{land.location}</span></p>
                                    <p>LR No: <span>{land.lr_no}</span></p>
                                    <p>Holder ID: <span>{land.holder_id}</span></p>
                                    <p>Verified: <span>{propertystate}</span></p>
                                    <a href={`https://ipfs.infura.io/ipfs/`+land.ipfsHash}
                                    target="_blank">see Ownership Doc</a>

                                </div>

                                <div className="property-img">
                                    <img 
                                    src={`https://ipfs.infura.io/ipfs/`+land.landimgipfshash}/>

                                </div>

                            </div>

    )

        

      })

    
        return(
            <div className="find-property">
                <div className="brand">
                    <img src={logo} className="logo" alt="logo"/>
                </div>
               
                <button className="home-btn"
            onClick={displayHome}> Home</button>
    
                <div className="find-property-content">
                <h2 className="find-property-header"> Property List</h2>
                    
                 <div>
                    <div className="search-container search-property">
                    <span>Enter Property ID</span>
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Search Properties" />
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
    
                    </div>
    
                    </div>

                    <div className="property-list">
                        <Carousel className="carousel">
                            {landList}
                            

                        </Carousel>

                    </div>

    
                </div>
    
    
            </div>
        )

    }

export default FindProperty;