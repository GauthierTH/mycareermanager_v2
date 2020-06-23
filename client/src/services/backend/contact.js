import { API_URL } from './url'

export const createContactRequest = async (bearerToken, data, jobAppliationId) => {
  let response = await fetch(`${API_URL}/job_applications/${jobAppliationId}/contacts`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': bearerToken
    },
    body: JSON.stringify({ contact: data })
  });
  return response.json()
}

export const deleteContactRequest = async (bearerToken, id) => {
  fetch(`${API_URL}/contacts/${id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': bearerToken
    }
  })
}

export const updateContactRequest = async (bearerToken, data, id) => {
  let response = await fetch(`${API_URL}/contacts/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': bearerToken
    },
    body: JSON.stringify({ contact: data })
  });
  return response.json()
}
