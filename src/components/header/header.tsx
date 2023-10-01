import React from 'react'
import './Header.css';
import Logo from '../../assets/BR-logo-tr.png';

const Header: React.FC<{}> = () => {
  return (
    <div className="header-header">
        <div className="header-logo-container">
            <a href="http://www.vg.no" className="header-logo-link">
                <img className="header-logo" src={Logo} alt="Logo" />
            </a>
        </div>
    </div>
  )
}

export default Header
