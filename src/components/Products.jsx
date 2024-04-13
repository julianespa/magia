import { NavLink } from "react-router-dom"

const Products = () => {
    return (
        <main className="products">
            <h1>Our Shop Page</h1>
            <p>This section is not ready yet. Contact us for Product details</p>
            <button>
                <NavLink to={"/contact"}>Get in touch</NavLink>
            </button>

            <div className="img"><img src="logoMagia.jpg" alt="logo magia bakery" /></div>
        </main>
    )
}

export default Products