import { Container, Row, Col } from 'react-bootstrap';
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
              I'm a software engineer based in Nigeria, focused on building user
              interface for websites, dashboard & web applications. I also have
              some experience with Node.js, Express and MongoDB.
            </p>
          </Col>

          <div className={styles.icons}>
            <a
              href='https://twitter.com/mayorstacks'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitterSquare className='me-2' />
            </a>
            <a
              href='https://github.com/Ademayowa'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithubSquare className='me-2' />
            </a>
            <a
              href='https://www.linkedin.com/in/ademayowa-adeniyi/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='me-2' />
            </a>
          </div>
        </Col>

        <Col lg={5} className='d-none d-lg-block ps-lg-5'>
          <HeroAnimation />
        </Col>
      </Row>
    </Container>
  );
}
