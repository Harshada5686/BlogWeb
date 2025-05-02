import React from "react";
import './Footer.css'
import google from '../../Assets/icons/googleplaylogo.png'
import playstore from '../../Assets/icons/logoappstore.png'
const Footer = () => {
    return (
        <section className="py-5 bg-dark text-white">
            <div className="container">
                <div className="text-center">
                    <p className="display-4 fw-semibold mb-4">Our Locations</p>
                    <p className="lead mb-2">
                        Jl. Bangkringan No 19, RT.11/RW.2, Kota Surabaya, 60124
                    </p>
                    <p className="mb-1">
                        <span className="fw-bold">Customer Service:</span> +6282-2876-6862
                    </p>
                    <p>
                        <span className="fw-bold">We Are Open from</span> Sun - Mon 10 AM - 22 PM
                    </p>
                </div>
                <hr />

                <div className="container py-4">
                    <div className="row align-items-center">


                        <div className="col-12 col-md-6 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start">
                            <i className="fab fa-spotify fa-lg mx-2"></i>
                            <i className="fab fa-instagram fa-lg mx-2"></i>
                            <i className="fab fa-telegram fa-lg mx-2"></i>
                            <i className="fab fa-twitter fa-lg mx-2"></i>
                        </div>


                        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
                            <span className="me-3">Deliver Order</span>
                            <img
                                src={google}
                                alt="google"
                                className="img-fluid me-2"
                                style={{ width: "110px", height: "35px" }}
                            />
                            <img
                                src={playstore}
                                alt="playstore"
                                className="img-fluid"
                                style={{ width: "110px", height: "35px" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 pt-3">

                    <small className="mb-2 mb-md-0 copywight">
                        © 2023 <strong>IMAJI COFFEE</strong>, All rights reserved
                    </small>


                    <div>
                        <a href="/terms" className="text-decoration-none copywight">Terms and Conditions |</a>
                        <a href="/privacy" className="text-decoration-none copywight"> Privacy Policy</a>
                    </div>
                </div>
            </div>









        </section>

    )
}
export default Footer;