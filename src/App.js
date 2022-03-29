import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    // prevent user from adding duplicate persons to phonebook
    const duplicatePerson = persons.find((personObject) => personObject.name === newName)
    if (duplicatePerson !== undefined) {
       alert(`Error: ${newName} has already been added to the phonebook.`)
       return setNewName('')
      }

    const personObject = {
      name: newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const personList = persons.map((person) => <p key={person.name}>{person.name}</p>)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{personList}</div>
    </div>
  )
}

export default App
