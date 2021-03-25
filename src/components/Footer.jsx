import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="row cta">
        <div className="col-12 col-md-8">
          <marquee behavior="slide" direction="up" className="cta cta-text">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
          </marquee>
        </div>
        <div className="col-6 col-md-4">
          <marquee behavior="slide" direction="up" class="cta lets-talk">
            LET'S TALK.→
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default Footer;
