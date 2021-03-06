import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';

import { updateJobApplicationRequest } from 'services/backend/jobApplication'
  
const EditNoteForm = ({note, setNote, setEditNoteFormIsOpen}) => {
  const bearerToken = useSelector(state => state.user.bearerToken)
  let { id } = useParams();
  const [noteInput, setNoteInput] = useState(note)

  const handleSubmit = async (e) => {
    e.preventDefault()

    let data = {
      note: noteInput
    }
    
    let updatedJobApplication = await updateJobApplicationRequest(bearerToken, data, id)
    setNote(updatedJobApplication.note)

    setEditNoteFormIsOpen(false)
  }

  return(
    <form onSubmit={handleSubmit}>
      <TextareaAutosize cols='38' value={noteInput} onChange={(e) => setNoteInput(e.target.value)} placeholder='add a note' />
      <div className='justify-content-end mt-1'>
        <button type='submit' className='btn-primary'>Update</button>
        <button className='btn-secondary' onClick={() => setEditNoteFormIsOpen(false)}>Cancel</button>
      </div>
    </form>
  )
}
  
export default EditNoteForm
