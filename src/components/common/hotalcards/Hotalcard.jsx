import React from 'react'
import './Hotalcard.css'
import Hotalcardimg from '../../../assets/image/Results Image.png'
import Playbutton from '../../../assets/icons/playButton.png'
import starimg from '../../../assets/icons/star.png'

const Hotalcard = () => {
    let subtittle = "hello user"
    let tittele = "Holiday Inn Expre Holiday Inn Expre Holiday Inn Expre Holiday Inn Expre Holiday Inn Expre "
    let rating = "4.5"
    let review = "123 reviews"

    return (
        <div className='hotalcarddiv'>
            <div className='hotaclcardimgbox'>
                <img src={Hotalcardimg} alt="" />
            </div>
            <div className='hotalcarddiv2'>
                <div className='spandiv'>
                    <span className='detailsspan1'>{subtittle}</span>
                    <div>
                        <img src={Playbutton} alt="" className='playbuttonimg' />
                    </div>
                </div>
                <div className='hottalinformationbox'>
                    <h1>{tittele}</h1>
                    <div className='ratingbox'>
                        <img src={starimg} alt="" />
                        <span>{rating}</span>
                        <span> {review}  </span>
                    </div>
                </div>
                <div className='pricess'>
                    <h1>$ 286</h1><span>/night</span>
                </div>
                <button>View Details</button>
            </div>
        </div>
    )
}

export default Hotalcard
