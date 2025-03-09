import { Link } from 'react-router-dom';


export default function Plans() {
    return (
        <>
            <div className="w3-row-padding" id="plans">
                <div className="w3-center w3-padding-16">
                    <h3>Ask for EMERGENCY repairs, complete solutions or specific service</h3>
                    <p>Choose a master that fits your needs.</p>
                </div>

                <div className="w3-third w3-margin-bottom">
                    <ul className="w3-ul w3-border w3-center w3-hover-shadow">
                        <li className="w3-black w3-large w3-padding-22">ELECTRICAL INSTALLATIONS</li>
                        <li className="w3-padding-10"><b>troubleshooting</b> </li>
                        <li className="w3-padding-10"><b>setting power supply</b> </li>
                        <li className="w3-padding-10"><b>visit during the day</b> $ 20</li>
                        <li className="w3-padding-10"><b>visit up to 24 hours</b> $ 10</li>
                        <li className="w3-padding-10">
                            <h2 className="w3-wide">$ 15</h2>
                            <span className="w3-opacity">per hour</span>
                        </li>
                        <li className="w3-light-grey w3-padding-24">
                            <button className="w3-button w3-green w3-padding-large">
                                <Link to="/contact" className="w3-button w3-block">Contact</Link>
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="w3-third w3-margin-bottom">
                    <ul className="w3-ul w3-border w3-center w3-hover-shadow">
                        <li className="w3-dark-grey w3-large w3-padding-22">PLUMBING INSTALLATIONS</li>
                        <li className="w3-padding-10"><b>leak removal</b> </li>
                        <li className="w3-padding-10"><b>unclogging pipes</b> </li>
                        <li className="w3-padding-10"><b>visit during the day</b> $ 20</li>
                        <li className="w3-padding-10"><b>visit up to 24 hours</b> $ 10</li>
                        <li className="w3-padding-10">
                            <h2 className="w3-wide">$ 25</h2>
                            <span className="w3-opacity">per hour</span>
                        </li>
                        <li className="w3-light-grey w3-padding-24">
                            <button className="w3-button w3-green w3-padding-large">
                                <Link to="/contact" className="w3-button w3-block">Contact</Link>
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="w3-third w3-margin-bottom">
                    <ul className="w3-ul w3-border w3-center w3-hover-shadow">
                        <li className="w3-black w3-large w3-padding-22">COMPLETE REPAIRS and specific SERVICES</li>
                        <li className="w3-padding-10"><b>taking measurements</b> </li>
                        <li className="w3-padding-10"><b>preparing an offer</b> </li>
                        <li className="w3-padding-10"><b>design development</b> </li>
                        <li className="w3-padding-10"><b>performance</b> </li>
                        <li className="w3-padding-10">
                            <h2 className="w3-wide">$ 50</h2>
                            <span className="w3-opacity">individual offer</span>
                        </li>
                        <li className="w3-light-grey w3-padding-24">
                            <button className="w3-button w3-green w3-padding-large">
                                <Link to="/contact" className="w3-button w3-block">Contact</Link>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}