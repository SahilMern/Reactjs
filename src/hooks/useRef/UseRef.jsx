//Implementing Forward Ref with file forward.jsx

import { useRef } from "react"


const UseRef = () => {
    const inputRef = useRef()
  return (
    <div>UseRef

<input type="text" ref={inputRef} />

    </div>
  )
}

export default UseRef