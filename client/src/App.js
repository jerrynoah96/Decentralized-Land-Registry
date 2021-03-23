import React, { Component } from "react";
//import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import Home from './components/home';
import UploadDoc from './components/uploadDoc';
//import UploadDoc2 from './components/uploadDoc2';
import Loader from './components/loader';
import FindProperty from './components/findProperty';
import BuyLand from './components/buyLand';
import SellLand from './components/sellLand';
import PreviewProperty from './components/previewProperty';
import HolderReg from './components/holderReg';
import "./App.css";

class App extends Component {
  state = { 
    storageValue: 0, 
    web3: null, 
    accounts: null, 
    contract: null,
    currentPage: 'home' 
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();
     this.setState({
        web3
      })

      // Use web3 to get the user's accounts.
     // const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
     

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };


  displayHome=()=>{
    this.setState({
      currentPage: 'home'
    })
  }

  displayBuyLand=()=> {
    this.setState({
      currentPage: 'buy land'
    })
  }

  displaySellLand=()=> {
    this.setState({
      currentPage: 'sell land'
    })
  }

  displayRegisterLand=()=> {
    this.setState({
      currentPage: 'register land'
    })
  }

  displayPropertyPreview=()=> {
    this.setState({
      currentPage: 'preview'
    })
  }

  displayFindProperty=()=> {
    this.setState({
      currentPage: 'find property'
    })
  }

  displayHolderRegForm=()=> {
    this.setState({
      currentPage: 'holder reg form'
    })
  }

  displayLoader =()=> {
    this.setState({
      currentPage: 'loader'
    })
  }
 

  render() {
    let currentPage;
    if (!this.state.web3) {
      return (<div className="initial-loading">
        <Loader />

     </div>)
    }

    if(this.state.currentPage === 'home'){
      currentPage = <Home 
      displayBuyLand={this.displayBuyLand}
      displaySellLand={this.displaySellLand}
      displayRegisterLand={this.displayRegisterLand}
      displayFindProperty={this.displayFindProperty}
      displayLoader={this.displayLoader}
      displayHolderRegForm={this.displayHolderRegForm}/>
    }
    else if(this.state.currentPage === 'register land'){
      currentPage = <UploadDoc 
      displayHome={this.displayHome}
      displayLoader={this.displayLoader}/>
    }
    else if(this.state.currentPage === 'sell land'){
      currentPage = <SellLand 
      displayHome={this.displayHome}
      displayLoader={this.displayLoader}/>
    }

    else if(this.state.currentPage === 'holder reg form'){
      currentPage = <HolderReg 
      displayHome={this.displayHome}
      displayLoader={this.displayLoader}
      />
    }

    else if(this.state.currentPage === 'buy land'){
      currentPage = <BuyLand 
      displayHome={this.displayHome}
      displayLoader={this.displayLoader}/>
    }
    else if(this.state.currentPage === 'preview'){
      currentPage =<PreviewProperty 
      displayHome={this.displayHome}
      displayLoader={this.displayLoader}/>
    }
    else if(this.state.currentPage === 'find property'){
      currentPage = <FindProperty 
      displayHome={this.displayHome}
      displayLoader={this.displayLoader}/>
    }
    else if(this.state.currentPage === 'loader'){
      currentPage =< Loader />
    }
    return (
      <div className="App">
        {currentPage}
        
      </div>
    );
  }
}

export default App;
