import React from 'react'
import './Tripsugation.css'

const Tripsugation = ({sugationimg,boxbgcolor, tittle}) => {
    let tripSugdoximg ={
        width : "60px",
        height : "60px",
        backgroundColor: `${boxbgcolor}`,
        // backgroundColor: "red",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
  return (
    <div className='tripSugdox'> 
        <div style={tripSugdoximg} >
            <img  src={sugationimg} alt="" />
        </div>
        <p>{tittle}</p>
    </div>
  )
}

export default Tripsugation
