import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import Logo from '../../assets/cineon2.png'
import Search_Icon from '../../assets/search_icon.svg'
import Bell_Icon from '../../assets/bell_icon.svg'
import Profile_image from '../../assets/profile_img.png'
import Dropdown_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {

    const navRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                navRef.current.classList.add('nav-dark')
            }
            else {
                navRef.current.classList.remove('nav-dark')
            }
        })
    }, [])

    return (
        <div ref={navRef} className='navbar'>
            <div className="navbar-left">
                <img src={Logo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={Search_Icon} alt="" className='icons' />
                <p>Children</p>
                <img src={Bell_Icon} alt="" className='icons' />
                <div className="navbar-profile">
                    <img src={Profile_image} alt="" className='profile' />
                    <img src={Dropdown_icon} alt="" />
                    <div className="dropdown">
                        <p onClick={() => { logout() }}>Sign Out of Cineon</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
