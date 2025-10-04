import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ title, description, keywords, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/icon.png' />
      </Head>

      <Header />
      {children}
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: 'Mayowa Adeniyi | Website',
  description: 'Golang | React| Next.js',
  keywords: 'software engineer, frontend developer',
};
