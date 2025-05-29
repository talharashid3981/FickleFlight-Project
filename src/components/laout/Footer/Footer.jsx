import React from 'react'
import './Footer.css'
import Logo from '../../../assets/icons/Combined-Shape.png'
import Button from '../../common/button/button'
import Facbookimg from '../../../assets/icons/facebook.png'
import Instagramimg from '../../../assets/icons/instagram.png'
import Twitterimg from '../../../assets/icons/twitter.png'

const Footer = () => {
    return (
        <>
            <div className='Footer'>
                <div className='Footerbox1'>
                    <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                    <h1>Get weekly updatees</h1>
                </div>
                <form action="" className='Footerform'>
                    <p>Fill in your details to join the party!</p>
                    <input type="text" placeholder='Your name' />
                    <input type="text" placeholder='Email address' />
                    <Button buttonTittle="BUTTON" />
                </form>
            </div>
            
            <div className='Footerbox2'>
                <div className='footerinfo'>
                    <img src={Logo} alt="" />
                    {/* <h1>FickleFlight</h1> */}
                    <p>Fickle Flight is yoyru one-stop travel portal.We offer hassle
                        free flight and hotel bookings. We also have all your flight in your online shop.
                    </p>
                    <img src={Facbookimg} alt="" className='footersocalimg'/>
                    <img src={Instagramimg} alt="" className='footersocalimg'/>
                    <img src={Twitterimg} alt="" className='footersocalimg'/>
                </div>
                <div className='footerprivacy'>
                    <div className='pricyes'>
                        <h2>Company </h2>
                        <a>About Us</a>
                        <a>News</a>
                        <a>Careers</a>
                        <a>How we work</a>
                    </div>
                    <div className='pricyes'>
                        <h2>Support</h2>
                        <a>Account </a>
                        <a>Support Center</a>
                        <a>FAQ</a>
                        <a>Accessibility</a>
                    </div>
                    <div className='pricyes'>
                        <h2>More</h2>
                        <a>Covid Advisor</a>
                        <a>Airline Fees</a>
                        <a>Tips</a>
                        <a>Qyarantine Rules</a>
                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}

export default Footer
