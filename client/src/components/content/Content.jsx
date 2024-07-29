import React from 'react';
import SlideShow from "../slideShow/SlideShow"
import SlideShowNextPreviousButtons from '../slideShowNextPreviousButtons/SlideShowNextPreviousButtons';
import GridWhatWeOffer from '../grid/Grid';

export default function Content() {



return (
    <>
        <div className="w3-content" styles={" max-width: '1100px'; margin-top: '80px'; margin-bottom: '80px' "}>

            <div className="w3-panel" >
                <h1><b>MARKETING</b></h1>
                <p>Template by w3.css</p>
                <>
                    <SlideShow />
                    <SlideShowNextPreviousButtons />
                    <GridWhatWeOffer/>
                </>

            </div>



        </div>
    </>
)
}