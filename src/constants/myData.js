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
    title: "E-commerce Platform",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    // href: "",
    github: "",
    live: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: ".Net",
        path: "/assets/logos/dotnet.svg",
      },
      {
        id: 3,
        name: "Ef Core",
        path: "/assets/logos/efcore.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },



];

export const mySocials = [
  // {
  //   name: "WhatsApp",
  //   href: "",
  //   icon: "/assets/socials/whatsApp.svg",
  // },
  {
    name: "GitHub",
    href: "https://github.com/shaj001",
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
    title: "Software Developer intern",
    // job: "Software Developer intern at DRDO",
    date: "SEPT - OCT 2025",
    company: "DRDO (Defence Research and Development Organization)",
    companyLogo: "/assets/logos/DRDOLogo.png",
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
