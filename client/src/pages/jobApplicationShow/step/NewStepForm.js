import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import { createStepRequest } from 'services/backend/step'
  
const NewStepForm = ({setNewStepFormIsOpen, setSteps, steps}) => {
  const bearerToken = useSelector(state => state.user.bearerToken)
  let { id } = useParams();
  const [category, setCategory] = useState('interview')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    let data = {
      category: category,
      date: date,
      description: description
    }
    
    let step = await createStepRequest(bearerToken, data, id)
    setSteps([...steps, step])

    setNewStepFormIsOpen(false)
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="interview">interview</option>
          <option value="phone_call">phone call</option>
          <option value="technical_test">technical test</option>
          <option value="follow_up">follow-up</option>
          <option value="application_sent">application sent</option>
        </select>
      </div>
      <div className="form-group">
        <label>Date:</label>
        <input type="datetime-local" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
     
      <button type="submit" className="btn btn-primary">Create</button>

      <button onClick={() => setNewStepFormIsOpen(false)}>Cancel</button>
    </form>
  )
}
  
export default NewStepForm
