import React from 'react'


const Button = ({buttonTittle}) => {
    let buttonStyle = {
        width: "150px",  
        height :"50px",
        background: "rgb(252, 169, 15)",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
    }
  return (
    <div>
      <button style={buttonStyle}>{buttonTittle}</button>
      
    </div>
  )
}

export default Button
