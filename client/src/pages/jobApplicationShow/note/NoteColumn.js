import React, { useState } from 'react'
import SimpleFormat from '@16g/react-simple-format';

import EditNoteForm from './EditNoteForm'
  
const NoteColumn = ({jobApplicationNote}) => {
  const [editNoteFormIsOpen, setEditNoteFormIsOpen] = useState(false)
  const [note, setNote] = useState(jobApplicationNote)

  return(
    <div className='col-4'>
      <div className='column-header'>
        <h2>Note</h2>
        <button onClick={() => setEditNoteFormIsOpen(true)}>edit</button>
      </div>
      <div className='column-body'>
        {editNoteFormIsOpen ?
          <EditNoteForm note={note} setNote={setNote} setEditNoteFormIsOpen={setEditNoteFormIsOpen} />
          :
          note !== '' ? <SimpleFormat text={note} /> : 'add a note'
        }
      </div>
    </div>
  )
}
  
export default NoteColumn
