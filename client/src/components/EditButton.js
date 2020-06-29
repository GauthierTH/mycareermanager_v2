import React from 'react'

import penSolid from 'assets/images/pen-solid.svg'
  
const EditButton = ({setEditItemFormIsOpen}) => {
  const style = {
    width: '15px',
    height: '15px',
    cursor: 'pointer',
    padding: '2.5px'
  }

  return <img src={penSolid} style={style} onClick={() => setEditItemFormIsOpen(true)} />
}
  
export default EditButton
