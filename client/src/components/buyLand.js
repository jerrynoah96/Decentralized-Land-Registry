import React, {Component} from 'react';
import logo from '../images/darklogo.svg';
import filter from '../images/filter-logo.png';
import classNames from 'classnames';
import '../App.css';


class BuyLand extends Component {

    state = {
        isFilter: "close"
    }



    displayHome = (e)=> {
    
       this.props.displayLoader(e);
        setTimeout(() => {
          this.props.displayHome(e);
         }, 3000)
      }

      render(){
          const filterClass =classNames('filter-comp',
          {
            'filter-comp-show': this.state.isFilter === "open"
          })
        return(
            <div className="buy-land">
                <div className="brand">
                    <img src={logo} className="logo" alt="logo"/>
                </div> 
                <button className="home-btn"
                onClick={this.displayHome}> Home</button>
    
            <div className={filterClass}>
                <button onClick={()=>{
                        this.setState({
                            isFilter: "close"
                        })
                    }}>+</button>
                <div className="filters">
                    <span className="filter-header">Filters</span>
                    <div className="filter-options">
                        <span> <input type="checkbox"/> For Lease </span>
                        <span> <input type="checkbox"/> For More than 200 acres </span>
                        <span> <input type="checkbox"/> Near by resourse #1 </span>
                        <span> <input type="checkbox"/> Near by resourse #2 </span>
                        <span> <input type="checkbox"/> Near by resourse #3 </span>
                       
    
                    </div>
    
                </div>
            </div>
                <div className="buyLand-content">
                    <h2> Buy Land</h2>
                    <div className="properties-for-sale">
                    <div className="property-for-sale">
                    <div className="landImage">
                        <label htmlFor="land-image">Property Name</label>
                        <img src="https://www.investopedia.com/thmb/ORMhEo44tHDwWBJvXtcR664DC88=/3400x1912/smart/filters:no_upscale()/getty-large-farm-landscape-56c0a6aa5f9b5829f867287c.jpg" alt="land-pix" id="land-image"/>
                    </div>
                    <div className="land-details">
                        <span> City, Town</span>
                        <div className="land-description">
                            <p> 20 acres of land on the northern side of Uganda,
                                and a river by the side
                            </p>
                            <button>Contact Owner</button>
    
                        </div>
    
                    </div>
                 
                    </div>
    
    
                    <div className="property-for-sale">
                    <div className="landImage">
                        <label htmlFor="land-image">Property Name</label>
                        <img src="https://www.investopedia.com/thmb/ORMhEo44tHDwWBJvXtcR664DC88=/3400x1912/smart/filters:no_upscale()/getty-large-farm-landscape-56c0a6aa5f9b5829f867287c.jpg" alt="land-pix" id="land-image"/>
                    </div>
                    <div className="land-details">
                        <span> City, Town</span>
                        <div className="land-description">
                            <p> 20 acres of land on the northern side of Uganda,
                                and a river by the side
                            </p>
                            <button>Contact Owner</button>
    
                        </div>
    
                    </div>
                 
                    </div>
                    </div>
                    
                </div>
    
                <div className="filter-options-toggle">
                    <p>Filter Options</p>
                    <img src={filter} className="filter-logo" alt="logo"
                    onClick={()=>{
                        this.setState({
                            isFilter: "open"
                        })
                    }}/>
                </div>
            </div>
        )
    
    }

      }

    
export default BuyLand;