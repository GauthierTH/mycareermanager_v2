import { API_URL } from './url'

export const getJobApplicationsRequest = async (bearerToken) => {
  let response = await fetch(`${API_URL}/job_applications`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': bearerToken
    }
  });
  return response.json()
}

export const createJobApplicationRequest = async (bearerToken, data) => {
  let response = await fetch(`${API_URL}/job_applications`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': bearerToken
    },
    body: JSON.stringify({ job_application: data })
  });
  return response.json()
}

export const getJobApplicationRequest = async (bearerToken, id) => {
  let response = await fetch(`${API_URL}/job_applications/${id}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': bearerToken
    }
  });
  return response.json()
}

export const updateJobApplicationRequest = async (bearerToken, data, id) => {
  let response = await fetch(`${API_URL}/job_applications/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': bearerToken
    },
    body: JSON.stringify({ job_application: data })
  });
  return response.json()
}
