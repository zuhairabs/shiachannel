import Link from "next/link";

function Breadcrumb({ label, title }) {
  return (
    <>
      {/* <!-- .wpo-breadcumb-area start --> */}
      <div className="wpo-breadcumb-area">
        <div className="container">
          <div className="row">
            <div
              className="col-12"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="100"
            >
              <div className="wpo-breadcumb-wrap">
                <h2>{title}</h2>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <span>{label}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- .wpo-breadcumb-area end --> */}
    </>
  );
}

export default Breadcrumb;
