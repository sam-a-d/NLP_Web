import React from "react";

function BlogPagiantion() {
    return(
        <>
            <div className="row">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="pagination-wrap">
                                <ul>
                                    <li><a href="/">Prev</a></li>
                                    <li><a className="active" href="/">1</a></li>
                                    <li><a href="/">2</a></li>
                                    <li><a href="/">3</a></li>
                                    <li><a href="/">Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default BlogPagiantion
