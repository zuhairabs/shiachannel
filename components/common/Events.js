import React from "react";

function Events() {
  return (
    <>
      {/* <!-- wpo-event-area start --> */}
      <div className="wpo-event-area-2 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="wpo-section-title">
                <span>Our Events</span>
                <h2>Our Weekly event</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 col-sm-12 col-12 custom-grid"
              data-sal="zoom-in"
              data-sal-duration="800"
              data-sal-delay="100"
            >
              <div className="wpo-event-item">
                <div className="wpo-event-img">
                  <img src="assets/images/event/img-1.jpg" alt="" />
                  <div className="thumb-text">
                    <span>Thurs</span>
                    <span>Day</span>
                  </div>
                </div>
                <div className="wpo-event-text">
                  <h2>Shabe Juma&apos; Live</h2>
                  <ul>
                    <li>
                      <i className="fa fa-clock-o" aria-hidden="true"></i>8.00 -
                      11.00
                    </li>
                    <li>
                      <i className="fi ti-location-pin"></i>Mumbai City
                    </li>
                  </ul>
                  <p>Shabe Juma&apos; live program from Mumbai, India</p>
                  <i
                    style={{ color: "red" }}
                    className="fa fa-youtube"
                    aria-hidden="true"
                  ></i>
                  &nbsp;
                  <a href="https://www.youtube.com/channel/UCb-4Mr8FtL34-v4mM3E8hiA">
                    Youtube...
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-sm-12 col-12 custom-grid"
              data-sal="zoom-in"
              data-sal-duration="800"
              data-sal-delay="300"
            >
              <div className="wpo-event-item">
                <div className="wpo-event-img">
                  <img src="assets/images/event/img-2.jpg" alt="" />
                  <div className="thumb-text-2">
                    <span>Fri</span>
                    <span>Day</span>
                  </div>
                </div>
                <div className="wpo-event-text">
                  <h2>Dua Nudbah Live</h2>
                  <ul>
                    <li>
                      <i className="fa fa-clock-o" aria-hidden="true"></i>8.00 -
                      5.00
                    </li>
                    <li>
                      <i className="fi ti-location-pin"></i>Mumbai City
                    </li>
                  </ul>
                  <p>Dua Nudbah live program from Mumbai, India</p>
                  <i
                    style={{ color: "red" }}
                    className="fa fa-youtube"
                    aria-hidden="true"
                  ></i>
                  &nbsp;
                  <a href="https://www.youtube.com/channel/UCb-4Mr8FtL34-v4mM3E8hiA">
                    Youtube...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- wpo-event-area end --> */}
    </>
  );
}

export default Events;
