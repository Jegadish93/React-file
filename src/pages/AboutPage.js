import React from 'react'
import Navbar from '../compenents/Navbar'
import FooterPage from './FooterPage'


function AboutPage() {
  return (
    <div>
        <Navbar></Navbar>
        <div className='content_bg'>
          <h3> About Page </h3>
          <p> We're expert in this field whole over the world </p>
        </div>

        <div className="about_bg">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-6">
                      <div className="about_img">
                          <h2> 10 Years Of Experience </h2>
                          <img src="images/about_img1.png" alt="about_img1" className="img-fluid img1" />
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="head">
                          <h1> ABOUT US </h1>
                          <h2> We're expert in this field whole over the world </h2>
                          <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                          <div className="form_but">
                              <a href=" " className="hvr-shutter-out-horizontal btn"> Know More  <img src="images/but_img2.png" alt="but_img2" className="img1" /></a>
                              <div className="level_img">
                                  <img src="images/about_img.png" alt="about_img" className="img-fluid img2" />
                                  <img src="images/about_img.png" alt="about_img" className="img-fluid img3" />
                                  <img src="images/about_img.png" alt="about_img" className="img-fluid img2" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="fea_bg fea_bg1">
        <div className="container">
            <div className="head">
                <h1> FEATURES </h1>
                <h2> What we serve our customer </h2>
                <p>  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis </p>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="fea_text hvr-bounce-to-top">
                        <img src="images/fea_img1.png" alt="fea_img1" className="img1" />
                        <h3> Complete Wallet </h3>
                        <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="fea_text hvr-bounce-to-top">
                        <img src="images/fea_img2.png" alt="fea_img1" className="img1" />
                        <h3> Money Transfer </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="fea_text hvr-bounce-to-top">
                        <img src="images/fea_img3.png" alt="fea_img1" className="img1" />
                        <h3> Email Invoicing </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut   </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="fea_text hvr-bounce-to-top">
                        <img src="images/fea_img4.png" alt="fea_img1" className="img1" />
                        <h3> Cash Out </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="fea_text hvr-bounce-to-top">
                        <img src="images/fea_img5.png" alt="fea_img1" className="img1" />
                        <h3> Cash in </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="fea_text hvr-bounce-to-top">
                        <img src="images/fea_img6.png" alt="fea_img1" className="img1" />
                        <h3> Make Payment </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="client_bg client_bg1">
        <div className="container">
            <div className="head text-center">
                <h1> Our Client Testimonial </h1>
                <h2> What People Say </h2>
            </div>
            <div className="client">
                <div className="head">
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. </p>
                </div>
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-7"> 
                        <div className="client_carousel">
                            <div className="client_text">
                                <h3> Daniel Winston </h3>
                                <h4> Web Developer </h4>
                                <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                <img src="images/Star_img.png" alt="client_img" className="img-fluid img1" />
                                <h5> Thank You </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5"> 
                        <ul className="client_carousel">
                            <li> <img src="images/client_img1.png" alt="client_img1" className="img-fluid img1" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>




    <FooterPage></FooterPage>


    </div>
  )
}

export default AboutPage
