interface Skill {
  name: string;
  imageUrl: string;
  fallbackUrl?: string;
}

// Icons8 CDN for reliable PNG icons
const getIcons8Url = (name: string) => `https://img.icons8.com/color/96/${name}.png`;

// Alternative CDN sources for better reliability
const getCDNJSUrl = (name: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

export const skillsData: Skill[][] = [
  // Row 1
  [
    { 
      name: "HTML5", 
      imageUrl: getIcons8Url("html-5"),
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
    },
    { 
      name: "CSS3", 
      imageUrl: getIcons8Url("css3"),
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
    },
    { 
      name: "JavaScript", 
      imageUrl: getIcons8Url("javascript"),
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
    },
    { 
      name: "Tailwind CSS", 
      imageUrl: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
    },
    { 
      name: "React", 
      imageUrl: getIcons8Url("react-native"),
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
    },
    { 
      name: "Redux", 
      imageUrl: getIcons8Url("redux"),
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
    },
    { 
      name: "Adobe XD", 
      imageUrl: getIcons8Url("adobe-xd"),
      fallbackUrl: "https://www.vectorlogo.zone/logos/adobe_xd/adobe_xd-icon.svg"
    },
    { 
      name: "TypeScript", 
      imageUrl: getIcons8Url("typescript"),
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
    },
    { 
      name: "Next.js", 
      imageUrl: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
    },
    { 
      name: "MUI", 
      imageUrl: "https://www.vectorlogo.zone/logos/material-ui/material-ui-icon.svg",
      fallbackUrl: getIcons8Url("material-ui")
    },
    { 
      name: "Node.js", 
      imageUrl: getIcons8Url("nodejs"),
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
    },
    { 
      name: "MongoDB", 
      imageUrl: getIcons8Url("mongodb"),
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
    },
  ],
  // Row 2
  [
    { 
      name: "HTML5", 
      imageUrl: getIcons8Url("html-5"),
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
    },
    { 
      name: "CSS3", 
      imageUrl: getIcons8Url("css3"),
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
    },
    { 
      name: "JavaScript", 
      imageUrl: getIcons8Url("javascript"),
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
    },
    { 
      name: "Tailwind CSS", 
      imageUrl: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
    },
    { 
      name: "MUI", 
      imageUrl: "https://www.vectorlogo.zone/logos/material-ui/material-ui-icon.svg",
      fallbackUrl: getIcons8Url("material-ui")
    },
    { 
      name: "React", 
      imageUrl: getIcons8Url("react-native"),
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
    },
    { 
      name: "Redux", 
      imageUrl: getIcons8Url("redux"),
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
    },
    { 
      name: "Adobe XD", 
      imageUrl: getIcons8Url("adobe-xd"),
      fallbackUrl: "https://www.vectorlogo.zone/logos/adobe_xd/adobe_xd-icon.svg"
    },
    { 
      name: "TypeScript", 
      imageUrl: getIcons8Url("typescript"),
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
    },
    { 
      name: "Next.js", 
      imageUrl: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
    },
  ],
  // Row 3
  [
    { 
      name: "Node.js", 
      imageUrl: getIcons8Url("nodejs"),
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
    },
    { 
      name: "Express.js", 
      imageUrl: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
    },
    { 
      name: "MongoDB", 
      imageUrl: getIcons8Url("mongodb"),
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
    },
    { 
      name: "Firebase", 
      imageUrl: getIcons8Url("firebase"),
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-original.svg"
    },
    { 
      name: "PostgreSQL", 
      imageUrl: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
      fallbackUrl: getIcons8Url("postgresql")
    },
    { 
      name: "Prisma", 
      imageUrl: "https://www.vectorlogo.zone/logos/prismaio/prismaio-icon.svg",
      fallbackUrl: "https://avatars.githubusercontent.com/u/17219288?s=96&v=4"
    },
    { 
      name: "GraphQL", 
      imageUrl: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      fallbackUrl: getIcons8Url("graphql")
    },
  ],
  // Row 4
  [
    { 
      name: "React", 
      imageUrl: getIcons8Url("react-native"),
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
    },
    { 
      name: "DigitalOcean", 
      imageUrl: "https://www.vectorlogo.zone/logos/digitalocean/digitalocean-icon.svg",
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/digitalocean/digitalocean-original.svg"
    },
    { 
      name: "Docker", 
      imageUrl: getIcons8Url("docker"),
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
    },
    { 
      name: "Figma", 
      imageUrl: getIcons8Url("figma"),
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
    },
  ],
  // Row 5 (Go)
  [
    { 
      name: "Go", 
      imageUrl: getIcons8Url("golang"),
      fallbackUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg"
    },
  ],
];