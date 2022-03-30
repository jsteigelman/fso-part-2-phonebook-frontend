const SearchFilter = (props) => {
  return (
    <div>
      Filter your contacts by search term:{' '}
      <input onChange={props.handleFilter} />
    </div>
  )
}
export default SearchFilter
