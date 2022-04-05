import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAllContacts = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const createContact = (person) => {
  const request = axios.post(baseUrl, person)
  return request.then((response) => response.data)
}

const updateContact = (id, person) => {
  const url = baseUrl.concat('/').concat(id)
  const request = axios.put(url, person)
  return request.then((response) => response)
}

const deleteContact = (id) => {
  const url = baseUrl.concat('/').concat(id)
  const request = axios.delete(url)
  return request.then((response) => response.data)
}

export default { getAllContacts, createContact, updateContact, deleteContact }
