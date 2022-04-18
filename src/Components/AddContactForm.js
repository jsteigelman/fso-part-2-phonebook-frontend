const AddContactForm = (props) => {
  return (
    <div className="addContact">
      <form onSubmit={props.addContact}>
        <div className="addContact__input">
          <input
            autoComplete="off" 
            value={props.contactObject.name}
            onChange={props.handleNameInput}
            placeholder="Enter a name..."
            id="inputContact"
          />
          <input
            autoComplete="off" 
            value={props.contactObject.number}
            onChange={props.handleNumberInput}
            placeholder="Enter a number..."
            id="inputContact"
          />
        </div>
        <div>
          <button type='submit'>Add Contact</button>
        </div>
      </form>
    </div>
  )
}

export default AddContactForm
