import { BiHomeAlt, BiServer } from "react-icons/bi";
import {
  BsFillPersonFill,
  BsBriefcase,
  BsCardChecklist,
  BsBarChartFill,
  BsFillBinocularsFill,
  BsFillSunFill,
  BsFillCalendar3WeekFill,
} from "react-icons/bs";
import { AiTwotoneFile, AiOutlineMail } from "react-icons/ai";
import { CgWorkAlt } from "react-icons/cg";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import CollectionsIcon from "@mui/icons-material/Collections";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import portfolio_1 from "../Image/portfolio-1.jpg";
import portfolio_2 from "../Image/portfolio-2.jpg";
import portfolio_3 from "../Image/portfolio-3.jpg";
import portfolio_4 from "../Image/portfolio-4.jpg";
import portfolio_5 from "../Image/portfolio-5.jpg";
import portfolio_6 from "../Image/portfolio-6.jpg";
import portfolio_7 from "../Image/portfolio-7.jpg";
import portfolio_8 from "../Image/portfolio-8.jpg";
import portfolio_9 from "../Image/portfolio-9.jpg";

export const navbarData = [
  {
    icon: <BiHomeAlt className="icon" />,
    text: "Home",
  },
  {
    icon: <BsFillPersonFill className="icon" />,
    text: "About",
  },
  {
    icon: <AiTwotoneFile className="icon" />,
    text: "Resume",
  },
  {
    icon: <CgWorkAlt className="icon" />,
    text: "Portfolio",
  },
  {
    icon: <BiServer className="icon" />,
    text: "Services",
  },
  {
    icon: <AiOutlineMail className="icon" />,
    text: "Contact",
  },
];

export const aboutData = [
  {
    text: "Birthay",
    value: "12 Dec 2005",
  },
  {
    text: "Age",
    value: "18",
  },
  {
    text: "Website",
    value: "www.rof1yev.com",
  },
  {
    text: "Degree",
    value: "Junior",
  },
  {
    text: "Phone",
    value: "+998 99 448 57 13",
  },
  {
    text: "Email",
    value: "rof1yev@gmail.com",
  },
  {
    text: "City",
    value: "Samarkhand",
  },
  {
    text: "Frelancer",
    value: "@Rof1yev",
  },
];

export const factsData = [
  {
    icon: (
      <SentimentSatisfiedAltIcon
        sx={{ color: "#149ddd", fontSize: "4rem", mt: 1 }}
      />
    ),
    number: 20,
    heading: "Happy Clients",
    description: "consequuntur quae",
  },
  {
    icon: (
      <CollectionsIcon sx={{ color: "#149ddd", fontSize: "4rem", mt: 1 }} />
    ),
    number: 55,
    heading: "Projects",
    description: "adipisci atque cum quia aut",
  },
  {
    icon: <HeadsetMicIcon sx={{ color: "#149ddd", fontSize: "4rem", mt: 1 }} />,
    number: 32,
    heading: "Hours Of Support",
    description: "aut commodi quaerat",
  },
  {
    icon: <PeopleAltIcon sx={{ color: "#149ddd", fontSize: "4rem", mt: 1 }} />,
    number: 7,
    heading: "Hard Workers",
    description: "rerum asperiores dolor",
  },
];

export const progressBarData = [
  {
    title: "HTML",
    number: "90%",
  },
  {
    title: "CSS & Bootstrap",
    number: "90%",
  },
  {
    title: "JavaScript",
    number: "75%",
  },
  {
    title: "React JS",
    number: "80%",
  },
];

