import React from 'react';

import constructionimg from '../../assets/img/under-construction.png';


class Servererror extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row login-row-height" style={{ minHeight: "calc(100vh - 200px)" }}>
                <div className="col-12 col-md-11 col-lg-10 align-self-center mx-auto">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-5 text-center align-self-center">
                        <img src={constructionimg} alt className="vm mw-100" />
                        </div>
                        <div className="col-12 col-md-8 col-lg-7 align-self-center pl-md-5">
                        <h1>This page is under construction</h1>
                        <p className="text-template-primary-light">
                            Information or page you are looking for is might be under construction or its being updated and under maintanance. Try after sometime or check connection properly.<br /><br />
                            If your are looking for somthing else try our search to find our most related information you are looking for:
                        </p>
                        <div className="row">
                            <div className="col-10 col-md-8 col-ld-7">
                            <div className="input-group my-2">
                                <input type="search" className="form-control" placeholder="Search" />
                                <div className="input-group-append">
                                <button className="btn btn-primary" type="button">Search</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

            </div>
        );
    }
}

export default Servererror;