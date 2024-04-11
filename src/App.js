import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>

<div className="header_bg ">
    <div className="container">
        <header>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="?a=home"> <img src="images/logo.png" alt="" className="img-fluid logo hvr-wobble-vertical" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span> <i className="bi bi-list"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link hvr-underline-from-center"> Home </Link>  
                            </li>
                            <li className="nav-item">
                                <Link to="/About" className="nav-link hvr-underline-from-center"> About </Link>
                            </li>  
                            <li className="nav-item">
                                <Link to="/Faq" className="nav-link hvr-underline-from-center"> Faq </Link>
                            </li> 
                            <li className="nav-item">
                                <Link to="/Rules" className="nav-link hvr-underline-from-center"> Rules </Link>
                            </li> 
                            <li className="nav-item">
                                <Link to="/Contact" className="nav-link hvr-underline-from-center"> Contacts </Link>
                            </li> 
                            <li className="nav-item nav_but">
                                <a className="nav-link but hvr-bounce-to-right" href="?a=signup"> <img src="images/user_img.png" alt="user_img" className="img1" /> login </a>
                            </li> 
                        </ul>
                    </div>
            </nav>
    </header>
    
        <div className="banner_bg">
            <h2 className="text" id="text"> We're Expert In This Field Whole Over The World </h2>
            <div className="banner_but">
                <a href=" " className="hvr-bounce-to-left but">  <img src="images/but_img.png" alt="but_img" className="img1" />  Get Started </a>
            </div>
        </div>
    </div>
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

<div className="fea_bg">
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

<div className="client_bg">
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

<div className="footer_bg">
    <div className="container">
        <div className="support">
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-7 col-md-7 col-sm-7">
                    <h5> Do you want to send money anytime 
                        to anywhere? </h5>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5">
                    <div className="form_but">
                        <a href="" className="hvr-shutter-out-horizontal btn"> Get Started <img src="images/but_img2.png" alt="but_img2" className="img1" /></a>
                    </div>
                </div>
            </div>
        </div>
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


  );
}

export default App;
