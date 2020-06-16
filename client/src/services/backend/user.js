import { API_URL } from './url'

export const getUsernameRequest = async (bearerToken) => {
  let response = await fetch(`${API_URL}/profile`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': bearerToken
    }
  });
  let responseJson = await response.json()
  return responseJson.username
}
