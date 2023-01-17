// import logo from './logo.svg';
import './App.css';
import { FaAngleDown, FaAppStoreIos, FaCloudDownloadAlt, FaCopyright, FaFacebookF, FaGlobe, FaLaptopCode, FaLightbulb, FaLinkedin, FaSearchengin, FaTwitter } from "react-icons/fa";
// import {Button, Card} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      {/* START HEADER */}
        <header id='navbar1'>
            {/* START NAVBAR AREA */}
                <div className="techvio-nav">
                    <div className="container">
                        <div className="top-header flex align-center">
                            <a href="index.html">
                                <img src={require('./images/logo.png')} alt=""/>
                            </a>
                            <div className="navigation flex align-center">
                                <nav>
                                    <ul className="main-menu flex">
                                        <li className="active"><a href="index.html">home</a></li>
                                        <li><a href="#top">about us</a></li>
                                        <li>
                                            <a href="#top">services<FaAngleDown className="menu-icon"/></a>
                                            <ul className="sub-menu">
                                                <li><a href="#top">services</a></li>
                                                <li><a href="#top">services details</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#top">projects<FaAngleDown className="menu-icon"/></a>
                                            <ul className="sub-menu">
                                                <li><a href="#top">projects</a></li>
                                                <li><a href="#top">projects details</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#top">pages<FaAngleDown className="menu-icon"/></a>
                                            <ul className="sub-menu">
                                                <li><a href="#top">about us</a></li>
                                                <li><a href="#top">team</a></li>
                                                <li><a href="#top">pricing</a></li>
                                                <li><a href="#top">404 error</a></li>
                                                <li><a href="#top">FAQ</a></li>
                                                <li><a href="#top">coming soon</a></li>
                                                <li><a href="#top">terms & condition</a></li>
                                                <li><a href="#top">privacy policy</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#top">blog<FaAngleDown className="menu-icon"/></a>
                                            <ul className="sub-menu">
                                                <li><a href="#top">blog grid</a></li>
                                                <li><a href="#top">blog right sidebar</a></li>
                                                <li><a href="#top">blog details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#top">contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="theme-btn flex">
                                <a href="#top">
                                    Get it support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            {/* END NAVBAR AREA */}
        </header>
    {/* END HEADER */}



    {/* START MAIN AREA */}
    <main>

      {/* START SLIDER */}
        <div>
          <div className="img-box">
            <img src={require('./images/slider1.jpeg')} alt="" width="100%"/>
            <div className="container">
              <div className="row flex">
                <div className="slider-text-box">
                  <div className="slider-text-heading">
                    <h1>We Provide Many Kind of Technology Solutions</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, magna aliqua. ipsum is simply dummy text of the printing.</p>
                    <div className="default-btn">
                      <a href="#top" className="default-btn1">IT solution</a>
                      <a href="#top" className="default-btn2">contact us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* END SLIDER */}

      {/* START COMPANY INFO */}
      <section className="spacerY">
        <div className="container">
          <div className="info-main flex">
            <div className="info-about">
              <div className="info-text">
                <h6>about our company</h6>
                <h2>Providing your business with a quality IT service is our passion.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, nostrud</p>
                <div className="skills">
                  <div className="skill-item">
                    <h6>iT consulting<em>90%</em></h6>
                    <div className="skill-progress">
                      <div className="progress"></div>
                    </div>
                  </div>
                </div>
                <div className="skills">
                  <div className="skill-item">
                    <h6>virtual workstation<em>75%</em></h6>
                    <div className="skill-progress">
                      <div className="progress" style={{width:"75%"}}></div>
                    </div>
                  </div>
                </div>
                <div className="skills">
                  <div className="skill-item">
                    <h6>managed IT service<em>80%</em></h6>
                    <div className="skill-progress">
                      <div className="progress" style={{width:"80%"}}></div>
                    </div>
                  </div>
                </div>
                <div>
                  <a href="#top" className="default-btn2">learn more</a>
                </div>
              </div>
            </div>
            <div className="info-img">
              <div className="info-img-box">
                <img src={require('./images/info-img.jpeg')} alt=""/>
                <div className="years-design">
                  <h2>27</h2>
                  <h5>years experience</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END COMPANY INFO */}


      {/* START SERVICE SECTION */}
      <section className='spacerY service-section'>
        <div className='container'>
          <div className="heading-part">
            <div className="section-title">
              <h6>what we provide</h6>
              <h2>IT solutions</h2>
            </div>
          </div>
          <div className='service-info flex'>
            <div className='service-info-box'>
              <div className='single-service-info'>
                <div className="service-icon">
                  <FaLaptopCode className='orange-icon'/>
                </div>
                <h3>web development</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                <div className="service-link-btn">
                  <a href="#top" className="service-link">read more</a>
                </div>
              </div>
            </div>
            <div className="service-info-box">
              <div className="single-service-info">
                <div className="service-icon">
                  <FaLightbulb className='orange-icon'/>
                </div>
                <h3>IT solution</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                <div className="service-link-btn">
                  <a href="#top" className="service-link">read more</a>
                </div>
              </div>
            </div>
            <div className="service-info-box">
              <div className="single-service-info">
                <div className="service-icon">
                  <FaGlobe className='orange-icon'/>
                </div>
                <h3>networking service</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                <div className="service-link-btn">
                  <a href="#top" className="service-link">read more</a>
                </div>
              </div>
            </div>
            <div className="service-info-box">
              <div className="single-service-info">
                <div className="service-icon">
                  <FaSearchengin className='orange-icon'/>
                </div>
                <h3>SEO optimization</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                <div className="service-link-btn">
                  <a href="#top" className="service-link">read more</a>
                </div>
              </div>
            </div>
            <div className="service-info-box">
              <div className="single-service-info">
                <div className="service-icon">
                  <FaAppStoreIos className='orange-icon'/>
                </div>
                <h3>app optimization</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                <div className="service-link-btn">
                  <a href="#top" className='service-link'>read more</a>
                </div>
              </div>
            </div>
            <div className="service-info-box">
              <div className="single-service-info">
                <div className="service-icon">
                  <FaCloudDownloadAlt className='orange-icon'/>
                </div>
                <h3>data recovery</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                <div className='service-link-btn'>
                  <a href="#top" className='service-link'>read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SERVICE SECTION */}

      {/* START COUNTER AREA */}
      <section className='counter-area spacerY'>
        <div className='container'>
          <div className='counter-box flex'>
            <div className='counter-item'>
              <div className="counter-content">
                <h2>
                  <span>27</span>
                  <span>+</span>
                </h2>
                <h3>years helping bussiness</h3>
              </div>
            </div>
            <div className="counter-item">
              <div className="counter-content">
                <h2>
                  <span>500</span>
                  <span>+</span>
                </h2>
                <h3>employees</h3>
              </div>
            </div>
            <div className="counter-item">
              <div className="counter-content">
                <h2>
                  <span>30</span>
                  <span>M</span>
                </h2>
                <h3>complete projects</h3>
              </div>
            </div>
            <div className="counter-item">
              <div className="counter-content">
                <h2>
                  <span>90K</span>
                  <span>+</span>
                </h2>
                <h3>5 star rating</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END COUNTER AREA */}

      {/* START TEAM AREA */}
      <section className='team-section' style={{paddingBottom:"100px",paddingTop:"100px"}}>
        <div className='container'>
          <div className='flex'>
            <div className="heading-part" style={{width:"100%"}}>
              <div className="team-section-title">
                <h6>team member</h6>
                <h2>expert team</h2>
              </div>
            </div>
            <div className='team-img-box'>
              <div className='team-single-item'>
                <div className='team-image'>
                  <img src={require('./images/team1.jpeg')} alt=""/>
                  <div className="team-social-icon">
                    <a href="#top">
                      <FaFacebookF className='social-icon'/>
                    </a>
                    <a href="#top">
                      <FaTwitter className='social-icon'/>
                    </a>
                    <a href="#top">
                      <FaLinkedin className='social-icon'/>
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>Ava Farrington</h3>
                  <span>Founder, ceo</span>
                </div>
              </div>
            </div>
            <div className="team-img-box">
              <div className="team-single-item">
                <div className="team-image">
                  <img src={require('./images/team2.jpeg')} alt=""/>
                    <div className="team-social-icon">
                      <a href="#top">
                        <FaFacebookF className='social-icon'/>
                      </a>
                      <a href="#top">
                        <FaTwitter className='social-icon'/>
                      </a>
                      <a href="#top">
                        <FaLinkedin className='social-icon'/>
                      </a>
                    </div>
                </div>
                <div className="team-info">
                  <h3>Kevin Haley</h3>
                  <span>Co-founder, cto</span>
                </div>
              </div>
            </div>
            <div className="team-img-box">
              <div className="team-single-item">
                <div className="team-image">
                  <img src={require('./images/team3.jpeg')} alt=""/>
                    <div className="team-social-icon">
                      <a href="#top">
                        <FaFacebookF className='social-icon'/>
                      </a>
                      <a href="#top">
                        <FaTwitter className='social-icon'/>
                      </a>
                      <a href="#top">
                        <FaLinkedin className='social-icon'/>
                      </a>
                    </div>
                </div>
                  <div className="team-info">
                    <h3>Alishia Fulton</h3>
                    <span>Chief creative officer</span>
                  </div>
              </div>
            </div>
            <div className="team-img-box">
              <div className="team-single-item">
                <div className="team-image">
                  <img src={require('./images/team4.jpeg')} alt=""/>
                    <div className="team-social-icon">
                      <a href="#top">
                        <FaFacebookF className='social-icon'/>
                      </a>
                      <a href="#top">
                        <FaTwitter className='social-icon'/>
                      </a>
                      <a href="#top">
                        <FaLinkedin className='social-icon'/>
                      </a>
                    </div>
                </div>
                <div className="team-info">
                  <h3>Lucas Martinez</h3>
                  <span>Project Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END TEAM AREA */}

      {/* START PARTNER SECTION */}
      <section className='partner-section'>
        <div className='container'>
          <div className="partner-title">
            <h6>Trusted By Over 40,000</h6>
            <h2>Our Customers</h2>
          </div>
          <div className='partner-list flex'>
            <div className="partner-item">
              <a href="#top"><img src={require('./images/partner1.png')} alt=""/></a>
            </div>
            <div className="partner-item">
              <a href="#top"><img src={require('./images/partner2.png')} alt=""/></a>
            </div>
            <div className="partner-item">
              <a href="#top"><img src={require('./images/partner3.png')} alt=""/></a>
            </div>
            <div className="partner-item">
              <a href="#top"><img src={require('./images/partner4.png')} alt=""/></a>
            </div>
            <div className="partner-item">
              <a href="#top"><img src={require('./images/partner5.png')} alt=""/></a>
            </div>
            <div className="partner-item">
              <a href="#top"><img src={require('./images/partner6.png')} alt=""/></a>
            </div>
            <div className="partner-item">
              <a href="#top"><img src={require('./images/partner7.png')} alt=""/></a>
            </div>
            <div className="partner-item">
              <a href="#top"><img src={require('./images/partner8.png')} alt=""/></a>
            </div>
            <div className="partner-item">
              <a href="#top"><img src={require('./images/partner1.png')} alt=""/></a>
            </div>
          </div>
        </div>
      </section>
      {/* END PARTNER SECTION */}

      {/* START COPYRIGHT AREA */}
      <div className="copyright-area">
        <div className="container">
          <div className="flex align-center">
            <div className="copyright-col1">
              <p><FaCopyright/> 2021 Techvio - All Rights Reserved.</p>
            </div>
            <div className="copyright-col2">
              <ul className="flex">
                <li><a href="#top">Terms & Conditions</a></li>
                <li><a href="#top" style={{marginLeft:'15px',marginRight:'0'}}>Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* END COPYRIGHT AREA */}

    </main>
    {/* END MAIN AREA */}
    </>
  );
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar1").style.top = "0";
    document.getElementById('navbar1').style.backgroundColor = "black"
  } 
  else {
    document.getElementById("navbar1").style.top = "0";
    document.getElementById("navbar1").style.backgroundColor = "transparent"
  }
}

export default App;
