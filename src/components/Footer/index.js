import React from "react";
import "./index.css";
import copy from "../../images/copy.svg";
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <div id="footer-container" className="container">
        <p id="footer">
          <img
            style={{ marginBottom: "3px", marginLeft: "5px" }}
            src={copy}
            alt=".."
          />
          Purple Bot Technologies Pvt. Ltd.
          <span style={{ marginLeft: "5px" }}>{year}</span>. All Rights
          Reserved. /
          <a href="https://neend.app/privacy.html" id="footer">
            Privacy policy
          </a>
        </p>
      </div>
    </>
  );
};
export default Footer;
