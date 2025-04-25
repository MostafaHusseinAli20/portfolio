import React from "react";

const educationContent = [
  {
    year: "2022 - PRESENT",
    degree: "BACHELOR DEGREE",
    institute: "HELWAN UNIVERSITY",
    details: `  Social Work College, studying various fields of social welfare, psychology, and human development to help improve society and assist individuals in need`,
  },
  {
    year: "2023",
    degree: "Full Stack Development Certificate",
    institute: "ITShare",
    details: `Completed a comprehensive training program in web development, including frontend and backend technologies, to build responsive and scalable web applications.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
