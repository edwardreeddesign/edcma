import Image from 'next/image';

import Layout from '../../components/Layout';
import Images from '../../components/lodges/Images';
import Info from '../../components/lodges/Info';
import temples from '../../data/lodges';
import styled from 'styled-components';
import Link from 'next/link';

const LodgePage = ({ lodge }) => {
  return (
    <Layout title={lodge?.name}>
      <Back>
        <Link href="/lodges">
          <a>Back to Lodges</a>
        </Link>
      </Back>
      <Container>
        <div className="info">
          <Images lodge={lodge} />
        </div>
        <div>
          <Info lodge={lodge} />
        </div>
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

const Back = styled.div`
  padding: 5rem 2rem 2rem;
  a {
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  width: 80%;
  margin: 0 auto;
  gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .info {
    @media (min-width: 768px) {
      grid-column: span 2 / span 2;
    }
  }
`;

export default LodgePage;
