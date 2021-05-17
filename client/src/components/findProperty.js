import React, {Component} from 'react';
import Carousel from 'react-elastic-carousel';
import logo from '../images/darklogo.svg';


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
                            <div className="registered-property">
                                <div className="text-details">
                                    <p>Holder Name: <span>Jerry</span></p>
                                    <p>property Name: <span>House 1</span></p>
                                    <p>Location: <span>Jerry</span></p>
                                    <p>LR No: <span>123</span></p>
                                    <p>Holder ID: <span>123</span></p>

                                </div>

                                <div className="property-img">
                                    <img 
                                    src="https://www.investopedia.com/thmb/ORMhEo44tHDwWBJvXtcR664DC88=/3400x1912/smart/filters:no_upscale()/getty-large-farm-landscape-56c0a6aa5f9b5829f867287c.jpg"/>

                                </div>

                            </div>

                        </Carousel>

                    </div>

    
                </div>
    
    
            </div>
        )

    }

    

}

export default FindProperty;