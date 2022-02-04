import { Container, Row, Col } from 'react-bootstrap';
import { BsChevronDoubleRight } from 'react-icons/bs';
import Title from './Title';
import styles from '@/styles/Experience.module.css';

export default function Experience({
  experience: { title, date, duties, company },
}) {
  return (
    <section className={styles.experience}>
      <Container>
        <Row>
          <Col lg={12}>
            <>
              <div className='mb-4'>
                <div className='mt-4 mb-4'>
                  <h3>{title}</h3>
                  <h4>{company}</h4>
                  <p className={styles.expdate}>{date}</p>
                </div>

                <>
                  {duties.map((duty, index) => (
                    <div key={index} className={styles.duties}>
                      <BsChevronDoubleRight />
                      <p>{duty}</p>
                    </div>
                  ))}
                </>
              </div>
            </>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
