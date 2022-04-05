import phoneServer from './../server/phonebookServer'

const Contact = ({ person, setNotification }) => {

    const deletePerson = (id) => {
      const message = 'Do you really want to delete this contact?'
      if (window.confirm(message)) {
        phoneServer
          .deleteContact(id)
      }
    }
  
    return (
      <div className="contact" >
        <div className="contact__person">
        <p id="name">{person.name}</p>
        <p id="number">{person.number}</p>
        </div>
        <button onClick={() => deletePerson(person.id)}>Delete</button>
      </div>
    )
  }

  export default Contact