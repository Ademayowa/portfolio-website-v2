import Head from 'next/head';
// import Header from './Header';

export default function Layout({ title, description, keywords, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/icon.png' />
      </Head>

      {/* <Header /> */}
      {children}
    </>
  );
}

Layout.defaultProps = {
  title: 'Mayowa Adeniyi | Website',
  description: 'JavaScript|React|Next.js',
  keywords: 'software engineer, frontend developer',
};
