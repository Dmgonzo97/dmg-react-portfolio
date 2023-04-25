import React from 'react';
import profilePicture from "../../../static/assets/images/Headshot.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div className='left-column' style={{
        background: `url(${profilePicture}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      />

      <div className="right-column">
        Hello, my name is Deion, and I am an Full-Stack Developer with a love for teamwork and problem-solving.
        <br />
        During my time in the Marine Corps, I've learned the profound effect of teamwork and fortitude against problems and difficulties.
        <br />
        I have graduated from Bottega University with a certifcation in Full-Stack Development and aspiring to take my step into the industry!
      </div>
    </div>
  );
}