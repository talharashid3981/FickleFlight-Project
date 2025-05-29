import React from 'react'
import './Recommended.css'



const Recommended = ({holidayimg}) => {
  return (
    <div className='recommended'>
      <img src={holidayimg} alt="" className='RecommendedImg'/>
      <div className='packegDetails'>
        <div>
                 <h2>Bali</h2>
                <span>4D3N</span>
        </div>
        <div>
            <h1>$899</h1>
        </div>
      </div>
    </div>
  )
}

export default Recommended
