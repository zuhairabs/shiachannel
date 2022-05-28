function About() {
  return (
    <>
      {/* <!-- wpo-about-area start --> */}
      <div className="wpo-about-area-3 section-padding">
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-12"
                data-sal="slide-right"
                data-sal-duration="1000"
                data-sal-delay="300"
              >
                <div className="wpo-about-img-3">
                  <img src="assets/images/about3.png" alt="" />
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 colsm-12"
                data-sal="slide-left"
                data-sal-duration="1000"
                data-sal-delay="500"
              >
                <div className="wpo-about-text">
                  <div className="wpo-section-title">
                    <span>About Us</span>
                    <h2>Seeking of knowledge is a duty of every Muslim</h2>
                  </div>
                  <p>
                    The rise of Muslims to the zenith of civilization in a
                    period of four decades was based on lslam&apos;s emphasis on
                    learning. This is obvious when one takes a look at the
                    Qur&apos;an and the traditions of Prophet Muhammad and
                    Ahlulbayt (as) which are filled with references to learning,
                    education, observation.
                  </p>
                  <div className="btns">
                    <a href="about.html" className="theme-btn" tabIndex="0">
                      Discover More
                    </a>
                    <ul>
                      <li className="video-holder">
                        <a
                          href=""
                          className="video-btn"
                          id="latestVideo"
                          data-type="iframe"
                          tabIndex="0"
                        ></a>
                      </li>
                      <li className="video-text">
                        <a
                          rel="noreferrer"
                          href="https://www.youtube.com/channel/UCb-4Mr8FtL34-v4mM3E8hiA"
                          className="video-btn"
                          target="_blank"
                          tabIndex="0"
                        >
                          Watch Our Video
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- wpo-about-area end --> */}
    </>
  );
}

export default About;
