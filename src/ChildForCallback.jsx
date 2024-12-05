import React, { memo, useEffect } from 'react'

const ChildForCallback = ({learing}) => {
  console.log("Child components ");
  
  return (
    <div>ChildForCallback</div>
  )
}

export default memo(ChildForCallback)