import { API_URL } from './url'

export const getNextStepsRequest = async (bearerToken) => {
  let response = await fetch(`${API_URL}/next_steps`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': bearerToken
    }
  });
  return response.json()
}

export const createStepRequest = async (bearerToken, data, jobAppliationId) => {
  let response = await fetch(`${API_URL}/job_applications/${jobAppliationId}/steps`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': bearerToken
    },
    body: JSON.stringify({ step: data })
  });
  return response.json()
}

export const updateStepRequest = async (bearerToken, data, id) => {
  let response = await fetch(`${API_URL}/steps/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': bearerToken
    },
    body: JSON.stringify({ step: data })
  });
  return response.json()
}

export const deleteStepRequest = async (bearerToken, id) => {
  fetch(`${API_URL}/steps/${id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': bearerToken
    }
  })
}
