import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchFilter, setSearchFilter] = useState('')

  const handleNameInput = (event) => setNewName(event.target.value)
  const handleNumberInput = (event) => setNewNumber(event.target.value)
  const handleFilter = (event) => setSearchFilter(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()

    // prevent user from adding duplicate persons to phonebook
    const duplicatePerson = persons.find(
      (personObject) => personObject.name === newName
    )
    if (duplicatePerson !== undefined) {
      alert(`Error: ${newName} has already been added to the phonebook.`)
      setNewNumber('')
      return setNewName('')
    }

    const personObject = {
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const personList = persons.filter((person) => person.name.toLowerCase().includes(searchFilter.toLowerCase())).map((person) => (
    <p key={person.name}>
      {person.name} {person.number}
    </p>
  ))

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Filter Contacts</h2>
        <div>
          Filter your contacts by search term: <input onChange={handleFilter} />
        </div>

      <h2>Add Contact</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameInput} />
          number: <input value={newNumber} onChange={handleNumberInput} />
        </div>

        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Contact List</h2>
      <div>{personList}</div>
    </div>
  )
}

export default App
