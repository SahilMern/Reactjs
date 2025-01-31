
const LiftChildren = ({setUsernRollNumber}) => {
    const handleRollNumber = () =>{
        setUsernRollNumber(50)
    }
  return (
    <div>LiftChildren
        <button onClick={handleRollNumber}>Change Value</button>
    </div>
  )
}

export default LiftChildren

