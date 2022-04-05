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

const updateContact = (updatedPerson) => {
    const request = axios.put(baseUrl, updatedPerson)
    return request.then((response) => response.data)
}

export default { getAllContacts, createContact, updateContact }