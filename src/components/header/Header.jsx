import React from 'react'
import css from './Header.module.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import {CgShoppingBag} from 'react-icons/cg'


const Header = () => {
  return (
    <div className = {css.container}>
        <div className = {css.logo}>
            <img src={Logo} alt=""/>
            
        </div>

        <div className = {css.right}>
           <div className = {css.menu} >
                <ul className={css.menu}>
                    <li>Period Products</li>
                    <li>Pain Relief</li>
                    <li>Intimate Hygiene</li>
                    <li>Customisable Kits</li>
                    <li><Link to='/faq'>FAQs</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </div>
           <input type = "text" className = {css.search} placeholder='Search'/>
           <CgShoppingBag className={css.cart}/>
        </div>
    </div>
  )
}

export default Header