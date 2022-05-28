import Link from "next/link";

function Contribute() {
  return (
    <>
      {/* <!-- wpo-event-area start --> */}
      <div className="wpo-donation-page-area section-padding">
        <div className="container">
          <div className="row">
            <div
              className="wpo-donate-header"
              data-sal="zoom-in"
              data-sal-duration="800"
              data-sal-delay="100"
            >
              <h2>
                Pay with UPI{" "}
                <img
                  width="50px"
                  height="50px"
                  src="assets/images/pay/upi.png"
                  alt=""
                />
              </h2>
            </div>
            <div
              className="col-lg-8 col-lg-offset-2"
              data-sal="zoom-in"
              data-sal-duration="1000"
              data-sal-delay="300"
            >
              <div id="Donations" className="tab-pane">
                <div className="wpo-donations-amount">
                  <center>
                    <img
                      style={{ marginBottom: "20px" }}
                      width="30%"
                      height="10%"
                      src="/assets/images/pay/upi-all.png"
                      alt=""
                    />
                  </center>
                  <center>
                    <img
                      width="50%"
                      height="10%"
                      src="/assets/images/pay/bharatpe-qr.jpeg"
                      alt=""
                    />
                  </center>
                  <div
                    style={{ marginBottom: "20px", cursor: "pointer" }}
                    className="submit-area"
                  >
                    <a id="uri" className="theme-btn submit-btn">
                      Pay Using App
                    </a>
                    <br />
                    <br />
                    <small>Note: Only work on Mobile Devices</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- support-area start --> */}
      <section className="wpo-news-letter-section">
        <div className="container">
          <div className="wpo-news-letter-wrap">
            <div className="row">
              <div
                className="col col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-2"
                data-sal="zoom-in"
                data-sal-duration="800"
                data-sal-delay="300"
              >
                <div className="wpo-newsletter">
                  <h3>Contact Us</h3>
                  <p>Need help? Having problem with payment!</p>
                  <div className="wpo-newsletter-form">
                    <div>
                      <Link href="/contact">
                        <div className="btns theme-btn">Contact Us</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end container --> */}
      </section>
    </>
  );
}

export default Contribute;
