//import { getImageUrl } from '../../util.js';


export default function SlideShow() {
    return (
        <>
            <div className="catalog">
                <div className="w3-display-container mySlides w3-button">
                    <img src={"/public/images/electric_5570072.png"} style={{width: '50%', height: '50%'}} />
                    <div className="w3-display-right w3-container w3-padding-32">
                        <span className="w3-white w3-padding-small w3-animate-bottom abc">electrical</span>
                    </div>
                </div>
                <div className="w3-display-container mySlides w3-button">
                    <img src={"/public/images/plumbing.png"} style={{width: '50%', height: '50%'}} />
                    <div className="w3-display-right w3-container w3-padding-32">
                        <span className="w3-white w3-padding-small w3-animate-bottom abc">plumbing</span>
                    </div>
                </div>
                <div className="w3-display-container mySlides w3-button">
                    <img src={"/public/images/toolsBW.png"} style={{width: '50%', height: '50%'}} />
                    <div className="w3-display-right w3-container w3-padding-32">
                        <span className="w3-white w3-padding-small w3-animate-bottom abc">dry construction</span>
                    </div>
                </div>
                <div className="w3-display-container mySlides w3-button">
                    <img src={"/public/images/paint.png"} style={{width: '50%', height: '50%'}} />
                    <div className="w3-display-right w3-container w3-padding-32">
                        <span className="w3-white w3-padding-small w3-animate-bottom abc">plasters&paint</span>
                    </div>
                </div>
                <div className="w3-display-container mySlides w3-button">
                    <img src={"/public/images/tiles.png"} style={{width: '50%', height: '50%'}} />
                    <div className="w3-display-right w3-container w3-padding-32">
                        <span className="w3-white w3-padding-small w3-animate-bottom abc">tiles and flooring</span>
                    </div>
                </div>
                <div className="w3-display-container mySlides w3-button">
                    <img src={"/public/images/toolsBW.png"} style={{width: '50%', height: '50%'}} />
                    <div className="w3-display-right w3-container w3-padding-32">
                        <span className="w3-white w3-padding-small w3-animate-bottom abc">complete repairs</span>
                    </div>
                </div>
            </div>
        </>
    )
}