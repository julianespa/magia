import Carousel from "react-bootstrap/Carousel";
import BestSellers from "./BestSellers"

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

            <BestSellers />

            <section className='markets'>
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

            <section className='reviews'>
                <Carousel controls={false}>
                    <Carousel.Item>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </p>
                        <div className="line"></div>
                        <p>
                            I was given a box full of these wonderful treats from a special Latin friend and they were some of the most amazing sweets I have had the joy of devouring - they were so good that the nights I said I would have one ended up being a night where I consumed two..
                            The Dulce De Leche caramel was the best I have had. I will never forget what a good Alfajores tastes like now.
                        </p>
                        <div className="line"></div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </p>
                        <div className="line"></div>
                        <p>
                            the experience starts with the presentation, so careful and beautiful.. the taste is just perfect, every bite is magical! the only problem is controlling yourself not to eat it all at once..
                        </p>
                        <div className="line"></div>
                    </Carousel.Item>
                </Carousel>
            </section>
        </div>
    )
}

export default Home