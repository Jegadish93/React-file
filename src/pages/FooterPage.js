import React from 'react'

function FooterPage() {
  return (
    <div>
        <div className="footer_bg footer_bg1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="footer_text text-center">
                            <p> The Ultimate Solution for e-Wallet Service Complete solution for mobile money and wallet system. Comes with User, Agent, and Merchant system with eCommerce API and QR code ready. </p>
                        </div>
                    </div>
                    <div className="col-lg-7 ">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                <div className="footer_link">
                                    <h3> Quick Menu </h3>
                                    <a href=" " className="link hvr-underline-from-left"> About </a>
                                    <a href=" " className="link hvr-underline-from-left"> Announencement</a>
                                    <a href=" " className="link hvr-underline-from-left"> Developer </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                <div className="footer_link">
                                    <h3> Get Started </h3>
                                    <a href=" " className="link hvr-underline-from-left"> login as User </a>
                                    <a href=" " className="link hvr-underline-from-left"> login as Agent</a>
                                    <a href=" " className="link hvr-underline-from-left"> login as Merchat</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                <div className="footer_link">
                                    <h3> Useful links </h3>
                                    <a href=" " className="link hvr-underline-from-left"> Privacy Policy</a>
                                    <a href=" " className="link hvr-underline-from-left"> Terms of Services </a>
                                    <a href=" " className="link hvr-underline-from-left"> Security Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="footer_detail hvr-bubble-right">
                            <i className="fa-solid fa-envelope"></i>
                            <h4> company@email.com </h4>
                            <h5>Mail Address  </h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="footer_detail hvr-bubble-right">
                            <i className="fa-solid fa-phone-volume"></i>
                            <h4> +12 1234567890 </h4>
                            <h5> Call Us </h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="footer_detail hvr-bubble-right">
                            <i className="fa-solid fa-location-dot"></i>
                            <h4> 22 bekar streat, London, England </h4>
                            <h5> Address </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer_copy">
            <p> © 2024 <span> CoxBit Wallet. </span>  All rights reserved  </p>

            <a href="#" id="scroll"> <img src="images/up.png" className="top_but"/> </a>
        </div>
    </div>
  )
}

export default FooterPage
