import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import React, { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import AuthServices from './../service/auth.service'
import BookList from './pages/Book-list/Books-list'
import BookDetails from './pages/Book-details/Book-details'
import BookForm from './pages/Book-form/Book-form'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import Navbar from './layout/navbar/Navbar'
import Home from './pages/Home'
import Footer from './layout/footer/Footer'

class App extends Component {

  constructor() {
    super()
    this.state = {
      
      loggedInUser: undefined

    }
    
    this.authServices = new AuthServices()
    
  }

  componentDidMount = () => {

    this.authServices   
      .isLoggedIn()
      .then(response => this.setTheUser(response.data))
      .catch(err => this.setTheUser(undefined))
  }


  setTheUser = user => this.setState({ loggedInUser: user }, () => console.log(user))


  render() {

    return (
      <>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/registro" render={props => <Signup storeUser={this.setTheUser} {...props} />} />
            <Route path="/acceso-usuario" render={props => <Login storeUser={this.setTheUser} {...props} />} />
            <Route path="/perfil" render={() => this.state.loggedInUser ? <Profile loggedUser={this.state.loggedInUser} /> : <Redirect to="/acceso-usuario" />} />
            <Route path="/libros" exact render={() => <BookList/>} />
            <Route path="/libros/:book_id" render={props => <BookDetails {...props} />} />
            <Route path="/libros/editar/:book_id" render={props => <BookDetails {...props} />} />
            <Route path="/crear" render={props => <BookForm {...props}/> } />
          </Switch>
        </main>
        <Footer />
      </>
    )
  }
  
}

export default App
