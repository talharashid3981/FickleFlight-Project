import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'



const Ofer = () => {
  const location = useLocation();
  const title = location.state.title;
  return (
    <div>
      <h1>this is offer   </h1>
     <h1>{title}</h1>
    </div>
  )
}

export default Ofer
