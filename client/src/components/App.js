import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import React, { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import AuthServices from './../service/auth.service'
import BookList from './pages/Book-list/Books-list'
import BookDetails from './pages/Book-details/Book-details'
import BookForm from './pages/Book-form/Book-form'
import BookEditForm from './pages/Book-edit-form/Book-edit-form'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import ProfileDetails from './pages/Profile/profile-details'
import Events from './pages/Events/events'
import EventDetails from './pages/Event-details/event-details'
import EventsForm from './pages/Events/events-form'
import EventEditForm from './pages/Event-edit-form/event-edit-form'
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


  setTheUser = user => this.setState({ loggedInUser: user })


  render() {

    return (
      <>
        

        <Navbar storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} />
      
        <main>
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/registro" render={props => <Signup storeUser={this.setTheUser} {...props} />} />
            <Route path="/acceso-usuario" render={props => <Login storeUser={this.setTheUser} {...props} />} />
            <Route path="/perfil" render={() => this.state.loggedInUser ? <Profile loggedUser={this.state.loggedInUser} /> : <Redirect to="/acceso-usuario" />} />
            <Route path="/editar-perfil/:user_id" render={props => this.state.loggedInUser ? <ProfileDetails {...props} loggedUser={this.state.loggedInUser} /> : <Redirect to="/acceso-usuario" />} />            <Route path="/libros" exact render={() => <BookList />} />
            <Route path="/eventos" exact render={() => <Events />} />
            <Route path="/eventos/nuevo-evento" render={props => this.state.loggedInUser ? <EventsForm {...props} loggedUser={this.state.loggedInUser} /> : <Redirect to="/acceso-usuario" />} />
            <Route path="/eventos/editar-evento/:event_id" render={props => this.state.loggedInUser ? <EventEditForm {...props} loggedUser={this.state.loggedInUser} /> : <Redirect to="/acceso-usuario" />} />
            <Route path="/eventos/:event_id" render={props => <EventDetails {...props} />} />
            <Route path="/libros" exact render={() => <BookList />} />
            <Route path="/crear" render={props => this.state.loggedInUser ? <BookForm {...props} loggedUser={this.state.loggedInUser} /> : <Redirect to="/acceso-usuario" />} />
            <Route path="/libros/editar/:book_id" render={props => this.state.loggedInUser ? <BookEditForm {...props} loggedUser={this.state.loggedInUser} /> : <Redirect to="/acceso-usuario" />}/>
            <Route path="/libros/:book_id" render={props => <BookDetails {...props} />} />
          </Switch>
        </main>

        <footer>
          <Footer />
        </footer>
      </>
    )
  }
  
}

export default App
