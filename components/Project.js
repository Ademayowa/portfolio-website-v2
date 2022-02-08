import { Container, Row } from 'react-bootstrap';
import ProjectList from './ProjectList';
import Title from './Title';
import { projects } from '../data';

export default function Project({ project }) {
  console.log(project);

  return (
    <Container>
      <Title title='My Projects' />
      <div className='center-line mb-5' />
      <Row className='gx-2'>
        {project.map((project) => (
          <ProjectList key={project.id} project={project} />
        ))}
      </Row>
    </Container>
  );
}
