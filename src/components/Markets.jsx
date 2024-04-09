const Markets = () => {
    return (
        <>
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
                            <h3>CARSELDINE</h3>
                            <p className='day'>Saturdays</p>
                            <p className='market-name'>At  <a href="https://goodwillprojects.com.au/markets/carseldine/" target='_blank' rel='noreferrer'>Carseldine Markets</a></p>
                            <p className='address'>133 Dorville Road, Carseldine, Brisbane, QLD</p>
                            <p className='time'>6 am to 12 pm</p>
                        </div>
                    </div>
                    <div className='market-card'>
                        <img src="/home-img/chocolate-banado.jpg" alt="" />
                        <div className="market-info">
                            <h3>NUNDAH</h3>
                            <p className='day'>Sundays</p>
                            <p className='market-name'>At  <a href="http://www.nundahmarkets.com.au/" target="_blank" rel="noreferrer">Nundah Markets</a></p>
                            <p className='address'>Station St, Nundah QLD</p>
                            <p className='time'>6 am to 2 pm</p>
                        </div>
                    </div>
                    <div className='market-card'>
                        <img src="/home-img/chocolate-banado.jpg" alt="" />
                        <div className="market-info">
                            <h3>PICKUP</h3>
                            <p className='day'>Pick Up</p>
                            <p className='market-name'>At  <a href="https://www.instagram.com/magia.bycoky/" target='_blank' rel='noreferrer'>Magia Bakery</a></p>
                            <p className='address'>166 Wickham Terrace</p>
                            <p className='time'>6 am to 2 pm</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Markets