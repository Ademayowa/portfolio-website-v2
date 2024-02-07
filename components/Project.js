import { Container, Row } from 'react-bootstrap';
import ProjectList from './ProjectList';
import Title from './Title';
import { projects } from '../data';
import styles from '@/styles/ProjectList.module.css';

export default function Project({ project }) {
  return (
    <section className={styles.project} id='projects'>
      <Container>
        <Title title='Some of my freelance projects' />
        <div className='center-line mb-5' />
        <Row className='gx-2'>
          {project.map((project) => (
            <ProjectList key={project.id} project={project} />
          ))}
        </Row>
      </Container>
    </section>
  );
}
