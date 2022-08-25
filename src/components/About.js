import React from 'react'
import john from './images/john-doe.png'
import './About.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <Fade left duration={2000}>
                    <img src={john} alt='john' />
                </Fade>
                <div className='col-2'>
                    <Fade right duration={2000}>
                        <h2>Kontaktai</h2>
                        <span className='line'></span>
                        <div className='parent'>
                            <a className='child1' href="tel:+37060956006"><BsFillTelephoneFill /></a>
                            <a className='child2' href="tel:+37060956006">+370 609 56006</a>
                        </div>
                        <div className='parent'>
                            <a className='child1' href="mailto: info@justintech.lt"><SiGmail /></a>
                            <a className='child2' href="mailto: info@justintech.lt">info@justintech.lt</a>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default About
