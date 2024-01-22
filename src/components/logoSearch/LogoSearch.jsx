import React from 'react';
import Logo from "../../img/logo.png";
import { IoSearchSharp } from "react-icons/io5";
import "./LogoSearch.css";

const LogoSearch = () => {
  return (
    <div className='logoSearch'>
      <img src={Logo} alt="" />
      <div className="searchbar">
        <input type="text" placeholder='Explore' />
        <div className="s-icon">
            <IoSearchSharp />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch
