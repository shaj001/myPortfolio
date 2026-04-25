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
        path: "../assets/Icons/techIcons/python.svg",
      },
      {
        id: 2,
        name: "Streamlit",
        path: "/assets/Icons/techIcons/Streamlit.svg",
      },
      {
        id: 3,
        name: "LangChain",
        path: "/assets/Icons/techIcons/Langchain.svg",
      },
    ],
  },

     {
    id: 2,
    title: "ZORA - SaaS Landing Page",
    description:
      "A modern, high-performance frontend landing page for ZORA, a conceptual AI-powered video editing tool. This project is a pure frontend implementation showcasing responsive design, smooth animations, and a clean user interface built with React and Tailwind CSS.",
    subDescription: [
      "Responsive Design: Fully optimized for desktop, tablet, and mobile devices.",
      "Smooth Navigation: Implemented using react-scroll for seamless section transitions.",
      "Interactive Pricing: Dynamic pricing section with a toggle for Monthly/Annual plans using react-countup.",
      "Modern UI/UX: Glassmorphism effects, gradients, and smooth transitions powered by Tailwind CSS.",
    ],
    // href: "",
    github: "https://github.com/sherrykeos/ZORA",
    live: "https://zora-livid.vercel.app/",
    logo: "",
    image: "/assets/projects/zora_img.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/Icons/techIcons/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/Icons/techIcons/tailwindcss.svg",
      },
      
    ],
  },

   {
    id: 3,
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
        path: "/assets/Icons/techIcons/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/Icons/techIcons/tailwindcss.svg",
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
      "At Defence Research and Development Organisation (DRDO), I developed a Magnetic Field Analysis Tool designed to evaluate magnetic field intensity and related electromagnetic properties from raw signal data",
      "The objective was to build a reliable system capable of processing signal and noise datasets to compute magnetic field intensity and extract meaningful physical parameters with high accuracy — without relying on cloud-based computation.",

      "# Technical Implementation",
      "> Built the computational backend using Python, leveraging: NumPy for numerical computation and vectorized operations Pandas for structured data handling and preprocessing.",
      "> Implemented signal processing logic to: Separate noise from measured signal Perform intensity calculations Evaluate derived magnetic field characteristics.",
      ">Implemented Fast Fourier Transform (FFT) for: Frequency-domain analysis of magnetic field signals, Noise separation and spectral component identification, Extraction of dominant frequency peaks and amplitude distribution",
      ">Applied filtering and signal normalization techniques to improve signal-to-noise ratio (SNR) and enhance measurement accuracy.",

      ">Developed multiple interfaces for deployment flexibility: Next.js web-based frontend for interactive visualization Desktop tool version using PyQt Lightweight Ubuntu-compatible interface using Tkinter",
      "The tool was designed to work completely offline, ensuring operational security and reliability in controlled environments.",

      "# Impact & Learning",

      "Applied numerical methods to real-world electromagnetic data. Built a modular architecture separating computation and UI layers. Improved performance through optimized array operations. Gained exposure to defense-grade data validation and structured R&D workflows",
    ],
  },

];

export const reviews = [];
