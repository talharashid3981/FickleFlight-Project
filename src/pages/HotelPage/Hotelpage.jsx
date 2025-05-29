import React from 'react'
import './Hotelpage.css'
import filterimg from '../../assets/icons/filters.png'
import locationImg from '../../assets/image/Map.png'
import Hotalcard from "../../components/common/hotalcards/Hotalcard";

const Hotelpage = () => {
  return (
    <div className='hotelPagediv'>
        <section className="hotelPagedivSec1">
            <h1>Stays in Los Angeles</h1>
            <div>

            <a href="#" className='recatag'>Recommended</a>
            <a href="#">Price</a>
            <a href="#">Rating</a>
            </div>
        </section>
        <section>
          <div className='filterdiv'>
            <p>200+ RESULTS</p>
            <div className='filderimg'> 
              <a>Filters</a>
              <img src={filterimg} alt="" />
            </div>
          </div>
          <div className='hotalDetails'>
            <div className='hotaldetailsinfo'>
                <Hotalcard />
                <Hotalcard />
                <Hotalcard />
                <Hotalcard />
            </div>
            <div className='hotallocattion'>
                <img src={locationImg} alt="" />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Hotelpage
