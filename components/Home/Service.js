import React from "react";

function Service() {
  return (
    <>
      {/* <!-- service-area-start --> */}
      <div className="service-area section-padding">
        <div className="container">
          <div className="service-wrap">
            <div className="row">
              <div
                className="col-lg-6 col-md-8"
                data-sal="slide-right"
                data-sal-duration="1000"
                data-sal-delay="100"
              >
                <div className="service-item">
                  <div className="service-title">
                    <span>Shia Tafseer</span>
                    <h2>Seek knowledge from the cradle to the grave.</h2>
                    <p>
                      Tafsir (Arabic: تفسير, romanized: tafsīr [taf.&apos;si:r])
                      refers to exegesis, usually of the Quran. An author of a
                      tafsir is a mufassir (Arabic: مُفسّر; plural: Arabic:
                      مفسّرون, romanized: mufassirūn). A Quranic tafsir attempts
                      to provide elucidation, explanation, interpretation,
                      context or commentary for clear understanding and
                      conviction of God&apos;s will.
                    </p>
                  </div>
                  <div className="routine-table">
                    <ul className="routne-head">
                      <li>Language</li>
                      <li>Surah</li>
                      <li>Complete</li>
                    </ul>
                    <ul>
                      <li>Arabic</li>
                      <li>114</li>
                      <li>Yes</li>
                    </ul>
                    <ul>
                      <li>Persian</li>
                      <li>114</li>
                      <li>Yes</li>
                    </ul>
                    <ul>
                      <li>Urdu</li>
                      <li>114</li>
                      <li>Yes</li>
                    </ul>
                    <ul>
                      <li>Hinglish</li>
                      <li>11</li>
                      <li>No</li>
                    </ul>
                  </div>
                  <div className="btns">
                    <a href="tafseer.html" className="theme-btn-s3">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-lg-4"
                data-sal="slide-left"
                data-sal-duration="1000"
                data-sal-delay="100"
              >
                <div className="service-img">
                  <img src="/assets/images/service/img-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="service-wrap-s2">
            <div className="row">
              <div
                className="col-lg-6 col-md-4"
                data-sal="slide-right"
                data-sal-duration="1000"
                data-sal-delay="100"
              >
                <div className="service-img">
                  <img src="/assets/images/service/img-2.png" alt="" />
                </div>
              </div>
              <div
                className="col-lg-6 col-md-8"
                data-sal="slide-left"
                data-sal-duration="1000"
                data-sal-delay="100"
              >
                <div className="service-item">
                  <div className="service-title">
                    <span> Shiachannel TV</span>
                    <h2>Shia Islamic TV Channels</h2>
                    <p>
                      We have curated Shia Islamic TV Channels from different
                      countries and of different categories and language.
                    </p>
                  </div>
                  <div className="wpo-counter-grids">
                    <div className="grid">
                      <div>
                        <h2>
                          <span className="odometer" data-count="7">
                            00
                          </span>
                          +
                        </h2>
                      </div>
                      <p>Language</p>
                    </div>
                    <div className="grid">
                      <div>
                        <h2>
                          <span className="odometer" data-count="5">
                            00
                          </span>
                          +
                        </h2>
                      </div>
                      <p>Category</p>
                    </div>
                    <div className="grid">
                      <div>
                        <h2>
                          <span className="odometer" data-count="150">
                            00
                          </span>
                          +
                        </h2>
                      </div>
                      <p>Channels</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- service-area-start --> */}
    </>
  );
}

export default Service;
