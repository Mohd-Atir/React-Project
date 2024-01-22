import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareXTwitter, faSquareFacebook, faInstagramSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <>
<footer class="bg-dark text-white">
    <div className="container py-5">
        <div className="row">
            <div className="col-md-3 col-lg-2 col-sm-6 mb-4 text-center text-sm-start">
                <h5 className="text-info">SUPPORT</h5>
                <Link to="" className="nav-link">
                Contact us
                </Link>
                <Link to="" className="nav-link">
                Promotions & Sale
                </Link>
                <Link to="" className="nav-link">
                Privacy Policy
                </Link>
                <Link to="" className="nav-link">
                Terms & Conditions
                </Link>
                <Link to="" className="nav-link">
                    Career
                </Link>
            </div>
            <div className="col-md-3 col-lg-2 col-sm-6 mb-4 text-center text-sm-start">
                <h5 className="text-info">ABOUT</h5>
                <Link to="" className="nav-link">
                Company
                </Link>
                <Link to="" className="nav-link">
                Investors
                </Link>
                <Link to="" className="nav-link">
                Careers
                </Link>
                <Link to="" className="nav-link">
                Store Finder
                </Link>
                <Link to="" className="nav-link">
                Sustainability
                </Link>
            </div>
            <div className="col-md-3 col-lg-2 col-sm-6 mb-4 text-center text-sm-start">
                <h5 className="text-info">Connect with Us</h5>
                <Link to="" className="nav-link">
                    Facebook
                </Link>
                <Link to="" className="nav-link">
                    Twitter
                </Link>
                <Link to="" className="nav-link">
                    Twitter
                </Link>
                <Link to="" className="nav-link">
                    LinkedIn
                </Link>
                <Link to="" className="nav-link">
                    Instagram
                </Link>
            </div>
            <div className="col-md-3 col-lg-6 col-sm-6 mb-4 px-5 px-sm-0">
                <div className="text-center text-sm-start">
                    <h5 className="text-info">Subscribe to our newsletter</h5>
                    <p>Monthly digest of whats new and exciting from us.</p>
                </div>
                <div className="d-md-flex gap-2 d-flex">
                    <input className="form-control" type="email" placeholder="Email address"/>
                    <button className="btn btn-primary">Subscribe</button>
                </div>
            </div>
            <div className="container">
                <hr />
            </div>
                <div className="text-center text-sm-start d-sm-flex align-items-center justify-content-sm-between">
                    <span className="small">© 1996-2024, Yourcompany.com, Inc. or its affiliates</span>
                    <div className="d-flex justify-content-center gap-4 fs-2">
                        <Link to="" className="nav-link">
                            <FontAwesomeIcon icon={faSquareFacebook} />  
                        </Link>
                        <Link to="" className="nav-link">
                            <FontAwesomeIcon icon={faInstagramSquare} /> 
                        </Link>
                        <Link to="" className="nav-link">
                            <FontAwesomeIcon icon={faSquareXTwitter} />  
                        </Link>
                        <Link to="" className="nav-link">
                            <FontAwesomeIcon icon={faLinkedin} /> 
                        </Link>
                    </div>
                </div>
        </div>
    </div>
</footer>
    </>
  );
}

export default Footer;
