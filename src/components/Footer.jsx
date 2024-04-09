import { NavLink } from "react-router-dom"

function Footer() {
    let year = new Date().getFullYear()
    return (
        <section className="footer">
            <div className="footer-content">
                <div id="links">
                    <h5>Magia Bakery</h5>
                    <NavLink to={`/`}>Home</NavLink>
                    <NavLink to={`/about`}>About</NavLink>
                    <NavLink to={`/contact`}>Contact</NavLink>
                    <NavLink to={`/products`}>Products</NavLink>
                </div>
                <div id="footer-markets">
                    <h5>Markets</h5>
                    <div className="footer-markets-info">
                        <div className="footer-day">
                            <h6>Saturdays</h6>
                            <div>
                                <p className="market-name">West End Markets</p>
                                <p>Montague Road & Jane Street, West End QLD</p>
                            </div>
                            <div>
                                <p className="market-name">Carseldine Markets</p>
                                <p>133 Dorville Road, Carseldine, Brisbane, QLD</p>
                            </div>
                        </div>
                        <div className="footer-day">
                            <h6>Sundays</h6>
                            <div>
                                <p className="market-name">Nundah Markets</p>
                                <p>Station St, Nundah QLD</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-day">
                    <h5>Pick Up</h5>
                    <p className="market-name">Magia Bakery</p>
                    <p>166 Wickham Terrace</p>
                </div>
                <div className="d-flex flex-column">
                    <h5>Social Media</h5>
                    <a href="https://www.instagram.com/magia.bycoky/" target="_blank" rel='noopener noreferrer'>Instagram</a>
                    <a href="https://www.facebook.com/magia.bycoky/" target="_blank" rel='noopener noreferrer'>Facebook </a>
                </div>
            </div>
            <p>All rights reserved. © {year}</p>
        </section>
    )
}

export default Footer