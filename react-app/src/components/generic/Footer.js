import React from "react";

export default function Footer(params) {
    return(
        <>
            <div className="footer-bg bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <p className="text-light">&copy; Abdus Samad</p>
                        </div>
                        
                        <div className="col-lg-6 text-right col-md-12">
                            <div className="social-icons">
                                <ul>
                                    <a href="https://facebook.com/thisisabdus/" className="mr-4" target="_blank" rel="noreferrer" >
                                        <i className="text-light fab fa-facebook-f"></i>
                                    </a> 

                                    <a href="https://www.linkedin.com/in/samad-sust/" className="mr-4" target="_blank" rel="noreferrer" >
                                        <i className="text-light fab fa-linkedin"></i>
                                    </a>

                                    <a href="https://github.com/Samad-sust/NLP_Web" className="mr-4" target="_blank" rel="noreferrer" >
                                        <i className="text-light fab fa-github"></i>
                                    </a>

                                    <a href="https://www.messenger.com/t/100007493166884/" className="mr-4" target="_blank" rel="noreferrer" >
                                        <i className="text-light fab fa-facebook-messenger"></i>
                                    </a>
                                    <a href="https://wa.me/+8801944676493" className="mr-4" target="_blank" rel="noreferrer" >
                                        <i className="text-light fab fa-whatsapp"></i>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </>
    )
}
