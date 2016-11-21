import Customers from '../../components/Customers/Customers'
import data from './data.json'
import { fromJS } from 'immutable'
import React, { Component } from 'react'

const customers = fromJS(data)

class CustomersContainer extends Component {
  constructor() {
    super()
    this.state = {
      tab: 'all',
      q: {all: '', enterprise: '', lite: ''}
    }
  }
  getCustomers = () => {
    const tab = this.state.tab
    const q = this.state.q[tab]
    let values = customers

    if (tab !== 'all') {
      values = values.filter(c => tab === c.get('type').toLowerCase())
    }
    if (q !== '') {
      return values.filter(p => p.get('description').includes(q) || p.get('version').includes(q))
    }
    return values
  }
  handleSearch = e => {
    const nState = this.state
    nState.q[this.state.tab] = e.target.value || ''
    this.setState(nState)
  }
  handleTab = e => {
    e.preventDefault()
    const nState = this.state
    nState.tab = e.target.text.toLowerCase()
    this.setState(nState)
  }
  render() {
    return (
      <div>
        <input onChange={this.handleSearch} placeholder="Search..." type="text" value={this.state.q[this.state.tab]} />
        <div>
          <a className="Tab" href='#' onClick={this.handleTab}>All</a>
          {' | '}
          <a className="Tab" href='#' onClick={this.handleTab}>Lite</a>
          {' | '}
          <a className="Tab" href='#' onClick={this.handleTab}>Enterprise</a>
        </div>
        <Customers customers={this.getCustomers()} q={this.state.q[this.state.tab]} />
      </div>
    )
  }
}

export default CustomersContainer
