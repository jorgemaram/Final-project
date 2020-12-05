import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'

import BookList from './pages/Book-list/Books-list'
import BookDetails from './pages/Book-details/Book-details'
import BookForm from './pages/Book-form/Book-form'


class App extends Component {
  constructor() {
    super()
    this.state = { loggedInUser: undefined }
    //this.authServices = new AuthServices
  }

  render() {

    return (
      <>
        <h1>Hola</h1>
        <main>
          <Switch>
            <Route path="/libros" exact render={() => <BookList/>} />
            <Route path="/libros/:book_id" render={props => <BookDetails {...props} />} />
            <Route path="/crear" render={() => <BookForm />} />
          </Switch>
        </main>
      </>
    )
  }

}

export default App;
