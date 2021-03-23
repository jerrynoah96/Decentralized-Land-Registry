import React from 'react';
import logo from '../images/darklogo.svg';

import '../App.css';

const Home =(props)=> {

    const displayBuyLand = (e)=> {
    
        props.displayLoader(e);
        setTimeout(() => {
          props.displayBuyLand(e);
         }, 3000)
      }

      const displaySellLand = (e)=> {
    
        props.displayLoader(e);
        setTimeout(() => {
          props.displaySellLand(e);
         }, 3000)
      }

      const displayRegisterLand = (e)=> {
    
        props.displayLoader(e);
        setTimeout(() => {
          props.displayRegisterLand(e);
         }, 3000)
      }

      const displayFindProperty = (e)=> {
    
        props.displayLoader(e);
        setTimeout(() => {
          props.displayFindProperty(e);
         }, 3000)
      }

      const displayHolderReg = (e)=> {
    
        props.displayLoader(e);
        setTimeout(() => {
          props.displayHolderRegForm(e);
         }, 3000)
      }

    return(
        <div className="home">
            <div className="brand">
                <img src={logo} className="logo" alt="logo"/>
            </div>

            <div className="search-container"> 
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="Search Properties" />
                    <button type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
                </div>

            </div>

            <div className="home-content">
                <h2 className="brand-name"> Welcome to Land Registry</h2>
                <span className="brand-description">Our platform allows you to register, buy and sell lands</span>
            <div className="nav-boxes-container">

            <div className="nav-boxes navbox0">
                    <div className="nav-box" onClick={displayHolderReg}>
                        <h3>Land Holder Registration</h3>

                        <p>More details: Get Registered as land holder to sell lands on our platforms </p>

                    </div>

                    <div className="nav-box" onClick={displayFindProperty}>
                    <h3>Land Holder Registration</h3>

                        <p>More details: Get Registered as land holder to sell lands on our platforms </p>

                    </div>
                </div>

                <div className="nav-boxes navbox1">
                    <div className="nav-box" onClick={displayRegisterLand}>
                        <h3>Register Land</h3>

                        <p>More details: Kindly register your land. You'll need to upload necessary documents as will be requested from you </p>

                    </div>

                    <div className="nav-box" onClick={displayFindProperty}>
                        <h3>Search for Property</h3>

                        <p>More details: Kindly register your land. You'll need to upload necessary documents as will be requested from you </p>

                    </div>
                </div>


                <div className="nav-boxes navbox2">
                    <div className="nav-box" onClick={displayBuyLand}>
                        <h3>Buy Land</h3>

                        <p>More details: Kindly register your land. You'll need to upload necessary documents as will be requested from you </p>

                    </div>

                    <div className="nav-box" onClick={displaySellLand}>
                        <h3>Sell Land</h3>

                        <p>More details: Kindly register your land. You'll need to upload necessary documents as will be requested from you </p>

                    </div>
                    
                    
                </div>

            </div>


            <div className="sellingPoint-section">
                <span className="selling-pointHeader">Details Explaining the Registry and how it works</span>

                <div className="selling-points">
                    <div className="selling-point">
                        <span> Selling Point 1</span>

                    </div>

                    <div className="selling-point">
                        <span> Selling Point 1</span>

                    </div>

                    <div className="selling-point">
                        <span> Selling Point 1</span>

                    </div>

                </div>

            </div>

            </div>

            
    



        </div>
    )


}

export default Home;