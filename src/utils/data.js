import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 20,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 25,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: " React JS Developer",
    projects: 15,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I bring creativity, efficiency, and technical expertise to every project I work on",
  "We believe that development should be an efficient and streamlined process.",
  "That's why we use the MERN Stack, a full-stack technology stack that allows us to build robust, scalable web applications from front-to-back with minimal time and resources.",

];

export const workExp = [
  {
    place: "DevNBeans Solutions",
    tenure: "Jan 2022 - Feb 2023",
    role: "Associate Software Engineer",
    detail:
"Worked on different projects in components Formation and their Implementation by using Material UI, React JS, Express JS, Postgres through Docker.Also Test, debug, and correct errors in programs. Develop technical solutions to meet business requirements."
  },
  {
    place: "OM Solutionz, Lahore",
    tenure: "June 2021 - Dec 2021",
    role: "React JS Developer",
    detail:
" As a React JS Developer I worked on Web base Projects in React JS, Node JS and material UI"
  },
  {
    place: "Final Year Project",
    tenure: "",
    role: "React Native App",
    detail:
"worked on  React Native Application development on Fundraising and Blood Donation."
  },
  
 
 
];

export const comments = [
  {
    name: " Conner Antonio ",
    post: "Creative Manager",
    comment:
     "Usama did an amazing job on our React project. Their deep understanding of the framework and attention to detail resulted in a high-quality, user-friendly application. We would highly recommend Usama to anyone in need of a talented React developer.",
      img: "./people3.png",
  },
  {
    name: "Tracey Voms",
    post: "HR Manager",
    comment:
     "Working with Usama on our MERN stack project was a great experience. Their deep understanding of MongoDB, Express, React, and Node.js allowed them to quickly solve complex problems and deliver a top-notch final product. We would definitely work with Usama again.",
    img: "./people2.png",
  },
  {
    name: " Lewis Milton",
    post: "Flower Seller",
    comment:
     "Usama's extensive knowledge of the MERN stack was essential to the success of our project. They brought a fresh perspective and innovative solutions to the table, resulting in a beautiful and functional application. Their dedication to the project and excellent communication made them a pleasure to work with.",
    img: "./people1.png",
  },
  {
    name: "gilbert Randall ",
    post: "Owner of Food Store",
    comment:
     "Our MERN stack project was a huge success, in large part due to Usama's contributions. Their ability to seamlessly integrate all components of the stack allowed for a smooth and efficient development process. The end result was exactly what we were looking for, and we're grateful for their expertise.",
    img: "./people4.png",
  },

  
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
