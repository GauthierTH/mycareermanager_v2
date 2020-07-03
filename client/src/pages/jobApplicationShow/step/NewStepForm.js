import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';

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
    <form onSubmit={handleSubmit} className='card'>
      <table>
        <tbody>
          <tr>
            <td className='text-right'><label>Category:</label></td>
            <td>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value='interview'>interview</option>
                <option value='phone_call'>phone call</option>
                <option value='technical_test'>technical test</option>
                <option value='follow_up'>follow-up</option>
                <option value='send_application'>send application</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className='text-right'><label>Date:</label></td>
            <td><input type='datetime-local' value={date} onChange={(e) => setDate(e.target.value)} required /></td>
          </tr>
          <tr>
            <td className='text-right'><label>Description:</label></td>
            <td><TextareaAutosize cols='24' value={description} onChange={(e) => setDescription(e.target.value)} /></td>
          </tr>
        </tbody>
      </table>

      <div className='justify-content-end mt-1'>
        <button type='submit' className='btn-primary'>Create</button>
        <button className='btn-secondary' onClick={() => setNewStepFormIsOpen(false)}>Cancel</button>
      </div>
    </form>
  )
}
  
export default NewStepForm
