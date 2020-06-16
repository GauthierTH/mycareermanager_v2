import { API_URL } from './url'

export const getNextStepsRequest = async (bearerToken) => {
  let response = await fetch(`${API_URL}/job_applications/:job_application_id/steps`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': bearerToken
    }
  });
  let responseJson = await response.json()
  return responseJson.username
}
