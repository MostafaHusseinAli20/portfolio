import React from "react";

const Address = () => {
  return (
    <>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:mostafaaa.husseinn@gmail.com">mostafaaa.husseinn@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="Tel: +201128458999">+201128458999</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
