/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom"
import { useState } from "react"


function Navbar() {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav className="navbarContainer">
            <>
                <div className="navbar mobile">
                    <a href="/"><img className="logoNavbar" src="/logoMagia.jpg" alt="logo magia" /></a>
                    <button onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </button>
                </div>
                {showMenu && (
                    <div className={`navbar mobile slideIn`}>
                        <NavLink to={`/`} onClick={toggleMenu}>Home</NavLink>
                        <NavLink to={`/about`} onClick={toggleMenu}>About</NavLink>
                        <NavLink to={`/contact`} onClick={toggleMenu}>Contact</NavLink>
                        <NavLink to={'/findus'} >Find Us</NavLink>
                        <NavLink to={'/faqs'} >FAQ's</NavLink>
                        <NavLink to={`/shop`} onClick={toggleMenu}>Shop</NavLink>
                    </div>
                )}

                <div className={`navbar desktop`}>
                    <NavLink to={`/`}>Home</NavLink>
                    <NavLink to={`/about`}>About</NavLink>
                    <NavLink to={`/contact`}>Contact</NavLink>
                    <img className="logoNavbar" src="/logoMagia.jpg" alt="logo magia" />
                    <NavLink to={'/findus'} >Find Us</NavLink>
                    <NavLink to={'/faqs'} >FAQ's</NavLink>
                    <NavLink to={`/shop`}>Shop</NavLink>
                </div>

            </>
        </nav>
    )
}

export default Navbar