const Phonebook = ({name , onHandleChange}) => {
  return (
    <div>
        filter shown with <input
        value = {name}
        onChange={onHandleChange}/>
    </div>
  )

}

export default Phonebook