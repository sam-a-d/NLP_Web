import React from "react";
import SentimentAnalysisForm from "./generic/Form";
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
                <SentimentAnalysisForm />
            </div>
        </>
    )
}

export default Home