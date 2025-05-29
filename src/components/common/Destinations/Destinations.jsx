import React from 'react'
import './Destination.css'

const Destinations = ({tripname,Price,Tripimg}) => {
  return (
    <div className='Destinationbox'>
        <div className='Destinationbox1'>
            <h3>{tripname}</h3>
            <h1>{Price}</h1>
        </div>
        <img src={Tripimg} alt="" />
    </div>
  )
}

export default Destinations
