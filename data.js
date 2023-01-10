import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

export const data = [
  {
    id: 1,
    title: 'Software Engineer',
    date: 'August 2022 - Present',
    duties: [
      'Building apps with React/Typescript, Node.js, Sanity CMS & Tailwind CSS',
      'Collaborating with UI/UX designer and backend engineers',
      'Converting figma designs into reusable react components',
    ],
    company: 'Africa BIoT Labs',
  },
  {
    id: 2,
    title: 'Software Engineer',
    date: 'February 2021 - August 2022',
    duties: [
      'Integrating APIs into web applications that runs on the blockchain network',
      'Building web applications, dashboard, landing pages with react & next.js',
      'Collaborated with designers & backend engineers on different blockchain products',
    ],
    company: 'Jelurida Africa',
  },
  {
    id: 3,
    title: 'Web Development Instructor',
    date: 'May 2019 - November 2020',
    duties: [
      'Taught students how to build responsive layouts with HTML CSS and JavaScript (React & Redux)',
      'Guided students through the development of their final projects using the MERN stack',
      'Taught and guided students how to build RESTFUL APIs using Node.js Express and MongoDB',
    ],
    company: 'NIIT Limited',
  },
];

export const projects = [
  {
    id: '1',
    title: 'A Web Application For an Hospital',
    technologies: ['React/TypeScript', 'Next.js', 'Tailwind CSS', 'Sanity CMS'],
    info: 'A Website where patients book appointment & respond to blog post',
    url: 'https://charis-medhospital-v2.vercel.app/',
  },
  {
    id: '2',
    title: 'A Job Board Web Application',
    info: 'A web application where users can search & apply for jobs',
    technologies: ['React/Next.js', 'JavaScript', 'Node.js', 'Tailwind CSS'],
    url: 'http://jobapp-v4.vercel.app/',
    repo: 'https://github.com/Ademayowa/jobapp-v4',
  },
  {
    id: '3',
    title: "This Website you're viewing",
    info: 'Website info for my skills & programming background',
    technologies: [
      'JavaScript',
      'React',
      'Node.js',
      'Next.js',
      'React Bootstrap',
    ],
    url: 'https://mayowa.dev/',
    repo: 'https://github.com/Ademayowa/portfolio-website-v2',
  },
];

export const skills = [
  {
    id: 1,
    skill: 'JavaScript/TypeScript',
  },
  {
    id: 2,
    skill: 'React',
  },
  {
    id: 3,
    skill: 'Node.js',
  },

  {
    id: 4,
    skill: 'Next.js',
  },
  {
    id: 5,
    skill: 'Sanity CMS',
  },
  {
    id: 6,
    skill: 'Tailwind CSS',
  },
  {
    id: 8,
    skill: 'React-bootstrap',
  },
  {
    id: 9,
    skill: 'Express.js',
  },
  {
    id: 10,
    skill: 'HTML5',
  },
  {
    id: 11,
    skill: 'CSS',
  },
  {
    id: 12,
    skill: 'Bootstrap5',
  },
  {
    id: 13,
    skill: 'Netlify',
  },
  {
    id: 14,
    skill: 'Heroku',
  },
  {
    id: 15,
    skill: 'Github',
  },
  {
    id: 16,
    skill: 'Gitlab',
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
