import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'

import AuthServices from './../service/auth.service'
import BookList from './pages/Book-list/Books-list'
import BookDetails from './pages/Book-details/Book-details'
import BookForm from './pages/Book-form/Book-form'
import Home from './pages/Home'
import Navbar from './layout/navbar/Navbar'
import Signup from './pages/Signup/Signup'

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
            <Route path="/" exact render={() => <Home />} />
            <Route path="/registro" render={props => <Signup storeUser={this.setTheUser} {...props} />} />
            <Route path="/libros" exact render={() => <BookList/>} />
            <Route path="/libros/:book_id" render={props => <BookDetails {...props} />} />
            <Route path="/crear" render={props => <BookForm {...props}/> } />
          </Switch>
        </main>
      </>
    )
  }
  
}

export default App
