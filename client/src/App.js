import React, { Component } from "react";
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
import LandRegAbi from './abis/landreg.json';
import "./App.css";

class App extends Component {
  state = { 
    storageValue: 0, 
    web3: null, 
    account: null, 
    contract: null,
    currentPage: 'home',
    landRedAddress: null,
    landRegInstance: null,
    landOwners: null
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();
     this.setState({
        web3
      })

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      this.setState({
        account
      })

      //load landReg contract
      const landRegAddress = "0xde87411573b244da8961Df9E1e222eB2C2e7A583";
      this.setState({
        landRegAddress
      })

      const landRegInstance = new web3.eth.Contract(LandRegAbi, landRegAddress);
      this.setState({
        landRegInstance
      })

      console.log(this.state.landRegInstance, 'land reg')

    //  console.log(await this.state.landRegInstance.methods.getHolders().call(), 'holders')
      
    const landOwners = await this.state.landRegInstance.methods.getHolders().call();
    this.setState({
      landOwners
    })
    console.log(this.state.landOwners, 'land guys')


      
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };


  LandHolderRegistration= async (fullname, taxpin, email, id, contact)=> {
    await this.state.landRegInstance.methods.regHolders(fullname, taxpin, email, id, contact).send({
      from: this.state.account

    })
    alert("you are successfully registered as land owner on this platform");
  }

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
      LandHolderRegistration={this.LandHolderRegistration}
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
