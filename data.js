import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

export const data = [
  {
    id: 1,
    title: 'Software Engineer',
    date: 'August 2022 - December 2023',
    duties: [
      'Implemented user interface for web applications using React, NextJS, TypeScript, and Tailwind for MVP software products',
      'Integrated RESTFUL APIs into a web application called EA Kazi - an online teaching, learning, and earning platform designed for users to earn and learn.',
      'Collaborated with the design, backend, and product teams in meetings to reduce overall task delivery time',
    ],
    company: 'Africa BIoT Labs',
  },
  {
    id: 2,
    title: 'Software Engineer',
    date: 'February 2021 - August 2022',
    duties: [
      ' Developed the web version for Mydigicert - a blockchain software solution that enables users to validate the authenticity of paper-based certificates',
      ' Collaborated with the design team to implement admin dashboards and landing pages for different software solutions using React and Tailwind',
      'Implemented new features for a VueJS application that runs on the blockchain network',
    ],
    company: 'Jelurida Africa',
  },
  {
    id: 3,
    title: 'Web Development Instructor',
    date: 'May 2019 - November 2020',
    duties: [
      'Trained, guided, and taught over 40 students how to build responsive layouts with HTML, CSS, and JavaScript',
      ' Taught and guided students on how to develop RESTFUL APIs using Node.js, Express, and MongoDB for their final projects',
      'Created course materials for the front-end development curriculum',
    ],
    company: 'NIIT Limited',
  },
];

export const projects = [
  {
    id: '1',
    title: 'A web application portal for urls submission',
    info: 'A web application portal that stores the number of submitted urls',
    technologies: ['TypeScript', 'NextJS', 'MongoDB', 'NodeJS', 'Sanity'],
    url: 'https://www.icpsahara.africa/',
  },
  {
    id: '2',
    title: 'A web application for hackathons in Africa',
    info: 'A web app that list details of hackathons in Africa',
    technologies: ['TypeScript', 'React', 'NextJS', 'Sanity', 'Tailwind'],
    url: 'https://www.hackathon.africa/',
  },
  {
    id: '3',
    title: 'A web application for real estate',
    technologies: ['React/TypeScript', 'NextJS', 'Tailwind', 'Sanity'],
    info: 'Find real estate properties of your choice',
    url: 'https://damlaf-multiventures.vercel.app/',
    repo: 'https://github.com/Ademayowa/damlaf-multiventures'
  },
  // {
  //   id: '4',
  //   title: 'A job board web application',
  //   info: 'A web application where users can search & apply for jobs',
  //   technologies: ['React/NextJS', 'JavaScript', 'Node.js', 'Tailwind CSS'],
  //   url: 'http://jobapp-v4.vercel.app/',
  //   repo: 'https://github.com/Ademayowa/jobapp-v4',
  // },
];

export const skills = [
  {
    id: 1,
    skill: 'JavaScript',
  },
  {
    id: 2,
    skill: 'React',
  },
  {
    id: 16,
    skill: 'TypeScript',
  },
  {
    id: 3,
    skill: 'NextJS',
  },

  {
    id: 4,
    skill: 'NodeJS',
  },
  {
    id: 19,
    skill: 'Postgres',
  },
  {
    id: 5,
    skill: 'MongoDB',
  },
  {
    id: 6,
    skill: 'Supabase',
  },
  {
    id: 7,
    skill: 'Sanity',
  },
  {
    id: 8,
    skill: 'Tailwind CSS',
  },
  {
    id: 18,
    skill: 'Bootstrap',
  },
  {
    id: 9,
    skill: 'HTML5',
  },
  {
    id: 10,
    skill: 'CSS',
  },
  {
    id: 11,
    skill: 'Heroku',
  },
  {
    id: 12,
    skill: 'Vercel',
  },
  {
    id: 13,
    skill: 'Netlify',
  },
  {
    id: 14,
    skill: 'Github',
  },
  {
    id: 15,
    skill: 'Gitlab',
  },
  {
    id: 17,
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
  {
    id: 4,
    text: 'experience',
    url: '#experience',
  },
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
