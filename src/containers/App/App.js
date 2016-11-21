import CustomersContainer from '../../containers/Customers/CustomersContainer'
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img alt="logo" className="App-logo" src={logo} />
          <h2>Customers</h2>
        </div>
        <div className="App-intro">
          <CustomersContainer />
        </div>
      </div>
    );
  }
}

export default App