export const ResumeData = [
  {
    order: 1,
    heading: "Sumary",
    title: "ROFIYEV DILSHOD",
    description:
      "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
    lists: ["Uzbekistan Samarkhand", "+998 77 707 77 77", "rof1yev@gmail.com"],
  },
  {
    order: 3,
    heading: "Education",
    title: "MASTER OF FINE ARTS & GRAPHIC DESIGN",
    date: "2015 - 2016",
    location: "Rochester Institute of Technology, Rochester, NY",
    description:
      "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend",
    lists: [],
  },
  {
    order: 2,
    heading: "Professional Experience",
    title: "SENIOR GRAPHIC DESIGN SPECIALIST",
    date: "2019 - Present",
    location: "Experion, New York, NY",
    lists: [
      "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
      "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
      "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000",
    ],
  },
  {
    order: 4,
    heading: "",
    title: "GRAPHIC DESIGN SPECIALIST",
    date: "2017 - 2018",
    location: "Stepping Stone Advertising, New York, NY",
    lists: [
      "Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).",
      "Managed up to 5 projects or tasks at a given time while under pressure",
      "Recommended and consulted with clients on the most appropriate graphic design",
      "Created 4+ design presentations and proposals a month for clients and account managers",
    ],
  },
];

export const portfolioData = [
  {
    id: 1,
    filt: "htmlCss",
    image: portfolio_1,
    url: "https://rof1yev-portfolio.netlify.app/",
  },
  {
    id: 2,
    filt: "javascript",
    image: portfolio_2,
    url: "https://rof1yev.netlify.app/",
  },
  {
    id: 3,
    filt: "react",
    image: portfolio_3,
    url: "https://k-griffith.netlify.app/",
  },
  {
    id: 4,
    filt: "react",
    image: portfolio_4,
    url: "https://career-rof1yev.netlify.app/",
  },
  {
    id: 5,
    filt: "react",
    image: portfolio_5,
    url: "https://rof1yev-whatsapp.netlify.app/",
  },
  {
    id: 6,
    filt: "react",
    image: portfolio_6,
    url: "https://rof1yev-blogzine.netlify.app/",
  },
  {
    id: 7,
    filt: "react",
    image: portfolio_7,
    url: "https://rof1yev-geeks.netlify.app/",
  },
  {
    id: 8,
    filt: "react",
    image: portfolio_8,
    url: "https://rof1yev-express24.netlify.app/",
  },
  {
    id: 9,
    filt: "htmlCss",
    image: portfolio_9,
    url: "https://rd7.netlify.app/",
  },
];

export const servicesData = [
  {
    icon: <BsBriefcase className="icon" />,
    heading: "Lorem Ipsum",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
  },
  {
    icon: <BsCardChecklist className="icon" />,
    heading: "Dolor Sitema",
    description:
      "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
  },
  {
    icon: <BsBarChartFill className="icon" />,
    heading: "Sed ut perspiciatis",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    icon: <BsFillBinocularsFill className="icon" />,
    heading: "Magni Dolores",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    icon: <BsFillSunFill className="icon" />,
    heading: "Nemo Enim",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
  },
  {
    icon: <BsFillCalendar3WeekFill className="icon" />,
    heading: "Eiusmod Tempor",
    description:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
  },
];

export const sliderData = [
  {
    description:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    image:
      "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/testimonials/testimonials-1.jpg",
    username: "Saul Godman",
    jobs: "Ceo & Founder",
  },
  {
    description:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    image:
      "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/testimonials/testimonials-2.jpg",
    username: "Saul Godman",
    jobs: "Ceo & Founder",
  },
  {
    description:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    image:
      "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/testimonials/testimonials-3.jpg",
    username: "Saul Godman",
    jobs: "Ceo & Founder",
  },
  {
    description:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    image:
      "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/testimonials/testimonials-4.jpg",
    username: "Saul Godman",
    jobs: "Ceo & Founder",
  },
  {
    description:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    image:
      "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/testimonials/testimonials-5.jpg",
    username: "Saul Godman",
    jobs: "Ceo & Founder",
  },
];

export const contactIcons = [
  {
    icon: <LocationOnIcon className="icon" />,
    title: "Location:",
    info: "Samarkhand Uzbekistan",
  },
  {
    icon: <EmailIcon className="icon" />,
    title: "Email:",
    info: "rof1yev@gmail.com",
  },
  {
    icon: <SmartphoneIcon className="icon" />,
    title: "Phone:",
    info: "+998 77 707 77 77",
  },
];
