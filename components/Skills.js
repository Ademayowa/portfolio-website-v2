import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import Title from './Title';
import styles from '@/styles/Skills.module.css';

export default function Skills() {
  return (
    <section className={styles.skills}>
      <Container>
        <Title title='Skills' />
        <div className='center-line mb-lg-5' />
        <Row>
          <Col lg={4}>
            <div className='d-flex'>
              <div className='mt-lg-4'>
                <FaReact />
              </div>

              <div className='d-flex ms-3 mt-lg-4'>
                <h2 className='fs-3 fw-bold mb-4'>
                  Technologies I currently work with
                </h2>
              </div>
            </div>
          </Col>

          <Col lg={7} className='ps-lg-5'>
            <div className={styles.badge}>
              <Badge bg='secondary' className='p-3 me-3 mb-3'>
                JavaScript (ES6+)
              </Badge>

              <Badge bg='secondary' className='p-3 me-3 mb-3'>
                React
              </Badge>

              <Badge bg='secondary' className='p-3 me-3 mb-3'>
                Next.js
              </Badge>

              <Badge bg='secondary' className='p-3 me-3 mb-3'>
                Bootstrap
              </Badge>

              <Badge bg='secondary' className='p-3 me-3'>
                Tailwind CSS
              </Badge>

              <Badge bg='secondary' className='p-3 me-3'>
                Node.js
              </Badge>

              <Badge bg='secondary' className='p-3 me-3'>
                HTML
              </Badge>

              <Badge bg='secondary' className='p-3 me-3'>
                CSS
              </Badge>

              <Badge bg='secondary' className='p-3 me-3 mb-3'>
                Netlify
              </Badge>

              <Badge bg='secondary' className='p-3 me-3'>
                Strapi
              </Badge>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
