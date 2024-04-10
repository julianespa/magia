import { NavLink } from "react-router-dom"

function About() {
    return (
        <>
            <div className="aboutPage">
                <main className="bio">
                    <article>
                        <img src="about/bioimg.jpg" alt="logo magia bakery" />
                        <p>
                            Hey there! I´m Vicky & this is my sweet dream come true: MAGIA.
                        </p>
                        <p>
                            A forever sweet tooth & pastry lover, that has been self teaching herself through all things sweet & wants to share them with you.
                        </p>
                        <p>
                            As an Argentinian, I can´t help trying to put dulce de leche on everything, so here you´ll find traditional Argentinian alfajores (or cookie sandwiches if that´s easier to pronounce), mind blowing cookies & a selection of cakes that are all you need for your celebrations & get togethers.
                        </p>
                        <p>
                            Do you have a special occasion? We are here for you! We´d love to make the most beautiful & original piece for you to share, give as a gift for someone you love (yourself included, of course) & create a sweet memory.
                        </p>
                        <button>
                            <NavLink to={"/contact"}>Get in touch</NavLink>
                        </button>
                    </article>
                </main>

                <article className="goal">
                    <img src="about/alfajor-corazon.jpg" alt="heart chocolate alfajor" />
                    <h2>OUR GOAL</h2>
                    <p>
                        We want to offer you the best sweet experience you can have.
                    </p>
                    <p>
                        Using the freshest & highest quality ingredients available, family recipes, personal inventions & creativity to  reach that goal. Do you wanna try?
                    </p>

                    <button>
                        <NavLink to={"/products"}>Show me more</NavLink>
                    </button>
                </article>


            </div>
        </>
    )
}

export default About