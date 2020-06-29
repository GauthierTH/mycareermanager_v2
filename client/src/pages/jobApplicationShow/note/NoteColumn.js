import React, { useState } from 'react'
import SimpleFormat from '@16g/react-simple-format';

import EditNoteForm from './EditNoteForm'
import EditButton from 'components/EditButton'
  
const NoteColumn = ({jobApplicationNote}) => {
  const [editNoteFormIsOpen, setEditNoteFormIsOpen] = useState(false)
  const [note, setNote] = useState(jobApplicationNote)

  return(
    <div className='list'>
      <div className='list-header'>
        <h2>Note</h2>
        <EditButton setEditItemFormIsOpen={setEditNoteFormIsOpen} />
      </div>
      <div className='list-body'>
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
