import { NavLink } from "react-router-dom"

function Navbar () {
    return(
        <div className="navbarContainer">
            <div className="navbar">
                <NavLink to={`/`}>Home</NavLink>
                <NavLink to={`/about`}>About</NavLink>
                <NavLink to={`/contact`}>Contact</NavLink>
                <img className="logoNavbar" src="/logoMagia.jpg" alt="logo magia" />
                <a href="https://www.instagram.com/magia.bycoky/" target="_blank" rel='noopener noreferrer'>Instagram</a>
                <a href="https://www.facebook.com/magia.bycoky/" target="_blank" rel='noopener noreferrer'>Facebook </a>
                <NavLink to={`/products`}>Products</NavLink>
            </div>
        </div>
    )
}

export default Navbar