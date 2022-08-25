import React from 'react'
import { Link } from 'react-scroll'

import './Footer.css'

const Footer = () => {

    return (
            <div className='footer'>
                    <div className='container'>
                            <ul>
                                <li className='nav-item'>
                                    <Link to="hero" smooth={true} offset={-100} duration={500} >Pagrindinis</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="testimonials" smooth={true} offset={-100} duration={500} >Paslaugos</Link>
                                </li>
                                <li className='nav-item'>
                                    <a href='#about'>Kontaktai</a>
                                </li>
                            </ul>
                            <div className='bottom'>
                                <span className='line'></span>
                                <Link to="hero" smooth={true} offset={-100} duration={500} >JustinTech</Link>
                            </div>
                    </div>
            </div>
    )
}

export default Footer





