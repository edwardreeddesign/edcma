import Image from 'next/image';

import Layout from '../../components/Layout';
import Images from '../../components/lodges/Images';
import Info from '../../components/lodges/Info';
import temples from '../../data/lodges';
import styled from 'styled-components';

const LodgePage = ({ lodge }) => {
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

export const getStaticProps = ({ params }) => {
  function getLodgeById(slug) {
    const temple = temples.find(temple =>
      temple.lodges.some(lodge => lodge.slug === params.slug)
    );
    return temple.lodges.filter(lodge => lodge.slug === slug);
  }

  const lodge = getLodgeById(params.slug);

  return {
    props: {
      lodge: lodge[0],
    },
  };
};

export const getStaticPaths = () => {
  const paths = temples
    .map(temple => {
      return temple.lodges
        .filter(lodge => lodge.slug === lodge.slug)
        .map(temple => ({
          params: { slug: temple.slug },
        }));
    })
    .flat();

  return { paths: paths, fallback: true };
};

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
