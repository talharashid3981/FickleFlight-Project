import React from 'react'
import './RecentSearch.css'

const RecentSearch = ({Flightimg, Flightfrom,Flightto,Flightdate}) => {
  return (
    <div className='Recearchdiv'>
        <div className='Recearchdiv1'>
                    <h1>{Flightfrom}</h1>
                <div>
                    <img src={Flightimg} alt="" />
                </div>
                    <h1>{Flightto}</h1>
        </div>
        <div className='Recearchdiv2'>
            <h1>
                Depart On: 
                <span>{Flightdate}</span>
            </h1>
        </div>
    </div>
  )
}

export default RecentSearch
