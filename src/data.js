import ReactGA from "react-ga4";
//////////////////////////
// Skills Icons Images //
////////////////////////
import htmlIcon from "/icons/htmlIcon.svg";
import cssIcon from "/icons/cssIcon.svg";
import javascriptIcon from "/icons/javascriptIcon.svg";
import typescriptIcon from "/icons/typescriptIcon.svg";
import mongodbIcon from "/icons/mongodbIcon.svg";
import expressIcon from "/icons/expressIcon.svg";
import reactIcon from "/icons/reactIcon.svg";
import nodejsIcon from "/icons/nodejsIcon.svg";
import tailwindIcon from "/icons/tailwindIcon.svg";
import bootstrapIcon from "/icons/bootstrapIcon.svg";
import postgresqlIcon from "/icons/postgresqlIcon.svg";
import gitIcon from "/icons/gitIcon.svg";

///////////////////////////////////
// Portfolio Projects Thumbnails //
//////////////////////////////////
import forSureHiredThumbnail from "/images/forSureHiredThumbnail.png";
import fitFusionThumbnail from "/images/fitFusionThumbnail.png";
import yokaiSlayerThumbnail from "/images/yokaiSlayerThumbnail.png";
import vanLifeThumbnail from "/images/vanLifeThumbnail.png";

export const skillsData = [
  { icon: htmlIcon, text: "HTML" },
  { icon: cssIcon, text: "CSS" },
  { icon: javascriptIcon, text: "JavaScript" },
  { icon: typescriptIcon, text: "TypeScript" },
  { icon: mongodbIcon, text: "MongoDB" },
  { icon: expressIcon, text: "Express" },
  { icon: reactIcon, text: "React" },
  { icon: nodejsIcon, text: "NodeJS" },
  { icon: tailwindIcon, text: "TailwindCSS" },
  { icon: bootstrapIcon, text: "Bootstrap" },
  { icon: postgresqlIcon, text: "PostgreSQL" },
  { icon: gitIcon, text: "Git" },
];

export const projectsData = [
  {
    thumbnail: forSureHiredThumbnail,
    techUsed: "React, React Router, NodeJS, Express, MongoDB",
    description:
      "An all-in-one solution for job seekers aiming to streamline their job search process. Our platform offers tools to efficiently manage job applications such as a Kanban Style Board, user authentication, and AI generated quizzes to prepare for interviews.",
    name: "forSure Hired",
    link: "https://forsure-hired.netlify.app/",
  },
  {
    thumbnail: fitFusionThumbnail,
    techUsed: "React, React Router",
    description:
      "A comprehensive web application designed to be your ultimate companion on your fitness journey. Includes features such as an anatomy page, showcasing exercises based on the muscle group clicked, a BMI calculator, and a Macro Nutrient Calculator.",
    name: "FitFusion",
    link: "https://fit-fusion-site.vercel.app/",
  },
  {
    thumbnail: yokaiSlayerThumbnail,
    techUsed: "JavaScript, HTML, CSS",
    description:
      "A 2D platformer game where you must defeat multiple enemies (Yokai) until you reach the final boss. Considered many different situations such as sprite sheets for animations, collision logic, attack logic, movement mechanics, and win/lose conditions.",
    name: "Yokai Slayer",
    link: "https://yokaislayer.netlify.app/",
  },
  {
    thumbnail: vanLifeThumbnail,
    techUsed: "React, React Router, Mirage JS",
    description:
      "A Front End Application where users can view a wide variety of travel vans to rent and log in to their account to view a dashboard displaying their hosted vans, income, and reviews.",
    name: "Van Life",
    link: "https://van-life-application.netlify.app/",
  },
];

export const handleLinkClick = (label) => {
  ReactGA.event({
    category: "Navigation",
    action: "Clicked Portfolio Project Link",
    label: label,
    value: 1,
  });
};
