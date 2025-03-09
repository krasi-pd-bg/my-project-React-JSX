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
                        <img src={"/images/2149067224.jpg"} alt={"John"} style={{ width: '200px', height: '200px' }} />
                        <div className="w3-container">
                            <h3>Jane Doe</h3>
                            <p className="w3-opacity">CEO & Founder</p>
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
                        <img src={"https://softuni.bg/users/profile/showavatar/9a3a82bb-2d7b-4d3a-9834-b819e1791872"} alt={"Mike"} style={{ width: '200px', height: '200px' }} />
                        <div className="w3-container">
                            <h3>Mike Ross</h3>
                            <p className="w3-opacity">Art Director</p>
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
                        <img src={"https://softuni.bg/users/profile/showavatar/9a3a82bb-2d7b-4d3a-9834-b819e1791872"} alt={"Jane"} style={{ width: '200px', height: '200px' }} />
                        <div className="w3-container">
                            <h3>John Doe</h3>
                            <p className="w3-opacity">Designer</p>
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