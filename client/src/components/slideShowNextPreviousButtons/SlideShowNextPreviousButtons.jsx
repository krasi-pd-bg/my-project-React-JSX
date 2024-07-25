
export default function SlideShowNextPreviousButtons() {
    
    

    return (
        <>
            <div className="w3-container w3-dark-grey w3-padding w3-xlarge">
                <div className="w3-left" onclick="plusDivs(-1)"><i className="fa fa-arrow-circle-left w3-hover-text-teal"></i></div>
                <div className="w3-right" onclick="plusDivs(1)"><i className="fa fa-arrow-circle-right w3-hover-text-teal"></i></div>

                <div className="w3-center">
                    <span className="w3-tag demodots w3-border w3-transparent w3-hover-white" onclick="currentDiv(1)"></span>
                    <span className="w3-tag demodots w3-border w3-transparent w3-hover-white" onclick="currentDiv(2)"></span>
                    <span className="w3-tag demodots w3-border w3-transparent w3-hover-white" onclick="currentDiv(3)"></span>
                </div>
                
            </div>


        </>
    )
}