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
      <div>
        <p key={person.name}>{person.name} {person.number}</p>
        <button onClick={() => deletePerson(person.id)}>Delete</button>
      </div>
    )
  }

  export default Contact