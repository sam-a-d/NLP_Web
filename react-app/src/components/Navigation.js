import React from "react";
import { Link } from "react-router-dom";



function Navbar() {
    return(
        <div className="main">
            


	<div className="top-header-area bg-light" id="sticker">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 col-sm-12 text-center">
					<div className="main-menu-wrap">

						<div className="site-logo">
							<a href="/">
								<img src="assets/img/logo.png" alt=""/>
							</a>
						</div>

                        <nav className="main-menu">
                            <ul>
                                <li className="text-dark"><Link to="/">Home</Link></li>
                                <li><Link to="/about" >About</Link></li>
                                <li><Link to="/articles" >Articles</Link></li>
                                <li><Link to="/single-articles" >Single Articles</Link></li>
                                
                                <li>
                                    
                                </li>
                            </ul>
                        </nav>
					</div>
				</div>
			</div>
		</div>
	</div>


        </div>
    )
}


export default Navbar