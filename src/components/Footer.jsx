import { NavLink } from "react-router-dom"

function Footer() {
    let year = new Date().getFullYear()
    return (
        <section className="footer">
            <div className="footer-content">
                <div id="links">
                    <h3>Magia Bakery</h3>
                    <NavLink to={`/`}>Home</NavLink>
                    <NavLink to={`/about`}>About</NavLink>
                    <NavLink to={`/contact`}>Contact</NavLink>
                    <NavLink to={`/shop`}>Shop</NavLink>
                </div>
                <div id="footer-markets">
                    <h3>Markets</h3>
                    <div className="footer-markets-info">
                        <div className="footer-day">
                            <h4>Saturdays</h4>
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
                            <h4>Sundays</h4>
                            <div>
                                <p className="market-name">Nundah Markets</p>
                                <p>Station St, Nundah QLD</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-day">
                    <h3>Pick Up</h3>
                    <p>Prior Order</p>
                    <p className="market-name">Magia Bakery</p>
                    <p>166 Wickham Terrace</p>
                </div>
                <div className="d-flex flex-column">
                    <h3>Social Media</h3>
                    <a href="https://www.instagram.com/magia.bycoky/" target="_blank" rel='noopener noreferrer'>Instagram</a>
                    <a href="https://www.facebook.com/magia.bycoky/" target="_blank" rel='noopener noreferrer'>Facebook </a>
                    <a href="https://www.tiktok.com/@magia.by.coky?_t=8lOPHruQCno&_r=1" target="_blank" rel='noopener noreferrer'>Tik Tok </a>
                </div>
            </div>
            <p>All rights reserved. © {year}</p>
        </section>
    )
}

export default Footer