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
