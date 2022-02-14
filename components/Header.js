import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';
import { links } from '../data';
import styles from '@/styles/Header.module.css';

export default function Header() {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 64,
    });
  };

  return (
    <Navbar collapseOnSelect expand='sm' className={styles.navbar}>
      <Container>
        <Navbar.Brand className={styles.brand}>
          <Link href='/'>
            <a className={styles.logo}>M</a>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto text-capitalize'>
            <Nav className={styles.link}>
              {links.map((link) => (
                <a
                  href={link.url}
                  key={link.id}
                  className='px-3'
                  onClick={handleClick}
                >
                  {link.text}
                </a>
              ))}
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
