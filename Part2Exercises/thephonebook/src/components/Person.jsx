const Person = ({name , number , onHandleDelete}) => {
  return (
    <>
     <div> {name} {number}
       <button
       onClick={onHandleDelete}>
          delete
        </button>
    </div>
    </> 
  )
}
export default Person 