import Contact from './Contact'

const ContactList = ({ persons, searchFilter, setNotification, onPersonWasDeleted }) => {
  console.log('currently, persons is: ', persons)
  console.log('currently, search filter is: ', searchFilter)
  const personList = persons
    .filter((person) =>
      person.name.toLowerCase().includes(searchFilter.toLowerCase())
    )
    .map((person) => <Contact key={person.name} person={person} setNotification={setNotification} onPersonWasDeleted={onPersonWasDeleted} />)


  return <div className="contactListContainer">{personList}</div>
}

export default ContactList
