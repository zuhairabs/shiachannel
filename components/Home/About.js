import React from "react";

function About() {
  return (
    <>
      {/* <!-- wpo-about-area start --> */}
      <div className="wpo-about-area section-padding">
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-12"
                data-sal="slide-right"
                data-sal-duration="1000"
                data-sal-delay="100"
              >
                <div className="wpo-about-img-3">
                  <img src="/assets/images/about3.png" alt="" />
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 colsm-12"
                data-sal="slide-left"
                data-sal-duration="1000"
                data-sal-delay="100"
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
                          href="https://www.youtube.com/channel/UCb-4Mr8FtL34-v4mM3E8hiA"
                          className="video-btn"
                          rel="noreferrer"
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
          <a id="prayer"></a>
          <div className="timer-section">
            <div className="row">
              <div
                className="col-md-5"
                data-sal="slide-right"
                data-sal-duration="1000"
                data-sal-delay="100"
              >
                <div className="timer-text">
                  <h2>Prayer Times</h2>
                  <p>
                    <i className="ti-location-pin"></i>{" "}
                    <b style={{ color: "#ee76ba" }} id="locPlace">
                      Not able to fetch location
                    </b>
                  </p>
                  <p>
                    <i className="ti-calendar" aria-hidden="true"></i>{" "}
                    <span style={{ color: "#df8f73" }} id="gregDate">
                      Not able to get Date
                    </span>
                  </p>
                  <p>
                    <i className="ti-calendar" aria-hidden="true"></i>{" "}
                    <span
                      style={{ fontFamily: "Janna", color: "#6d64ff" }}
                      id="hijrDate"
                    >
                      Not able to get Date
                    </span>
                  </p>
                  <p id="holidays"></p>
                  <p>
                    <i className="fa fa-volume-up" aria-hidden="true"></i>{" "}
                    <span style={{ color: "#02a0a5" }}>Play Azan</span>
                  </p>
                  <audio src="assets/fonts/azan.mp3" controls>
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
              <div className="col-md-5 col-md-offset-1">
                <div className="timer-num">
                  <ul>
                    <li
                      data-sal="slide-left"
                      data-sal-duration="1000"
                      data-sal-delay="100"
                    >
                      Fajr<span id="fajr">00:00</span>
                    </li>
                    <li
                      data-sal="slide-left"
                      data-sal-duration="1000"
                      data-sal-delay="300"
                    >
                      Sunrize<span id="sunrise">00:00</span>
                    </li>
                    <li
                      data-sal="slide-left"
                      data-sal-duration="1000"
                      data-sal-delay="500"
                    >
                      Dhuhr<span id="dhuhr">00:00</span>
                    </li>
                    <li
                      data-sal="slide-left"
                      data-sal-duration="1000"
                      data-sal-delay="700"
                    >
                      Asr<span id="asr">00:00</span>
                    </li>
                    <li
                      data-sal="slide-left"
                      data-sal-duration="1000"
                      data-sal-delay="900"
                    >
                      Maghrib<span id="maghrib">00:00</span>
                    </li>
                    <li
                      data-sal="slide-left"
                      data-sal-duration="1000"
                      data-sal-delay="1000"
                    >
                      Isha&apos;a<span id="isha">00:00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="timer-shape1">
              <img src="assets/images/prayer-shape/2.png" alt="prayer 2" />
            </div>
            <div className="timer-shape2">
              <img src="assets/images/prayer-shape/1.png" alt="prayer 1" />
            </div>
            <div className="timer-shape3">
              <img src="assets/images/prayer-shape/3.png" alt="prayer 3" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- wpo-about-area end --> */}
    </>
  );
}

export default About;
