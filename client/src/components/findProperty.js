import React, {Component} from 'react';
import logo from '../images/darklogo.svg';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import '../App.css';

export class FindProperty extends Component{

    displayHome = (e)=> {
    
        this.props.displayLoader(e);
        setTimeout(() => {
         this.props.displayHome(e);
         }, 3000)
      }

    render(){
        return(
            <div className="find-property">
                <div className="brand">
                    <img src={logo} className="logo" alt="logo"/>
                </div>
                
                <button className="home-btn"
            onClick={this.displayHome}> Home</button>
    
                <div className="find-property-content">
                    <h2> Find Your Property</h2>
                 <div >
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
    
                    <div className="google-map">

                    <Map google={this.props.google} zoom={14}>
 
                        <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />

                        <InfoWindow onClose={this.onInfoWindowClose}>
                        
                        </InfoWindow>
                    </Map>
    
    
    
                    </div>
    
                </div>
    
    
            </div>
        )

    }

    

}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBtzcouwo2RFECLY0uAcVMKxrtwEx0_SqY")
  })(FindProperty);