import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import HeroAnimation from './HeroAnimation';
import styles from '@/styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <Row>
          <Col lg={7}>
            <h1>Hello!</h1>
            <h2>My name is Mayowa Adeniyi</h2>
            <Col md={10} lg={10} className='ps-0 mt-4 mb-2 fs-4 pb-2'>
              <p>
                I'm a software engineer focused on crafting beautiful and
                intuitive web experience. Currently working with typescript and
                sanity CMS.
              </p>
            </Col>

            <Link href='http://bit.ly/3XPcKdS'>
              <a
                className={styles.btnSecondary}
                href='https://bit.ly/3bz82P3'
                target='_blank'
              >
                Download Resume
              </a>
            </Link>
          </Col>

          <Col lg={5} className='d-none d-lg-block ps-lg-5'>
            <HeroAnimation />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
