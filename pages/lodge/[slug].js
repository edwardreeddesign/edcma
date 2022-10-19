import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Images from '../../components/lodges/Images';
import Info from '../../components/lodges/Info';
import temples from '../../data/lodges';
import styled from 'styled-components';

const LodgePage = ({ currLodge }) => {
  const [lodge, setLodge] = useState(null);
  useEffect(() => {
    setLodge(currLodge);
  }, [currLodge]);
  return (
    <Layout title={lodge?.name}>
      <Container>
        <div className="info">
          <Images lodge={lodge} />
        </div>
        <Info lodge={lodge} />
      </Container>
    </Layout>
  );
};

export function getStaticPaths() {
  const paths = temples.map(temple => ({
    params: { slug: temple.lodges.map(lodge => lodge.slug)[0] },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  function getLodgeById(slug) {
    const temple = temples.find(temple =>
      temple.lodges.some(lodge => lodge.slug === params.slug)
    );
    return temple.lodges.filter(lodge => lodge.slug === slug)[0];
  }

  return {
    props: { currLodge: getLodgeById(params.slug) },
  };
}

const Container = styled.div`
  display: grid;
  height: 100vh;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .info {
    @media (min-width: 768px) {
      grid-column: span 2 / span 2;
    }
  }
`;

export default LodgePage;
