import SocialMediaApp from "../img/portImages/socialmediaapp.png";
import FoodPantryApp from "../img/portImages/Foodpantryapp.png";
import FoodPantryWeb from "../img/portImages/foodpantryweb.png";
import Thinkupcore from "../img/portImages/Thinkupcore.png";
import MusicPlayer from "../img/portImages/leostack-music.png";
import Proctorme from "../img/portImages/proctorme-img.png";
import CovidTracker from "../img/portImages/covid.png";
import TicTacToe from "../img/portImages/leostacktictactoe.png";
import GPAsystem from "../img/portImages/gradepointaveragesystem.png";
import Leostack from "../img/portImages/leostack.png";
import RubysLibrary from "../img/portImages/RubysLibrary.png";
import Esote from "../img/portImages/esote-img.png";
import gankco from "../img/portImages/gankco.png";
import merge2own from "../img/portImages/merge2own.png";
import ukech from "../img/portImages/ukech_charity.png";
import vivifiy from "../img/portImages/vivifiy-img.png";
import learngual from "../img/portImages/learngual.png";
import meeney from "../img/portImages/meeney.png";
import otawise from "../img/portImages/otawise.png";

const portfolios = [
  {
    id: 3,
    category: "Next JS",
    image: Proctorme,
    link1: "https://proctorme.com",
    link2: "https://github.com/princeleo400",
    title: "Proctorme",
    text: `Proctorme is a leading remote proctoring platform in Africa committed to giving Africans access to the best AI-proctoring solution.
        With the platform, its very easy to  sit for  exams remotely and still maintain the integrity of the examination with robust AI-proctoring features .`,
  },
  {
    id: 12,
    category: "React JS",
    image: gankco,
    link1: "https://gankcoenergy.com/",
    link2: "https://github.com/princeleo400",
    title: "Gankco Energy",
    text: `Gankco Energy is a 100% Nigerian upstream oil & gas engineering company. They specialize in well services, production enhancement, 
    equipment sales & rental, and well intervention. 
    Gankco delivers engineered solutions with a strong commitment to safety, quality, and local capacity building.`,
  },
  {
    id: 13,
    category: "React JS",
    image: vivifiy,
    link1: "https://vivifiy.com/",
    link2: "https://github.com/princeleo400",
    title: "Vivifiy",
    text: `An all-in-one digital learning platform where creators can build, host, and sell courses, e-books, and mentorship programs.
    It combines flexible payment options, in-depth analytics, and community features for both creators and learners.`,
  },
  {
    id: 13,
    category: "React JS",
    image: learngual,
    link1: "https://learngual.com/",
    link2: "https://github.com/princeleo400",
    title: "Learngual",
    text: `Learngual is an AI-powered language-learning platform that helps users master any language and perfect their pronunciation. 
    It was built with an intelligent feedback system, learners can progress at their own pace and build confidence in speaking as naturally as a native.`,
  },
  {
    id: 13,
    category: "React JS",
    image: meeney,
    link1: "https://meeney.com/",
    link2: "https://github.com/princeleo400",
    title: "Meeney",
    text: `Meeney is a community‑focused digital marketplace designed to help people shop and buy more easily from nearby sellers. 
    Currently in wait-list mode...`,
  },
  {
    id: 15,
    category: "React JS",
    image: Esote,
    link1: "https://esote.io/",
    link2: "https://github.com/princeleo400",
    title: "Esote",
    text: `Esote is a remote-tech recruitment and management platform powered by AI. 
    It connects startups with pre-vetted tech talent (especially students) for affordable, real-world remote work.`,
  },
  {
    id: 16,
    category: "React JS",
    image: merge2own,
    link1: "https://merge2own.com/",
    link2: "https://github.com/princeleo400",
    title: "Merge2own",
    text: `Merge2Own is a co-ownership platform that enables individuals with aligned financial goals to come together and jointly own property. 
    It lowers the entry barrier for first-time home buyers by making shared ownership transparent and accessible.`,
  },
  {
    id: 16,
    category: "Wordpress",
    image: otawise,
    link1: "https://otawise.com/",
    link2: "https://github.com/princeleo400",
    title: "Otawise",
    text: `Otawise is an all‑in‑one, cloud-based business management platform built for both service companies and government agencies. 
    It was built to simplify core operations from office management and client relationship tracking to scheduling, invoicing, and time tracking, 
    to streamline workflows and boost efficiency`,
  },
  {
    id: 14,
    category: "React JS",
    image: ukech,
    link1: "https://ukechcharityf.org/",
    link2: "https://github.com/princeleo400",
    title: "Ukech Charity Foundation",
    text: `A nonprofit organization dedicated to empowering refugees especially children, by providing education, essential services, and support..`,
  },
  {
    id: 2,
    category: "React JS",
    image: MusicPlayer,
    link1: "https://leostack-music.netlify.app",
    link2: "https://github.com/princeleo400",
    title: "Music App",
    text: "A Music Application developed with react",
  },
  {
    id: 4,
    category: "React JS",
    image: RubysLibrary,
    link1: "http://rubyslibrary.netlify.app/",
    link2: "https://github.com/princeleo400",
    title: "Ruby's Library",
    text: `The Ruby’s library was created majorly to solve the problem of tech newbies searching for the right resources and books to start their career. The internet is filled with so many resources and anyone who’s just starting out can get confused. This is why Ruby’s library contains a wide range of educational books in almost the faucets of tech which includes - web development, product design, data analysis, product management and artificial intelligence.`,
  },
  {
    id: 5,
    category: "Javascript",
    image: Thinkupcore,
    link1: "https://thinkupcore.com",
    link2: "https://github.com/princeleo400",
    title: "Thinkup core (virtual hub)",
    text: "ThinkUp Core is a virtual based digital/tech. core (hub) that deals on digital activities and operations.",
  },
  {
    id: 6,
    category: "Javascript",
    image: CovidTracker,
    link1: "https://leostack-covid19tracker.netlify.app/",
    link2: "https://github.com/princeleo400",
    title: "COVID-19 Tracker",
    text: "A covid-19 tracker. This tracker provides data on global COVID-19 cases and deaths by country, region, and income-level. Developed with react javascript.",
  },
  {
    id: 7,
    category: "React JS",
    image: Leostack,
    link1: "https://leostack.netlify.app",
    link2: "https://github.com/princeleo400",
    title: "Responsive Portfolio Website",
    text: "Developed using different front end technologies such as React, Material UI, Styled-Components and more...",
  },
  {
    id: 8,
    category: "Java",
    image: FoodPantryApp,
    link1: "https://bit.ly/TCfoodpantryapp",
    link2: "https://github.com/princeleo400",
    title: "Food Pantry App - Android",
    text: `Thinkup Core Food Pantry app was developed to facilitate the donations of
        Food Items and Funds by individuals, food banks, NGOs and by other donors
        to support the vulnerable communities.`,
  },
  {
    id: 9,
    category: "Javascript",
    image: FoodPantryWeb,
    link1: "https://thinkupcore.com/foodpantry",
    link2: "https://github.com/princeleo400",
    title: "Food Pantry Web version",
    text: `The web version of Thinkup Core Food Pantry system was developed to facilitate the donations of
        Food Items and Funds by individuals, food banks, NGOs and by other donors
        to support the vulnerable communities.`,
  },
  {
    id: 10,
    category: "Javascript",
    image: TicTacToe,
    link1: "https://leostack-tictactoe.netlify.app",
    link2: "https://github.com/princeleo400",
    title: "Tic-Tac-Toe Game",
    text: `A user friendly tictactoe, also available as a progressive web app. Designed with html, css, and javascript.`,
  },
  {
    id: 11,
    category: "Javascript",
    image: GPAsystem,
    link1: "https://leostack-gpasystem.netlify.app",
    link2: "https://github.com/princeleo400",
    title: "Grade Point Average System",
    text: `Calculate GPA and CGPA score then from your current score the average estimate score to end up with a 1st, 2nd upper/lower class..`,
  },
  {
    id: 1,
    category: "React JS",
    image: SocialMediaApp,
    link1: "https://leo-social-media.firebaseapp.com/",
    link2: "https://github.com/princeleo400",
    title: "Social Media App",
    text: "A social media app built with react, node and firebase.",
  },
];

export default portfolios;
