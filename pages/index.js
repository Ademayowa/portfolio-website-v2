import { data, projects, skills } from '../data';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Title from '@/components/Title';
import Project from '@/components/Project';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

export default function HomePage({ experience, project, skill }) {
  return (
    <Layout title='Mayowa Adeniyi'>
      <Hero />
      <Skills skill={skill} />
      <Project project={project} />
      <Experience experience={experience} />
      <Footer />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const experience = data;
  const project = projects;
  const skill = skills;

  return {
    props: { experience, project, skill },
  };
};
