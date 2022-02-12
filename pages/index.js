import { data, projects } from '../data';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Title from '@/components/Title';
import Project from '@/components/Project';
import Footer from '@/components/Footer';
import Skills from '@/components/Skills';

export default function HomePage({ experience, project }) {
  return (
    <Layout title='Mayorstacks | Home'>
      <Hero />
      <Skills />
      <Project project={project} />
      <Experience experience={experience} />
      <Footer />
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
