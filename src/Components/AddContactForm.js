const AddContactForm = (props) => {

  return (
    <form onSubmit={props.addContact}>
      <div>
        name: <input value={props.contactObject.name} onChange={props.handleNameInput} />
        number:{' '}
        <input value={props.contactObject.number} onChange={props.handleNumberInput} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}

export default AddContactForm
