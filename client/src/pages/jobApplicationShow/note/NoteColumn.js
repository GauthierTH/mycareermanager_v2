import React, { useState } from 'react'
import SimpleFormat from '@16g/react-simple-format';

import EditNoteForm from './EditNoteForm'
  
const NoteColumn = ({note}) => {
  const [editNoteFormIsOpen, setEditNoteFormIsOpen] = useState(false)
  const [Note, setNote] = useState(note)

  return(
    <div className='col-4'>
      <div className='column-header'>
        <h2>Note</h2>
        <button onClick={() => setEditNoteFormIsOpen(true)}>edit</button>
      </div>
      <div className='column-body'>
        {editNoteFormIsOpen ?
          <EditNoteForm Note={Note} setNote={setNote} setEditNoteFormIsOpen={setEditNoteFormIsOpen} />
          :
          Note !== '' ? <SimpleFormat text={Note} /> : 'add a note'
        }
      </div>
    </div>
  )
}
  
export default NoteColumn
