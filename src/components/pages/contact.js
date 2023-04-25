import React from 'react';
import ContactImg from "../../../static/assets/images/auth/login.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          backgroundImage: `url(${ContactImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="right-column">

        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="fa-envelope" />
            </div>

            <div className="text">
              DMGONZALEZ1997@GMAIL.COM
            </div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>

            <div className="text">
              469-849-2436
            </div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="link" />
            </div>

            <div className="text">
              <a href="https://www.linkedin.com/in/deiongonzalez/">LinkedIn</a>
            </div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="location-dot" />
            </div>

            <div className="text">
              Tampa, Florida
            </div>
          </div>
        </div>



        {/* <div className="email-wrapper">
               <FontAwesomeIcon icon="fa-envelope" />
               placeholder info
            </div>

            <div className="linked-in-wrapper">
               <FontAwesomeIcon icon="fa-solid fa-link" />
               Linked In PlaceHolder
            </div> */}

      </div>
    </div>
  )
}