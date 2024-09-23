import React from 'react'

const FAQ = () => {
  return (
<div className='inner-page'>
  {/* rts header area start */}
  <header className="header-area header-two">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* <!-- header top start --> */}
                        <div className="header-top-two">
                            <div className="social-area">
                                <ul>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-behance"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-discord"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="right-area">
                                <ul>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="/Contact">Contact</a></li>
                                    <li><a href="#">En(US)</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- header top end --> */}
                        <div className="header-main-two header--sticky">
                            {/* <a href="index.html">
                                <img src="assets/images/logo/03.svg" alt="logo"/>
                            </a> */}
                            <h4>Polymatric</h4>
                            {/* <!-- nav --> */}
                            <div className="nav-area-main d-xl-block d-lg-block d-md-none d-sm-none d-none">
                                <nav>
                                    <ul>
                                        <li className="has-dropdown mega-menu">
                                            <a className="links-main" href="#">Solutions</a>
                                            <div className="rts-mega-menu">
                                                <div className="wrapper">
                                                    <div className="row g-0">
                                                        <div className="col-lg-3">
                                                          <p>PRODUCTS</p>  
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/UseCasesDetails2">
                                                                        {/* <img src="assets/images/mega-menu/01.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>ChatBot Builder</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/UseCasesDetails">
                                                                        {/* <img src="assets/images/mega-menu/02.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Generative AI Chatbot</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/UseCases2">
                                                                        {/* <img src="assets/images/mega-menu/03.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Live Chat</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/useCase">
                                                                        {/* <img src="assets/images/mega-menu/04.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Dialogflow Integration</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/FAQ">
                                                                        {/* <img src="assets/images/mega-menu/04.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>FAQ ChatBot</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <p>INDUSTRIES</p>
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/05.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>eCommerce</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/06.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Healthcare</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/07.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Education</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/08.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Banking</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                        <li className="has-dropdown mega-menu">
                                            <a className="links-main" href="#">Integrations</a>
                                            <div className="rts-mega-menu">
                                                <div className="wrapper">
                                                    <div className="row g-0">
                                                        <div className="col-lg-3">
                                                          <p>ALL INTEGRATIONS</p>  
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/01.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Omnichannel messaging</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/02.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>eCommerce sites</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/03.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Chatbot Builder</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/04.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Zendesk ChatBot</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/04.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Website and CMS</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/05.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Mobile Apps</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/06.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>CRMs</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/07.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Automation and Analytics</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                        <li className="has-dropdown mega-menu">
                                            <a className="links-main" href="#">Resources</a>
                                            <div className="rts-mega-menu">
                                                <div className="wrapper">
                                                    <div className="row g-0">
                                                        <div className="col-lg-3">
                                                          <p>ALL RESOURCES</p>  
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/01.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Blog</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/02.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Case Studies</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/03.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Comparison</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/04.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>videos</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/04.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Chatbot Templates</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/05.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>ROI Calculator</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/06.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Whitepapers</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Soon">
                                                                        {/* <img src="assets/images/mega-menu/07.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Generative AI Guide</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                        <li><a className="links-main" href="/Soon">Pricing</a></li>
                                    </ul>
                                </nav>
                            </div>
                            {/* <!-- nav end --> */}
                            <div className="button-area">
                                <a href="/Login">Login</a>
                                <a href="/AboutOpenUp" className="rts-btn btn-primary">Get Started</a>
                            </div>
                            <div className="menu-btn d-xl-none d-lg-none d-md-block d-sm-block" id="menu-btn">
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="14" width="20" height="2" fill="#1F1F25"></rect>
                                    <rect y="7" width="20" height="2" fill="#1F1F25"></rect>
                                    <rect width="20" height="2" fill="#1F1F25"></rect>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  {/* rts header area end */}

  {/* rts use case detaila area start */}
  <div className="use-case-details-area rts-section-gapTop">
    <div className="container section-seperatorBottom rts-section-gapBottom">
      <div className="row" style={{marginTop:"50px"}}>
        <div className="col-lg-6">
          <div className="title-left-area">
            <h2 className="title">
            FAQ Chatbot: Build Your Own FAQ Bot
            </h2>
            <p className="disc">
             Automate first-level support using FAQ bots built over a powerful helpcenter solution.
            </p>
            <a href="#" className="rts-btn btn-primary">
              Try For Free <i className="fa-regular fa-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 mt_md--50 mt_sm--50">
          <div className="thumbnail-case-top">
            <img src="assets/images/case/01.png" alt="case" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rts-clients-area rts-section-gap bg-deam">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="title-conter-area">
                            <h2 class="title">
                            Polymatric helps enterprises to scale their customer
                            service with accuracy and speed
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="row g-5 mt--5">
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        {/* <!-- single team area start --> */}
                        <div class="single-team-area">
                              99%
                            <p class="disc">
                            Increase in first response time
                            </p>    
                        </div>
                        {/* <!-- single tream area end --> */}
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        {/* <!-- single team area start --> */}
                        <div class="single-team-area">
                              90%
                            <p class="disc">
                            Reduction in average time
                            </p>    
                        </div>
                        {/* <!-- single tream area end --> */}
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        {/* <!-- single team area start --> */}
                        <div class="single-team-area">
                              50%
                            <p class="disc">
                            Decrease in cost per resolution
                            </p>    
                        </div>
                        {/* <!-- single tream area end --> */}
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        {/* <!-- single team area start --> */}
                        <div class="single-team-area">
                              70%
                            <p class="disc">
                            Increase in customer retention rate
                            </p>    
                        </div>
                        {/* <!-- single tream area end --> */}
                    </div>

                </div>
            </div>
        </div>


  {/* rts use case detaila area end */}
  <div className="use-case-details-area rts-section-gapTop">
    <div className="container section-seperatorBottom rts-section-gapBottom">
      <h3 style={{textAlign:"center"}}>Let your customers help themselves</h3>
      <div className="row">
      <div className="col-lg-6 mt_md--50 mt_sm--50">
          <div className="thumbnail-case-top">
            <img src="assets/images/case/01.png" alt="case" />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="title-left-area">
            <h4 className="title">
            Simple, instantaneous search </h4>
            <p className="disc">
            Instant search for your customers to find what they are looking for, easily and faster
            </p>

          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="use-case-details-area rts-section-gapTop">
    <div className="container section-seperatorBottom rts-section-gapBottom">
      
      <div className="row">

        <div className="col-lg-6">
          <div className="title-left-area">
            <h4 className="title">
            Beautiful, customizable interface
            </h4>
            <p className="disc">
             A beautifully designed, customizable interface to publish your knowledge base on the web
            </p>
          </div>
        </div>
        <div className="col-lg-6 mt_md--50 mt_sm--50">
          <div className="thumbnail-case-top">
            <img src="assets/images/case/01.png" alt="case" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="use-case-details-area rts-section-gapTop">
    <div className="container section-seperatorBottom rts-section-gapBottom">
      
      <div className="row">
      <div className="col-lg-6 mt_md--50 mt_sm--50">
          <div className="thumbnail-case-top">
            <img src="assets/images/case/01.png" alt="case" />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="title-left-area">
            <h4 className="title">
            Intelligent FAQ chatbot
            </h4>
            <p className="disc">
            Connect your Kompose bot, to answer queries and handoff the conversations to humans for complex queries
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

    <h3 style={{textAlign:"center",backgroundColor:"ButtonShadow"}}>Knowledge base software helps in answering up to 80% of customer queries automatically</h3>
  
  {/* rts case details bottom area start */}
  <div className="rts-case-details-bottom-area rts-section-gap plr_sm--15">
    <div className="container-use-case-d">
      <div className="row" style={{marginTop:"-80px"}}>
        <div className="col-lg-6">
          {/* ingle stepa wrapper start */}
          <div className="single-steps-wrapper">
            <p className="disc">
              Rich-text enabled, WYSIWYG editor with a plethora of formatting options
            </p>
          </div>
          {/* ingle stepa wrapper end */}
          {/* ingle stepa wrapper start */}
          <div className="single-steps-wrapper">
            <p className="disc">
              Create and update articles, and save drafts for later revisions
            </p>
          </div>
          {/* ingle stepa wrapper end */}
          {/* ingle stepa wrapper start */}
          <div className="single-steps-wrapper mb--0">
            <p className="disc">
              Deploy on your domain and customize the theme to make it your own
            </p>
          </div>
          {/* ingle stepa wrapper end */}
          <div className="single-steps-wrapper mb--0">
            <p className="disc">
              Let your customer access FAQs on the click of a button in the live chat
            </p>
          </div>
          
        </div>
        <div className="col-lg-6 mt_md--50 mt_sm--50">
          <div className="thumbnail-case-top" style={{marginTop:"50px"}}>
            <img src="assets/images/case/01.png" alt="case" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* rts case details bottom area end */}


    
  <div className="rts-cta-area rts-section-gapBottom  bg_faq">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="cta-main-wrapper bg_image">
            <div className="left">
              <h3 className="title">
              Polymatric is the only support platform you will ever need
              </h3>
              <a href="/AboutOpenUp" className="rts-btn btn-primary">
                Try For Free
              </a>
            </div>
            <div className="right">
              <img src="assets/images/cta/02.png" alt="cta-area" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  


  <div className="rts-footer-area  bg-footer footer-one">
    <div className="container rts-section-gapTop pb--100 pb_sm--30">
      <div className="row">
        <div className="col-lg-12">
          {/* footer main wrapper */}
          <div className="footer-one-main-wrapper">
            {/* single sized  footer  */}
            <div className="footer-singl-wized left-logo">
              <div className="head">
                <h4>Polymatric</h4>
              </div>
              <div className="body">
                <p className="dsic">
                  Polymatric is an artificial intelligence trained to automate
                  important tasks such writing optimized product descriptions.
                </p>
                <div className="social-style-two">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-behance" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-discord" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* single sized  footer end */}
            {/* single sized  footer  */}
            <div className="footer-singl-wized">
              <div className="head">
                <h6 className="title">Company</h6>
              </div>
              <div className="body">
                <ul className="menu">
                  <li>
                    <a href="/AboutOpenUp">About Us</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Affiliate Program</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* single sized  footer end */}
            {/* single sized  footer  */}
            <div className="footer-singl-wized">
              <div className="head">
                <h6 className="title">Use Cases</h6>
              </div>
              <div className="body">
                <ul className="menu">
                  <li>
                    <a href="#">For Teams</a>
                  </li>
                  <li>
                    <a href="#">For Email Marketers</a>
                  </li>
                  <li>
                    <a href="#">For Blog Writers</a>
                  </li>
                  <li>
                    <a href="#">For social managers</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* single sized  footer end */}
            {/* single sized  footer  */}
            <div className="footer-singl-wized input-area">
              <div className="head">
                <h6 className="title">News &amp; Update</h6>
              </div>
              <div className="body">
                <form action="#">
                  <div className="input-area-fill">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      required=""
                    />
                    <button> Subscribe</button>
                  </div>
                </form>
                <p className="disc">
                  Subscribe our newsletter for future updates. don’t worry we
                  don’t spam your email address
                </p>
              </div>
            </div>
            {/* single sized  footer end */}
          </div>
          {/* footer main wrapper end */}
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* footer-copyright-area start */}
          <div className="copy-right-start-two">
            <p>
              <a href="https://reactheme.com/" target="_blank">
                Reactheme©
              </a>{" "}
              2023. All Rights Reserved.
            </p>
            <ul>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          {/* footer-copyright-area end */}
        </div>
      </div>
    </div>
  </div>
  {/* rts footer area end */}
  <div id="anywhere-home" className=""></div>
  {/* right switcher */}
  {/* <div className="modal-sidebar-scroll rts-dark-light">
    <ul>
      <li>
        <a href="dark/index.html">
          <span>Dark</span>
          <i className="rts-go-dark fal fa-moon" />
        </a>
      </li>
      <li>
        <a href="https://themewant.com/products/html/openup-rtl">
          <span>RTL</span>
          <i className="fa-solid fa-paragraph-left" />
        </a>
      </li>
    </ul>
  </div> */}
  {/* right switcher end */}
  {/* header style two */}
  <div id="side-bar" className="side-bar header-two">
    <button className="close-icon-menu">
      <i className="far fa-times" />
    </button>
    {/* mobile menu area start */}
    <div className="mobile-menu-main">
      <nav className="nav-main mainmenu-nav mt--30">
        <ul className="mainmenu metismenu" id="mobile-menu-active">
          <li className="has-droupdown parent">
            <a href="#" className="main">
              Home
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <a className="mobile-menu-link" href="index.html">
                  Content Writing 01
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-two.html">
                  Content Writing 03
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-three.html">
                  Content Writing 03
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-four.html">
                  Ai Chat Bot
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-five.html">
                  Voice Generator
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-five.html">
                  Image Generator
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-five.html">
                  Photo Stock
                </a>
              </li>
            </ul>
          </li>
          <li className="parent">
            <a href="feature.html" className="main">
              Use Cases
            </a>
          </li>
          <li className="has-droupdown parent">
            <a href="#" className="main">
              Pages
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <a className="mobile-menu-link" href="/AboutOpenUp">
                  About Us
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="blog.html">
                  Blog
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="blog-details.html">
                  Blog Details
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="/Contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="use-case.html">
                  Use Case
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="use-case-2.html">
                  Use Case 2
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="case-details.html">
                  Use Case Details
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="case-details-2.html">
                  Use Case Details
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="pricing.html">
                  Pricing
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="pricing-two.html">
                  Pricing Two
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="pricing-three.html">
                  Pricing Three
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="faq.html">
                  FAQ
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="/Login">
                  Log In
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="registration.html">
                  Registration
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="reset.html">
                  Reset
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="404.html">
                  Not Found
                </a>
              </li>
            </ul>
          </li>
          <li className="parent">
            <a href="feature.html" className="main">
              Feature
            </a>
          </li>
          <li className="has-droupdown parent">
            <a href="#" className="main">
              Shop
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <a className="mobile-menu-link" href="shop-details.html">
                  Product Details
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="cart.html">
                  Cart
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="checkout.html">
                  Checkout
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="/Login">
                  My Account
                </a>
              </li>
            </ul>
          </li>
          <li className="parent">
            <a href="/Contact" className="main">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="rts-social-style-one pl--20 mt--100">
        <ul>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-youtube" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/* mobile menu area end */}
  </div>
  {/* header style two End */}
  {/* rts backto top start */}
  <div className="progress-wrap">
    <svg
      className="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        style={{
          transition: "stroke-dashoffset 10ms linear 0s",
          strokeDasharray: "307.919, 307.919",
          strokeDashoffset: "307.919"
        }}
      />
    </svg>
  </div>
  {/* rts backto top end */}
</div>

  )
}

export default FAQ;
