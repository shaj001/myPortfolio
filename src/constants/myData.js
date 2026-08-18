import {
  SiExpress,
  SiLangchain,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSocketdotio,
  SiStreamlit,
  SiTailwindcss,
  SiTypescript,
  SiTensorflow,
  SiPythonanywhere,
  SiFastapi
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";


export const myProjects = [
  //template
  // {
  //   id: 1,
  //   title: "",
  //   description:"",
  //   subDescription: [
  //     "",
  //     "",
  //   ],
  //   // href: "",
  //   github: "",
  //   live: "",
  //   logo: "",
  //   image: "",

  //   //tech stack tags
  //   tags: [
  //     {
  //       id: 1,
  //       name: "",
  //       path: "",
  //     },
  //     {
  //       id: "",
  //       name: "",
  //       path: "",
  //     },
  //   ],
  // },
 {
    id: 1,
    title: "Zekros - Multiplayer Strategy Game Platform",
    description:
      "ZEKROS is a full-stack multiplayer game platform built around a custom game engine, real-time match management, player accounts, and persistent game history. The platform is designed to support configurable board games, AI opponents, matchmaking, and competitive player ratings.",
    subDescription: [
  "Custom D3T game engine for managing game state and match logic",
  "Real-time multiplayer matches with room and player management",
  "AI opponents with Minimax-based gameplay",
  "Configurable Tic-Tac-Toe variant with dynamic board sizes",
  "Persistent match history, moves, and player data with PostgreSQL"
],
    // href: "",
    github: "https://github.com/sherrykeos/Zekros",
    live: "https://zekros.vercel.app/",
    logo: "",
    image: "/assets/projects/zekros_img.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: SiReact,
      },
      {
        id: 2,
        name: "Express",
        path: SiExpress,
      },
      {
        id: 3,
        name: "Socket.io",
        path: SiSocketdotio,
      },
      {
        id: 4,
        name: "JS/TS",
        path: SiTypescript,
      },
      {
        id: 5,
        name: "PostgreSQL",
        path: SiPostgresql,
      },
    ],
  },
   {
    id: 2,
    title: "FareLens - AI-Powered Fare Prediction Tool",
    description:
      "FareLens is an AI-powered fare prediction tool that leverages machine learning algorithms to provide accurate estimates for taxi and ride-sharing services. The application integrates with real-time traffic data and historical fare information to deliver reliable predictions.",
    subDescription: [
  "Machine learning model for fare prediction",
  "Integration with real-time traffic data",
  "Historical fare data analysis",
  "User-friendly interface for fare estimation"
],
    // href: "",
    github: "https://github.com/sherrykeos/FareLens",
    live: "https://farelens.vercel.app/",
    logo: "",
    image: "/assets/projects/farelens_img.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: SiPython,
      },
      {
        id: 2,
        name: "XGBoost",
        path: SiPythonanywhere,
      },
      {
        id: 3,
        name: "React",
        path: SiReact,
      },
      {
        id: 4,
        name: "FAST API",
        path: SiFastapi,
      },
      {
        id: 5,
        name: "PostgreSQL",
        path: SiPostgresql,
      },
    ],
  },
    {
    id: 3,
    title: "CortexFlow - MultiAgents AI Research assistant",
    description:
      "CortexFlow is a multi-step AI research assistant built with Streamlit and LangChain. It takes a topic, gathers web results, scrapes relevant source content, generates a structured research report, and produces a short critique of the final output.",
    subDescription: [
      "searches the web for relevant information",
      "Smooth Navigation: Implemented using react-scroll for seamless section transitions.",
      "extracts content from selected source URLs",
      "writes a structured research report",
      "reviews the report with a critic pass",
      "exports the final report as PDF from the UI"
    ],
    // href: "",
    github: "https://github.com/sherrykeos/CortexFlow-Multi-Agent-Research-System",
    live: "https://cortexflow.streamlit.app/",
    logo: "",
    image: "/assets/projects/cortex_img.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: SiPython,
      },
      {
        id: 2,
        name: "Streamlit",
        path: SiStreamlit,
      },
      {
        id: 3,
        name: "LangChain",
        path: SiLangchain,
      },
    ],
  },

  {
    id: 4,
    title: "Express Auth Kit - Node.js Authentication Boilerplate",
    description:
      "Express Auth Kit is a robust authentication solution for Node.js applications, built with Express and MongoDB. It provides a comprehensive set of middleware and utilities for handling user registration, login, and session management.",
    subDescription: [
      "User Registration: Secure user account creation with email verification.",
      "JWT Authentication: Stateless authentication using JSON Web Tokens.",
      "Password Reset: Secure password recovery mechanism.",
      "Role-Based Access Control: Granular permissions for different user roles.",
    ],
    // href: "",
    github: "https://github.com/sherrykeos/Express-Auth-Kit",
    live: "https://github.com/sherrykeos/Express-Auth-Kit",
    logo: "",
    image: "/assets/projects/ExpressAuthkit_img.png",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: SiReact,
      },
      {
        id: 2,
        name: "Node.js",
        path: FaNode,
      },
      {
        id: 3,
        name: "postgreSQL",
        path: SiPostgresql,
      },
      {
        id: 4,
        name: "JWT",
        path: MdOutlineSecurity,
      },
      {
        id: 5,
        name: "express",
        path: SiExpress,
      },

    ],
  },

   {
    id: 4,
    title: "Grid OX - Dynamic Tic-Tac-Toe Game",
    description:
      "Grid OX is a modern web-based strategy game built with React and Tailwind CSS. The project serves as a showcase for advanced frontend state management and game theory. It features a custom-built AI engine that calculates moves based on a shifting board state, offering a challenge that traditional 3x3 games simply cannot provide.",
    subDescription: [
      "The 3-Piece Rule: Each player is limited to exactly three active marks on the grid.",
      "The Vanishing Act: When you place your 4th mark, your 1st mark (the oldest chronological move) instantly destabilizes and vanishes.",
      "The Consequence: Stalemates are impossible. The game only ends when a player creates a line of three within a single temporal window before their own pieces start disappearing.",
    ],
    // href: "",
    github: "https://github.com/sherrykeos/Grid_OX",
    live: "https://gridox.vercel.app/",
    logo: "",
    image: "/assets/projects/gridox_img.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: SiReact,
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: SiTailwindcss,
      },
      
    ],
  },

  



];

