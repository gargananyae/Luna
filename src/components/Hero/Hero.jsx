import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
const Hero = () => {

return (
    <div className={css.container}>
        {/*left side*/}
        <div className={css.h_sides}>
            <span className={css.text1}>Period Products</span>
            <div className={css.text2}>
            <span>Innovative Cloth Pads!</span>
            <span>During her menstruating years one woman can use up to 15,000 products most of which end up in landfill, it will then take 500 years for these to break down… into lots of little bits of plastic. 
        </span>
    </div>
</div>

        {/*middle side hero image*/}
        <div className={css.wrapper}>
            <div className={css.blueCircle}></div>
                <img src={HeroImg} alt="" width={600}/>
                <div className={css.cart2}>
                    <RiShoppingBagFill/>
                    <div className={css.signup}>
                        <span>Best Signup Offers</span>
                    <div>
                        <BsArrowRight/>
                    </div>
                </div>   
            </div>    
        </div>

    {/*Right Side*/}
    <div className={css.h_sides}>
        <div className={css.traffic}>
            <span>1.5m</span>
            <span>Monthly Traffic</span>
        </div>
        <div className = {css.customers}>
            <span>100k</span>
            <span>Happy Customers</span>
        </div>
    </div>
    </div>

    
  );
};

export default Hero;