import React from "react";
import ContentData from "../data/content.json";

function Header(props) {
  function handleClick(event) {
    const newValue = event.target.title;

    props.onChange(newValue);
    // console.log(newValue);
  }

  return (
    <div className="header">
      <div className="row logo">
        <div className="col-12 col-md-8">
          <img
            src={
              "https://f.v1.n0.cdn.getcloudapp.com/items/0C3l1E2v1k3b1a2C0C26/abc_logo.svg"
            }
            className="logo"
          />
        </div>
        <div className="col-6 col-md-4">
          <button className="contact-btn">Contact us</button>
        </div>
      </div>

      <div className="row menu">
        <ul className="menu">
          {ContentData.map((contentDetails, index) => {
            return (
              <div className="row menu">
                <ul className="menu">
                  {" "}
                  <li>
                    {" "}
                    <a
                      href="#"
                      onClick={handleClick}
                      id={index}
                      key={index}
                      title={contentDetails.title}
                    >
                      {contentDetails.title}{" "}
                    </a>{" "}
                  </li>{" "}
                </ul>
              </div>
            );
          })}
          {/* <li>
            {" "}
            <a href={"#"}>industries</a>
          </li>
          <li>
            {" "}
            <a href={"#"}>services </a>
          </li>
          <li>
            {" "}
            <a href={"#"}>contact us </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Header;
