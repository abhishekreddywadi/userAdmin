import React from 'react';



const Footer = () => {

    return (
        <footer className="footer" style={{ marginTop: "-58px" }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md text-center text-md-left align-self-center">
                        <p>All rights reserved by <a href='#' onClick={e => e.preventDefault()}>Maxartkiller</a></p>
                    </div>
                    <div className="col-12 col-md-auto text-center text-md-right">
                        <ul className="nav justify-content-center justify-md-content-end">
                            <li className="nav-item">
                                <a className="nav-link active" href='#' onClick={e => e.preventDefault()}>Terms of use</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#' onClick={e => e.preventDefault()}>Privacy Policy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#' onClick={e => e.preventDefault()}>Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );

}

export default Footer;