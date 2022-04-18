import Contact from './Contact'

const ContactList = ({ persons, searchFilter, setNotification, onPersonWasDeleted }) => {
  // console.log('currently, persons is: ', persons)
  
  const personList = 
      persons.filter(person => {
      const personName = String(person.name)
      return personName.toLowerCase().includes(searchFilter.toLowerCase())
    })
    .map((person) => <Contact key={person.name} person={person} setNotification={setNotification} onPersonWasDeleted={onPersonWasDeleted} />)

  return <div className="contactListContainer">{personList}</div>
}

export default ContactList