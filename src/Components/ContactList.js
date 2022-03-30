const ContactList = ({ persons, searchFilter }) => {

  const personList = persons
  .filter((person) =>
    person.name.toLowerCase().includes(searchFilter.toLowerCase())
  )
  .map((person) => (
    <p key={person.name}>
      {person.name} {person.number}
    </p>
  ))

  return (
    <div>{personList}</div>
  )
}

export default ContactList