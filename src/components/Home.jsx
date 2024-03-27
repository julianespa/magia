import Carousel from 'react-bootstrap/Carousel';

function Home() {
    return (
        <div className="home">
            <div className='carouselContainer'>

                <Carousel controls={false}>
                    <Carousel.Item>
                        <div className='carouselTextContainer'>
                            <div>
                                <p> LOVE that you can </p><span>taste</span>
                            </div>
                        </div>
                        <img src='/home-img/alfajor-frambuesa-portada.jpg' alt='' />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img src='/home-img/frutillas-portada.jpg' alt='' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='/home-img/alfajores-chocolate-portada.jpg' alt='' />
                    </Carousel.Item>
                </Carousel>
            </div>

            <section className="bestSellers">
                <div className="titles">
                    <div className="line"></div>
                    <h2>best sellers</h2>
                    <div className="line"></div>
                </div>
                <div className="bs-item-container">
                    <div>
                        <div className="bs-item1">
                            <img src="/home-img/alfajor-salted-caramel-abierto.jpg" alt="" />
                        </div>
                        <p>Salted Caramel</p>
                    </div>
                    <div>
                        <div className="bs-item2">
                            <img src="/home-img/alfajor-frambuesa-abierto.jpg" alt="" />
                        </div>
                        <p>Raspberry</p>
                    </div>
                    <div>
                        <div className="bs-item3">
                            <img src="/home-img/alfajor-chocolate-abierto.jpg" alt="" />
                        </div>
                        <p>Chocolate</p>
                    </div>
                </div>
            </section>

            <section className='markets'>
                <div className="titles">
                    <div className="line"></div>
                    <h2>visit us</h2>
                    <div className="line"></div>
                </div>
                <div className="market-cards-container">
                    <div className='market-card'>
                        <img src="/home-img/chocolate-banado.jpg" alt="" />
                        <div className="market-info">
                            <h3>WESTEND</h3>
                            <p className='day'>Saturdays</p>
                            <p className='market-name'>At  <a href="https://goodwillprojects.com.au/markets/west-end/" target='_blank' rel='noreferrer'>West End Markets</a></p>
                            <p className='address'>Montague Road & Jane Street, West End QLD</p>
                            <p className='time'>6 am to 1 pm</p>
                        </div>
                    </div>
                    <div className='market-card'>
                        <img src="/home-img/chocolate-dip.jpg" alt="" />
                        <div className="market-info">
                            <h3>NUNDAH</h3>
                            <p className='day'>Sundays</p>
                            <p className='market-name'>At  <a href="http://www.nundahmarkets.com.au/" target="_blank" rel="noreferrer">Nundah Markets</a></p>
                            <p className='address'>Station St, Nundah QLD</p>
                            <p className='time'>6 am to 2 pm</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="titles">
                <div className="line"></div>
                <h2>reviews</h2>
                <div className="line"></div>
            </div>
            <section className='reviews'>
                <Carousel controls={false}>
                    <Carousel.Item>
                        <p>
                            I was given a box full of these wonderful treats from a special Latin friend and they were some of the most amazing sweets I have had the joy of devouring - they were so good that the nights I said I would have one ended up being a night where I consumed two..
                            The Dulce De Leche caramel was the best I have had. I will never forget what a good Alfajores tastes like now.
                        </p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <p>
                            have been living in Australia for several months and one of the things I missed most about Argentina were Alfajores and Dulce de Leche (two things that are difficult to find here). But luckily Magia appeared with her incredible alfajores!!
                            Just by seeing the packaging and presentation you realize all the love, dedication and good quality behind each product. Not to mention the flavor of alfajores that transports you directly to Argentina and makes you feel a little more at home.
                        </p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <p>
                            the experience starts with the presentation, so careful and beautiful.. the taste is just perfect, every bite is magical! the only problem is controlling yourself not to eat it all at once..
                        </p>
                    </Carousel.Item>
                </Carousel>
            </section>
        </div>
    )
}

export default Home