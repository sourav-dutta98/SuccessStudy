import React from 'react'

const crd = (props) => {
    console.log("Call Card")
    const {id,title}=props
  return (
    <>
    <div>
        <span>Id is : {id}</span>
    </div>
      <div>
      <span>Title is : {title}</span>
  </div>
  </>
  )
}

export default crd