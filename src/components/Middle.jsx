import React from "react";

function Middle(props) {
  return (
    <div className="middle">
      <div className="container">
        <div className="row">
          <marquee
            behavior="slide"
            direction="up"
            className="col-xs-6 col-sm-6 col-md-6 headline"
          >
            {props.headline}
          </marquee>

          <marquee
            behavior="slide"
            direction="up"
            className="col-xs-6 col-sm-6 col-md-6 subhead"
          >
            {props.subhead}
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default Middle;
