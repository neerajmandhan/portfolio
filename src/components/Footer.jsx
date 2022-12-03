/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Neeraj.</span>
        <div className="links">
          <a href="https://www.facebook.com/neerajmandhan10">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCk1J4QW7kwL5hPhd_mimvew">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://twitter.com/neerajmandhan2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="linkedin.com/in/neeraj-kumar-415624231/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p className="copyright">
          {/* <i className="fas fa-heart"></i> */}
          &copy; Hafiz Javaid
          <a href="https://www.youtube.com/@hafizjavaid">
            <i className="fab fa-youtube"></i>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
