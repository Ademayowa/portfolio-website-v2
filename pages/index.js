import { Container, Row, Col } from 'react-bootstrap';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
// import Link from 'next/link';
// import Image from 'next/image';

export default function HomePage() {
  return (
    <Layout title='Mayorstacks | Home'>
      <Hero />
    </Layout>
  );
}
