import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import Home from 'pages/home/Home'
import {BrowserRouter as Route} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route>
          <Home></Home>
        </Route>
      </Provider>
      
    );
  }
}



