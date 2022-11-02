import Head from 'next/head';
import Nav from './navbar/Nav';

const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>
          {title
            ? title + ' - Essex County District Masons}'
            : 'Essex County District Masons'}
        </title>

        <meta name="description" content="Essex County District Masons" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      {children}
    </div>
  );
};
export default Layout;
