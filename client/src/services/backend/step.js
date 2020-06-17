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
