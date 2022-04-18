import axios from 'axios'
const baseUrl = '/api/persons'

const getAllContacts = () => {
  const request = axios.get(baseUrl)
  return request
    .then((response) => {
      console.log('response from GET all contacts: ', response.data)
      return response.data
    }).catch((error) => console.log(error))
}

const createContact = (person) => {
  const request = axios.post(baseUrl, person)
  return request
  .then((response) => response.data)
  .catch((error) => console.log(error))
}

const updateContact = (id, person) => {
  const url = baseUrl.concat('/').concat(id)
  const request = axios.put(url, person)
  return request
    .then((response) => response)
    .catch((error) => console.log(error))
}

const deleteContact = (id) => {
  const url = baseUrl.concat('/').concat(id)
  const request = axios.delete(url)
  return request
    .then((response) => response.data)
    .catch((error) => console.log(error))
}

export default { getAllContacts, createContact, updateContact, deleteContact }
