import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Mostafa" },
  { meta: "last name", metaInfo: "Hussein" },
  { meta: "Age", metaInfo: "20 Years" },
  { meta: "Nationality", metaInfo: "Egypt" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Cairo" },
  { meta: "phone", metaInfo: "+201128458999" },
  { meta: "Email", metaInfo: "mostafaaa.husseinn@gmail.com" },
  { meta: "Github", metaInfo: " MostafaHusseinAli20" },
  { meta: "langages", metaInfo: "Arabic, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
