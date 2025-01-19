import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Taufik",
  lastName: "Ahmad",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "System Analyst",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kuala_Lumpur", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/OldPistols",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/taufikahmad07",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:taufikmastar1995@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>System Analyst</>,
  subline: (
    <>
      I'm Taufik, a System Analyst at <InlineCode>ANALOG DEVICES</InlineCode>, where I analyze systems and design efficient solutions.
      <br /> After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        As a system analyst, I'm passionate in deciphering intricate systems 
        and creating scalable, effective solutions. System design, process optimization, 
        and the smooth integration of technology to satisfy business objectives are all areas in which I specialize.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Analog Devices",
        timeframe: "2022 - Present",
        role: "System Analyst/Engineer",
        achievements: [
          <>
            Develop user manuals for system operation and troubleshooting.
          </>,
          <>
            Analyze system failures and identify root causes to implement corrective actions.
          </>,
          <>
            Design and develop new systems to meet specific business requirements and 
            improve efficiency.
          </>,
          <>
            Analyze current systems to identify strengths and weaknesses.
          </>,
          <>
            Gather requirements from stakeholders for system enhancements.
          </>,
          <>
            Design comprehensive system solutions, including data models and architecture.
          </>,
          <>
            Collaborate with development teams to ensure solutions meet requirements.
          </>,
          <>
            Oversee testing to ensure quality and functionality.
          </>,
          <>
            Coordinate system deployment and provide user training.
          </>,
          <>
            Maintain thorough documentation for future reference.
          </>,
        ],
        images: [/*
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        */],
      },
      {
        company: "Analog Devices",
        timeframe: "2017 - 2022",
        role: "Manufacturing Speciacalist",
        achievements: [
          <>
            Calibrated, tested, and adjusted machines before production.
          </>,
          <>
            Operated machinery and ensured high-quality output.
          </>,
          <>
            Inspected equipment and performed preventive maintenance.
          </>,
          <>
            Loaded raw materials and unloaded finished products.
          </>,
          <>
            Ensured adherence to product quality standards.
          </>,
          <>
            Managed multiple machines to meet production targets.
          </>,
          <>
            Resolved machine jams and adjusted settings.
          </>,
          <>
            Maintained production and performance records.
          </>,
          <>
            Configured machine settings based on work orders.
          </>,
    
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University Teknologi Malaysia",
        description: <>Part-time bachelor in computer science software engineering with honour.</>,
        achievements: [<>Awarded dean list in 4 semester continuously</>],
      },
      {
        name: "University of Selangor",
        description: <>Full-time diploma in multimedia industry.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied web-based application development</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Hard & Soft skills",
    skills: [
      {
        title: "System Analysis and Design",
        description: <>Understanding system development lifecycles (SDLC), 
        creating workflows, data flow diagrams (DFDs), and modeling tools 
        like UML.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/DFD.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/UML.jpeg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Technical Documentation & Reporting",
        description: <>Writing detailed requirement specifications, 
        designing system architecture, and preparing technical reports 
        for stakeholders.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/TechnicalDocument.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Data Analysis & Visualization",
        description: <>Using tools like Excel, Tableau, or Power BI for 
        data insights and decision-making.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/power-bi-dashboard.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "User Acceptance Testing(UAT)",
        description: <>Designing test cases, conducting system testing, 
        identifying bugs, and recommending solutions.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/uat-test-results.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Problem-Solving Skills",
        description: <>Resolving conflicts between user needs, technical 
        constraints, and system limitations.</>,
      },
      {
        title: "Collaboration and Teamwork",
        description: <>Working with cross-functional teams, such as 
        developers, QA testers, business stakeholders, and vendors.</>,
      },
      {
        title: "Critical Thinking",
        description: <>Evaluating the tradeoffs between different system 
        options and anticipating future requirements.</>,
      },
      {
        title: "Conflict Resolution",
        description: <>Resolving disagreements related to system functionalities and requirements.</>,
      },
      {
        title: "Adaptability",
        description: <>Quickly adapting to new technologies, processes, 
        and organizational changes.</>,
      },
    ],
  },
};

const blog = {
  label: "Reflections",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Assignments",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work };
