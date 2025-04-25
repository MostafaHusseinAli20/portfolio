import Image1 from "../../assets/img/portfolio/1.png";
import Image2 from "../../assets/img/portfolio/2.png";
import Image3 from "../../assets/img/portfolio/3.png";
import Image4 from "../../assets/img/portfolio/4.png";
import Image5 from "../../assets/img/portfolio/5.png";
import Image6 from "../../assets/img/portfolio/6.png";
import Image7 from "../../assets/img/portfolio/7.png";
import Image8 from '../../assets/img/portfolio/8.jpeg';
import Image9 from '../../assets/img/portfolio/9.png';

const PortfolioData = [
  {
    id: 1,
    type: "ecommerce project",
    image: Image1,
    tag: ["mockup"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        language: "PHP, Laravel, AdminLTE",
        preview: "www.github.com",
        link: "https://github.com/MostafaHusseinAli20/ecommerce_laravel/tree/master",
      },
    ],
  },
  {
    id: 2,
    type: "pos system project",
    image: Image2,
    tag: [],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Web Application",
        client: "Videohive",
        language: "PHP, Laravel, AdminLTE, Laravel Auth",
        preview: "www.github.com",
        link: "https://github.com/MostafaHusseinAli20/pos_system/tree/main",
      },
    ],
  },
  {
    id: 3,
    type: "invoices system project",
    image: Image3,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Web Application",
        client: "Themeforest",
        language: "PHP, Laravel, Valex Dashboard, Laravel Auth",
        preview: "www.github.com",
        link: "https://github.com/MostafaHusseinAli20/invoices_app",
      },
    ],
  },
  {
    id: 4,
    type: "video game project",
    image: Image4,
    tag: ["logo", "video"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Videohive",
        language: " HTML, CSS, TailwindCSS, React.js",
        preview: "www.vercel.com",
        link: "https://video-game-with-json-server.vercel.app/",
      },
    ],
  },
  {
    id: 5,
    type: "space tourism project",
    image: Image5,
    tag: ["logo"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "Themeforest",
        language: "HTML, CSS, Javascript, Bootsrap, Animate Css",
        preview: "www.github.com",
        link: "https://mostafahusseinali20.github.io/space-tourism/",
      },
    ],
  },
  {
    id: 6,
    type: "Fooderaa project",
    image: Image6,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Themeforest",
        language: "HTML, CSS, Bootsrap, React",
        preview: "www.github.com",
        link: "https://mostafahusseinali20.github.io/Fooderaa/",
      },
    ],
  },
  {
    id: 7,
    type: "restaurant api project",
    image: Image7,
    tag: [],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "API",
        language: "PHP, Laravel, JWTAuth",
        preview: "www.github.com",
        link: "https://github.com/MostafaHusseinAli20/Resturant-api-project",
      },
    ],
  },
  {
    id: 8,
    type: "School Mangagement System",
    image: Image8,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Themeforest",
        language: "PHP, Laravel, MYSQL, Ajax",
        preview: "www.github.com",
        link: "https://github.com/MostafaHusseinAli20/school-mangement",
      },
    ],
  },
  {
    id: 9,
    type: "Elwssam Education Platform",
    image: Image9,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Themeforest",
        language: "HTML, CSS, Javascript, Bootsrap, Ajax, PHP, MYSQL, Laravel",
        preview: "https://elwsam.rf.gd/",
        link: "https://elwsam.rf.gd/",
      },
    ],
  },
];

export default PortfolioData;
