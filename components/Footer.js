import { Container } from 'react-bootstrap';
import Link from 'next/link';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { footerIcons } from '../data';

export default function Footer() {
  return (
    <footer className='pt-5 pb-2'>
      <Container className='text-center'>
        <div className='mb-4 fs-3'>
          {footerIcons.map((icon) => (
            <a
              className='me-3'
              key={icon.id}
              href={icon.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              {icon.icon}
            </a>
          ))}
        </div>

        <Link href='#top'>
          <a className='text-white'>&copy 2025. Built by Mayowa Adeniyi</a>
        </Link>
      </Container>
    </footer>
  );
}
