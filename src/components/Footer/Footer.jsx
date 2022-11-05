import React from "react";

const Footer = (props) => {
  return (
    <>
    <div class="footer-page">
      <div class="footer-wrap">
        <div class="footer-title">
          <span>Products</span>
          <ul>
            <li>
              <a href="#">OCXO models</a>
            </li>
          </ul>
        </div>
        <div class="footer-title">
          <span class="footer-lable">Applications</span>
          <ul>
            <li>
              <a href="#">
                Low Power Oven Control Crystal Oscillators (LP OCXOs)
              </a>
            </li>
            <li>
              <a href="#">High Precision Low Power Clocks.</a>
            </li>
            <li>
              <a href="#">GPS Disciplined Low Power Frequency Reference.</a>
            </li>
          </ul>
        </div>

        <div class="footer-title">
          <span>About</span>
          <ul>
            <li>
              <a href="#">About us.</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
          </ul>
        </div>
        <div class="footer-title">
          <span>Contact</span>
          <ul>
            <li>
              <a href="#">Contact Us.</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
          </ul>
        </div>

        <div class="footer-rights"></div>
      </div>
    </>
  );
};

export default Footer