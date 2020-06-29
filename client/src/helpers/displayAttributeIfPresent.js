import React from 'react'

export const displayAttributeIfPresentHelper = (attribute, label) => {
  const style = {
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    wordBreak: 'break-all',
    wordBreak: 'break-word',
    hyphens: 'auto'
  }

  if(attribute) {
    return(      
      <tr>
        <td className='text-right'><label>{label}:</label></td>
        <td style={style}>{attribute}</td>
      </tr>
    )
  }
}
