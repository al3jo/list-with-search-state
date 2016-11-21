import './Customers.css'
import Customer from '../../components/Customer/Customer'
import React from 'react'

export default ({customers, q}) => {
  return <ul className="CustomerList">
    {customers.map(c => <Customer customer={c} key={c.get('id')} q={q} />)}
  </ul>
}
