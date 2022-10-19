import Head from 'next/head';
import Image from 'next/image';
import About from '../components/home/About';
import AboutBanner from '../components/home/AboutBanner';
import Banner from '../components/home/Banner';
import District from '../components/home/District';
import Hero from '../components/home/Hero';
import Join from '../components/home/Join';
import Layout from '../components/Layout';
import Nav from '../components/navbar/Nav';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Layout title="Welcome">
        <Nav />
        <Hero />
        <About />
        <Banner />
        <Join />
        <AboutBanner />
        <District />
      </Layout>
    </>
  );
}
