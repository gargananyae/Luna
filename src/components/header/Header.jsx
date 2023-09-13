import React from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { CgShoppingBag } from "react-icons/cg";

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
      </div>

      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>
              <Link to="/periodproducts">Period Products</Link>
            </li>
            <li>
              <Link to="/painrelief">Pain Relief</Link>
            </li>
            <li>
              <Link to="/intimatehygiene">Intimate Hygiene</Link>
            </li>
            <li>
              <Link to="/customizablekits">Customisable Kits</Link>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <input type="text" className={css.search} placeholder="Search" />
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
