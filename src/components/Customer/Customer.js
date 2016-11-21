import './Customer.css';
import Highlighter from 'react-highlight-words'
import React from 'react'

export default ({customer, q}) => {
  const label = `${customer.get('description')} -- ${customer.get('type')} -- ${customer.get('version')}`

  return <li className="Customer">
    <Highlighter highlightClassName='Highlight' searchWords={[q]} textToHighlight={label}/>
  </li>
}
