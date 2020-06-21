import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';

import { updateStepRequest } from 'services/backend/step'
  
const EditStepForm = ({id, category, date, description, setUpdateStepFormIsOpen, steps, setSteps}) => {
  const bearerToken = useSelector(state => state.user.bearerToken)
  const [categoryInput, setCategoryInput] = useState(category)
  const [dateInput, setDateInput] = useState(date.slice(0, -8))
  const [descriptionInput, setDescriptionInput] = useState(description)

  const handleSubmit = async (e) => {
    e.preventDefault()

    let data = {
      category: categoryInput,
      date: dateInput,
      description: descriptionInput
    }
    
    let updatedStep = await updateStepRequest(bearerToken, data, id)
    setSteps(steps.map(step => step.id === updatedStep.id ? updatedStep : step ))

    setUpdateStepFormIsOpen(false)
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Category:</label>
        <select value={categoryInput} onChange={(e) => setCategoryInput(e.target.value)}>
          <option value="interview">interview</option>
          <option value="phone_call">phone call</option>
          <option value="technical_test">technical test</option>
          <option value="follow_up">follow-up</option>
          <option value="application_sent">application sent</option>
        </select>
      </div>
      <div className="form-group">
        <label>Date:</label>
        <input type="datetime-local" className="form-control" value={dateInput} onChange={(e) => setDateInput(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <TextareaAutosize className="form-control" value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)} />
      </div>
     
      <button type="submit" className="btn btn-primary">Update</button>

      <button onClick={() => setUpdateStepFormIsOpen(false)}>Cancel</button>
    </form>
  )
}
  
export default EditStepForm
