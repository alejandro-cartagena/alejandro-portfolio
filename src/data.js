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
    techUsed: "React, NodeJS, Express, MongoDB",
    name: "forSure Hired",
  },
  { thumbnail: fitFusionThumbnail, techUsed: "React", name: "FitFusion" },
  {
    thumbnail: yokaiSlayerThumbnail,
    techUsed: "JavaScript, HTML, CSS",
    name: "Yokai Slayer",
  },
  {
    thumbnail: vanLifeThumbnail,
    techUsed: "React, Mirage JS",
    name: "Van Life",
  },
];
