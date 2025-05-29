import React, { useState } from 'react'
import "./header.css"
import NotificationIcon from '../../../assets/icons/Vector.png'
import Profile from  '../../../assets/image/profile picture.png'
import Logo from  '../../../assets/icons/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'


const Header = () => {
    const nav = useNavigate();
    console.log(useNavigate)
    const [name , setName ] = useState ("There is no offer yet now")
    let handleRouting = ()=>{
        nav("/offer ", {state : {title : name}})
    }
    let button = "onClick={handleRouting"
  return (
        
      <div className='header flex'>
        <div className='headerbox1'>
        <img src={Logo} alt="" />
        </div>
        <div className='headerbox2 flex'>
            <div className="headerlinks ">
                <ul className='flex'>
                    <li><NavLink to={"/"} > Home</NavLink>  </li>
                    <li><NavLink to={"/Hotels"}> Hotels</NavLink>  </li>
                    <li><NavLink to={"/Search"}> Search</NavLink>  </li>
                    {/* <li><Link to={"/"}> Home</Link></li> */}
                    {/* <li><Link to={'/Hotels'}> Hotels</Link></li> */}
                    {/* <li><Link to={'/Search'}>Search</Link></li> */}
                    {/* <li><Link to={'/offer'}> Offers</Link></li> */}
                    <button onClick={handleRouting}>offer page</button>
                                        
                </ul>
            </div>
            <div className='inerhader2 flex'>
                <div className="notification flex">
                    <img src={NotificationIcon} alt="" />
                </div>
                <div className="profile flex">
                    <img src={Profile} alt="" />
                </div>
            </div>
        </div>
        
      </div>
    
    
  )
}

export default Header
