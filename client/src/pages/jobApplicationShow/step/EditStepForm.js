import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';

import { updateStepRequest } from 'services/backend/step'
  
const EditStepForm = ({id, category, date, description, setEditStepFormIsOpen, steps, setSteps}) => {
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

    setEditStepFormIsOpen(false)
  }

  return(
    <form onSubmit={handleSubmit} className='card'>
      <table>
        <tbody>
          <tr>
            <td className='text-right'><label>Category:</label></td>
            <td>
            <select value={categoryInput} onChange={(e) => setCategoryInput(e.target.value)}>
              <option value='interview'>interview</option>
              <option value='phone_call'>phone call</option>
              <option value='technical_test'>technical test</option>
              <option value='follow_up'>follow-up</option>
              <option value='application_sent'>application sent</option>
            </select>
            </td>
          </tr>
          <tr>
            <td className='text-right'><label>Date:</label></td>
            <td><input type='datetime-local' value={dateInput} onChange={(e) => setDateInput(e.target.value)} /></td>
          </tr>
          <tr>
            <td className='text-right'><label>Description:</label></td>
            <td><TextareaAutosize cols='24' value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)} /></td>
          </tr>
        </tbody>
      </table>
     
      <div className='justify-content-end mt-1'>
        <button type='submit' className='btn-primary'>Update</button>
        <button className='btn-secondary' onClick={() => setEditStepFormIsOpen(false)}>Cancel</button>
      </div>
    </form>
  )
}
  
export default EditStepForm
