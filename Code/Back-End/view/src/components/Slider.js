import React from "react";
import "./Slider.css";

export default function Slider() {
  return (
    <div className="csslider infinity" id="slider1">
      <input type="radio" name="slides" id="slides_1" />
      <input type="radio" name="slides" id="slides_2" />
      <input type="radio" name="slides" id="slides_3" />
      <ul className="banner_slide_bg">
        <li>
          <div className="container-fluid">
            <div className="w3ls_banner_txt">
              <h3 className="b-w3ltxt text-capitalize mt-md-4" />
              <h4 className="b-w3ltxt text-capitalize mt-md-2" />
              <p className="w3ls_pvt-title my-3" />
            </div>
          </div>
        </li>
        <li>
          <div className="container-fluid">
            <div className="w3ls_banner_txt">
              <h3 className="b-w3ltxt text-capitalize mt-md-4" />
              <h4 className="b-w3ltxt text-capitalize mt-md-2" />
              <p className="w3ls_pvt-title my-3" />
            </div>
          </div>
        </li>
        <li>
          <div className="container-fluid">
            <div className="w3ls_banner_txt">
              <h3 className="b-w3ltxt text-capitalize mt-md-4" />
              <h4 className="b-w3ltxt text-capitalize mt-md-2" />
              <p className="w3ls_pvt-title my-3" />
            </div>
          </div>
        </li>
      </ul>
      {/* <div className="navigation">
        <div>
          <label htmlFor="slides_1" />
          <label htmlFor="slides_2" />
          <label htmlFor="slides_3" />
        </div>
      </div> */}
    </div>
  );
}
