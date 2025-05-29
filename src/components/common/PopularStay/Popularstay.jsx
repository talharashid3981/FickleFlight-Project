import React from 'react'
import './Popularstay.css'
import starimg from '../../../assets/icons/star.png'
import Playbutton from '../../../assets/icons/playButton.png'


const Popularstay = ({tittle,subtittle,price,reviews,bannerimg}) => {
  return (
    <div className='popularstaydiv'>
        <img src={bannerimg}  alt="" className='popularbanerimg'/>
        <div className='detils'>
            <div className='spandiv'>
                <div className='detailsspan1'>{subtittle}</div>
                <div>
                    <img src={Playbutton} alt="" className='playbuttonimg' />
                </div>
            </div>
            <h2>{tittle}</h2>
            <p>{price}</p>
            <div className='rating'>
                <img src={starimg} alt="" />
                <span className='ratingnum'>4.9</span>
                <span className='reviews'>{`( ${reviews} )`}</span>
            </div>
            <button>MORE DETAILS</button>
        </div>
    </div>
  )
}

export default Popularstay
