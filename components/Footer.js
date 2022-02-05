import { Container } from 'react-bootstrap';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='pt-5 pb-2'>
      <Container className='text-center'>
        <Link href='#top'>
          <a className='text-white'>Built by Mayowa Adeniyi</a>
        </Link>
      </Container>
    </footer>
  );
}
