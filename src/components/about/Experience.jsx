import React from "react";

const experienceContent = [
  {
    year: "   2023   - Present",
    position: " BACKEND DEVELOPER",
    compnayName: "SELF LEARN",
    details: `  Working on building robust server-side applications using PHP and Laravel, focusing on developing APIs, database management, and integrating third-party services.`,
  },
  {
    year: "2022 - 2023",
    position: " FRONTEND DEVELOPER",
    compnayName: "SELF LEARN",
    details: `Focused on creating user-friendly, responsive interfaces using HTML, CSS, JavaScript, and React, ensuring seamless interaction and an optimal user experience.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
