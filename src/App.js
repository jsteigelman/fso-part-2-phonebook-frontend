import { useState, useEffect } from 'react'
import AddContactForm from './Components/AddContactForm'
import SearchFilter from './Components/SearchFilter'
import ContactList from './Components/ContactList'
import phoneServer from './server/phonebookServer'

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

  const addContact = (event) => {
    event.preventDefault()

    // check if contact already exists in phone book
    const duplicatePerson = persons.find(
      (personObject) => personObject.name === newName
    )

    // if contact already exists, ask if user wants to overwrite their phone number
    if (duplicatePerson !== undefined) {
      const message = `${newName} is already in your phonebook. Update the phone number?`
      if (window.confirm(message)) {
        const changedPerson = {...duplicatePerson, number: newNumber}
        return phoneServer
          .updateContact(duplicatePerson.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(persons.map((person) => {
              return person.id === duplicatePerson.id ? duplicatePerson : person
            }))
          })
      }
    }

    // new contact object
    const contactObject = {
      name: newName,
      number: newNumber
    }

    // add contact
    phoneServer
      .createContact(contactObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

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
        addContact={addContact}
      />

      <h2>Contact List</h2>
      <ContactList persons={persons} searchFilter={searchFilter} />
      </div>
  )
}

export default App
