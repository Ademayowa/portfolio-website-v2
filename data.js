import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

export const data = [
    {
    id: 1,
    title: 'Software Engineer',
    date: 'October 2023 - Present',
    duties: [
      'Designing and developing an AI chatbot using React, NextJS, TypeScript, PostgreSQL, and GraphQL',
      'Designed database schemas and API endpoints with NextJS and MongoDB for a web application',
      'Redesigned and migrated a WordPress site to use NextJS and Sanity to reduce page load by 80%',
    ],
    company: 'AppcraftHQ',
  },
  {
    id: 2,
    title: 'Frontend Engineer',
    date: 'August 2022 - December 2023',
    duties: [
      'Implemented user interface for web applications using React, NextJS, and TypeScript for MVP products',
      ' Integrated RESTFUL APIs into EA Kazi - a web app designed for teaching, learning, and earning',
      ' Collaborated with the design and backend teams in meetings to reduce overall task delivery time',
    ],
    company: 'Africa BIoT Labs',
  },
  {
    id: 3,
    title: 'Software Engineer',
    date: 'February 2021 - August 2022',
    duties: [
      'Developed a web version for a software that validates the authenticity of paper-based certificates',
      'Collaborated with designers to implement admin dashboards for software solutions using React',
      'Implemented new features for a VueJS application that runs on the blockchain network',
    ],
    company: 'Jelurida Africa',
  },
  {
    id: 4,
    title: 'Web Development Instructor',
    date: 'May 2019 - November 2020',
    duties: [
      'Trained and taught over 40 students to build responsive layouts with HTML, CSS, and JavaScript',
      'Taught and guided students how to develop RESTFUL APIs using NodeJS, Express, and MongoDB',
      'Created course materials for the front-end development curriculum',
    ],
    company: 'NIIT Limited',
  },
];

export const projects = [
  {
    id: '1',
    title: 'A web application portal for hackathon registration',
    info: 'A web portal that tracks numbers of submitted users projects',
    technologies: ['TypeScript', 'React|NextJS', 'MongoDB', 'NodeJS', 'Sanity'],
    url: 'https://www.icpsahara.africa/',
  },
   {
     id: '2',
     title: 'A job board web application',
    info: 'A web application where users can search & apply for Golang related jobs',
     technologies: ['Go', 'SQLite', 'React|NextJS', 'TypeScript', 'Tailwind'],
    url: 'https://job-board-v3.vercel.app/',
   }, 
  {
    id: '3',
    title: 'A web application for hackathons in Africa',
    info: 'A web app that lists details of hackathons across Africa',
    technologies: ['TypeScript', 'React|NextJS', 'Sanity', 'Tailwind', 'NodeJS'],
    url: 'https://www.hackathon.africa/',
  },
];

export const skills = [
  {
    id: 1,
    skill: 'Go (Golang)',
  },
  {
    id: 2,
    skill: 'React',
  },
  {
    id: 3,
    skill: 'Next.js',
  },
  {
    id: 4,
    skill: 'TypeScript',
  },

  {
    id: 5,
    skill: 'Node.js',
  },
  {
    id: 6,
    skill: 'MongoDB',
  },
  {
    id: 7,
    skill: 'PostgreSQL',
  },
  {
    id: 8,
    skill: 'Sanity',
  },
  {
    id: 9,
    skill: 'Tailwind CSS',
  },
  {
    id: 10,
    skill: 'Vercel',
  },
  {
    id: 11,
    skill: 'Netlify',
  },
  {
    id: 12,
    skill: 'Github',
  },
  {
    id: 13,
    skill: 'Gitlab',
  },
  {
    id: 14,
    skill: 'Docker',
  },
];

export const links = [
  {
    id: 1,
    text: 'home',
    url: '#home',
  },
  {
    id: 2,
    text: 'skills',
    url: '#skills',
  },
  {
    id: 3,
    text: 'projects',
    url: '#projects',
  },
  // {
  //   id: 4,
  //   text: 'experience',
  //   url: '#experience',
  // },
];

export const footerIcons = [
  {
    id: 1,
    url: 'https://www.linkedin.com/in/ademayowa-adeniyi/',
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: 'https://github.com/Ademayowa',
    icon: <FaGithubSquare />,
  },
  {
    id: 3,
    url: 'https://twitter.com/mayorstacks',
    icon: <FaTwitterSquare />,
  },
];
