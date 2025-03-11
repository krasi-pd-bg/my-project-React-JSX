import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
            <div className="w3-row-padding" id="about" style={{marginTop: '100px'}}>
                <div className="w3-center w3-padding-32">
                    <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">Who We Are</span>
                </div>

                <div className="w3-third w3-margin-bottom">
                    <div className="w3-card-4">
                        <img src={"/images/el.jpg"} alt={"John"} style={{ width: '240px', height: '200px' }} />
                        <div className="w3-container">
                            <h3>Bobby Brown</h3>
                            <p className="w3-opacity">Еlectrical engineer</p>
                            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                            <p>
                                <button className="w3-button w3-light-grey w3-block">
                                    <Link to="/contact" className="w3-button w3-block">Contact</Link>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w3-third w3-margin-bottom">
                    <div className="w3-card-4">
                        <img src={"/images/ViK.jpeg"} alt={"Mike"} style={{ width: '240px', height: '200px' }} />
                        <div className="w3-container">
                            <h3>Mike Ross</h3>
                            <p className="w3-opacity">Plumbing fixtures</p>
                            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                            <p><button className="w3-button w3-light-grey w3-block">
                                <Link to="/contact" className="w3-button w3-block">Contact</Link>
                            </button>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w3-third w3-margin-bottom">
                    <div className="w3-card-4">
                        <img src={"/images/Home-Repairs.jpg"} alt={"Jane"} style={{ width: '240px', height: '200px' }} />
                        <div className="w3-container">
                            <h3>John Doe</h3>
                            <p className="w3-opacity">Interior designer</p>
                            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                            <p><button className="w3-button w3-light-grey w3-block">
                                <Link to="/contact" className="w3-button w3-block">Contact</Link>
                            </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}