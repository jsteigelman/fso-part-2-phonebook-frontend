import Contact from './Contact'

const ContactList = ({ persons, searchFilter }) => {
  const personList = persons
    .filter((person) =>
      person.name.toLowerCase().includes(searchFilter.toLowerCase())
    )
    .map((person) => <Contact key={person.name} person={person} />)

  return <div>{personList}</div>
}

export default ContactList
