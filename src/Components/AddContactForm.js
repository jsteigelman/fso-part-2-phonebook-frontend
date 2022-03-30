const AddContactForm = (props) => {

  const addPerson = (event) => {
    event.preventDefault()

    // prevent user from adding duplicate persons to phonebook
    const duplicatePerson = props.persons.find(
      (personObject) => personObject.name === props.name
    )
    if (duplicatePerson !== undefined) {
      alert(`Error: ${props.name} has already been added to the phonebook.`)
      props.setNumber('')
      return props.setName('')
    }

    const personObject = {
      name: props.name,
      number: props.number,
    }

    props.setPersons(props.persons.concat(personObject))
    props.setName('')
    props.setNumber('')
  }

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={props.name} onChange={props.handleNameInput} />
        number:{' '}
        <input value={props.number} onChange={props.handleNumberInput} />
      </div>

      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}

export default AddContactForm
