/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom"

const Faqs = () => {
    return (
        <main className="products">
            <h1>Our FAQ's Page</h1>
            <p>This section is not ready yet. Contact us for Product details</p>
            <button>
                <NavLink to={"/contact"}>Get in touch</NavLink>
            </button>

            <div className="img"><img src="logoMagia.jpg" alt="logo magia bakery" /></div>
        </main>
    )
}

export default Faqs