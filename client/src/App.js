import React, { Component } from "react";
import getWeb3 from "./getWeb3";
import Home from './components/home';
import RegLand from './components/regLand';
//import UploadDoc2 from './components/uploadDoc2';
import Loader from './components/loader';
import FindProperty from './components/findProperty';
import BuyLand from './components/buyLand';
import SellLand from './components/sellLand';
import OwnersProfiles from './components/ownersProfiles';
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
      const landRegAddress = "0x9D4948fB52888DE25E284A7caDc32953d22f4635";
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

    console.log(this.state.landOwners, 'owners')
    const allproperties = this.getAllProperties();
      console.log(allproperties, "properties")
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

 getAllProperties = async()=> {
  const res =  await this.state.landRegInstance.methods.getProperties().call();
  console.log(res,'properties')
  }


  LandHolderRegistration= async (fullname, taxpin, email, imageHash, id, contact)=> {
    await this.state.landRegInstance.methods.regHolders(fullname, taxpin, email, imageHash, id, contact).send({
      from: this.state.account

    })
    alert("you are successfully registered as land owner on this platform");
  }

  landRegistration = async(landtitle, location, holdername, lr_no, fileCID,landImgCID, holder_id)=> {
   const result=  await this.state.landRegInstance.methods.regProperty(landtitle, location, holdername, lr_no, fileCID,landImgCID, holder_id).send({
      from: this.state.account
    })

     console.log(result, 'land registry')

    alert("Your land has been successfully registered")
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
  displayProfilesPage=()=> {
    this.setState({
      currentPage: 'land owners'
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
      displayHolderRegForm={this.displayHolderRegForm}
      displayProfilesPage={this.displayProfilesPage}/>
    }
    else if(this.state.currentPage === 'register land'){
      currentPage = <RegLand 
      displayHome={this.displayHome}
      displayLoader={this.displayLoader}
      landRegistration={this.landRegistration}/>
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

    else if(this.state.currentPage === 'land owners'){
      currentPage = <OwnersProfiles
      displayHome={this.displayHome}
      displayLoader={this.displayLoader}
      landOwners={this.state.landOwners}/>
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
