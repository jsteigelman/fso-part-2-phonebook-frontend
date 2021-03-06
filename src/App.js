import { useState, useEffect } from 'react'
import AddContactForm from './Components/AddContactForm'
import SearchFilter from './Components/SearchFilter'
import ContactList from './Components/ContactList'
import Notification from './Components/Notification'

import phoneServer from './server/phonebookServer'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123' },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchFilter, setSearchFilter] = useState('')
  const [notification, setNotification] = useState(null)

  // contact object
  const contactObject = {
    name: newName,
    number: newNumber,
  }

  useEffect(() => {
    console.log('useEffect is running')

    phoneServer.getAllContacts().then((existingContacts) => {
      // console.log('existing contacts is: ', existingContacts)
      return setPersons(existingContacts)
    })
  }, [])

  const onPersonWasDeleted = (id) => {
    // remove user that was successfully removed
    setPersons(persons.filter((person) => person.id !== id))
  }

  const addContact = (event) => {
    event.preventDefault()

    // check if contact already exists in phone book
    const duplicatePerson = persons.find(
      (personObject) => personObject.name === newName
    )

    // overwrite existing user's phone number
    const changeNumber = (duplicatePerson) => {
      console.log('changeNumber is running!')
      const changedPerson = { ...duplicatePerson, number: newNumber }
      setNewName('')
      setNewNumber('')
      phoneServer
        .updateContact(duplicatePerson.id, changedPerson)
        .then((response) => {
          if (response.status === 200) {
            const returnedPerson = response.data
            setPersons(
              persons.map((person) => {
                return person.id === returnedPerson.id ? returnedPerson : person
              })
            )
            setNotification(`The number for ${returnedPerson.name} was updated`)
            setTimeout(() => {
              setNotification(null)
            }, 3000)
          }
        })
        .catch((error) => {
          if (error.response.status === 404) {
            setNotification(
              `The contact ${duplicatePerson.name} does not exist in the phone book`
            )
            setTimeout(() => {
              setNotification(null)
            }, 3000)
          } else if (error.response.status === 500) {
            const message = 'Oops! The number must be at least 10 characters long.'
            setNotification(message)
            setTimeout(() => {
              setNotification(null)
            }, 3000)
          }

          return console.log('the error is: ', error)
        })
    }

    // if contact already exists, ask if user wants to overwrite their phone number
    if (duplicatePerson !== undefined) {
      const message = `${newName} is already in your phonebook. Update the phone number?`
      if (window.confirm(message)) {
        return changeNumber(duplicatePerson)
      }
    }

    // add contact
    phoneServer.createContact(contactObject)
    .then((returnedPerson) => {
      if (returnedPerson === undefined) {
        setNewName('')
        setNewNumber('')
        return console.log('Person was undefined')
      }
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
      setNotification(`${returnedPerson.name} was added to the phone book`)
      setTimeout(() => {
        setNotification(null)
      }, 3000)
    })
    .catch(error => {
      setNotification('Error: Minimum length for Name is 2. Minimum length for Number is 10.')
      setTimeout(() => {
        setNotification(null)
      }, 3000)
      setNewName('')
      setNewNumber('')
      return console.log('Error: ', error)

    })
  }

  const handleNameInput = (event) => setNewName(event.target.value)
  const handleNumberInput = (event) => setNewNumber(event.target.value)
  const handleFilter = (event) => setSearchFilter(event.target.value)

  return (
    <div className='appContainer'>
      <h1>Phonebook</h1>
      <div className='inputContainer'>
        <Notification message={notification} />
        <h2 id="addContactHeader">Add Contact</h2>
        <AddContactForm
          contactObject={contactObject}
          handleNameInput={handleNameInput}
          handleNumberInput={handleNumberInput}
          addContact={addContact}
        />
      </div>

      <h2 id='contactListHeader'>Contact List</h2>
      <SearchFilter handleFilter={handleFilter} />

      <ContactList
        persons={persons}
        searchFilter={searchFilter}
        setNotification={setNotification}
        onPersonWasDeleted={onPersonWasDeleted}
      />
    </div>
  )
}

export default App
