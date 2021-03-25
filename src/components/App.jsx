import React, { useState } from "react";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const [title, setTitle] = useState("Industries");

  function updateBg(tittle) {
    setTitle(title);
    //console.log(title);
  }

  return (
    <div
      style={{
        objectFit: "contain",
        backgroundSize: "cover",
        backgroundImage:
          title === "Industries"
            ? 'url("images/slide_one.jpg")'
            : title === "Services"
            ? 'url("images/slide_two.jpg")'
            : title === "About Us"
            ? 'url("images/slide_three.jpg")'
            : 'url("images/slide_one.jpg")'
      }}
    >
      <div className="main">
        {" "}
        <Main onAdd={updateBg} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
