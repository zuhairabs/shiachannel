import React from "react";

export default function Preloader() {
  return (
    <>
      {/* <!-- start preloader --> */}
      <div className="preloader">
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
      </div>
      {/* <!-- end preloader --> */}
    </>
  );
}
