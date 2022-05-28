import React from "react";

function Pillars() {
  return (
    <>
      {/* <!-- pilars-area start --> */}
      <div className="pilars-area">
        <div className="fluid-container">
          <div className="row-grid">
            <div
              className="grid"
              data-sal="zoom-in"
              data-sal-duration="800"
              data-sal-delay="100"
            >
              <div className="pilars-item">
                <div className="pilarts-img">
                  <img src="assets/images/pilars/img-1.png" alt="" />
                </div>
                <div className="pilars-text">
                  <h2>Tafseer</h2>
                </div>
              </div>
            </div>
            <div
              className="grid"
              data-sal="zoom-in"
              data-sal-duration="800"
              data-sal-delay="300"
            >
              <div className="pilars-item">
                <div className="pilarts-img">
                  <img src="assets/images/pilars/img-2.png" alt="" />
                </div>
                <div className="pilars-text">
                  <h2>Dua</h2>
                </div>
              </div>
            </div>
            <div
              className="grid"
              data-sal="zoom-in"
              data-sal-duration="800"
              data-sal-delay="500"
            >
              <div className="pilars-item">
                <div className="pilarts-img">
                  <img src="assets/images/pilars/img-4.png" alt="" />
                </div>
                <div className="pilars-text">
                  <h2>E-Library</h2>
                </div>
              </div>
            </div>
            <div
              className="grid"
              data-sal="zoom-in"
              data-sal-duration="800"
              data-sal-delay="700"
            >
              <div className="pilars-item">
                <div className="pilarts-img">
                  <img src="assets/images/pilars/img-5.png" alt="" />
                </div>
                <div className="pilars-text">
                  <h2>Live TV</h2>
                </div>
              </div>
            </div>
            <div
              className="grid"
              data-sal="zoom-in"
              data-sal-duration="800"
              data-sal-delay="900"
            >
              <div className="pilars-item">
                <div className="pilarts-img">
                  <img src="assets/images/pilars/img-6.png" alt="" />
                </div>
                <div className="pilars-text">
                  <h2>Lyrics</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- pilars-area start --> */}
    </>
  );
}

export default Pillars;
