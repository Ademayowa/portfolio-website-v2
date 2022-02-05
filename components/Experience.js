import { Container, Row, Col } from 'react-bootstrap';
import { BsChevronDoubleRight } from 'react-icons/bs';
import Title from './Title';
import styles from '@/styles/Experience.module.css';

export default function Experience({ experience }) {
  return (
    <section className={styles.experience}>
      <Container>
        <Title title='Experience' />
        <div className='center-line' />
        <Row>
          {experience.map((exp) => (
            <Col lg={12} key={exp.id}>
              <div className='mt-4 mb-4'>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className={styles.expdate}>{exp.date}</p>

                <div className='mt-4 mb-4'>
                  {exp.duties.map((duty, index) => (
                    <div key={index} className={styles.duties}>
                      <BsChevronDoubleRight />
                      <p>{duty}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
