import { Container, Row, Col, Badge } from 'react-bootstrap';
import Title from './Title';
import SkillsList from './SkillsList';
import styles from '@/styles/Skills.module.css';

export default function Skills({ skill }) {
  return (
    <section className={styles.skills}>
      <Container>
        <Title title='Skills' />
        <div className='center-line mb-lg-5' />
        <Row>
          <Col md={10} lg={5} className='mx-md-auto'>
            <h2 className='fs-3 fw-bold mb-4'>
              Programming language, frameworks and libraries, tools and
              platforms I currently work with.
            </h2>
          </Col>

          <Col md={10} lg={7} className='ps-lg-5 d-flex flex-wrap mx-md-auto'>
            {skill.map((sk) => (
              <SkillsList key={sk.id} skill={sk} />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