export const mySocials = [
  // {
  //   name: "WhatsApp",
  //   href: "",
  //   icon: "/assets/icons/whatsApp.svg",
  // },
  {
    name: "GitHub",
    href: "https://github.com/sherrykeos",
    icon: "/assets/socials/githubwhiteicon.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/sharad--kumar/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sherry.keos/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Technical intern",
    // job: "Software Developer intern at DRDO",
    date: "SEPT - OCT 2025",
    company: "DRDO (Defence Research and Development Organization)",
    companyLogo: "/assets/Icons/otherIcons/DRDOLogo.png",
  contents: [
  "At DRDO, developed an offline Magnetic Field Analysis Tool using Python, NumPy, and Pandas to process electromagnetic signal and noise data, calculate magnetic field intensity, and extract meaningful physical parameters. Implemented FFT-based frequency analysis, filtering, normalization, and noise separation to improve signal quality and analysis accuracy. Built web and desktop interfaces using Next.js, PyQt, and Tkinter, with a modular architecture separating the analysis engine from the user interface."
],
  },
  {
    title: "SDE intern",
    // job: "Software Developer intern at DRDO",
    date: "JUNE - JULY 2026",
    company: "Airport Authority of India",
    companyLogo: "public/assets/Icons/otherIcons/AAI_logo.jpg",
 contents: [
  "At Airports Authority of India (AAI), developed AERODROME, a full-stack ML-based airline fare prediction platform using React, FastAPI, PostgreSQL, XGBoost, and Scikit-learn. Trained models on 300,000+ domestic fare records to generate real-time fare predictions, with interactive route and price-trend visualizations, secure authentication, and rate-limited APIs."
],
  },

];

export const reviews = [];
