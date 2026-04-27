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
    id: 1,
    title: 'Building a Reproducible Kubernetes Platform Using Scaleway & Terraform',
    info: 'Learn how to provision a Kubernetes cluster with Scaleway, Terraform & ArgoCD.',
    url: 'https://medium.com/@mayorstacks/building-a-fully-reproducible-kubernetes-platform-using-scaleway-terraform-and-argocd-part-1-55bfafaaa902',
  },
  {
    id: 2,
    title: 'Deploy a Golang App to EC2 with Docker and AWS ECR',
    info: 'A step-by-step guide to containerising a Golang application, pushing the image to AWS ECR, and deploying it on an EC2 instance.',
    url: 'https://medium.com/@mayorstacks/deploy-a-golang-app-to-ec2-with-docker-and-aws-ecr-f9dd1b74b011',
  },
  {
    id: 3,
    title: 'Sending React Emails using Next.js and the Resend SDK',
    info: 'How to build and send transactional emails with React Email components inside a Next.js app using the Resend SDK.',
    url: 'https://dev.to/mayorstacks/sending-react-emails-using-nextjs-and-the-resend-sdk-sdk-19bd',
  },
];

export const skills = [
  {
    id: 1,
    skill: 'AWS',
  },
  {
    id: 2,
    skill: 'Linux',
  },
  {
    id: 3,
    skill: 'Kubernetes',
  },
  {
    id: 4,
    skill: 'Docker',
  },

  {
    id: 5,
    skill: 'Helm',
  },
  {
    id: 6,
    skill: 'Prometheus',
  },
  {
    id: 7,
    skill: 'Grafana',
  },
  {
    id: 8,
    skill: 'Go (Golang)',
  },
  {
    id: 9,
    skill: 'Terraform',
  },
  {
    id: 10,
    skill: 'GitHub Actions',
  },
  {
    id: 11,
    skill: 'Git',
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
    text: 'projects',
    url: '#projects',
  },
  {
    id: 3,
    text: 'skills',
    url: '#skills',
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
