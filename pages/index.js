import { Container, Row, Col } from 'react-bootstrap';
import { data } from '../data';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
// import Link from 'next/link';
// import Image from 'next/image';

export default function HomePage({ experience }) {
  console.log(experience);

  return (
    <Layout title='Mayorstacks | Home'>
      <Hero />

      {experience.map((exp) => (
        <Experience key={exp.id} experience={exp} />
      ))}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const experience = data;

  return {
    props: {
      experience,
    },
  };
};
