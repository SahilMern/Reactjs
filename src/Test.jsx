import { useEffect } from "react"

const Test = () => {
  useEffect(() => {
    console.log("Components mount");
    
  }, [])
  return (
    <div>Test</div>
  )
}

export default Test