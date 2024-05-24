import React from 'react'
import './Hero.scss'
import hand_Icon from '../../Assets/hand_icon.png'
import arrow_Icon from '../../Assets/arrow.png'
import hero_image from '../../Assets/hero_image.png'

const Hero = () => {
  return (
    <>
    <div className='Hero'>
        <div className="hero-left">
            <h2>New Arrivals only</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_Icon} alt="" />
                </div>
                <p>collections</p>
                <p>for every</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_Icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
    </>
  )
}

export default Hero