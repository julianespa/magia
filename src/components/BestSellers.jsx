const BestSellers = () => {
    return (
        <section className="bestSellers">
            <div className="bs-item-container">
                <div className="card">
                    <div className="bs-item1">
                        <img src="/home-img/Alfajor Maicena abierto 1.jpg" alt="vanilla melt alfajor" />
                    </div>
                    <p>Vanilla Melt</p>
                </div>
                <div className="card">
                    <div className="bs-item2">
                        <img src="/home-img/alfajor-frambuesa-abierto.jpg" alt="" />
                    </div>
                    <p>Raspberry</p>
                </div>
                <div className="card">
                    <div className="bs-item3">
                        <img src="/home-img/alfajor-chocolate-abierto.jpg" alt="" />
                    </div>
                    <p>Chocolate</p>
                </div>
            </div>
        </section>
    )
}

export default BestSellers