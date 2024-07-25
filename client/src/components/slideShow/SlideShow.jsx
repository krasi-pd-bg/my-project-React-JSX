//import { getImageUrl } from '../../util.js';


export default function SlideShow() {
    return (
        <>
            <div className="w3-container">
                <div className="w3-display-container mySlides">
                    <img src={"https://softuni.bg/users/profile/showavatar/9a3a82bb-2d7b-4d3a-9834-b819e1791872"} style={{width: '50%', height: '50%'}} />
                    <div className="w3-display-topleft w3-container w3-padding-32">
                        <span className="w3-white w3-padding-large w3-animate-bottom">Lorem ipsum</span>
                    </div>
                </div>
                <div className="w3-display-container mySlides">
                    <img src={"https://softuni.bg/users/profile/showavatar/9a3a82bb-2d7b-4d3a-9834-b819e1791872"} style={{width: '50%', height: '50%'}} />
                    <div className="w3-display-middle w3-container w3-padding-32">
                        <span className="w3-white w3-padding-large w3-animate-bottom">Klorim tipsum</span>
                    </div>
                </div>
                <div className="w3-display-container mySlides">
                    <img src={"https://softuni.bg/users/profile/showavatar/9a3a82bb-2d7b-4d3a-9834-b819e1791872"} style={{width: '50%', height: '50%'}} />
                    <div className="w3-display-topright w3-container w3-padding-32">
                        <span className="w3-white w3-padding-large w3-animate-bottom">Blorum pipsum</span>
                    </div>
                </div>
            </div>
        </>
    )
}