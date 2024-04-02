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
                    <img className="logoNavbar" src="/logoMagia.jpg" alt="logo magia" />
                    <button onClick={toggleMenu}>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 18L20 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M4 6L20 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
                {showMenu && (
                    <div className={`navbar mobile slideIn`}>
                        <NavLink to={`/`}>Home</NavLink>
                        <NavLink to={`/about`}>About</NavLink>
                        <NavLink to={`/contact`}>Contact</NavLink>
                        <a href="https://www.instagram.com/magia.bycoky/" target="_blank" rel='noopener noreferrer'>Instagram</a>
                        <a href="https://www.facebook.com/magia.bycoky/" target="_blank" rel='noopener noreferrer'>Facebook </a>
                        <NavLink to={`/products`}>Products</NavLink>
                    </div>
                )}

                <div className={`navbar desktop`}>
                    <NavLink to={`/`}>Home</NavLink>
                    <NavLink to={`/about`}>About</NavLink>
                    <NavLink to={`/contact`}>Contact</NavLink>
                    <img className="logoNavbar" src="/logoMagia.jpg" alt="logo magia" />
                    <a href="https://www.instagram.com/magia.bycoky/" target="_blank" rel='noopener noreferrer'>Instagram</a>
                    <a href="https://www.facebook.com/magia.bycoky/" target="_blank" rel='noopener noreferrer'>Facebook </a>
                    <NavLink to={`/products`}>Products</NavLink>
                </div>

            </>
        </nav>
    )
}

export default Navbar