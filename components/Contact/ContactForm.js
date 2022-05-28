function ContactForm() {
  return (
    <>
      {/* <!-- start wpo-contact-form-map --> */}
      <section className="wpo-contact-form-map section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div
                  className="col col-lg-6 col-md-6 col-sm-12 col-12"
                  data-sal="slide-right"
                  data-sal-duration="1000"
                  data-sal-delay="100"
                >
                  <div className="contact-form">
                    <h2>Get In Touch</h2>
                    <form className="contact-validation-active">
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Name"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                      <div className="clearfix">
                        <input
                          type="email"
                          className="form-control"
                          name="_replyto"
                          placeholder="Email"
                        />
                      </div>
                      <div>
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="Message..."
                        ></textarea>
                      </div>
                      <div className="submit-area">
                        <button type="submit" className="theme-btn submit-btn">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  style={{ marginBottom: "30px" }}
                  className="col col-lg-6 col-md-6 col-sm-12 col-12"
                  data-sal="slide-left"
                  data-sal-duration="1000"
                  data-sal-delay="100"
                >
                  <div className="contact-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8564117534906!2d72.84142721437668!3d19.070049757116234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91b33cc973d%3A0x324f52ec5d958cc6!2sShia%20Channel%20%7C%20Spreading%20the%20Message%20of%20Vilayat!5e0!3m2!1sen!2sin!4v1615367524595!5m2!1sen!2sin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="wpo-contact-info">
                <div className="row">
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    data-sal="zoom-in"
                    data-sal-duration="800"
                    data-sal-delay="300"
                  >
                    <div className="info-item">
                      <h2>Mumbai, India</h2>
                      <div className="info-wrap">
                        <div className="info-icon">
                          <i className="ti-world"></i>
                        </div>
                        <div className="info-text">
                          <span>Our Address</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    data-sal="zoom-in"
                    data-sal-duration="800"
                    data-sal-delay="500"
                  >
                    <div className="info-item">
                      <a href="mailto:shiachannel59@gmail.com">
                        <h2>shiachannel59@gmail.com</h2>
                      </a>
                      <div className="info-wrap">
                        <div className="info-icon-2">
                          <i className="fi flaticon-envelope"></i>
                        </div>
                        <div className="info-text">
                          <span>Our Mail</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    data-sal="zoom-in"
                    data-sal-duration="800"
                    data-sal-delay="100"
                  >
                    <div className="info-item">
                      <a href="tel:+919699992912">
                        <h2>+91 969-999-2912</h2>
                      </a>
                      <div className="info-wrap">
                        <div className="info-icon-3">
                          <i className="ti-headphone-alt"></i>
                        </div>
                        <div className="info-text">
                          <span>Our Phone</span>
                        </div>
                      </div>
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

export default ContactForm;
