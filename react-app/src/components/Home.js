import React from "react";
import SentenceAnalysisForm from "./generic/SentenceAnalysis-form";
// import heroBg from '../static/media/images/hero-bg.jpg'


function Home() {
    return(
        <>
            <div 

            className="homepage-hero"
            
            style={{  
                backgroundColor: '#0035ff1a',
                // backgroundImage: "url(" + heroBg + ")",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',

              }}
            
            >
                <SentenceAnalysisForm />
            </div>
        </>
    )
}

export default Home