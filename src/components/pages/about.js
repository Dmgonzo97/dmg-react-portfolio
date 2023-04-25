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
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Sequi nobis facere, expedita eligendi nesciunt saepe eius.
        Perspiciatis reiciendis repudiandae cum, minima,
        nulla ullam vel repellat enim sed, eum harum labore.
      </div>
    </div>
  );
}