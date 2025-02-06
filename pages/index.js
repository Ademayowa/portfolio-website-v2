import { data, projects, skills } from '../data';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Title from '@/components/Title';
import Project from '@/components/Project';
import Skills from '@/components/Skills';

export default function HomePage({ project, skill }) {
  return (
    <Layout title='Mayowa Adeniyi | Software Engineer'>
      <main id='home'>
        <Hero />
         <Project project={project} />
        <Skills skill={skill} />
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const project = projects;
  const skill = skills;

  return {
    props: { project, skill },
  };
};
