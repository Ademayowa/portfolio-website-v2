import { Container, Row, Col } from 'react-bootstrap';
import { data, projects } from '../data';
// import { projects } from '../projects';

import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Title from '@/components/Title';
import Project from 'pages/Project';
// import Link from 'next/link';
// import Image from 'next/image';

export default function HomePage({ experience, project }) {
  return (
    <Layout title='Mayorstacks | Home'>
      <Hero />
      <Experience experience={experience} />
      <Project project={project} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const experience = data;
  const project = projects;

  return {
    props: { experience, project },
  };
};
