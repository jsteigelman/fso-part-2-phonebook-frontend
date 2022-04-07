const SearchFilter = (props) => {
  return (
    <div className="search">
      <input onChange={props.handleFilter} placeholder="Search for a contact..."/>
    </div>
  )
}
export default SearchFilter
