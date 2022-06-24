import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

export const data = [
  {
    id: 1,
    title: 'Software Engineer',
    date: 'February 2021 - Present',
    duties: [
      'Integrating APIs into web applications that runs on the blockchain network',
      'Building web applications, dashboard, landing pages with react & next.js',
      'Collaborated with designers & backend engineers on different blockchain products',
    ],
    company: 'Jelurida Africa',
  },
  {
    id: 2,
    title: 'Web Development Instructor',
    date: 'May 2019 - November 2020',
    duties: [
      'Taught students how to build responsive layouts with HTML CSS and JavaScript (React & Redux)',
      'Guided students through the development of their final projects using the MERN stack',
      'Taught and guided students how to build RESTFUL APIs using Node.js Express and MongoDB',
    ],
    company: 'NIIT Limited',
  },
  {
    id: 3,
    title: 'Frontend Engineer',
    date: 'August 2017 - January 2018',
    duties: [
      'Built new user interface using various CSS frameworks',
      'Worked with designers to implement user-friendly landing pages for web applications',
      'Fixing bugs to ensure web applications are responsive on different devices',
    ],
    company: 'Bincom ICT Solutions',
  },
];

export const projects = [
  {
    id: '1',
    title: 'Movie Trailer App',
    technologies: ['Next.js', 'React', 'JavaScript', 'TailwindCSS', 'TMDB-API'],
    info: 'A Movie Trailer Application for watching latest trailers',
    url: 'https://movie-trailers-v2.vercel.app/',
    repo: 'https://github.com/Ademayowa/movie-trailers-v2',
  },
  {
    id: '2',
    title: 'A Landing page website',
    info: 'A single page website built with react & react-bootstrap',
    technologies: ['React', 'JavaScript', 'ReactBootstrap', 'CSS3'],
    url: 'https://api-pay-v4.netlify.app/',
  },
  {
    id: '3',
    title: 'A real estate application',
    info: 'Find house prices for rent or sale in the UAE',
    technologies: [
      'JavaScript',
      'React',
      'Next.js',
      'React Bootstrap',
      'RapidAPI',
    ],
    url: 'http://real-estate-v1.vercel.app/',
    repo: 'https://github.com/Ademayowa/real-estate-v1',
  },
];

export const skills = [
  {
    id: 1,
    skill: 'JavaScript (ES6+)',
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
    skill: 'Bootstrap',
  },
  {
    id: 5,
    skill: 'Tailwind CSS',
  },
  {
    id: 6,
    skill: 'Node.js',
  },
  {
    id: 7,
    skill: 'HTML',
  },
  {
    id: 8,
    skill: 'CSS',
  },
  {
    id: 9,
    skill: 'Netlify',
  },
  {
    id: 10,
    skill: 'Heroku',
  },
  {
    id: 11,
    skill: 'Strapi',
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
    skill: 'Firebase',
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
