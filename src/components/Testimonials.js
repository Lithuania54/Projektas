import React from 'react'
import photo1 from './images/photo1.jpeg'
import photo2 from './images/photo1.jpeg'
import photo3 from './images/photo1.jpeg'
import './Testimonials.css'
import Fade from 'react-reveal/Fade';

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <Fade bottom duration={2000}>
                    <h2>Paslaugos</h2>
                </Fade>
                <Fade bottom duration={2000}>
                    <span className='line'></span>
                </Fade>
                <div className='content'>
                    <Fade left duration={2000}>
                        <div className='card'>
                            <img src={photo1} alt='user1'/>
                            <p><span>Johnson.M.J.</span></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </Fade>
                    <Fade bottom duration={2000}>
                        <div className='card'>
                            <img src={photo2} alt='user1'/>
                            <p><span>Johnson.M.J.</span></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </Fade>
                    <Fade right duration={2000}>
                        <div className='card'>
                            <img src={photo3} alt='user1'/>
                            <p><span>Johnson.M.J.</span></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Testimonials

