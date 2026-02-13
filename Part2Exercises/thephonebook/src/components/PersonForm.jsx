const PersonForm = ({onhandleSubmission , onHandleNameChange , name, onHandleNumberChange , number}) => {
  return (
   <form onSubmit = {onhandleSubmission}>
        <div>
          name: <input  
          onChange = {onHandleNameChange}
          value = {name}/>
        </div>
        <div>
          number: <input
          onChange={onHandleNumberChange}
          value={number}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )

}

export default PersonForm 