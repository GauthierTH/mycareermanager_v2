import { API_URL } from './url'

export const getJobApplicationRequest = async (bearerToken) => {
  let response = await fetch(`${API_URL}/job_applications`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': bearerToken
    }
  });
  return response.json()
}
