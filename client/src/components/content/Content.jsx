import React from 'react';
import SlideShow from "../slide-show/SlideShow"
import Grid from '../grid/Grid';

export default function Content() {



return (
    <>
        <div className="w3-content">

            <div className="w3-panel" >
                <h1><b>HANDY MAN  <h3>building repairs</h3></b></h1>
                <p>we repear what your husband fixed</p>
                <>
                    <SlideShow />
                    <Grid/>
                </>

            </div>



        </div>
    </>
)
}