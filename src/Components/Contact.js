import phoneServer from './../server/phonebookServer'
import avatar_icon from './../images/avatar_icon_yellow.png'
import delete_icon from './../images/delete_icon.png'

const Contact = ({ person, setNotification }) => {
  const deletePerson = (id) => {
    const message = 'Do you really want to delete this contact?'
    if (window.confirm(message)) {
      phoneServer.deleteContact(id)
    }
  }

  return (
    <div className='contact'>
      <img src={avatar_icon} alt='person icon' />
      <div className='contact__person'>
        <p id='name'>{person.name}</p>
        <p id='number'>{person.number}</p>
      </div>
      <img onClick={() => deletePerson(person.id)} src={delete_icon} alt="delete icon" />
    </div>
  )
}

export default Contact
