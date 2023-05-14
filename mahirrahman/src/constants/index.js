import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "parasole",
    title: "Parasole",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Parasole IT Consultant",
    icon: creator,
  },
  {
    title: "Java Projects",
    icon: web,
  },
  {
    title: "Graphic Creator",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "University of British Columbia",
    company_name: "Kelowna, British Columbia",
    icon: starbucks,
    iconBg: "#fff",
    date: "March 2018 - Present",
    points: [
      "Bachelor Science Undergraduate CS Major",
      "Core foundational programming experienced using Java fundamentals",
      "Creating applications and designs while specializing in courses of Data Structures/ Web programming/ Database Systems and management / Java Applications",
      "Participating in code projects with peers and providing constructive feedback & support to other developers (check some out in projects).",
    ],
  },

  {
    title: "Web Design/Development",
    company_name: "Freelance",
    icon: shopify,
    iconBg: "#FFF",
    date: "Jan 2020 - Present",
    points: [
      "Developing and maintaining web applications with experience using HTML, CSS, JavaScript, PHP and more recently integrating frameworks such as ReactJS.",
      "Experienced in utilizing phpmyadmin database in order to host a database storage management system for web applications",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },

  {
    title: "Car Rental Service",
    company_name: "Ace Aligo, Kelowna, British Columbia",
    icon: meta,
    iconBg: "#FFF",
    date: "Jan 2023 - Present",
    points: [
      "Car detailing and customer pick up and drop offs to the airport.",
      "Experienced in high volume situations involving many customers and fulfilling client order requests",
      "Branch IT/Computer Troubleshooting. Quick solutions to branch IT related issues.",
      "Car maintenance and due diligance of paperwork",
    ],
  },

  {
    title: "Okanagan Grocery Artisan Breads",
    company_name: "OK Grocery, Kelowna, British Columbia",
    icon: tesla,
    iconBg: "#FFF",
    date: "Jan 2021 - March 2022",
    points: [
      "Managed various tasks such as dishwashing, packaging, weighing ingredients, proper store maintenance, organizing the workspace, and preparing various pastry/bread items for purchase.",
      "Exceptional multitasking capability with previous objectives and simultaneously handled high-paced customer purchase transactions (storefront, online, phoned).",
      "Worked with a team to maximize the productivity of the work environment. Tasks are dispersed amongst the team to fulfill multiple objectives within a given time frame.",
      "Easily adapted to multiple roles and able to follow rules/changes on the go.",
    ],
  },

  {
    title: "Garment Manufacturing Auditing Intern",
    company_name: "Knit Asia Ltd, Dhaka Bangladesh",
    icon: tesla,
    iconBg: "#FFF",
    date: "May 2019 - July 2022",
    points: [
      "Gathered and analyzed garment production data including (but not limited to) yearly/monthly: production units, income generation, cost of production maintenance, cost of production resources, etc.",
      "Gained thorough comprehension of Bangladesh's Accord & Alliance regulations for garment facilities.",
      "Determined areas for improvement after auditing multiple facilities (including sibling company's facilities).",
      "Created weekly/monthly reports, and supporting documentation for audit findings",
      "Received stellar remarks for organized/detailed submissions with successful contributions towards the company.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
