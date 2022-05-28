function Hero() {
  return (
    <>
      {/* <!-- start of hero --> */}
      <section className="hero hero-style-2">
        <div className="hero-slider">
          <div className="slide">
            <div className="container">
              <div className="row">
                <div className="col col-lg-8 col-md-7 slide-caption">
                  <div className="slide-top">
                    <span>Let&apos;s Know Shia Islam</span>
                  </div>
                  <div className="slide-title">
                    <h2>
                      SHIA CHANNEL <br /> Spreading the message <br />
                      of Velayat
                    </h2>
                  </div>
                  <div className="slide-subtitle">
                    <p>
                      We are the best Shia Islamic Organization with variety of
                      content. <br />
                      Let&apos;s know about Shia Islam
                    </p>
                  </div>
                  <div className="btns">
                    <a href="about.html" className="theme-btn">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="right-vec"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="100"
            >
              <img
                className="shrine"
                style={{ zIndex: 1 }}
                src="/assets/images/slider/imam-reza-shrine.png"
                alt="imam reza shrine"
              />
              <div style={{ zIndex: 99 }} className="right-border">
                <div className="right-icon">
                  <i className="fi flaticon-quran"></i>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="right-icon"
                >
                  <img
                    width="60px"
                    height="60px"
                    src="/assets/images/course/icon10.png"
                    className=""
                  />
                </div>
                <div className="right-icon">
                  <i className="fi flaticon-allah-word"></i>
                </div>
                <div className="right-icon">
                  <i className="fi flaticon-muhammad-word"></i>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="right-icon"
                >
                  <img
                    width="60px"
                    height="60px"
                    src="/assets/images/course/icon7.png"
                    className=""
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="right-icon"
                >
                  <img
                    width="60px"
                    height="60px"
                    src="/assets/images/course/icon8.png"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of hero slider --> */}
    </>
  );
}

export default Hero;
