import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import HeroAnimation from './HeroAnimation';
import styles from '@/styles/Hero.module.css';

export default function Hero() {
  return (
    <Container className={styles.hero}>
      <Row>
        <Col lg={7}>
          <h1>Hello!</h1>
          <h2>My name is Mayowa Adeniyi</h2>
          <Col md={10} lg={10} className='ps-0 mt-4 mb-2 fs-4'>
            <p>
              I'm a software engineer focused on building user interface for
              websites, dashboard & web applications. I also have some
              experience with Node.js, Express and MongoDB.
            </p>
          </Col>

          <div>
            <Button
              className={styles.btnSecondary}
              variant='secondary mb-3 me-3'
            >
              My Projects
            </Button>
            <Button
              className={styles.btnOutline}
              href='https://bit.ly/3uLPrGH'
              target='_blank'
              variant='outline-secondary mb-3'
            >
              Download Resume
            </Button>
          </div>
        </Col>

        <Col lg={5} className='d-none d-lg-block ps-lg-5'>
          <HeroAnimation />
        </Col>
      </Row>
    </Container>
  );
}
