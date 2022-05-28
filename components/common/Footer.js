import React from "react";

export default function Footer() {
  return (
    <>
      {/* <!-- footer-area start --> */}
      <div className="wpo-ne-footer">
        {/* <!-- start wpo-site-footer --> */}
        <footer className="wpo-site-footer">
          <div className="wpo-upper-footer">
            <div className="container">
              <div className="row">
                <div
                  className="col col-lg-3 col-md-3 col-sm-6"
                  data-sal="slide-right"
                  data-sal-duration="1000"
                  data-sal-delay="100"
                >
                  <div className="widget about-widget">
                    <div className="logo widget-title">
                      <img src="/assets/images/logo.png" alt="blog" />
                    </div>
                    <p>Spreading the Message of Velayat</p>
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/shiachannel110/">
                          <i className="ti-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/shia_channel?lang=en">
                          <i className="ti-twitter-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/syed_shoeb_raza/">
                          <i className="ti-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/channel/UCb-4Mr8FtL34-v4mM3E8hiA">
                          <i className="ti-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col col-lg-3 col-md-3 col-sm-6"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                >
                  <div className="widget link-widget">
                    <div className="widget-title">
                      <h3>Service</h3>
                    </div>
                    <ul>
                      <li>
                        <a href="#">Tafseer</a>
                      </li>
                      <li>
                        <a href="#">Dua/Ziyarat</a>
                      </li>
                      <li>
                        <a href="#">E-Library</a>
                      </li>
                      <li>
                        <a href="#">Live TV</a>
                      </li>
                      <li>
                        <a href="#">Lyrics</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col col-lg-2 col-md-3 col-sm-6"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-delay="500"
                >
                  <div className="widget link-widget">
                    <div className="widget-title">
                      <h3>Useful Links</h3>
                    </div>
                    <ul>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Tafseer</a>
                      </li>
                      <li>
                        <a href="#">Live TV</a>
                      </li>
                      <li>
                        <a href="#">Live Ziyarat</a>
                      </li>
                      <li>
                        <a href="index.html#prayer">Prayer Times</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col col-lg-3 col-lg-offset-1 col-md-3 col-sm-6"
                  data-sal="slide-left"
                  data-sal-duration="1000"
                  data-sal-delay="700"
                >
                  <div className="widget market-widget wpo-service-link-widget">
                    <div className="widget-title">
                      <h3>Contact </h3>
                    </div>
                    <p>Need to know More? Contact Us</p>
                    <div className="contact-ft">
                      <ul>
                        <li>
                          <i className="fi ti-location-pin"></i>Mumbai City,
                          India
                        </li>
                        <li>
                          <i className="fi flaticon-call"></i>
                          <a style={{ color: "#444444" }} href="+919699992912">
                            +91 969 999 2912
                          </a>
                        </li>
                        <li>
                          <i className="fi flaticon-envelope"></i>
                          <a
                            style={{ color: "#444444" }}
                            href="mailto:shiachannel59@gmail.com"
                          >
                            shiachannel59@gmail.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end container --> */}
          </div>
          <div
            className="wpo-lower-footer"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="900"
          >
            <div className="container">
              <div className="row">
                <div className="col col-xs-12">
                  <p className="copyright">
                    &copy; 2013 Shiachannel. All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- end wpo-site-footer --> */}
      </div>
    </>
  );
}
