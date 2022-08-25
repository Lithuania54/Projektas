import React from 'react'
import './Hero.css'
import Fade from 'react-reveal/Fade';

const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <div className='content'>
                    <h1>
                        <Fade left duration={2000}>
                            <p className='first'>JustinTech - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </Fade>
                    </h1>
            </div>
        </div>
    )
}

export default Hero
