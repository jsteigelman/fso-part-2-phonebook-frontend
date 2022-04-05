import Contact from './Contact'

const ContactList = ({ persons, searchFilter, setNotification }) => {
  const personList = persons
    .filter((person) =>
      person.name.toLowerCase().includes(searchFilter.toLowerCase())
    )
    .map((person) => <Contact key={person.name} person={person} setNotification={setNotification} />)

  return <div>{personList}</div>
}

export default ContactList
