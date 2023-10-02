import React from 'react'
import './leftItem.scss'

function LeftItem({Item, title}) {
  return (
    <div className='item_container'>
        {Item}
        {title}
    </div>
  )
}

export default LeftItem