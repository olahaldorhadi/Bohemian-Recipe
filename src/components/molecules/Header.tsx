import React from 'react'
import Logo from '../../assets/BR-logo-tr.png'

const Header: React.FC = () => {
    return (
        <div className="w-full bg-black flex items-center justify-center py-2 md:py-2">
            <div className="h-16 md:h-28">
                <a href="http://www.vg.no" className="header-logo-link">
                    <img className="h-full" src={Logo} alt="Logo" />
                </a>
            </div>
        </div>
    )
}

export default Header
