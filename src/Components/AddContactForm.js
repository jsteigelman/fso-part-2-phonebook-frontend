const AddContactForm = (props) => {

  return (
    <form onSubmit={props.addContact}>
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
