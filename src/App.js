import { useState, useEffect } from 'react'
import AddContactForm from './Components/AddContactForm'
import SearchFilter from './Components/SearchFilter'
import ContactList from './Components/ContactList'
import phoneServer from './server/phonebookServer'
const axios = require('axios')

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchFilter, setSearchFilter] = useState('')

  useEffect(() => {
    console.log('effect')

    phoneServer
      .getAllContacts()
      .then((existingContacts) => setPersons(existingContacts))
  }, [])

  const handleNameInput = (event) => setNewName(event.target.value)
  const handleNumberInput = (event) => setNewNumber(event.target.value)
  const handleFilter = (event) => setSearchFilter(event.target.value)

  return (
    <div>
      <h1>Phonebook</h1>

      <h2>Filter Contacts</h2>
      <SearchFilter handleFilter={handleFilter} />

      <h2>Add Contact</h2>
      <AddContactForm
        name={newName}
        number={newNumber}
        handleNameInput={handleNameInput}
        handleNumberInput={handleNumberInput}
        persons={persons}
        setName={setNewName}
        setNumber={setNewNumber}
        setPersons={setPersons}
      />

      <h2>Contact List</h2>
      <ContactList persons={persons} searchFilter={searchFilter} />
      </div>
  )
}

export default App
