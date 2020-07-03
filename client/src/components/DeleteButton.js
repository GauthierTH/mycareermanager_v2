import React from 'react'

import timesSolid from 'assets/images/times-solid.svg'
  
const DeleteButton = ({deleteItem}) => {
  const style = {
    width: '20px',
    height: '20px',
    cursor: 'pointer'
  }

  return <img src={timesSolid} style={style} onClick={() => { if (window.confirm('Are you sure to delete this item?')) deleteItem() }} />
}
  
export default DeleteButton
