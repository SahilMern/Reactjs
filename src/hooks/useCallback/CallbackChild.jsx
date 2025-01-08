
const CallbackChild = ({data}) => {
  const recreactionOfFn =() => {
    console.log("hello");
    
  }
  return (
    <div>{recreactionOfFn()}
    <p>data{data}</p>
    </div>
  )
}

export default CallbackChild