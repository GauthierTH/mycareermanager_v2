import React from 'react'

import plusSolid from 'assets/images/plus-solid.svg'
  
const NewButton = ({setNewItemFormIsOpen}) => {
  const style = {
    backgroundColor: 'white',
    border: '1px solid transparent',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: '5px',
  }

  return <img src={plusSolid} style={style} onClick={() => setNewItemFormIsOpen(true)} />
}
  
export default NewButton
