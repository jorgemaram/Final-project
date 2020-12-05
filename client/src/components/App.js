import './App.css';
import React, { Component } from 'react'
import Signup from './pages/Signup/Signup'
import Navbar from './layout/navbar/Navbar'
import { Route, Switch } from 'react-router-dom';


import AuthServices from './../service/auth.service'

class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: undefined }
    this.authServices = new AuthServices
  }

  // componentDidMount = () => {

  //   this.authServices   
  //     .isLoggedIn()
  //     .then(response => this.setTheUser(response.data))
  //     .catch(err => this.setTheUser(undefined))
  // }


  // setTheUser = user => this.setState({ loggedInUser: user }, () => console.log('El nuevo estado de App es:', this.state))

  render() {

    return (
      <>
        <Navbar />

        <main>
          <Switch>
 
            <Route path="/registro" render={props => <Signup storeUser={this.setTheUser} {...props} />} />
          </Switch>
        </main>
      </>
    )
  }
}

export default App
