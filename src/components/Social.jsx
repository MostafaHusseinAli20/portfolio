import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/mostafa.drsh.56232/",
  },
  { iconName: "fa fa-instagram", link: "https://www.instagram.com/mo_drsh/#" },
  {
    iconName: "fa fa-github",
    link: "https://github.com/MostafaHusseinAli20",
  },
  { iconName: "fa fa-whatsapp", link: "https://wa.me/+201128458999" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
